import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import * as es from 'estree'

import {
  ConditionalStatementContext,
  ExpressionStatementContext,
  FunctionDeclarationContext,
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
    const func = ctx.functionDeclaration()
    const returnStatement = ctx.returnStatement()
    const conditionalStatement = ctx.conditionalStatement()
    if (exp != undefined) {
      return this.visitExpression(exp)
    } else if (iter != undefined) {
      return this.visitIterative(iter)
    } else if (func != undefined) {
      return this.visitFunctionDeclaration(func)
    } else if (returnStatement != undefined) {
      return this.visitReturnStatement(returnStatement)
    } else if (conditionalStatement != undefined) {
      return this.visitConditionalStatement(conditionalStatement)
    }
    return this.defaultResult()
  }

  visitExpression(ctx: ExpressionStatementContext): es.Statement {
    console.log('visiting expr')
    return this.wrapAsExpressionStatement(new ExpressionParser().visit(ctx))
  }

  visitIterative(ctx: IterationStatementContext): es.Statement {
    console.log('visiting iter')
    return new IterationStatementParser().visit(ctx)
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): es.Statement {
    return new FunctionParser().visit(ctx)
  }

  visitConditionalStatement(ctx: ConditionalStatementContext): es.Statement {
    console.log('if statement')

    let alternate = undefined
    const alternateStatementBlock = ctx._alternateStatementBlock
    const elseIfStatement = ctx._elseIfStatement

    if (alternateStatementBlock != undefined) {
      alternate = alternateStatementBlock
    } else if (elseIfStatement != undefined) {
      alternate = elseIfStatement
    }

    return {
      type: 'IfStatement',
      test: new ExpressionParser().visit(ctx._test),
      alternate: alternate == undefined ? this.defaultResult() : this.visit(alternate),
      consequent: this.visit(ctx._consequentStatement)
    }
  }

  visitReturnStatement(ctx: ReturnStatementContext): es.Statement {
    console.log('return statement')
    return {
      type: 'ReturnStatement',
      argument: new ExpressionParser().visit(ctx.expressionStatement().expression())
    }
  }
}
