/* tslint:disable:max-classes-per-file */
import * as es from 'estree'

import * as constants from '../constants'
import { LazyBuiltIn } from '../createContext'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Context, Environment, Value } from '../types'
import { evaluateBinaryExpression, evaluateUnaryExpression } from '../utils/operators'
import * as rttc from '../utils/rttc'
import Closure from './closure'
import {
  createBlockEnvironment,
  createEnvironment,
  currentEnvironment,
  popEnvironment,
  pushEnvironment,
  replaceEnvironment
} from './environment'
import { handleRuntimeError } from './errors'
import { checkNumberOfArguments, scanBlockVariables, scanVariables } from './utils'

class ReturnValue {
  constructor(public value: Value) {}
}

class TailCallReturnValue {
  constructor(public callee: Closure, public args: Value[], public node: es.CallExpression) {}
}

class Thunk {
  public value: Value
  public isMemoized: boolean
  constructor(public exp: es.Node, public env: Environment) {
    this.isMemoized = false
    this.value = null
  }
}

//not a needed function atm
function forceIt(val: any, context: Context): Value {
  if (val instanceof Thunk) {
    if (val.isMemoized) return val.value
    pushEnvironment(context, val.env)
    const evalRes = actualValue(val.exp, context)
    popEnvironment(context)
    val.value = evalRes
    val.isMemoized = true
    return evalRes
  } else return val
}

export function actualValue(exp: es.Node, context: Context): Value {
  const evalResult =  evaluate(exp, context)
  const forced = forceIt(evalResult, context)
  return forced
}

export type Evaluator<T extends es.Node> = (node: T, context: Context) => Value

function evaluateBlockStatement(context: Context, node: es.BlockStatement) {
  //scan block statement here
  const frame = scanBlockVariables(node.body)
  const env = createBlockEnvironment(context, 'blockEnvironment', frame)
  console.log(currentEnvironment(context))
  pushEnvironment(context, env)
  console.log(currentEnvironment(context))
  let result
  for (const statement of node.body) {
    result =   evaluate(statement, context)
  }
  return result
}

