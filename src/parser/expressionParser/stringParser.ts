import {
  IdentifiersAndSpecifiersContext,
  StringLiteralContext,
  StringLiteralExpressionContext
} from '../../lang/ClangParser'
import { Expression } from '../types'
import { Constructable } from '../util'

export const parserStringLiteral = <T extends Constructable>(BaseClass: T): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitStringLiteralExpression(ctx: StringLiteralExpressionContext): Expression {
      return this.visit(ctx.stringLiteral())
    }

    visitStringLiteral(ctx: StringLiteralContext): Expression {
      let result = ''
      for (const str of ctx.identifiersAndSpecifiers()) {
        if (str.FORMATSPECIFIERS() != undefined) {
          result += str.FORMATSPECIFIERS()?.text
        }

        if (str.IDENTIFIER() != undefined) {
          result += str.IDENTIFIER()?.text
        }
      }
      return {
        type: 'StringLiteral',
        string: result
      }
    }
  }

  return DerivedClass
}
