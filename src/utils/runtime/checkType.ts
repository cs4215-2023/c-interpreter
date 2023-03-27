import { TypeMismatch } from '../../errors/errors'
import { handleRuntimeError } from '../../interpreter/errors'
import { Type } from '../../parser/types'
import { Command, Context, Value } from '../../types'
import { isFloat, isInt, isString } from './utils'

export function checkType(context: Context, type: Type, value: Value, command: Command) {
  if (typeof value == 'object') {
    const commandValue = value as Command

    if (commandValue.type == 'Closure_i') {
      value = commandValue.typeDeclaration
    } else if (commandValue.type == 'Literal') {
      value = commandValue.valueType
    }

    console.log(type, value)

    if (value == type || value == type.valueType) {
      return
    }
  }

  if (isInt(value) && type.valueType == 'int') {
    return
  } else if (isFloat(value) && type.valueType == 'float') {
    return
  } else if (isString(value) && type.valueType == 'char') {
    const value_s = value as string
    if (value_s.length == 1) {
      return
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
