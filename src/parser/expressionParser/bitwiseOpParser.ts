import * as es from 'estree'

import { BitShiftLeftContext, BitShiftRightContext } from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserBitwiseOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitBitShiftLeft(ctx: BitShiftLeftContext): es.Expression {
      console.log('visitBitShiftLeft for ' + ctx._left.text + ' and ' + ctx._right.text)
      return {
        type: 'BinaryExpression',
        operator: '<<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitBitShiftRight(ctx: BitShiftRightContext): es.Expression {
      console.log('visitBitShiftRight for ' + ctx._left.text + ' and ' + ctx._right.text)
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
