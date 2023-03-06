import * as es from 'estree'

import { PostFixContext, PostFixNotationExpressionContext } from '../../lang/ClangParser'
import { Constructable } from '../util'

export const parserPostFixExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitMinusMinus(ctx: PostFixNotationExpressionContext): es.Expression {
      return this.visit(ctx.postFix())
    }

    visitMinusMinusPostFix(ctx: PostFixContext): es.Expression {
      return {
        type: 'UpdateExpression',
        operator: '--',
        prefix: true,
        argument: this.visit(ctx._argument)
      }
    }

    visitPlusPlus(ctx: PostFixNotationExpressionContext): es.Expression {
      return this.visit(ctx.postFix())
    }

    visitPlusPlusPostFix(ctx: PostFixContext): es.Expression {
      return {
        type: 'UpdateExpression',
        operator: '++',
        prefix: true,
        argument: this.visit(ctx._argument)
      }
    }
  }

  return DerivedClass
}
