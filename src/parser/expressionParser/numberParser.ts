import * as es from 'estree'

import { NumberExpressionContext } from '../../lang/ClangParser'
import { Constructable, contextToLocation } from '../util'

export const parserNumberExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitNumberExpression(ctx: NumberExpressionContext): es.Expression {
        return {
        type: 'Literal',
        value: parseInt(ctx.text),
        raw: ctx.text,
        loc: contextToLocation(ctx)
        }
    }
  }
  return DerivedClass
}
