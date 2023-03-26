import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Command, Context } from '../types'
import { ErrorSeverity, ErrorType } from '../types'

export class InterpreterError extends RuntimeSourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public command: Command, public message = 'Unexpected evaluation') {
    super(command)
  }

  public explain(): string {
    return this.message
  }

  public elaborate(): string {
    return 'There is an evaluation error. This is an internal error - likely, the interpretation of this type of expression is not yet implemented.'
  }
}

export class DivisionByZeroError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  public constructor(public command: Command, public message = 'Division by zero') {
    super(command)
  }

  public explain(): string {
    return this.message
  }

  public elaborate(): string {
    return this.message
  }
}

export function handleRuntimeError(context: Context, error: RuntimeSourceError): never {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments
  )
  throw error
}
