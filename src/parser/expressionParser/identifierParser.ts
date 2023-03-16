import {
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  TypedIdentifierExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Identifier } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitTypedIdentifierExpression(ctx: TypedIdentifierExpressionContext): Identifier {
      console.log('visitTypedIdentifierExpression')
      return this.visitIdentifierWithType(ctx.identifierWithType())
    }

    // Returns an Identifier with the name in the format <name>#<type>
    visitIdentifierWithType(ctx: IdentifierWithTypeContext): Identifier {
      console.log('visitIdentifierWithType')
      const type = new TypeParser().visit(ctx._idType)
      console.log(ctx.IDENTIFIER().text)
      console.log('type is ' + type.valueType)
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        primitiveType: type
      }
    }

    visitIdentifierExpression(ctx: IdentifierExpressionContext): Identifier {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        primitiveType: undefined
      }
    }
  }

  return DerivedClass
}
