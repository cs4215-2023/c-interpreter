import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Context } from '../types'

export const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments
  )
  throw error
}
