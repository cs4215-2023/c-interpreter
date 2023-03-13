import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import {
  ConditionalStatementContext,
  ExpressionStatementContext,
  FunctionContext,
  IterationStatementContext,
  ReturnStatementContext,
  StartContext,
  StatementContext
} from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { FunctionParser } from './functionParser'
import { IterationStatementParser } from './iterationStatementParser'

export class StatementParser
  extends AbstractParseTreeVisitor<es.Statement>
  implements ClangVisitor<es.Statement>
{
  protected defaultResult(): es.Statement {
    return {
      type: 'EmptyStatement'
    }
  }

  visitStart?: ((ctx: StartContext) => es.Statement) | undefined

  private wrapAsExpressionStatement(e: es.Expression): es.Statement {
    return {
      type: 'ExpressionStatement',
      expression: e,
      loc: e.loc
    }
  }

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

  visitStatement(ctx: StatementContext): es.Statement {
    const exp = ctx.expressionStatement()
    const iter = ctx.iterationStatement()
    const func = ctx.function()
    if (exp != undefined) {
      return this.visitExpression(exp)
    } else if (iter != undefined) {
      return this.visitIterative(iter)
    } else if (func != undefined) {
      return this.visitFunction(func)
    }
    return this.defaultResult()
  }

  visitExpression(ctx: ExpressionStatementContext): es.Statement {
    console.log('visiting expr')
    return this.wrapAsExpressionStatement(new ExpressionParser().visit(ctx))
  }

  visitIterative(ctx: IterationStatementContext): es.Statement {
    return new IterationStatementParser().visit(ctx)
  }

  visitFunction(ctx: FunctionContext): es.Statement {
    return new FunctionParser().visit(ctx)
  }

  visitConditionalStatement(ctx: ConditionalStatementContext): es.Statement {
    return {
      type: 'IfStatement',
      test: new ExpressionParser().visit(ctx._test),
      alternate: this.visit(ctx._alternateStatement),
      consequent: this.visit(ctx._consequentStatement)
    }
  }

  visitReturnStatement(ctx: ReturnStatementContext): es.Statement {
    return {
      type: 'ReturnStatement',
      argument: new ExpressionParser().visit(ctx.expressionStatement)
    }
  }
}
