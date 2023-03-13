import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import * as es from 'estree'

import {
  DoWhileLoopContext,
  ForLoopContext,
  IterationStatementContext,
  WhileLoopContext
} from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { StatementParser } from './statementParser'

export class IterationStatementParser
  extends AbstractParseTreeVisitor<es.Statement>
  implements ClangVisitor<es.Statement>
{
  private expressionParser = new ExpressionParser()

  protected defaultResult(): es.Statement {
    return {
      type: 'EmptyStatement'
    }
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
    return this.defaultResult()
  }

  visitForStatement(ctx: ForLoopContext): es.Statement {
    const forCondition = ctx._innerForCondition
    return {
      type: 'ForStatement',
      init: this.expressionParser.visit(forCondition._initialise),
      test: this.expressionParser.visit(forCondition._test),
      update: this.expressionParser.visit(forCondition._update),
      body: new StatementParser().visit(ctx._body)
    }
  }

  visitWhileStatement(ctx: WhileLoopContext): es.Statement {
    return {
      type: 'WhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: new StatementParser().visit(ctx._body)
    }
  }

  visitDoWhileStatement(ctx: DoWhileLoopContext): es.Statement {
    return {
      type: 'DoWhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: new StatementParser().visit(ctx._body)
    }
  }
}
