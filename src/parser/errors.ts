import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { ErrorSeverity, ErrorType } from '../types'
import { SourceLocation } from './types'

export class FatalSyntaxError implements RuntimeSourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}
