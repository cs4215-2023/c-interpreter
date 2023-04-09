import { ConditionalExpressionContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable } from '../util'

export const parserConditionalExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitConditionalExpression(ctx: ConditionalExpressionContext): Expression {
      return {
        type: 'ConditionalExpression',
        test: this.visit(ctx._test),
        alternate: this.visit(ctx._alternate),
        consequent: this.visit(ctx._consequent)
      }
    }
  }

  return DerivedClass
}
