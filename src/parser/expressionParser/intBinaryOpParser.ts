import {
  AdditionContext,
  DivisionContext,
  ModulusDivisionContext,
  MultiplicationContext,
  SubtractionContext
} from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserBinaryExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitMultiplication(ctx: MultiplicationContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '*',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
    visitDivision(ctx: DivisionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '/',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
    visitAddition(ctx: AdditionContext): Expression {
      console.log('visitAddition for ' + ctx._left.text + ' and ' + ctx._right.text)
      return {
        type: 'BinaryExpression',
        operator: '+',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitSubtraction(ctx: SubtractionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '-',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }

    visitModulusDivision(ctx: ModulusDivisionContext): Expression {
      return {
        type: 'BinaryExpression',
        operator: '%',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
