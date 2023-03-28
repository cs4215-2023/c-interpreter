import { TypeMismatch } from '../../errors/errors'
import { handleRuntimeError } from '../../interpreter/errors'
import { Literal, Type } from '../../parser/types'
import { Command, Context, Value } from '../../types'

export function checkType(context: Context, typeExpected: Type, typeGot: Type, command: Command) {
  if (typeExpected.signed != typeGot.signed && typeExpected.valueType != typeGot.valueType) {
    throw handleRuntimeError(context, new TypeMismatch(command, typeExpected, typeGot))
  }
}
