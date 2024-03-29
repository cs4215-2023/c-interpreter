import {
  IdentifierExpressionContext,
  IdentifierWithTypeContext,
  VariableDeclarationExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Expression, Identifier, TypedIdentifier } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitVariableDeclarationExpression(ctx: VariableDeclarationExpressionContext): Expression {
      const idWithType = this.visitIdentifierWithType(ctx.identifierWithType())
      return {
        identifier: { type: 'Identifier', name: idWithType.name, isPointer: false },
        identifierType: idWithType.typeDeclaration,
        type: 'VariableDeclarationExpression'
      }
    }

    visitIdentifierWithType(ctx: IdentifierWithTypeContext): TypedIdentifier {
      const type = new TypeParser().visit(ctx._idType)
      return {
        type: 'TypedIdentifier',
        name: ctx.IDENTIFIER().text,
        typeDeclaration: type
      }
    }

    visitIdentifierExpression(ctx: IdentifierExpressionContext): Identifier {
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        isPointer: false
      }
    }
  }

  return DerivedClass
}
