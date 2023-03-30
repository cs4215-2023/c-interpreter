import { Token } from 'antlr4ts/Token'

import { ExpressionContext } from '../lang/ClangParser'
import { Identifier, SourceLocation } from './types'

export function contextToLocation(ctx: ExpressionContext): SourceLocation {
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

export function tokenToIdentifierWrapper(token: Token): Identifier {
  return {
    type: 'Identifier',
    name: token.text!,
    isPointer: false
  }
}

// Interface that helps with class composition
export interface Constructable {
  new(...args: any[]): any
}
