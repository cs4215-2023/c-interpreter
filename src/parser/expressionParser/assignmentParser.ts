import * as es from 'estree'

import {
  AssignmentContext
} from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserAssignmentExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitAssignment(ctx: AssignmentContext): es.Expression {
        console.log("assignmentexpression")
      return {
        type: 'AssignmentExpression',
        operator: '=',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx)
      }
    }
//c = 5;
//int c = 5;
  }
  return DerivedClass
}
