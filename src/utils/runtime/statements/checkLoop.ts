import { handleRuntimeError } from '../../../interpreter/errors'
import { Command, Context, Value } from '../../../types'
import { TypeError } from '../errors'
import { isString, typeOf } from '../utils'

export const checkLoop = (command: Command, test: Value, context: Context) => {
  if (isString(test)) {
    throw handleRuntimeError(
      context,
      new TypeError(command, ' as condition', 'boolean', typeOf(test))
    )
  }

  return undefined
}
