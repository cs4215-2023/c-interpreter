import {
  CharExpressionContext,
  FloatExpressionContext,
  NumberExpressionContext
} from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable, contextToLocation } from '../util'

export const parserPrimitiveExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNumberExpression(ctx: NumberExpressionContext): Expression {
      return {
        type: 'Literal',
        valueType: 'int',
        value: parseInt(ctx.text),
        loc: contextToLocation(ctx)
      }
    }
    visitFloatExpression(ctx: FloatExpressionContext): Expression {
      return {
        type: 'Literal',
        valueType: 'float',
        value: parseFloat(ctx.text),
        loc: contextToLocation(ctx)
      }
    }
    visitCharExpression(ctx: CharExpressionContext): Expression {
      return {
        type: 'Literal',
        valueType: 'char',
        value: ctx.text.trim().charAt(1),
        loc: contextToLocation(ctx)
      }
    }
  }
  return DerivedClass
}
