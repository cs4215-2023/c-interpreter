/* tslint:disable: max-classes-per-file */
/* tslint:disable:max-line-length */
import { generate } from 'astring'

import { CallExpression, Node, SourceLocation, Type } from '../parser/types'
import { Command, ErrorSeverity, ErrorType, SourceError, Value } from '../types'
import { RuntimeSourceError } from './runtimeSourceError'

export class ExceptionError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: SourceLocation) { }

  public explain() {
    return this.error.toString()
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CallingNonFunctionValue extends RuntimeSourceError {
  constructor(private callee: Value, private command: Command) {
    super(command)
  }

  public explain() {
    return `Calling non-function value`
  }

  public elaborate() {
    return ''
  }
}

export class UndefinedVariable extends RuntimeSourceError {
  constructor(public name: string, node: Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} not declared.`
  }

  public elaborate() {
    return `Before you can read the value of ${this.name}, you need to declare it as a variable or a constant. You can do this using the let or const keywords.`
  }
}

export class StackOverflowError extends RuntimeSourceError {
  constructor(public name: string, node: Node) {
    super(node)
  }

  public explain() {
    return `Stack memory is fully utilized`
  }

  public elaborate() {
    return `Stack memory is fully utilized. Consider increasing the stack size.`
  }
}

export class UnassignedVariable extends RuntimeSourceError {
  constructor(public name: string, node: Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} declared later in current scope but not yet assigned`
  }

  public elaborate() {
    return `If you're trying to access the value of ${this.name} from an outer scope, please rename the inner ${this.name}. An easy way to avoid this issue in future would be to avoid declaring any variables or constants with the name ${this.name} in the same scope.`
  }
}

export class InvalidNumberOfArguments extends RuntimeSourceError {
  private calleeStr: string

  constructor(
    command: Command,
    private expected: number,
    private got: number,
    private hasVarArgs = false
  ) {
    super(command)
    this.calleeStr = generate((command as CallExpression).callee)
  }

  public explain() {
    return `Expected ${this.expected} ${this.hasVarArgs ? 'or more ' : ''}arguments, but got ${this.got
      }.`
  }

  public elaborate() {
    const calleeStr = this.calleeStr
    const pluralS = this.expected === 1 ? '' : 's'

    return `Try calling function ${calleeStr} again, but with ${this.expected} argument${pluralS} instead. Remember that arguments are separated by a ',' (comma).`
  }
}

export class TypeMismatch extends RuntimeSourceError {
  constructor(command: Command, private expected: Type, private got: Type) {
    super(command)
  }

  public explain() {
    if (this.got == undefined) {
      return `Unable to detect type, please specify a primitive type: int, float, void or char.`
    }
    return `Expected ${this.expected.valueType} but got ${this.got}`
  }

  public elaborate() {
    return `Ensure that the types are the same.`
  }
}
