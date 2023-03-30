import {
  ArrayContentContext,
  ArrayIdentifierWithTypeContext,
  ArrayInitialisationContext,
  ArrayInitialisationExpressionContext,
  IdentifierListContext,
  NumberListContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import { ArrayDeclarationExpression, Expression, Identifier, Literal } from '../types'
import { Constructable, tokenToIdentifierWrapper } from '../util'

export const parserArrayExpression = <T extends Constructable>(
  BaseClass: T
): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitArrayInitialisationExpression(ctx: ArrayInitialisationExpressionContext): Expression {
      return this.visitArrayInitialisation(ctx.arrayInitialisation())
    }
    visitArrayInitialisation(ctx: ArrayInitialisationContext): Expression {
      console.log('visitArrayInitialisation')
      const arrayInitialisor = this.visitArrayIdentifierWithType(
        ctx.arrayIdentifierWithType()
      ) as ArrayDeclarationExpression
      const expressions = []
      const content = this.visitArrayContent(ctx.arrayContent()!)
      expressions.push(...content)
      arrayInitialisor.array = { type: 'ArrayExpression', elements: expressions }
      return arrayInitialisor
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
          isPointer: true
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

    /**
     * Given int a[2] = {1,2}, this visits the int a[2] portion of the initialisation.
     * @param ctx
     * @returns an array declaration expression
     */

    visitArrayIdentifierWithType(ctx: ArrayIdentifierWithTypeContext): Expression {
      console.log('visitarrayidentifierwithtypecontext')
      const identifier = tokenToIdentifierWrapper(ctx._id)
      identifier.isPointer = true
      const type = new TypeParser().visit(ctx._idType)
      let size = undefined
      if (ctx._size != undefined) {
        size = parseInt(ctx._size.text!)
      }

      return {
        type: 'ArrayDeclarationExpression',
        arrayType: type,
        identifier: identifier,
        size: size,
        array: undefined
      }
    }
  }

  return DerivedClass
}
