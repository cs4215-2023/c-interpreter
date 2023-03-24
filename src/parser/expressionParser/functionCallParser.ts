import { FunctionCallContext, FunctionCallParametersContext } from '../../lang/ClangParser'
import { Expression, SequenceExpression } from '../types'
import { Constructable, tokenToIdentifierWrapper } from '../util'

export const parserFunctionCallExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitFunctionCall(ctx: FunctionCallContext): Expression {
      console.log('visitFunctioncall')
      return {
        type: 'CallExpression',
        callee: tokenToIdentifierWrapper(ctx._func),
        arguments: this.visit(ctx._args)
      }
    }

    visitFunctionCallParameters(ctx: FunctionCallParametersContext): Expression[] {
      console.log('visitfunctionarguments')
      // only one child
      const seqeuenceExpressions = this.visit(ctx.getChild(0)) as SequenceExpression
      return seqeuenceExpressions.expressions
    }
  }
  return DerivedClass
}
