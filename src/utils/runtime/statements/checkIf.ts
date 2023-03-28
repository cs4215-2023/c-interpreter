import { handleRuntimeError } from '../../../interpreter/errors'
import { Command, Context } from '../../../types'
import { TypeError } from '../errors'
import { isNumber, typeOf } from '../utils'

export const checkIfStatement = (command: Command, bool: number, context: Context) => {
  if (isNumber(bool)) {
    return undefined
  }
  throw handleRuntimeError(
    context,
    new TypeError(command, ' as condition', 'boolean', typeOf(test))
  )
}
