import { handleRuntimeError } from '../../../interpreter/errors'
import { Command, Context, Value } from '../../../types'
import { TypeError } from '../errors'
import { isBool, isNumber, typeOf } from '../utils'

export const checkIfStatement = (command: Command, test: Value, context: Context) => {
  if (isBool(test) || isNumber(test)) {
    return undefined
  }
  throw handleRuntimeError(
    context,
    new TypeError(command, ' as condition', 'boolean', typeOf(test))
  )
}