/**
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
// tslint:disable:object-literal-shorthand
// prettier-ignore
export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
  /** Simple Values */
  Literal: function (node: es.Literal, _context: Context) {
    return node.value
  },

  TemplateLiteral: function (node: es.TemplateLiteral) {
    // Expressions like `${1}` are not allowed, so no processing needed
    return node.quasis[0].value.cooked
  },

  SequenceExpression: function (node: es.SequenceExpression, context: Context) {
    let result
    for (const expr of node.expressions) {
      if (expr.type === 'SequenceExpression' && expr.expressions.length === 0) { continue }
      result =  evaluate(expr, context)
    }
    return result
  },

  ArrayExpression: function (node: es.ArrayExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  FunctionExpression: function (node: es.FunctionExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  Identifier: function (node: es.Identifier, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  CallExpression: function (node: es.CallExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function (node: es.UnaryExpression, context: Context) {
    const value =   actualValue(node.argument, context)

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateUnaryExpression(node.operator, value)
  },

  BinaryExpression: function (node: es.BinaryExpression, context: Context) {
    const left =   actualValue(node.left, context)
    const right =   actualValue(node.right, context)
    console.log("evaluating binaryexpression for " + left + " and " + right)
    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateBinaryExpression(node.operator, left, right)
  },

  //need to verify this once loops are implemented
  ConditionalExpression: function (node: es.ConditionalExpression, context: Context) {
    const result = evaluate(node.test, context)
    if (result) {
      const frame = scanVariables(node.consequent)
      const env = createBlockEnvironment(context, 'blockEnvironment', frame)
      console.log(currentEnvironment(context))
      pushEnvironment(context, env)
      console.log(currentEnvironment(context))
      return evaluate(node.consequent, context)
    }
    else {
      const frame = scanVariables(node.alternate)
      const env = createBlockEnvironment(context, 'blockEnvironment', frame)
      console.log(currentEnvironment(context))
      pushEnvironment(context, env)
      console.log(currentEnvironment(context))
      return evaluate(node.alternate, context)
    }
  },

  LogicalExpression: function (node: es.LogicalExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  VariableDeclaration: function (node: es.VariableDeclaration, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  ForStatement: function (node: es.ForStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  AssignmentExpression: function (node: es.AssignmentExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  FunctionDeclaration: function (node: es.FunctionDeclaration, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function (node: es.IfStatement | es.ConditionalExpression, context: Context) {
    const result = evaluate(node.test, context)
    if (result) {
      const cons = node.consequent as es.BlockStatement
      const frame = scanBlockVariables(cons.body)
      const env = createBlockEnvironment(context, 'ifEnvironment', frame)
      pushEnvironment(context, env)
      console.log(currentEnvironment(context))
      return evaluate(node.consequent, context)
    }
    else {
      if (node.alternate == null || node.alternate == undefined) { return undefined }
      else {
        const alt = node.alternate as es.BlockStatement
        const frame = scanBlockVariables(alt.body)
        const env = createBlockEnvironment(context, 'elseEnvironment', frame)
        pushEnvironment(context, env)
        console.log(currentEnvironment(context))
        return evaluate(node.alternate, context)
      }
    }
  },

  ExpressionStatement: function (node: es.ExpressionStatement, context: Context) {
    return   evaluate(node.expression, context)
  },

  ReturnStatement: function (node: es.ReturnStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  WhileStatement: function (node: es.WhileStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  BlockStatement: function (node: es.BlockStatement, context: Context) {

    throw new Error(`not supported yet: ${node.type}`)
  },

  Program: function (node: es.BlockStatement, context: Context) {
    //create new environment in program
    console.log(currentEnvironment(context)) //this is a null env
    const environment = createBlockEnvironment(context, 'globalEnvironment');
    pushEnvironment(context, environment);
    console.log(currentEnvironment(context)) //this is the 'global' env
    const result =   evaluateBlockStatement(context, node)
    return result;
  }
}
// tslint:enable:object-literal-shorthand

export function evaluate(node: es.Node, context: Context) {
  const result =   evaluators[node.type](node, context)
    leave(context)
  return result
}

function visit(context: Context, node: es.Node) {
  context.runtime.nodes.unshift(node)
}

function leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
}

export function apply(
  context: Context,
  fun: Closure | Value,
  args: (Thunk | Value)[],
  node: es.CallExpression,
  thisContext?: Value
) {
  let result: Value
  let total = 0

  while (!(result instanceof ReturnValue)) {
    if (fun instanceof Closure) {
      checkNumberOfArguments(context, fun, args, node!)
      const environment = createEnvironment(fun, args, node)
      if (result instanceof TailCallReturnValue) {
        replaceEnvironment(context, environment)
      } else {
        pushEnvironment(context, environment)
        total++
      }
      const bodyEnvironment = createBlockEnvironment(context, 'functionBodyEnvironment')
      bodyEnvironment.thisContext = thisContext
      pushEnvironment(context, bodyEnvironment)
      result =   evaluateBlockStatement(context, fun.node.body as es.BlockStatement)
      popEnvironment(context)
      if (result instanceof TailCallReturnValue) {
        fun = result.callee
        node = result.node
        args = result.args
      } else if (!(result instanceof ReturnValue)) {
        // No Return Value, set it as undefined
        result = new ReturnValue(undefined)
      }
    } else if (fun instanceof LazyBuiltIn) {
      try {
        let finalArgs = args
        if (fun.evaluateArgs) {
          finalArgs = []
          for (const arg of args) {
            finalArgs.push(  forceIt(arg, context))
          }
        }
        result = fun.func.apply(thisContext, finalArgs)
        break
      } catch (e) {
        // Recover from exception
        context.runtime.environments = context.runtime.environments.slice(
          -context.numberOfOuterEnvironments
        )

        const loc = node ? node.loc! : constants.UNKNOWN_LOCATION
        if (!(e instanceof RuntimeSourceError || e instanceof errors.ExceptionError)) {
          // The error could've arisen when the builtin called a source function which errored.
          // If the cause was a source error, we don't want to include the error.
          // However if the error came from the builtin itself, we need to handle it.
          return handleRuntimeError(context, new errors.ExceptionError(e, loc))
        }
        result = undefined
        throw e
      }
    } else if (typeof fun === 'function') {
      checkNumberOfArguments(context, fun, args, node!)
      try {
        const forcedArgs = []

        for (const arg of args) {
          forcedArgs.push(  forceIt(arg, context))
        }

        result = fun.apply(thisContext, forcedArgs)
        break
      } catch (e) {
        // Recover from exception
        context.runtime.environments = context.runtime.environments.slice(
          -context.numberOfOuterEnvironments
        )

        const loc = node ? node.loc! : constants.UNKNOWN_LOCATION
        if (!(e instanceof RuntimeSourceError || e instanceof errors.ExceptionError)) {
          // The error could've arisen when the builtin called a source function which errored.
          // If the cause was a source error, we don't want to include the error.
          // However if the error came from the builtin itself, we need to handle it.
          return handleRuntimeError(context, new errors.ExceptionError(e, loc))
        }
        result = undefined
        throw e
      }
    } else {
      return handleRuntimeError(context, new errors.CallingNonFunctionValue(fun, node))
    }
  }
  // Unwraps return value and release stack environment
  if (result instanceof ReturnValue) {
    result = result.value
  }
  for (let i = 1; i <= total; i++) {
    popEnvironment(context)
  }
  return result
}
