import { handleRuntimeError } from '../../interpreter/errors'
import { LogicalOperator } from '../../parser/types'
import { Command, Context, Value } from '../../types'
import { TypeError } from './errors'
import { isNumber, LHS, RHS, typeOf } from './utils'

export const checkLogicalExpression = (
  command: Command,
  operator: LogicalOperator,
  left: Value,
  right: Value,
  context: Context
) => {
  if (!isNumber(left)) {
    throw handleRuntimeError(context, new TypeError(command, LHS, 'number', typeOf(left)))
  } else if (!isNumber(right)) {
    throw handleRuntimeError(context, new TypeError(command, RHS, 'number', typeOf(right)))
  }
}
