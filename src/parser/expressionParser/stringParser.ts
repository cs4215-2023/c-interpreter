import { StringContext, StringExpressionContext } from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable } from '../util'

export const parserStringLiteral = <T extends Constructable>(BaseClass: T): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitStringExpression(ctx: StringExpressionContext): Expression {
      return this.visitString(ctx.string())
    }

    visitString(ctx: StringContext): Expression {
      return {
        type: 'StringLiteral',
        string: ctx.StringLiteral().toString()
      }
    }
  }

  return DerivedClass
}
