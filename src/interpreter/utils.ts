import { DECLARED_BUT_NOT_YET_ASSIGNED } from '../constants'
import * as errors from '../errors/errors'
import { Node, Type } from '../parser/types'
import {
  CallInstruction,
  ClosureInstruction,
  Command,
  Context,
  Environment,
  TypeEnvironment
} from '../types'
import { checkType } from '../utils/runtime/checkType'
import { currentEnvironment } from './environment'
import { handleRuntimeError } from './errors'
import { currentTypeEnvironment } from './typeChecker/typeEnvironment'

export function checkNumberOfArguments(
  context: Context,
  command: CallInstruction,
  lambda: ClosureInstruction
) {
  if (lambda.parameters == undefined) {
    return handleRuntimeError(context, new errors.CallingNonFunctionValue(undefined, command))
  }
  if (lambda.parameters.length != command.arity) {
    return handleRuntimeError(
      context,
      new errors.InvalidNumberOfArguments(command, lambda.parameters.length, command.arity)
    )
  }

  return undefined
}

export const setValueToIdentifier = (
  command: Command,
  context: Context,
  name: string,
  value: any
) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      environment.head[name] = value
      return value
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export function declareIdentifier(context: Context, name: string, node: Node, addr: number) {
  const environment = currentEnvironment(context)
  if (environment.head.hasOwnProperty(name)) {
    return handleRuntimeError(
      context,
      new errors.ExceptionError(new Error('Redeclared'), node.loc!)
    )
  }
  environment.head[name] = addr
  return environment
}

export function getVariable(context: Context, name: string) {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      if (environment.head[name] === DECLARED_BUT_NOT_YET_ASSIGNED) {
        return handleRuntimeError(
          context,
          new errors.UnassignedVariable(name, context.runtime.nodes[0])
        )
      } else {
        return environment.head[name]
      }
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}
