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

export const VOID_TYPE = 'void'

export const INT_TYPE = 'int'

export const FLOAT_TYPE = 'float'

export const CHAR_TYPE = 'char'

export const INT_POINTER_TYPE = 'int*'

export const FLOAT_POINTER_TYPE = 'float*'

export const VOID_POINTER_TYPE = 'void*'

export const CHAR_POINTER_TYPE = 'char*'

export const typeMappings = {
  void: VOID_TYPE,
  int: INT_TYPE,
  float: FLOAT_TYPE,
  char: CHAR_TYPE
}

export const pointerTypeMappings = {
  void: VOID_POINTER_TYPE,
  int: INT_POINTER_TYPE,
  float: FLOAT_POINTER_TYPE,
  char: CHAR_POINTER_TYPE
}

export const validPointerTypes: Set<string> = new Set<string>([
  VOID_POINTER_TYPE,
  INT_POINTER_TYPE,
  FLOAT_POINTER_TYPE,
  CHAR_POINTER_TYPE
])
