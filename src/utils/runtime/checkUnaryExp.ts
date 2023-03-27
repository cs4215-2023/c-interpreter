import { handleRuntimeError } from '../../interpreter/errors'
import { Literal, UnaryOperator } from '../../parser/types'
import { Command, Context, Value } from '../../types'
import { TypeError } from './errors'
import { isBool, isNumber, typeOf } from './utils'

export const checkUnaryExpression = (
  command: Command,
  operator: UnaryOperator,
  literal: Literal,
  context: Context
) => {
  if ((operator === '+' || operator === '-') && !isNumber(literal.value)) {
    throw handleRuntimeError(context, new TypeError(command, '', 'number', typeOf(literal.value)))
  } else if (operator === '!' && !isNumber(literal.value)) {
    throw handleRuntimeError(context, new TypeError(command, '', 'number', typeOf(literal.value)))
  }
}
