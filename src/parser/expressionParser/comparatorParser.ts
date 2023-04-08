import {
  EqualityCheckingContext,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  LesserThanContext,
  LesserThanOrEqualContext,
  NotEqualContext
} from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserComparatorExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitLesserThan(ctx: LesserThanContext): Expression {
      console.log('visiting less than')
      return {
        type: 'BinaryExpression',
        operator: '<',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitLesserThanOrEqual(ctx: LesserThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '<=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitGreaterThan(ctx: GreaterThanContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '>=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitEqualityChecking(ctx: EqualityCheckingContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '==',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitNotEqual(ctx: NotEqualContext): Expression {
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
