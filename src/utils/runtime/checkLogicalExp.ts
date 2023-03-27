import { handleRuntimeError } from '../../interpreter/errors'
import { Literal, LogicalOperator } from '../../parser/types'
import { Command, Context } from '../../types'
import { TypeError } from './errors'
import { isNumber, LHS, RHS } from './utils'

export const checkLogicalExpression = (
  command: Command,
  operator: LogicalOperator,
  left: Literal,
  right: Literal,
  context: Context
) => {
  if (!isNumber(left.value)) {
    throw handleRuntimeError(context, new TypeError(command, LHS, 'number', left.valueType))
  } else if (!isNumber(right.value)) {
    throw handleRuntimeError(context, new TypeError(command, RHS, 'number', right.valueType))
  }
}
