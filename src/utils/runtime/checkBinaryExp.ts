import { isNumber, isString } from 'lodash'

import { BinaryOperator } from '../../parser/types'
import { Command, Value } from '../../types'
import { TypeError } from './errors'
import { LHS, RHS, typeOf } from './utils'

export const checkBinaryExpression = (
  command: Command,
  operator: BinaryOperator,
  left: Value,
  right: Value
) => {
  switch (operator) {
    case '-':
    case '*':
    case '/':
    case '%':
      if (!isNumber(left)) {
        return new TypeError(command, LHS, 'number', typeOf(left))
      } else if (!isNumber(right)) {
        return new TypeError(command, RHS, 'number', typeOf(right))
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
      if (isNumber(left)) {
        return isNumber(right) ? undefined : new TypeError(command, RHS, 'number', typeOf(right))
      } else if (isString(left)) {
        return isString(right) ? undefined : new TypeError(command, RHS, 'string', typeOf(right))
      } else {
        return new TypeError(command, LHS, 'string or number', typeOf(left))
      }
    default:
      return
  }
}
