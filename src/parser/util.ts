import * as es from 'estree'

import { ExpressionContext } from '../lang/ClangParser'
import { ExpressionParser } from './expressionParser'

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

function convertExpression(expression: ExpressionContext): es.Expression {
  const generator = new ExpressionParser()
  return expression.accept(generator)
}

export function convertSource(expression: ExpressionContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: [
      {
        type: 'ExpressionStatement',
        expression: convertExpression(expression)
      }
    ]
  }
}
