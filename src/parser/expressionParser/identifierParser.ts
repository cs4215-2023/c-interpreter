import * as es from 'estree'

import { TypedIdentifierExpressionContext } from '../../lang/ClangParser'
import { Constructable } from '../util'

export const parserBinaryExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    // TODO: update return type
    visitIdentifierWithType(ctx: TypedIdentifierExpressionContext): es.Expression {
      return {
        type: 'Identifier',
        name: ''
      }
    }
  }
  return DerivedClass
}
