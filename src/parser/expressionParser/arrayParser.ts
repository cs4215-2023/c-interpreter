import * as es from 'estree'

import {
  ArrayContentContext,
  ArrayIdentifierWithTypeContext,
  ArrayInitialisationContext,
  ArrayInitialisationExpressionContext,
  IdentifierListContext,
  NumberListContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { Constructable, tokenToIdentifierWrapper } from '../util'

export const parserArrayExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitArrayInitialisationExpression(ctx: ArrayInitialisationExpressionContext): es.Expression {
      const arr = this.visitArrayInitialisation(ctx.arrayInitialisation())
      return arr
    }
    visitArrayInitialisation(ctx: ArrayInitialisationContext): es.Expression {
      console.log('visitArrayInitialisation')
      const identifier = this.visitArrayIdentifierWithType(ctx.arrayIdentifierWithType())
      const expressions = []
      expressions.push(identifier) //first element will always be array metadata
      const content = this.visitArrayContent(ctx.arrayContent()!)
      expressions.concat(content)
      return {
        type: 'ArrayExpression',
        elements: expressions
      }
    }
    visitArrayContent(ctx: ArrayContentContext): es.Expression[] {
      if (ctx === undefined) {
        return []
      } else {
        const numberList = this.visitNumberList(ctx.numberList()!)
        const identifierList = this.visitIdentifierList(ctx.identifierList()!)
        return numberList.length !== 0 ? numberList : identifierList
      }
    }
    visitIdentifierList(ctx: IdentifierListContext): es.Expression[] {
      console.log('visit identifierlist')
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.IDENTIFIER()
      const identifier: es.Expression[] | { type: 'Identifier'; name: string }[] = []
      tokens.forEach(token => {
        console.log(token.text)
        identifier.push({
          type: 'Identifier',
          name: token.text
        })
      })
      return identifier
    }
    visitNumberList(ctx: NumberListContext): es.Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.NUMBER()
      const numbers: es.Expression[] | { type: 'Literal'; value: number; raw: string }[] = []
      tokens.forEach(token => {
        console.log(token.text)
        numbers.push({
          type: 'Literal',
          value: parseInt(token.text),
          raw: token.text
        })
      })
      return numbers
    }
    visitArrayIdentifierWithType(ctx: ArrayIdentifierWithTypeContext): es.Expression {
      console.log('visitarrayidentifierwithtypecontext')
      const type = new TypeParser().visit(ctx._idType)
      const identifier = tokenToIdentifierWrapper(ctx._id)
      return {
        type: 'Identifier',
        name: identifier.name + '#' + type.valueType
      }
    }
  }

  return DerivedClass
}
