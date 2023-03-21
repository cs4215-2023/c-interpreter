import {
  PointerContext,
  PointerDeclarationExpressionContext,
  PointerDereferenceExpressionContext,
  PointerDerefernceContext,
  PointerReferenceContext,
  PointerReferenceExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Expression, PointerIdentifier } from '../types'
import { Constructable } from '../util'

export const parserPointerExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    typeParser = new TypeParser()
    visitPointer(ctx: PointerContext): PointerIdentifier {
      console.log('pointercontext')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        pointerAddress: undefined,
        pointingAddress: undefined,
        isReferenced: false,
        isDereferenced: false
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
    visitPointerDereferenceExpression(ctx: PointerDereferenceExpressionContext): PointerIdentifier {
      return this.visit(ctx.pointerDerefernce())
    }

    visitPointerDerefernce(ctx: PointerDerefernceContext): PointerIdentifier {
      console.log('pointerdereferencecontext')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        pointerAddress: undefined,
        pointingAddress: undefined,
        isReferenced: false,
        isDereferenced: true
      }
    }
    visitPointerReferenceExpression(ctx: PointerReferenceExpressionContext): PointerIdentifier {
      return this.visit(ctx.pointerReference())
    }
    visitPointerReference(ctx: PointerReferenceContext): PointerIdentifier {
      console.log('pointerreferencecontext')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        pointerAddress: undefined,
        pointingAddress: undefined,
        isReferenced: true,
        isDereferenced: false
      }
    }
  }

  return DerivedClass
}
