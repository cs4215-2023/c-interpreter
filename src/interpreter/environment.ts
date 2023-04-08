import { uniqueId } from 'lodash'

import { Context, Environment, Frame } from '../types'

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
}

export function popEnvironment(context: Context): Environment | undefined {
  return context.runtime.environments.shift()
}

export function pushEnvironment(context: Context, environment: Environment): void {
  context.runtime.environments.unshift(environment)
}
