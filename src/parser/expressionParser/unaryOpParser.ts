import { NegativeContext, NotContext, PositiveContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable } from '../util'

export const parserUnaryOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNegative(ctx: NegativeContext): Expression {
      console.log('visitNegative for ' + ctx._argument.text)
      return {
        type: 'UnaryExpression',
        operator: '-',
        argument: this.visit(ctx._argument)
      }
    }

    visitPositive(ctx: PositiveContext): Expression {
      console.log('visitPositive for ' + ctx._argument.text)
      return {
        type: 'UnaryExpression',
        operator: '+',
        argument: this.visit(ctx._argument)
      }
    }

    visitNot(ctx: NotContext): Expression {
      console.log('visitNot for ' + ctx._argument.text)
      return {
        type: 'UnaryExpression',
        operator: '!',
        argument: this.visit(ctx._argument)
      }
    }
  }
  return DerivedClass
}
