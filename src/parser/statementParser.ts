import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'

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
import { Expression, Statement } from './types'

export class StatementParser
  extends AbstractParseTreeVisitor<Statement>
  implements ClangVisitor<Statement>
{
  protected defaultResult(): Statement {
    return {
      type: 'EmptyStatement'
    }
  }

  visitStart?: ((ctx: StartContext) => Statement) | undefined

  private wrapAsExpressionStatement(e: Expression): Statement {
    return {
      type: 'ExpressionStatement',
      expression: e,
      loc: e.loc
    }
  }

  visitChildren(node: RuleNode): Statement {
    const statements: Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this))
    }
    return {
      type: 'BlockStatement',
      body: statements
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

  visitStatement(ctx: StatementContext): Statement {
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

  visitExpression(ctx: ExpressionStatementContext): Statement {
    console.log('visiting expr')
    return this.wrapAsExpressionStatement(new ExpressionParser().visit(ctx))
  }

  visitIterative(ctx: IterationStatementContext): Statement {
    console.log('visiting iter')
    return new IterationStatementParser().visit(ctx)
  }

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): Statement {
    return new FunctionParser().visit(ctx)
  }

  visitConditionalStatement(ctx: ConditionalStatementContext): Statement {
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

  visitReturnStatement(ctx: ReturnStatementContext): Statement {
    console.log('return statement')
    let argument = undefined
    if (ctx._argument != undefined) {
      argument = new ExpressionParser().visit(ctx._argument)
    }
    return {
      type: 'ReturnStatement',
      argument: argument
    }
  }
}
