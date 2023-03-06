import * as es from 'estree'

import { AndContext, OrContext, XorContext } from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserLogicalOpExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAnd(ctx: AndContext): es.Expression {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitOr(ctx: OrContext): es.Expression {
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
    visitXor(ctx: XorContext): es.Expression {
      // use a binary expression here because ^ is not listed as a logical operator
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
