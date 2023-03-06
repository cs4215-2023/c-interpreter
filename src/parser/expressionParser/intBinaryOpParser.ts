import * as es from 'estree'

import {
  AdditionContext,
  DivisionContext,
  MultiplicationContext,
  SubtractionContext
} from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserBinaryExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitMultiplication(ctx: MultiplicationContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '*',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
    visitDivision(ctx: DivisionContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '/',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
    visitAddition(ctx: AdditionContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '+',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitSubtraction(ctx: SubtractionContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '-',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
