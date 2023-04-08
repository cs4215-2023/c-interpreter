import { AndContext, OrContext, XorContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserLogicalOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAnd(ctx: AndContext): Expression {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitOr(ctx: OrContext): Expression {
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
