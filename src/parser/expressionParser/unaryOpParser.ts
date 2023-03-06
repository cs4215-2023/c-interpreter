import * as es from 'estree'

import { NegativeContext, NotContext, PositiveContext } from '../../lang/ClangParser'
import { Constructable } from '../util'

export const parserUnaryOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNegative(ctx: NegativeContext): es.Expression {
      return {
        type: 'UnaryExpression',
        operator: '-',
        prefix: true,
        argument: this.visit(ctx._argument)
      }
    }

    visitPositive(ctx: PositiveContext): es.Expression {
      return {
        type: 'UnaryExpression',
        operator: '+',
        prefix: true,
        argument: this.visit(ctx._argument)
      }
    }

    visitNot(ctx: NotContext): es.Expression {
      return {
        type: 'UnaryExpression',
        operator: '!',
        prefix: true,
        argument: this.visit(ctx._argument)
      }
    }
  }
  return DerivedClass
}
