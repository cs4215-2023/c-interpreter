import * as errors from '../errors/errors'
import {
  CallExpression,
  Expression,
  ExpressionStatement,
  Identifier,
  Node,
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
    if (params.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(exp, params.length, args.length)
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

export function scanFrameVariables(nodes: Statement[]): Frame {
  let var_arr = {}
  for (let node of nodes) {
    node = node as ExpressionStatement
    const res = makeVariableDeclarations(node)
    var_arr = { ...var_arr, ...res }
  }
  // var_arr = var_arr.filter((item, pos) => var_arr.indexOf(item) === pos)
  console.log(var_arr)
  return var_arr
}

// TODO: Add identifier type to type environment
export function makeVariableDeclarations(node: Statement | Expression): Frame {
  let arr = {}
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = makeVariableDeclarations(expr)
      arr = { ...arr, ...res }
    }
  } else if (node.type == 'ExpressionStatement') {
    return makeVariableDeclarations(node.expression)
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
export const getIdentifierFromEnvironment = (context: Context, name: string) => {
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
      environment.head[name] = value
      return value
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}
