import { PrimitiveType, TypedIdentifier } from '../parser/types'

export type ClosureType = {
  type: 'Closure'
  parameterTypes: TypedIdentifier[]
  returnType: PrimitiveType
}
