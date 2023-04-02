import { SourceLocation } from './parser/types'

export const UNKNOWN_LOCATION: SourceLocation = {
  start: {
    line: -1,
    column: -1
  },
  end: {
    line: -1,
    column: -1
  }
}

export const FLOAT_PRECISION: number = 6
export const DECLARED_BUT_NOT_YET_ASSIGNED = Symbol('Used to implement hoisting')
