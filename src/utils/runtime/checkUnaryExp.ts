import { handleRuntimeError } from '../../interpreter/errors'
import { UnaryOperator } from '../../parser/types'
import { Command, Context, Value } from '../../types'
import { TypeError } from './errors'
import { isBool, isNumber, typeOf } from './utils'

export const checkUnaryExpression = (
  command: Command,
  operator: UnaryOperator,
  value: Value,
  context: Context
) => {
  if ((operator === '+' || operator === '-') && !isNumber(value)) {
    throw handleRuntimeError(context, new TypeError(command, '', 'number', typeOf(value)))
  } else if (operator === '!' && !isBool(value)) {
    throw handleRuntimeError(context, new TypeError(command, '', 'number', typeOf(value)))
  }
}
