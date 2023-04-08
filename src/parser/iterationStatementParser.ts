import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'

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
import { Statement } from './types'

export class IterationStatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements ClangVisitor<Statement>
{
  private expressionParser = new ExpressionParser()

  bodyWrapper(ctx: ForLoopContext | WhileLoopContext | DoWhileLoopContext): Statement[] {
    const body = ctx._body

    if (body == undefined) {
      return [this.defaultResult()]
    }

    const statements = new StatementParser().visit(body)

    if (statements.type == 'BlockStatement') {
      return statements.body
    } else {
      return [statements]
    }
  }

  protected defaultResult(): Statement {
    return {
      type: 'EmptyStatement'
    }
  }

  visitErrorNode(node: ErrorNode): Statement {
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

  visitIterationStatement(ctx: IterationStatementContext): Statement {
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

  visitForStatement(ctx: ForLoopContext): Statement {
    const forCondition = ctx._innerForCondition
    return {
      type: 'ForStatement',
      init: this.expressionParser.visit(forCondition._initialise),
      test: this.expressionParser.visit(forCondition._test),
      update: this.expressionParser.visit(forCondition._update),
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) }
    }
  }

  visitWhileStatement(ctx: WhileLoopContext): Statement {
    return {
      type: 'WhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) }
    }
  }

  visitDoWhileStatement(ctx: DoWhileLoopContext): Statement {
    return {
      type: 'DoWhileStatement',
      test: this.expressionParser.visit(ctx._condition),
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) }
    }
  }
}
