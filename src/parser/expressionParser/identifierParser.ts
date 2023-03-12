import { Token } from 'antlr4ts/Token'
import * as es from 'estree'

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
    visitTypedIdentifierExpression(ctx: TypedIdentifierExpressionContext): es.Expression {
      console.log('visitTypedIdentifierExpression')
      return this.visitIdentifierWithType(ctx.identifierWithType())
    }

    // Returns an Identifier with the name in the format <name>#<type>
    visitIdentifierWithType(ctx: IdentifierWithTypeContext): es.Expression {
      console.log('visitIdentifierWithType')
      const type = new TypeParser().visit(ctx._idType)
      const identifier = this.tokenToIdentifierWrapper(ctx._id)
      console.log(ctx.IDENTIFIER().text)
      return {
        type: 'Identifier',
        name: identifier.name + '#' + type.valueType
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
