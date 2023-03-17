import * as es from 'estree'

import * as errors from '../../errors/errors'
import { Context, Frame, Value } from '../../types'
import { conditionalExpression, literal } from '../../utils/astCreator'
import * as rttc from '../../utils/rttc'
import Closure from '../closure'
import { handleRuntimeError } from '../errors'
import { actualValue } from '../interpreter'

export function checkNumberOfArguments(
  context: Context,
  callee: Closure | Value,
  args: Value[],
  exp: es.CallExpression
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
export function scanBlockVariables(nodes: es.Statement[]): Frame {
  let var_arr: string[] = []
  for (let node of nodes) {
    node = node as es.ExpressionStatement
    const res = scanVariables(node)
    var_arr = [...var_arr, ...res]
  }
  var_arr = var_arr.filter((item, pos) => var_arr.indexOf(item) === pos)
  return var_arr
}

export function scanVariables(node: es.Statement | es.Expression): string[] {
  let arr: any[] = []
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = scanVariables(expr)
      arr = [...arr, ...res]
    }
  } else if (node.type == 'ExpressionStatement') {
    return scanVariables(node.expression)
  } else if (node.type == 'AssignmentExpression') {
    const left = node.left as es.Identifier
    return [left.name]
  } else if (node.type == 'Identifier') {
    return [node.name]
  }
  return arr
}

export function* reduceIf(
  node: es.IfStatement | es.ConditionalExpression,
  context: Context
): IterableIterator<null | es.Node> {
  const test = yield* actualValue(node.test, context)

  const error = rttc.checkIfStatement(node, test)
  if (error) {
    return handleRuntimeError(context, error)
  }

  return test ? node.consequent : node.alternate
}

export function transformLogicalExpression(node: es.LogicalExpression): es.ConditionalExpression {
  if (node.operator === '&&') {
    return conditionalExpression(node.left, node.right, literal(false), node.loc!)
  } else {
    return conditionalExpression(node.left, literal(true), node.right, node.loc!)
  }
}

export function* getArgs(context: Context, call: es.CallExpression) {
  const args = []
  for (const arg of call.arguments) {
    args.push(yield* actualValue(arg, context))
  }

  return args
}
