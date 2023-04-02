import { RuntimeSourceError } from '../../errors/runtimeSourceError'
import { PrimitiveValueType } from '../../parser/types'
import { Command, ErrorSeverity, ErrorType } from '../../types'

export class TypeError extends RuntimeSourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(
    public command: Command,
    public expected: PrimitiveValueType | string,
    public received: PrimitiveValueType | string
  ) {
    super(command)
  }

  public explain(): string {
    return `Incompatible types: expected ${this.expected} but received ${this.received}`
  }

  public elaborate(): string {
    return `There is a type error. Try changing ${this.expected} to ${this.received} instead.`
  }
}
