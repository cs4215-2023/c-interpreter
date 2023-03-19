import { AndContext, OrContext, XorContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserLogicalOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAnd(ctx: AndContext): Expression {
      console.log('visitAnd for ' + ctx._left.text + ' and ' + ctx._right.text)
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitOr(ctx: OrContext): Expression {
      console.log('visitOr for ' + ctx._left.text + ' and ' + ctx._right.text)
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    // use a binary expression here because ^ is not listed as a logical operator
    visitXor(ctx: XorContext): Expression {
      console.log('visitXor for ' + ctx._left.text + ' and ' + ctx._right.text)
      return {
        type: 'BinaryExpression',
        operator: '^',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }

  return DerivedClass
}
