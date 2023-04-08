import { PostFixContext, PostFixNotationExpressionContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, tokenToIdentifierWrapper } from '../util'

export const parserPostFixExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitPostFixNotationExpression(ctx: PostFixNotationExpressionContext): Expression {
      return this.visitPostFix(ctx.postFix())
    }
    visitPostFix(ctx: PostFixContext): Expression {
      const updateOp = ctx.PLUSPLUS() ? '++' : '--'
      console.log('visitPostFix with postfix ' + updateOp)
      return {
        type: 'UpdateExpression',
        operator: updateOp,
        argument: tokenToIdentifierWrapper(ctx._argument)
      }
    }
  }

  return DerivedClass
}
