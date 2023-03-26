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

export const isString = (v: Value) => typeOf(v) === 'string'

export const isBool = (v: Value) => typeOf(v) === 'boolean'

export const LHS = ' on left hand side of operation'

export const RHS = ' on right hand side of operation'
