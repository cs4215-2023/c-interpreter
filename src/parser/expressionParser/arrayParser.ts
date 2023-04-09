import {
  ArrayContentContext,
  ArrayIdentifierExpressionContext,
  ArrayIdentifierWithTypeContext,
  ArrayInitialisationContext,
  ArrayInitialisationExpressionContext,
  CharListContext,
  FloatListContext,
  IdentifierListContext,
  NumberListContext,
  StringContext
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
      }

      const numberList = ctx.numberList()
      const charList = ctx.charList()
      const floatList = ctx.floatList()
      const identifierList = ctx.identifierList()
      const string = ctx.string()

      if (numberList != undefined) {
        return this.visitNumberList(numberList)
      } else if (charList != undefined) {
        return this.visitCharList(charList)
      } else if (floatList != undefined) {
        return this.visitFloatList(floatList)
      } else if (identifierList != undefined) {
        return this.visitIdentifierList(identifierList)
      } else if (string != undefined) {
        return this.visitStringContext(string)
      }

      throw TypeError('not a valid type of array')
    }

    visitIdentifierList(ctx: IdentifierListContext): Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.IDENTIFIER()
      const identifier: Expression[] | Identifier[] = []
      tokens.forEach(token => {
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
        numbers.push({
          type: 'Literal',
          value: token.text[1],
          valueType: 'char'
        })
      })
      return numbers
    }

    visitStringContext(ctx: StringContext): Expression[] {
      const chars = [...ctx.StringLiteral().toString()]
      const ret: Literal[] = []

      chars.forEach((c, i) => {
        if (i !== 0 && i !== chars.length - 1) {
          ret.push({ type: 'Literal', value: c, valueType: 'char' })
        }
      })
      return ret
    }

    visitFloatList(ctx: FloatListContext): Expression[] {
      if (ctx === undefined) {
        return []
      }
      const tokens = ctx.FLOAT()
      const numbers: Expression[] | Literal[] = []
      tokens.forEach(token => {
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
