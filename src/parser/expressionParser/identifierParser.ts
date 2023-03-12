import { Token } from 'antlr4ts/Token'

import {
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  TypeContext,
  TypedIdentifierExpressionContext
} from '../../lang/ClangParser'
import { Identifier, PrimitiveValueType, Type } from '../types'
import { Expression } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    tokenToIdentifierWrapper(token: Token): Identifier {
      if (token.text) {
        return {
          type: 'Identifier',
          name: token.text
        }
      }
      return {
        type: 'Identifier',
        name: ''
      }
    }
    // TODO: update return type
    visitTypedIdentifierExpression(ctx: TypedIdentifierExpressionContext): Expression {
      console.log('visitTypedIdentifierExpression')
      return this.visitIdentifierWithType(ctx.identifierWithType())
    }

    visitIdentifierWithType(ctx: IdentifierWithTypeContext): Expression {
      console.log('visitIdentifierWithType')
      const type = this.visitType(ctx.type())
      const identifier = this.tokenToIdentifierWrapper(ctx._id)
      console.log(ctx.IDENTIFIER().text)
      return {
        type: 'IdentifierWithTypeExpression',
        identifier: identifier,
        identifierType: type
      }
    }

    visitIdentifier(ctx: IdentifierExpressionContext): Expression {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text
      }
    }

    visitType(ctx: TypeContext): Type {
      console.log('visitType')
      console.log(ctx.text)
      return {
        type: 'PrimitiveType',
        signed: undefined,
        valueType: ctx.text as PrimitiveValueType
      }
    }
  }

  return DerivedClass
}
