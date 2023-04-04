import {
  ArrayContentContext,
  ArrayIdentifierContext,
  ArrayIdentifierExpressionContext,
  ArrayIdentifierWithTypeContext,
  ArrayInitialisationContext,
  ArrayInitialisationExpressionContext,
  CharListContext,
  FloatListContext,
  IdentifierListContext,
  NumberListContext
} from '../../lang/ClangParser'
import { TypeParser } from '../typeParser'
import {
  ArrayDeclarationExpression,
  ArrayIdentifier,
  Expression,
  Identifier,
  Literal
} from '../types'
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
      const type = ctx.arrayIdentifierWithType()._idType.PRIMITIVETYPE().text
      const expressions = []
      const content = this.visitArrayContent(ctx.arrayContent()!, type)
      expressions.push(...content)
      arrayInitialisor.array = { type: 'ArrayExpression', elements: expressions }
      return arrayInitialisor
    }
    visitArrayContent(ctx: ArrayContentContext, type: string): Expression[] {
      console.log('visit array content')
      if (ctx === undefined) {
        return []
      } else {
        if (type === 'int') {
          const numberList = this.visitNumberList(ctx.numberList()!)
          const identifierList = this.visitIdentifierList(ctx.identifierList()!)
          return numberList.length !== 0 ? numberList : identifierList
        }
        else if (type === 'char') {
          const charList = this.visitCharList(ctx.charList()!)
          const identifierList = this.visitIdentifierList(ctx.identifierList()!)
          return charList.length !== 0 ? charList : identifierList
        }
        else if (type === 'float') {
          const floatList = this.visitFloatList(ctx.floatList()!)
          const identifierList = this.visitIdentifierList(ctx.identifierList()!)
          return floatList.length !== 0 ? floatList : identifierList
        }
        else { throw TypeError("not a valid type for array!") }
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

    visitArrayIdentifierExpression(ctx: ArrayIdentifierExpressionContext): ArrayIdentifier {
      return {
        type: 'ArrayIdentifier',
        name: ctx.arrayIdentifier().IDENTIFIER()!.text,
        index: this.visit(ctx.arrayIdentifier().expression()),
        isPointer: true
      }
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

    visitCharList(ctx: CharListContext): Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.CHAR()
      const numbers: Expression[] | Literal[] = []
      tokens.forEach(token => {
        console.log(token.text)
        numbers.push({
          type: 'Literal',
          value: token.text[1],
          valueType: 'char'
        })
      })
      return numbers
    }

    visitFloatList(ctx: FloatListContext): Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.FLOAT()
      const numbers: Expression[] | Literal[] = []
      tokens.forEach(token => {
        console.log(token.text)
        numbers.push({
          type: 'Literal',
          value: parseFloat(token.text),
          valueType: 'float'
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
