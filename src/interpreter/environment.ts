import { Context, Environment } from '../types'

function currentEnvironment(context: Context): Environment {
  return context.runtime.environments[0]
}

function replaceEnvironment(context: Context, environment: Environment): void {
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
