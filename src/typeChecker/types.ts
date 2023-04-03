import { PrimitiveType, PrimitiveValueType, TypedIdentifier } from '../parser/types'

export type ClosureType = {
  type: 'Closure'
  parameterTypes: TypedIdentifier[]
  returnType: PrimitiveType
}

export type Builtin = {
  type: 'Builtin'
  returnType: PrimitiveValueType
  apply: Function
  arity: number
  hasVarArgs: boolean
  name: string
}
