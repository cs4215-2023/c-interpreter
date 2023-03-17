import { UNKNOWN_LOCATION } from '../constants'
import { SourceLocation } from '../parser/types'
import { Node } from '../parser/types'
import { ErrorSeverity, ErrorType, SourceError } from '../types'

export class RuntimeSourceError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: SourceLocation

  constructor(node: Node) {
    this.location = node.loc ? node.loc : UNKNOWN_LOCATION
  }

  public explain() {
    return ''
  }

  public elaborate() {
    return this.explain()
  }
}
