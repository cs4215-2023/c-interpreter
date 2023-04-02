import { isInteger } from 'lodash'

import { Literal, SourceLocation } from '../parser/types'

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', { start: { line, column }, end: { line, column } })

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
