import { TypeMismatch } from '../../../errors/errors'
import { handleRuntimeError } from '../../../interpreter/errors'
import { Literal } from '../../../parser/types'
import { Command, Context } from '../../../types'

export function checkReturnType(context: Context, argument: Literal | undefined, command: Command) {
  if (argument == undefined) {
  }
}
