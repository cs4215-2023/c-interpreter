import { uniqueId } from 'lodash'

import { CallExpression, Identifier } from '../parser/types'
import { Context, Environment, Frame, Value } from '../types'
import { primitive } from '../utils/astCreator'
import Closure from './closure'

export function createEnvironment(
  closure: Closure,
  args: Value[],
  callExpression?: CallExpression
): Environment {
  const environment: Environment = {
    name: closure.functionName, // TODO: Change this
    tail: closure.environment,
    head: {},
    id: uniqueId()
  }
  if (callExpression) {
    environment.callExpression = {
      ...callExpression,
      arguments: args.map(primitive)
    }
  }
  closure.node.params.forEach((param, index) => {
    environment.head[(param as Identifier).name] = args[index]
  })
  return environment
}

export function createBlockEnvironment(
  context: Context,
  name = 'blockEnvironment',
  head: Frame = {}
): Environment {
  return {
    name,
    tail: currentEnvironment(context),
    head,
    id: uniqueId()
  }
}

export function currentEnvironment(context: Context): Environment {
  return context.runtime.environments[0]
}

export function replaceEnvironment(context: Context, environment: Environment): void {
  context.runtime.environments[0] = environment
  context.runtime.environmentTree.insert(environment)
}

export function popEnvironment(context: Context): Environment | undefined {
  return context.runtime.environments.shift()
}

export function pushEnvironment(context: Context, environment: Environment): void {
  context.runtime.environments.unshift(environment)
  context.runtime.environmentTree.insert(environment)
}
