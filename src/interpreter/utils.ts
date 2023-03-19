import * as errors from '../errors/errors'
import {
  CallExpression,
  Expression,
  ExpressionStatement,
  Identifier,
  Statement
} from '../parser/types'
import { Context, Environment, Frame, Value } from '../types'
import Closure from './closure'
import { currentEnvironment } from './environment'
import { handleRuntimeError } from './errors'

export function checkNumberOfArguments(
  context: Context,
  callee: Closure | Value,
  args: Value[],
  exp: CallExpression
) {
  if (callee instanceof Closure) {
    const params = callee.node.params
    const hasVarArgs = params[params.length - 1]?.type === 'RestElement'
    if (hasVarArgs ? params.length - 1 > args.length : params.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(
          exp,
          hasVarArgs ? params.length - 1 : params.length,
          args.length,
          hasVarArgs
        )
      )
    }
  } else {
    const hasVarArgs = callee.minArgsNeeded != undefined
    if (hasVarArgs ? callee.minArgsNeeded > args.length : callee.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(
          exp,
          hasVarArgs ? callee.minArgsNeeded : callee.length,
          args.length,
          hasVarArgs
        )
      )
    }
  }
  return undefined
}

//should be block statement
export function scanBlockVariables(nodes: Statement[]): Frame {
  let var_arr = {}
  for (let node of nodes) {
    node = node as ExpressionStatement
    const res = scanVariables(node)
    var_arr = { ...var_arr, ...res }
  }
  // var_arr = var_arr.filter((item, pos) => var_arr.indexOf(item) === pos)
  console.log(var_arr)
  return var_arr
}

export function scanVariables(node: Statement | Expression): Frame {
  let arr = {}
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = scanVariables(expr)
      arr = { ...arr, ...res }
    }
  } else if (node.type == 'ExpressionStatement') {
    return scanVariables(node.expression)
  } else if (node.type == 'AssignmentExpression') {
    const left = node.left as Identifier
    arr[left.name] = undefined
  } else if (node.type == 'Identifier') {
    arr[node.name] = undefined
  }
  return arr
}

/* 
Gets a variable from the environment based on the name.
*/
export const getValueFromIdentifier = (context: Context, name: string) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      console.log(environment.head)
      return environment.head[name]
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export const setValueToIdentifier = (context: Context, name: string, value: any) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      const descriptors = Object.getOwnPropertyDescriptors(environment.head)
      if (descriptors[name].writable) {
        environment.head[name] = value
        return value
      }
      return handleRuntimeError(
        context,
        new errors.ConstAssignment(context.runtime.nodes[0]!, name)
      )
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}
