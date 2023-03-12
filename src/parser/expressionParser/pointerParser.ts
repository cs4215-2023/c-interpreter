import * as es from 'estree'

import {
  PointerContext,
  PointerDereferenceExpressionContext,
  PointerDerefernceContext,
  PointerExpressionContext,
  PointerReferenceContext,
  PointerReferenceExpressionContext
} from '../../lang/ClangParser'
import { Constructable } from '../util'

export const parserPointerExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitPointer(ctx: PointerContext): es.Expression {
      console.log('pointercontext')
      return {
        type: 'Identifier',
        name: ctx.MUL().text + '#' + ctx.IDENTIFIER().text
      }
    }
    visitPointerExpression(ctx: PointerExpressionContext): es.Expression {
      return this.visitPointer(ctx.pointer())
    }
    visitPointerDereferenceExpression(ctx: PointerDereferenceExpressionContext): es.Expression {
      return this.visitPointerDerefernce(ctx.pointerDerefernce())
    }
    visitPointerDerefernce(ctx: PointerDerefernceContext): es.Expression {
      console.log('pointerdereferencecontext')
      return {
        type: 'Identifier',
        name: ctx.MUL().text + ctx.MUL().text + '#' + ctx.IDENTIFIER().text
      }
    }
    visitPointerReferenceExpression(ctx: PointerReferenceExpressionContext): es.Expression {
      return this.visitPointerReference(ctx.pointerReference())
    }
    visitPointerReference(ctx: PointerReferenceContext): es.Expression {
      return {
        type: 'Identifier',
        name: ctx.BITWISEAND().text + '#' + ctx.IDENTIFIER().text
      }
    }
  }

  return DerivedClass
}
