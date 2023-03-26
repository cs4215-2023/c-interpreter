import { BinaryOperator, LogicalOperator, UnaryOperator } from '../parser/types'

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

export function evaluateUnaryExpression(operator: UnaryOperator, value: any) {
  if (operator === '!') {
    return !value
  } else if (operator === '-') {
    return -value
  } else if (operator === '+') {
    return +value
  }
  throw new Error('Pointer not implemented yet')
}

export function evaluateLogicalExpression(operator: LogicalOperator, left: any, right: any) {
  switch (operator) {
    case '&&':
      return left && right
    case '||':
      return left || right
    default:
      return undefined
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
    case '>>':
      return left >> right
    case '<<':
      return left << right
    case '^':
      return left ^ right
    default:
      return undefined
  }
}
