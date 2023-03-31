import * as errors from '../../errors/errors'
import { PrimitiveValueType, TypedIdentifier } from '../../parser/types'
import { Node } from '../../parser/types'
import { Context, TypeEnvironment } from '../../types'
import { handleRuntimeError } from '../errors'
import { currentTypeEnvironment } from './typeEnvironment'
import { ClosureType } from './types'

export function setFunctionParams(
  node: Node,
  context: Context,
  name: string,
  params: TypedIdentifier[]
) {
  let environment: TypeEnvironment | null = currentTypeEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      environment.head[name] = params
      return
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export function assignFunctionType(
  node: Node,
  context: Context,
  name: string,
  functionClosure: ClosureType
) {
  const environment: TypeEnvironment | null = currentTypeEnvironment(context)
  environment.head[name] = functionClosure
}
