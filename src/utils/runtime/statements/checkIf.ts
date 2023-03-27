import { handleRuntimeError } from '../../../interpreter/errors'
import { Literal } from '../../../parser/types'
import { Command, Context, Value } from '../../../types'
import { TypeError } from '../errors'
import { isBool, isNumber, typeOf } from '../utils'

export const checkIfStatement = (command: Command, test: Literal, context: Context) => {
  if (isNumber(test.value)) {
    return undefined
  }
  throw handleRuntimeError(
    context,
    new TypeError(command, ' as condition', 'boolean', typeOf(test))
  )
}
