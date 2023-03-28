import { handleRuntimeError } from '../../interpreter/errors'
import { TAG_TO_TYPE } from '../../interpreter/memory/tags'
import { LogicalOperator } from '../../parser/types'
import { Command, Context } from '../../types'
import { TypeError } from './errors'
import { LHS, RHS } from './utils'

export const checkLogicalExpression = (
  command: Command,
  operator: LogicalOperator,
  left_type: number,
  right_type: number,
  context: Context
) => {
  if (TAG_TO_TYPE[left_type] == 'void') {
    throw handleRuntimeError(context, new TypeError(command, LHS, 'number, float or char', 'void'))
  } else if (TAG_TO_TYPE[right_type] == 'void') {
    throw handleRuntimeError(context, new TypeError(command, RHS, 'number, float or char', 'void'))
  }
}
