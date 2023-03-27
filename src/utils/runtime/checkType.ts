import { TypeMismatch } from '../../errors/errors'
import { handleRuntimeError } from '../../interpreter/errors'
import { Literal, Type } from '../../parser/types'
import { Command, Context } from '../../types'

export function checkType(context: Context, type: Type, literal: Literal, command: Command) {
  const commandValue = literal as Command
  let typeGot: Type | string | undefined

  if (commandValue.type == 'Closure_i') {
    typeGot = commandValue.typeDeclaration
  } else if (commandValue.type == 'Literal') {
    typeGot = commandValue.valueType
  }

  if (typeGot == type || typeGot == type.valueType) {
    return
  }

  if (typeof typeGot == 'object') {
    typeGot = typeGot.valueType
  }

  throw handleRuntimeError(context, new TypeMismatch(command, type, typeGot))
}
