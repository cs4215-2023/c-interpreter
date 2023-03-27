import { Character, Literal } from '../../parser/types'
import { Value } from '../../types'

export const typeOf = (v: Value) => {
  if (v === null) {
    return 'null'
  } else if (Array.isArray(v)) {
    return 'array'
  } else {
    return typeof v
  }
}

export const isNumber = (v: Value) => typeOf(v) === 'number'

export const isInt = (v: Value) => isNumber(v) && Number.isInteger(v)

export const isFloat = (v: Value) => isNumber(v) && !Number.isInteger(v)

export const isString = (v: Value) => typeOf(v) === 'string'

export const isBool = (v: Value) => typeOf(v) === 'boolean'

export const LHS = ' on left hand side of operation'

export const RHS = ' on right hand side of operation'

export const typeCastCharToAscii = (literal: Literal) => {
  if (literal.valueType == 'char') {
    return { type: 'Literal', value: literal.value.codePointAt(0)!, valueType: 'int' }
  }
  return literal
}
