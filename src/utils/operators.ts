import { BinaryOperator, UnaryOperator } from '../parser/types'
import { Thunk } from '../types'

export function forceIt(val: Thunk | any): any {
  if (val !== undefined && val !== null && val.isMemoized !== undefined) {
    if (val.isMemoized) {
      return val.memoizedValue
    }

    const evaluatedValue = forceIt(val.f())

    val.isMemoized = true
    val.memoizedValue = evaluatedValue

    return evaluatedValue
  } else {
    return val
  }
}

export function evaluateUnaryExpression(operator: UnaryOperator, value: any) {
  if (operator === '!') {
    return !value
  } else if (operator === '-') {
    return -value
  } else if (operator === '+') {
    return +value
  } else {
    throw new Error('TODO: handle pointer unary operators')
  }
}

export function evaluateBinaryExpression(operator: BinaryOperator, left: any, right: any) {
  switch (operator) {
    case '+':
      return left + right
    case '-':
      return left - right
    case '*':
      return left * right
    case '/':
      return left / right
    case '%':
      return left % right
    case '==':
      return left === right
    case '!=':
      return left !== right
    case '<=':
      return left <= right
    case '<':
      return left < right
    case '>':
      return left > right
    case '>=':
      return left >= right
    default:
      return undefined
  }
}
