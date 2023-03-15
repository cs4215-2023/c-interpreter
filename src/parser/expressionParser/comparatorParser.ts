import * as es from 'estree'

import {
  EqualityCheckingContext,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  LesserThanContext,
  LesserThanOrEqualContext,
  NotEqualContext
} from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserComparatorExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitLesserThan(ctx: LesserThanContext): es.Expression {
      console.log('visiting less than')
      return {
        type: 'BinaryExpression',
        operator: '<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitLesserThanOrEqual(ctx: LesserThanOrEqualContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '<=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitGreaterThan(ctx: GreaterThanContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '>=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitEqualityChecking(ctx: EqualityCheckingContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '==',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitNotEqual(ctx: NotEqualContext): es.Expression {
      return {
        type: 'BinaryExpression',
        operator: '!=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
