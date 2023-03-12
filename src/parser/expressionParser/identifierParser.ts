import * as es from 'estree'

import {
  IdentifierWithTypeContext,
  TypeContext,
  TypedIdentifierExpressionContext
} from '../../lang/ClangParser'
import { PrimitiveValueType, Type } from '../types'
import { Constructable } from '../util'

export const parserIdentifierExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    // TODO: update return type
    visitTypedIdentifierExpression(ctx: TypedIdentifierExpressionContext): es.Expression {
      console.log('visitTypedIdentifierExpression')
      const typedIdentifier = this.visitIdentifierWithType(ctx.identifierWithType())
      return {
        type: 'Identifier',
        name: ''
      }
    }
    visitIdentifierWithType(ctx: IdentifierWithTypeContext): es.Expression {
      console.log('visitIdentifierWithType')
      const primitiveType = this.visitType(ctx.type())
      console.log(ctx.IDENTIFIER().text)
      return {
        type: 'Identifier',
        name: ''
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
