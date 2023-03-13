import * as es from 'estree'

import {
  CharExpressionContext,
  FloatExpressionContext,
  NumberExpressionContext
} from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserPrimitiveExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNumberExpression(ctx: NumberExpressionContext): es.Expression {
      console.log('literal')
      return {
        type: 'Literal',
        value: parseInt(ctx.text),
        raw: ctx.text,
        loc: contextToLocation(ctx)
      }
    }
    visitFloatExpression(ctx: FloatExpressionContext): es.Expression {
      console.log('float')
      return {
        type: 'Literal',
        value: parseFloat(ctx.text),
        raw: ctx.text,
        loc: contextToLocation(ctx)
      }
    }
    visitCharExpression(ctx: CharExpressionContext): es.Expression {
      console.log('char')
      return {
        type: 'Literal',
        value: ctx.text.trim().charAt(1),
        raw: ctx.text,
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
