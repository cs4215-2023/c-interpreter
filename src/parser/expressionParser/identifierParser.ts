import {
  IdentifierDeclarationExpressionContext,
  IdentifierExpressionContext,
  IdentifierWithTypeContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Identifier } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitIdentifierDeclarationExpression(ctx: IdentifierDeclarationExpressionContext): Identifier {
      console.log('visitTypedIdentifierExpression')
      return this.visitIdentifierWithType(ctx.identifierWithType())
    }

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
