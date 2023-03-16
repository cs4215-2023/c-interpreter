import { Token } from 'antlr4ts/Token'
import * as es from 'estree'

import { ExpressionContext } from '../lang/ClangParser'
import { Identifier, PrimitiveType } from './types'

export function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

export function tokenToIdentifierWrapper(
  token: Token,
  primitiveType: PrimitiveType | undefined
): Identifier {
  if (token.text) {
    return {
      type: 'Identifier',
      name: token.text,
      primitiveType: primitiveType
    }
  }
  return {
    type: 'Identifier',
    name: '',
    primitiveType: primitiveType
  }
}

// Interface that helps with class composition
export interface Constructable {
  new (...args: any[]): any
}
