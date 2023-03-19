/* tslint:disable: max-classes-per-file */
/* tslint:disable:max-line-length */
import { generate } from 'astring'

import { CallExpression, Node, SourceLocation } from '../parser/types'
import { ErrorSeverity, ErrorType, SourceError, Value } from '../types'
import { RuntimeSourceError } from './runtimeSourceError'

export class InterruptedError extends RuntimeSourceError {
  constructor(node: Node) {
    super(node)
  }

  public explain() {
    return 'Execution aborted by user.'
  }

  public elaborate() {
    return 'TODO'
  }
}

export class ExceptionError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: SourceLocation) {}

  public explain() {
    return this.error.toString()
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CallingNonFunctionValue extends RuntimeSourceError {
  constructor(private callee: Value, private node: Node) {
    super(node)
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
    node: Node,
    private expected: number,
    private got: number,
    private hasVarArgs = false
  ) {
    super(node)
    this.calleeStr = generate((node as CallExpression).callee)
  }

  public explain() {
    return `Expected ${this.expected} ${this.hasVarArgs ? 'or more ' : ''}arguments, but got ${
      this.got
    }.`
  }

  public elaborate() {
    const calleeStr = this.calleeStr
    const pluralS = this.expected === 1 ? '' : 's'

    return `Try calling function ${calleeStr} again, but with ${this.expected} argument${pluralS} instead. Remember that arguments are separated by a ',' (comma).`
  }
}

export class ConstAssignment extends RuntimeSourceError {
  constructor(node: Node, private name: string) {
    super(node)
  }

  public explain() {
    return `Cannot assign new value to constant ${this.name}.`
  }

  public elaborate() {
    return `As ${this.name} was declared as a constant, its value cannot be changed. You will have to declare a new variable.`
  }
}
