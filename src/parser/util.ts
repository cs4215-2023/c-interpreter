import { Token } from 'antlr4ts/Token'
import * as es from 'estree'

import { ExpressionContext } from '../lang/ClangParser'
import { Identifier } from './types'

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

export function tokenToIdentifierWrapper(token: Token): Identifier {
  if (token.text) {
    return {
      type: 'Identifier',
      name: token.text
    }
  }
  return {
    type: 'Identifier',
    name: ''
  }
}

// Interface that helps with class composition
export interface Constructable {
  new (...args: any[]): any
}
