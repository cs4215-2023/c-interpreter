import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'

import { CondExpressionContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { ConditionalExpression, Expression } from './types'

export class ConditionalExpressionParser
  extends AbstractParseTreeVisitor<Expression>
  implements ClangVisitor<Expression>
{
  protected defaultResult(): Expression {
    return { type: 'EmptyExpression' }
  }

  visitErrorNode(node: ErrorNode): Expression {
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
  //   visitCondExpression(ctx: CondExpressionContext):  {
  //     const alt = ctx._alternate.condExpression()
  //     const expressionParser = new ExpressionParser()
  //     return {
  //       type: 'ConditionalExpressionStatement',
  //       test: expressionParser.visit(ctx._test),
  //       alternate: alt == undefined ? this.defaultResult() : this.visitCondExpression(alt),
  //       consequent: expressionParser.visit(ctx._consequent)
  //     }
  //   }

  visitCondExpression(ctx: CondExpressionContext): ConditionalExpression {
    const expressionParser = new ExpressionParser()
    console.log(ctx._test)
    return {
      type: 'ConditionalExpression',
      test: expressionParser.visit(ctx._test),
      alternate: ctx._alternate == undefined ? this.defaultResult() : this.visit(ctx._alternate),
      consequent:
        ctx._consequent == undefined
          ? this.defaultResult()
          : expressionParser.visit(ctx._consequent)
    }
  }
}
