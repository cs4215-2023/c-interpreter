import { RuntimeSourceError } from '../../errors/runtimeSourceError'
import { SourceLocation } from '../../parser/types'
import { Command,ErrorSeverity, ErrorType } from '../../types'

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
