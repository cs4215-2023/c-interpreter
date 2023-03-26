import { TypeMismatch } from '../../errors/errors'
import { handleRuntimeError } from '../../interpreter/errors'
import { Type } from '../../parser/types'
import { Command, Context, Value } from '../../types'
import { isFloat, isInt, isString } from './utils'

export const checkType = (context: Context, type: Type, value: Value, command: Command) => {
  if (isInt(value) && type.valueType == 'int') {
    return true
  } else if (isFloat(value) && type.valueType == 'float') {
    return true
  } else if (isString(value) && type.valueType == 'char') {
    const value_s = value as string
    if (value_s.length == 1) {
      return true
    }
    throw handleRuntimeError(context, new TypeMismatch(command, type, undefined))
  } else if (value == undefined && type.valueType == 'void') {
    return
  }

  let primitiveType = undefined

  if (isInt(value)) {
    primitiveType = 'int'
  } else if (isFloat(value)) {
    primitiveType = 'float'
  } else if (isString(value) && value.length == 1) {
    primitiveType = 'char'
  } else if (value == undefined) {
    primitiveType = 'void'
  }

  throw handleRuntimeError(context, new TypeMismatch(command, type, primitiveType))
}
