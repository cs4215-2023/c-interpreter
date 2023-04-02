import * as errors from '../errors/errors'
import { handleRuntimeError } from '../interpreter/errors'
import { TypedIdentifier } from '../parser/types'
import { Node } from '../parser/types'
import { Context, TypeEnvironment } from '../types'
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

export function getVariableType(context: Context, name: string) {
  let environment: TypeEnvironment | null = currentTypeEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      return environment.head[name]
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export function declareIdentifierType(context: Context, name: string, node: Node) {
  const typeEnvironment = currentTypeEnvironment(context)
  if (typeEnvironment.head.hasOwnProperty(name)) {
    return handleRuntimeError(
      context,
      new errors.ExceptionError(new Error('Redeclared'), node.loc!)
    )
  }
  if (node.type == 'VariableDeclarationExpression') {
    typeEnvironment.head[name] = node.identifierType
  } else if (node.type == 'ArrayDeclarationExpression') {
    typeEnvironment.head[name] = node.arrayType
  }
  return typeEnvironment
}
