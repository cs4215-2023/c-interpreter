import {
  PointerContext,
  PointerDeclarationExpressionContext,
  PointerDereferenceExpressionContext,
  PointerDerefernceContext,
  PointerReferenceContext,
  PointerReferenceExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Expression, Identifier, PointerIdentifier, UnaryExpression } from '../types'
import { Constructable } from '../util'

export const parserPointerExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    typeParser = new TypeParser()
    visitPointer(ctx: PointerContext): Identifier {
      console.log('pointercontext')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        isPointer: true
      }
    }
    visitPointerDeclarationExpression(ctx: PointerDeclarationExpressionContext): Expression {
      const pointer = ctx.pointer()
      const type = this.typeParser.visit(pointer._idType)
      return {
        type: 'PointerDeclarationExpression',
        pointer: this.visitPointer(pointer),
        pointerType: type
      }
    }
    visitPointerDereferenceExpression(ctx: PointerDereferenceExpressionContext): UnaryExpression {
      return this.visit(ctx.pointerDerefernce())
    }

    visitPointerDerefernce(ctx: PointerDerefernceContext): UnaryExpression {
      console.log('pointerdereferencecontext')
      const identifier = {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        isPointer: true
      }
      return {
        type: 'UnaryExpression',
        operator: '*',
        argument: identifier as Identifier
      }
    }
    visitPointerReferenceExpression(ctx: PointerReferenceExpressionContext): PointerIdentifier {
      return this.visit(ctx.pointerReference())
    }
    visitPointerReference(ctx: PointerReferenceContext): UnaryExpression {
      console.log('pointerreferencecontext')
      const identifier = {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        isPointer: undefined //can't tell from & whether u are referencing pointer or variable
      }
      return {
        type: 'UnaryExpression',
        operator: '&',
        argument: identifier as Identifier
      }
    }
  }

  return DerivedClass
}
