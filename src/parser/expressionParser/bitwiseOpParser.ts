import * as es from 'estree'

import { BitShiftLeftContext, BitShiftRightContext } from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserBitwiseOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAnd(ctx: BitShiftLeftContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '>>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitOr(ctx: BitShiftRightContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '<<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }

  return DerivedClass
}
