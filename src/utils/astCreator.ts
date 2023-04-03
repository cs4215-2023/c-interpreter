import { isInteger } from 'lodash'

import { CallExpression, Expression, Identifier, Literal, SourceLocation } from '../parser/types'

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', { start: { line, column }, end: { line, column } })

export const identifier = (name: string, loc?: SourceLocation | null): Identifier => ({
  type: 'Identifier',
  name,
  loc,
  isPointer: false
})

export const literal = (value: string | number | null, loc?: SourceLocation | null): Literal => {
  if (typeof value == 'string') {
    return { type: 'Literal', value, valueType: 'char', loc }
  } else if (value == null) {
    return { type: 'Literal', value, valueType: 'void', loc }
  } else if (typeof value === 'number' && isInteger(value)) {
    return { type: 'Literal', value, valueType: 'int', loc }
  } else {
    return { type: 'Literal', value, valueType: 'float', loc }
  }
}

// primitive: undefined is a possible value
export const primitive = (value: any): Expression => {
  return value === undefined ? identifier('undefined') : literal(value)
}

export const callExpression = (
  callee: Expression,
  args: Expression[],
  loc?: SourceLocation | null
): CallExpression => ({
  type: 'CallExpression',
  callee,
  arguments: args,
  loc
})
