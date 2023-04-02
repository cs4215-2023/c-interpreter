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

export const LHS = ' on left hand side of operation'

export const RHS = ' on right hand side of operation'

export const VOID_TYPE = 'void'

export const INT_TYPE = 'int'

export const FLOAT_TYPE = 'float'

export const CHAR_TYPE = 'char'
