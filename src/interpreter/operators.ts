import { BinaryOperator, LogicalOperator, UnaryOperator } from '../parser/types'
import { Command } from '../types'
import { DivisionByZeroError, InterpreterError } from './errors'

export function evaluateUnaryExpression(operator: UnaryOperator, value: number) {
  if (operator === '!') {
    return !value ? 1 : 0
  } else if (operator === '-') {
    return -value
  } else if (operator === '+') {
    return +value
  }
  throw new Error('Pointer not implemented yet')
}

export function evaluateLogicalExpression(operator: LogicalOperator, left: number, right: number) {
  switch (operator) {
    case '&&':
      return left && right ? 1 : 0
    case '||':
      return left || right ? 1 : 0
  }
}

export function evaluateBinaryExpression(
  command: Command,
  operator: BinaryOperator,
  left: number,
  right: number
) {
  switch (operator) {
    case '+':
      return left + right

    case '-':
      return left - right

    case '*':
      return left * right

    case '/':
      if (right == 0) {
        throw new DivisionByZeroError(command)
      }
      return left / right

    case '%':
      if (right == 0) {
        throw new DivisionByZeroError(command)
      }
      return left % right

    case '==':
      return left === right ? 1 : 0
    case '!=':
      return left !== right ? 1 : 0
    case '<=':
      return left <= right ? 1 : 0
    case '<':
      return left < right ? 1 : 0
    case '>':
      return left > right ? 1 : 0
    case '>=':
      return left >= right ? 1 : 0
    case '>>':
      return left >> right
    case '<<':
      return left << right
    case '^':
      return left ^ right
    default:
      throw new InterpreterError(command, 'this should have been caught by the parser')
  }
}
