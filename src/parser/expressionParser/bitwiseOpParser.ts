import { BitShiftLeftContext, BitShiftRightContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserBitwiseOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitBitShiftLeft(ctx: BitShiftLeftContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitBitShiftRight(ctx: BitShiftRightContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }

  return DerivedClass
}
