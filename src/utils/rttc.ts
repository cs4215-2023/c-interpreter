import { RuntimeSourceError } from '../errors/runtimeSourceError'
import {
  BinaryOperator,
  Identifier,
  LogicalOperator,
  Node,
  SourceLocation,
  UnaryOperator
} from '../parser/types'
import { Command, ErrorSeverity, ErrorType, Value } from '../types'

const LHS = ' on left hand side of operation'
const RHS = ' on right hand side of operation'

export class TypeError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: SourceLocation

  constructor(command: Command, public side: string, public expected: string, public got: string) {
    super(command)
  }

  public explain() {
    return `Expected ${this.expected}${this.side}, got ${this.got}.`
  }

  public elaborate() {
    return this.explain()
  }
}

// We need to define our own typeof in order for null/array to display properly in error messages
const typeOf = (v: Value) => {
  if (v === null) {
    return 'null'
  } else if (Array.isArray(v)) {
    return 'array'
  } else {
    return typeof v
  }
}

const isNumber = (v: Value) => typeOf(v) === 'number'
// See section 4 of https://2ality.com/2012/12/arrays.html
// v >>> 0 === v checks that v is a valid unsigned 32-bit int
// tslint:disable-next-line:no-bitwise

const isString = (v: Value) => typeOf(v) === 'string'
const isBool = (v: Value) => typeOf(v) === 'boolean'

export const checkUnaryExpression = (command: Command, operator: UnaryOperator, value: Value) => {
  if ((operator === '+' || operator === '-') && !isNumber(value)) {
    return new TypeError(command, '', 'number', typeOf(value))
  } else if (operator === '!' && !isBool(value)) {
    return new TypeError(command, '', 'boolean', typeOf(value))
  } else {
    return undefined
  }
}

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

export const checkLogicalExpression = (
  command: Command,
  operator: LogicalOperator,
  left: Value,
  right: Value
) => {
  switch (operator) {
    case '&&':
    case '||':
    default:
      return
  }
}

export const checkIfStatement = (node: Node, test: Value) => {
  return isBool(test) ? undefined : new TypeError(node, ' as condition', 'boolean', typeOf(test))
}

export const isIdentifier = (node: any): node is Identifier => {
  return (node as Identifier).name !== undefined
}
