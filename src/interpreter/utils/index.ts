import {
  CallExpression,
  ConditionalExpression,
  Expression,
  ExpressionStatement,
  Identifier,
  LogicalExpression,
  Statement
} from '../../parser/types'
import { Context, Frame, Value } from '../../types'
import { conditionalExpression } from '../../utils/astCreator'
import * as rttc from '../../utils/rttc'
import Closure from '../closure'
import { handleRuntimeError } from '../errors'
import { evaluate } from '../interpreter'

export function checkNumberOfArguments(
  context: Context,
  callee: Closure | Value,
  args: Value[],
  exp: CallExpression
) {
  if (callee instanceof Closure) {
    const params = callee.node.params
    const hasVarArgs = params[params.length - 1]?.type === 'Identifier'
    if (hasVarArgs ? params.length - 1 > args.length : params.length !== args.length) {
      throw new Error('invalid number of args')
      //   return handleRuntimeError(
      //     context,
      //     new errors.InvalidNumberOfArguments(
      //       exp,
      //       hasVarArgs ? params.length - 1 : params.length,
      //       args.length,
      //       hasVarArgs
      //     )
      //   )
    }
  } else {
    const hasVarArgs = callee.minArgsNeeded != undefined
    if (hasVarArgs ? callee.minArgsNeeded > args.length : callee.length !== args.length) {
      throw new Error('invalid number of args')
      //   return handleRuntimeError(
      //     context,
      //     new errors.InvalidNumberOfArguments(
      //       exp,
      //       hasVarArgs ? callee.minArgsNeeded : callee.length,
      //       args.length,
      //       hasVarArgs
      //     )
      //   )
    }
  }
  return undefined
}

//should be block statement
export function scanBlockVariables(nodes: Statement[]): Frame {
  let var_arr: string[] = []
  for (let node of nodes) {
    node = node as ExpressionStatement
    const res = scanVariables(node)
    var_arr = [...var_arr, ...res]
  }
  var_arr = var_arr.filter((item, pos) => var_arr.indexOf(item) === pos)
  return var_arr
}

export function scanVariables(node: Statement | Expression): string[] {
  let arr: any[] = []
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = scanVariables(expr)
      arr = [...arr, ...res]
    }
  } else if (node.type == 'ExpressionStatement') {
    return scanVariables(node.expression)
  } else if (node.type == 'AssignmentExpression') {
    const left = node.left as Identifier
    return [left.name]
  } else if (node.type == 'Identifier') {
    return [node.name]
  }
  return arr
}

export function* reduceIf(
  node: ConditionalExpression,
  context: Context
): IterableIterator<null | Node> {
  const test = evaluate(node.test, context)

  const error = rttc.checkIfStatement(node, test)
  if (error) {
    return handleRuntimeError(context, error)
  }

  return test ? node.consequent : node.alternate
}

export function* getArgs(context: Context, call: CallExpression) {
  const args = []
  for (const arg of call.arguments) {
    args.push(evaluate(arg, context))
  }

  return args
}

export function transformLogicalExpression(node: LogicalExpression): ConditionalExpression {
  if (node.operator === '&&') {
    return conditionalExpression(
      node.left,
      node.right,
      {
        type: 'BinaryExpression',
        operator: '<',
        left: { type: 'Literal', valueType: 'int', value: 1 },
        right: { type: 'Literal', valueType: 'int', value: 0 }
      },
      node.loc!
    )
  } else {
    return conditionalExpression(
      node.left,
      {
        type: 'BinaryExpression',
        operator: '<',
        left: { type: 'Literal', valueType: 'int', value: 0 },
        right: { type: 'Literal', valueType: 'int', value: 1 }
      },
      node.right,
      node.loc!
    )
  }
}
