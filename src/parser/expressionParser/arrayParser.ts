import {
  ArrayContentContext,
  ArrayIdentifierWithTypeContext,
  ArrayInitialisationContext,
  ArrayInitialisationExpressionContext,
  IdentifierListContext,
  NumberListContext
} from '../../lang/ClangParser'
import { Expression, Identifier, Literal } from '../types'
import { Constructable } from '../util'
import ExpressionParser from '.'

export const parserArrayExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitArrayInitialisationExpression(ctx: ArrayInitialisationExpressionContext): Expression {
      return this.visitArrayInitialisation(ctx.arrayInitialisation())
    }
    visitArrayInitialisation(ctx: ArrayInitialisationContext): Expression {
      console.log('visitArrayInitialisation')
      const identifier = this.visitArrayIdentifierWithType(ctx.arrayIdentifierWithType())
      const expressions = []
      expressions.push(identifier) //first element will always be array metadata
      const content = this.visitArrayContent(ctx.arrayContent()!)
      expressions.push(...content)
      return {
        type: 'ArrayExpression',
        elements: expressions
      }
    }
    visitArrayContent(ctx: ArrayContentContext): Expression[] {
      if (ctx === undefined) {
        return []
      } else {
        const numberList = this.visitNumberList(ctx.numberList()!)
        const identifierList = this.visitIdentifierList(ctx.identifierList()!)
        return numberList.length !== 0 ? numberList : identifierList
      }
    }
    visitIdentifierList(ctx: IdentifierListContext): Expression[] {
      console.log('visit identifierlist')
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.IDENTIFIER()
      const identifier: Expression[] | Identifier[] = []
      tokens.forEach(token => {
        console.log(token.text)
        identifier.push({
          type: 'Identifier',
          name: token.text,
          primitiveType: undefined
        })
      })
      return identifier
    }
    visitNumberList(ctx: NumberListContext): Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.NUMBER()
      const numbers: Expression[] | Literal[] = []
      tokens.forEach(token => {
        console.log(token.text)
        numbers.push({
          type: 'Literal',
          value: parseInt(token.text),
          valueType: 'int'
        })
      })
      return numbers
    }
    visitArrayIdentifierWithType(ctx: ArrayIdentifierWithTypeContext): Expression {
      console.log('visitarrayidentifierwithtypecontext')
      const identifier = new ExpressionParser().visit(ctx._id)
      return identifier
    }
  }

  return DerivedClass
}
