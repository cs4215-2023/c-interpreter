import { isEmpty, uniqueId } from 'lodash'

import { CallExpression } from '../parser/types'
import { Context, Environment, Frame, Value } from '../types'
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
  // TODO: UPDATE THE CALL EXPRESSION
  //   if (callExpression) {
  //     environment.callExpression = {
  //       ...callExpression,
  //       arguments: args.map(primitive)
  //     }
  //   }
  //   closure.node.params.forEach((param, index) => {
  //     if (param.type === 'RestElement') {
  //       environment.head[(param.argument as es.Identifier).name] = args.slice(index)
  //     } else {
  //       environment.head[(param as es.Identifier).name] = args[index]
  //     }
  //   })
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

export function isEmptyEnvironment(env: Environment) {
  return isEmpty(env.head)
}

/**
 * Extracts the non-empty tail environment from the given environment and
 * returns current environment if tail environment is a null.
 */
export function getNonEmptyEnv(environment: Environment): Environment {
  if (isEmptyEnvironment(environment)) {
    const tailEnvironment = environment.tail
    if (tailEnvironment === null) {
      return environment
    }
    return getNonEmptyEnv(tailEnvironment)
  } else {
    return environment
  }
}
