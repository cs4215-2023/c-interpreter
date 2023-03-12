import * as es from 'estree'

import { FunctionCallContext, FunctionCallParametersContext } from '../../lang/ClangParser'
import { Constructable, tokenToIdentifierWrapper } from '../util'

export const parserFunctionCallExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitFunctionCall(ctx: FunctionCallContext): es.Expression {
      console.log("visitFunctioncall")
      return {
        type: 'CallExpression',
        callee: tokenToIdentifierWrapper(ctx._func),
        arguments: this.visit(ctx._args),
        optional: false
      }
    }

    visitFunctionArguments(ctx: FunctionCallParametersContext): es.Expression[] {
      console.log("visitfunctionarguments")
      const expressions: es.Expression[] = []
      for (let i = 0; i < ctx.childCount; i++) {
        expressions.push(this.visit(ctx.getChild(i)))
      }
      return expressions
    }
  }
  return DerivedClass
}
