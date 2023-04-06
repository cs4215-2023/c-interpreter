import { CHAR_POINTER_TYPE, CHAR_TYPE, DECLARED_BUT_NOT_YET_ASSIGNED } from '../constants'
import * as errors from '../errors/errors'
import MemoryModel from '../memory/memoryModel'
import { TAG_TO_TYPE, TAGS } from '../memory/tags'
import { Node } from '../parser/types'
import { Builtin } from '../typeChecker/types'
import { Value } from '../types'
import { CallInstruction, Command, Context, Environment } from '../types'
import { builtin_functions } from './defaults'
import { currentEnvironment } from './environment'
import { handleRuntimeError } from './errors'

export const isNumber = (v: Value) => typeof v === 'number'

export function checkNumberOfArguments(
  context: Context,
  command: CallInstruction,
  lambda: Command | Builtin
) {
  console.log(lambda)
  if (lambda.type == 'Closure_i') {
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
  } else if (lambda.type == 'Builtin') {
    if (lambda.hasVarArgs && command.arity - lambda.arity >= 0) {
      return undefined
    } else if (command.arity != lambda.arity) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(command, lambda.arity, command.arity)
      )
    }
    return undefined
  } else {
    return handleRuntimeError(context, new errors.CallingNonFunctionValue(undefined, command))
  }
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

export const apply_builtin = (builtin_symbol: string, args: any[], memory: MemoryModel) => {
  let resolvedArgs = []

  for (const arg of args) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let [memType, addr] = arg
    let [type, value] = memory.mem_read(addr)
    if (memType == TAGS.char_pointer_tag) {
      let s = ''
      s += String.fromCharCode(value)
      addr += 4
      while (
        memory.mem_read(addr)[1] !== 0 &&
        TAG_TO_TYPE[memory.mem_read(addr)[0]] === CHAR_TYPE
      ) {
        ;[type, value] = memory.mem_read(addr)
        s += String.fromCharCode(value)
        addr += 4
      }
      resolvedArgs.push(s)
    } else if (TAG_TO_TYPE[memType] == CHAR_TYPE) {
      resolvedArgs.push(String.fromCharCode(addr))
    } else {
      resolvedArgs.push(addr)
    }
  }

  const nullIndex = resolvedArgs.findIndex(v => v === '\0')
  if (nullIndex != -1) {
    const stringInput = resolvedArgs.slice(nullIndex + 1).join('')
    const parameters = resolvedArgs.slice(0, nullIndex)
    resolvedArgs = [...parameters, stringInput]
  }
  resolvedArgs.reverse()

  builtin_functions[builtin_symbol].apply(...resolvedArgs)
}
