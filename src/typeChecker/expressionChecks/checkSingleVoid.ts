import { handleRuntimeError } from '../../interpreter/errors'
import { Command, Context } from '../../types'
import { TypeError } from '../errors'

export const checkVoid = (command: Command, expressionType: string, context: Context) => {
  if (expressionType == 'void') {
    throw handleRuntimeError(context, new TypeError(command, 'char, int or float', 'void'))
  }

  return undefined
}
