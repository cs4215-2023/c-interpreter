import {
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  VariableDeclarationExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Expression, Identifier } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitVariableDeclarationExpression(ctx: VariableDeclarationExpressionContext): Expression {
      console.log('visitTypedIdentifierExpression')
      const idWithType = ctx.identifierWithType()
      const type = new TypeParser().visit(idWithType._idType)
      console.log('type is ' + type.valueType)
      return {
        identifier: this.visitIdentifierWithType(ctx.identifierWithType()),
        identifierType: type,
        type: 'VariableDeclarationExpression'
      }
    }

    visitIdentifierWithType(ctx: IdentifierWithTypeContext): Identifier {
      console.log('visitIdentifierWithType')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text
      }
    }

    visitIdentifierExpression(ctx: IdentifierExpressionContext): Identifier {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text
      }
    }
  }

  return DerivedClass
}
