import { TAG_TO_TYPE } from '../../interpreter/memory/tags'
import { Command } from '../../types'
import { TypeError } from './errors'
import { LHS, RHS } from './utils'

export const checkBinaryExpression = (command: Command, type_left: number, type_right: number) => {
  const leftType = TAG_TO_TYPE[type_left]
  const rightType = TAG_TO_TYPE[type_right]

  if (leftType == 'void') {
    return new TypeError(command, LHS, 'char, int or float', TAG_TO_TYPE[type_left])
  }

  if (rightType == 'void') {
    return new TypeError(command, RHS, 'char, int or float', TAG_TO_TYPE[type_right])
  }
  return undefined
}
