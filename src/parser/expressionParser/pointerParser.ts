import {
  PointerContext,
  PointerDereferenceExpressionContext,
  PointerDerefernceContext,
  PointerExpressionContext,
  PointerReferenceContext,
  PointerReferenceExpressionContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { PointerIdentifier } from '../types'
import { Constructable } from '../util'

export const parserPointerExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    typeParser = new TypeParser()
    visitPointer(ctx: PointerContext): PointerIdentifier {
      console.log('pointercontext')
      const type = this.typeParser.visit(ctx._idType)
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        primitiveType: type,
        pointerAddress: undefined,
        pointingAddress: undefined,
        isReferenced: false,
        isDereferenced: false
      }
    }
    visitPointerExpression(ctx: PointerExpressionContext): PointerIdentifier {
      return this.visit(ctx.pointer())
    }
    visitPointerDereferenceExpression(ctx: PointerDereferenceExpressionContext): PointerIdentifier {
      return this.visit(ctx.pointerDerefernce())
    }

    visitPointerDerefernce(ctx: PointerDerefernceContext): PointerIdentifier {
      console.log('pointerdereferencecontext')
      return {
        type: 'Identifier',
        name: ctx.IDENTIFIER().text,
        primitiveType: undefined,
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
        primitiveType: undefined,
        pointerAddress: undefined,
        pointingAddress: undefined,
        isReferenced: true,
        isDereferenced: false
      }
    }
  }

  return DerivedClass
}
