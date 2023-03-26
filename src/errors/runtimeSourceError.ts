import { UNKNOWN_LOCATION } from '../constants'
import { SourceLocation } from '../parser/types'
import { Command, ErrorSeverity, ErrorType, SourceError } from '../types'

export class RuntimeSourceError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: SourceLocation

  constructor(command?: Command) {
    this.location = command?.loc ?? UNKNOWN_LOCATION
  }

  public explain() {
    return ''
  }

  public elaborate() {
    return this.explain()
  }
}
