import { result } from 'lodash'

import { BinaryOperator, Literal, LogicalOperator, UnaryOperator } from '../parser/types'
import { Command } from '../types'
import { RuntimeLiteral } from '../utils/runtime/types'
import { typeCastCharToAscii } from '../utils/runtime/utils'
import { DivisionByZeroError, InterpreterError } from './errors'

// export function callIfFuncAndRightArgs(
//   candidate: any,
//   line: number,
//   column: number,
//   ...args: any[]
// ) {
//   const dummy = create.callExpression(create.locationDummyNode(line, column), args, {
//     start: { line, column },
//     end: { line, column }
//   })

//   if (typeof candidate === 'function') {
//     const originalCandidate = candidate
//     if (candidate.transformedFunction !== undefined) {
//       candidate = candidate.transformedFunction
//     }
//     const expectedLength = candidate.length
//     const receivedLength = args.length
//     const hasVarArgs = candidate.minArgsNeeded !== undefined
//     if (hasVarArgs ? candidate.minArgsNeeded > receivedLength : expectedLength !== receivedLength) {
//       throw new InvalidNumberOfArguments(
//         dummy,
//         hasVarArgs ? candidate.minArgsNeeded : expectedLength,
//         receivedLength,
//         hasVarArgs
//       )
//     }
//     try {
//       return originalCandidate(...args)
//     } catch (error) {
//       // if we already handled the error, simply pass it on
//       if (!(error instanceof RuntimeSourceError || error instanceof ExceptionError)) {
//         throw new ExceptionError(error, dummy.loc!)
//       } else {
//         throw error
//       }
//     }
//   } else {
//     throw new CallingNonFunctionValue(candidate, dummy)
//   }
// }

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
