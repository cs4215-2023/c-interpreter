import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  DoWhileLoopContext,
  ForLoopContext,
  IterationStatementContext,
  WhileLoopContext
} from '../lang/ClangParser'
import { FatalSyntaxError } from './errors'
import { StatementParser } from './statementParser'

// TODO: validate if extending statement parser will lead to errors.
export class IterationStatementParser extends StatementParser {
  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    const statements: es.Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this))
    }
    return {
      type: 'BlockStatement',
      body: statements
    }
  }

  visitTerminal(node: TerminalNode): es.Statement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Statement {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }

  visitIterationStatement(ctx: IterationStatementContext): es.Statement {
    const forLoop = ctx.forLoop()
    const doWhileLoop = ctx.doWhileLoop()
    const whileLoop = ctx.whileLoop()
    if (forLoop != undefined) {
      return this.visitForStatement(forLoop)
    } else if (doWhileLoop != undefined) {
      return this.visitDoWhileStatement(doWhileLoop)
    } else if (whileLoop != undefined) {
      return this.visitWhileStatement(whileLoop)
    }
    return this.defaultResponse()
  }

  visitForStatement(ctx: ForLoopContext): es.Statement {
    const forCondition = ctx._innerForCondition
    return {
      type: 'ForStatement',
      init: this.expressionParser.visit(forCondition._initialise),
      test: this.expressionParser.visit(forCondition._test),
      update: this.expressionParser.visit(forCondition._update),
      body: this.visitStatement(ctx._body)
    }
  }

  visitWhileStatement(ctx: WhileLoopContext): es.Statement {
    return {
      type: 'WhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: this.visitStatement(ctx._body)
    }
  }

  visitDoWhileStatement(ctx: DoWhileLoopContext): es.Statement {
    return {
      type: 'DoWhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: this.visitStatement(ctx._body)
    }
  }
}
