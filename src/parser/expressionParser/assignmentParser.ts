import { AssignmentContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserAssignmentExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAssignment(ctx: AssignmentContext): Expression {
      return {
        type: 'AssignmentExpression',
        operator: '=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
