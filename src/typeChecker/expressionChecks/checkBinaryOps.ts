import { handleRuntimeError } from '../../interpreter/errors'
import { Command, Context } from '../../types'
import { TypeError } from '../errors'

export const checkLeftRightNotVoid = (
  command: Command,
  leftType: string,
  rightType: string,
  context: Context
) => {
  if (leftType == 'void' || rightType == 'void') {
    throw handleRuntimeError(context, new TypeError(command, 'char, int or float', 'void'))
  }

  return undefined
}
