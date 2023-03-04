import * as es from 'estree'

import { ExpressionContext } from '../lang/ClangParser'

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

// Interface that helps with class composition
export interface Constructable {
  new (...args: any[]): any;
}