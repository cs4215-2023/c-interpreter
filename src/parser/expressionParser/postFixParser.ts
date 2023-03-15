import * as es from 'estree'

import { PostFixContext, PostFixNotationExpressionContext } from '../../lang/ClangParser'
import { Constructable } from '../util'

export const parserPostFixExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitPostFixNotationExpression(ctx: PostFixNotationExpressionContext): es.Expression {
      return this.visitPostFix(ctx.postFix())
    }
    visitPostFix(ctx: PostFixContext): es.Expression {
      const updateOp = ctx.PLUSPLUS() ? '++' : '--'
      console.log('visitPostFix with postfix ' + updateOp)
      return {
        type: 'UpdateExpression',
        operator: updateOp,
        argument: { type: 'Identifier', name: ctx.IDENTIFIER().text },
        prefix: false
      }
    }
  }

  return DerivedClass
}
