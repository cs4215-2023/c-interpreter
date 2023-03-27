import { FLOAT_PRECISION } from '../constants'
import { TypeMismatch } from '../errors/errors'
import { BinaryOperator, Literal, LogicalOperator, UnaryOperator } from '../parser/types'
import { RuntimeLiteral } from '../utils/runtime/types'
import { typeCastCharToAscii } from '../utils/runtime/utils'
import { InterpreterError } from './errors'

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

export function evaluateUnaryExpression(operator: UnaryOperator, literal: Literal) {
  literal = typeCastCharToAscii(literal) as RuntimeLiteral
  if (literal.value == null) {
    throw new InterpreterError(literal, 'this should have been caught by the parser')
  }

  const result = literal
  if (operator === '!') {
    result.value = !result.value ? 1 : 0
    result.valueType = 'int'
    return result
  } else if (operator === '-') {
    result.value = -result.value
    return result
  } else if (operator === '+') {
    result.value = +result.value
    return result
  }
  throw new Error('Pointer not implemented yet')
}

export function evaluateLogicalExpression(
  operator: LogicalOperator,
  left: Literal,
  right: Literal
) {
  if (left.value == null || right.value == null) {
    throw new InterpreterError(left, 'this should have been caught by the parser')
  }

  left = typeCastCharToAscii(left) as RuntimeLiteral
  right = typeCastCharToAscii(right) as RuntimeLiteral

  switch (operator) {
    case '&&':
      return { type: 'Literal', value: left.value && right.value ? 1 : 0, valueType: 'int' }
    case '||':
      return { type: 'Literal', value: left.value || right.value ? 1 : 0, valueType: 'int' }
    default:
      throw new InterpreterError(left, 'this should have been caught by the parser')
  }
}

export function evaluateBinaryExpression(operator: BinaryOperator, left: Literal, right: Literal) {
  left = typeCastCharToAscii(left) as RuntimeLiteral
  right = typeCastCharToAscii(right) as RuntimeLiteral

  if (left.value == null || right.value == null) {
    throw new InterpreterError(left, 'this should have been caught by the parser')
  }

  const resultLiteral = { type: 'Literal', value: null, valueType: 'void' } as Literal
  let result

  switch (operator) {
    case '+':
      result = left.value + right.value
      break
    case '-':
      result = left.value - right.value
      break
    case '*':
      result = left.value * right.value
      break
    case '/':
      result = left.value / right.value
      break
    case '%':
      result = left.value % right.value
      break
    case '==':
      return left.value === right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }
    case '!=':
      return left.value !== right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }
    case '<=':
      return left.value <= right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }
    case '<':
      return left.value < right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }
    case '>':
      return left.value > right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }
    case '>=':
      return left.value >= right.value
        ? { type: 'Literal', value: 1, valueType: 'int' }
        : { type: 'Literal', value: 0, valueType: 'int' }

    default:
      throw new InterpreterError(left, 'this should have been caught by the parser')
  }
  if (left.valueType == right.valueType && left.valueType == 'int') {
    resultLiteral.valueType = 'int'
    resultLiteral.value = Math.floor(result)
    return resultLiteral
  }

  resultLiteral.valueType = 'float'
  resultLiteral.value = result.toPrecision(FLOAT_PRECISION)
  return resultLiteral
}
