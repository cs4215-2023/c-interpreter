import { isNumber, isString } from 'lodash'

import { BinaryOperator, Literal } from '../../parser/types'
import { Command } from '../../types'
import { TypeError } from './errors'
import { LHS, RHS, typeOf } from './utils'

export const checkBinaryExpression = (
  command: Command,
  operator: BinaryOperator,
  left: Literal,
  right: Literal
) => {
  switch (operator) {
    case '-':
    case '*':
    case '/':
    case '%':
      if (!isNumber(left.value)) {
        return new TypeError(command, LHS, 'number', typeOf(left.value))
      } else if (!isNumber(right.value)) {
        return new TypeError(command, RHS, 'number', typeOf(right.value))
      } else {
        return
      }
    case '+':
    case '<':
    case '<=':
    case '>':
    case '>=':
    case '!=':
    case '==':
      if (isNumber(left.value)) {
        return isNumber(right.value)
          ? undefined
          : new TypeError(command, RHS, 'number', typeOf(right.value))
      } else if (isString(left.value)) {
        return isString(right.value)
          ? undefined
          : new TypeError(command, RHS, 'string', typeOf(right.value))
      } else {
        return new TypeError(command, LHS, 'string or number', typeOf(left.value))
      }
    default:
      return
  }
}
