import { handleRuntimeError } from '../../interpreter/errors'
import { TAG_TO_TYPE } from '../../interpreter/memory/tags'
import { Command, Context } from '../../types'
import { TypeError } from './errors'

export const checkUnaryExpression = (command: Command, type: number, context: Context) => {
  const expressionType = TAG_TO_TYPE[type]
  if (expressionType == 'void') {
    throw handleRuntimeError(
      context,
      new TypeError(command, '', 'int, float or char', expressionType)
    )
  }
}
