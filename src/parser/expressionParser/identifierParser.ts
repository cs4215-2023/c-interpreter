import * as es from 'estree'

import {
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  TypedIdentifierExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitTypedIdentifierExpression(ctx: TypedIdentifierExpressionContext): es.Expression {
      console.log('visitTypedIdentifierExpression')
      return this.visitIdentifierWithType(ctx.identifierWithType())
    }

    // Returns an Identifier with the name in the format <name>#<type>
    visitIdentifierWithType(ctx: IdentifierWithTypeContext): es.Expression {
      console.log('visitIdentifierWithType')
      const type = new TypeParser().visit(ctx._idType)
      console.log(ctx.IDENTIFIER().text)
      console.log('type is ' + type.valueType)
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text + '#' + type.valueType
      }
    }

    visitIdentifier(ctx: IdentifierExpressionContext): es.Expression {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text
      }
    }
  }

  return DerivedClass
}
