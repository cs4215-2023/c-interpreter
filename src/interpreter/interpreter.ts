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
import {
  checkNumberOfArguments,
  getArgs,
  reduceIf,
  scanBlockVariables,
  scanVariables,
  transformLogicalExpression
} from './utils'

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
function* forceIt(val: any, context: Context): Value {
  if (val instanceof Thunk) {
    if (val.isMemoized) return val.value
    pushEnvironment(context, val.env)
    const evalRes = yield* actualValue(val.exp, context)
    popEnvironment(context)
    val.value = evalRes
    val.isMemoized = true
    return evalRes
  } else return val
}

export function* actualValue(exp: es.Node, context: Context): Value {
  const evalResult = yield* evaluate(exp, context)
  const forced = yield* forceIt(evalResult, context)
  return forced
}

export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

function* evaluateBlockStatement(context: Context, node: es.BlockStatement) {
  //scan block statement here
  const frame = scanBlockVariables(node.body)
  const env = createBlockEnvironment(context, 'blockEnvironment', frame)
  console.log(currentEnvironment(context))
  pushEnvironment(context, env)
  console.log(currentEnvironment(context))
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
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
  Literal: function* (node: es.Literal, _context: Context) {
    return node.value
  },

  TemplateLiteral: function* (node: es.TemplateLiteral) {
    // Expressions like `${1}` are not allowed, so no processing needed
    return node.quasis[0].value.cooked
  },

  SequenceExpression: function* (node: es.SequenceExpression, context: Context) {
    let result
    for (const expr of node.expressions) {
      if (expr.type === 'SequenceExpression' && expr.expressions.length === 0) { continue }
      result = yield* evaluate(expr, context)
    }
    return result
  },

  ArrayExpression: function* (node: es.ArrayExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  FunctionExpression: function* (node: es.FunctionExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  Identifier: function* (node: es.Identifier, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  CallExpression: function* (node: es.CallExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function* (node: es.UnaryExpression, context: Context) {
    const value = yield* actualValue(node.argument, context)

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateUnaryExpression(node.operator, value)
  },

  BinaryExpression: function* (node: es.BinaryExpression, context: Context) {
    const left = yield* actualValue(node.left, context)
    const right = yield* actualValue(node.right, context)
    console.log("evaluating binaryexpression for " + left + " and " + right)
    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateBinaryExpression(node.operator, left, right)
  },

  //need to verify this once loops are implemented
  ConditionalExpression: function* (node: es.ConditionalExpression, context: Context) {
	yield* this.IfStatement(node, context)
  },

  LogicalExpression: function* (node: es.LogicalExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  VariableDeclaration: function* (node: es.VariableDeclaration, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  ForStatement: function* (node: es.ForStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  AssignmentExpression: function* (node: es.AssignmentExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  FunctionDeclaration: function* (node: es.FunctionDeclaration, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function* (node: es.IfStatement | es.ConditionalExpression, context: Context) {
    const result = yield* reduceIf(node, context)
    if (result === null) {
      return undefined;
    }
    return yield* evaluate(result, context)
  },

  ExpressionStatement: function* (node: es.ExpressionStatement, context: Context) {
    return yield* evaluate(node.expression, context)
  },

  ReturnStatement: function* (node: es.ReturnStatement, context: Context) {
	let returnExpression = node.argument!

    // If we have a conditional expression, reduce it until we get something else
    while (
      returnExpression.type === 'LogicalExpression' ||
      returnExpression.type === 'ConditionalExpression'
    ) {
      if (returnExpression.type === 'LogicalExpression') {
        returnExpression = transformLogicalExpression(returnExpression)
      }
      returnExpression = yield* reduceIf(returnExpression, context)
    }

    // If we are now left with a CallExpression, then we use TCO
    if (returnExpression.type === 'CallExpression') {
      const callee = yield* actualValue(returnExpression.callee, context)
      const args = yield* getArgs(context, returnExpression)
      return new TailCallReturnValue(callee, args, returnExpression)
    } else {
      return new ReturnValue(yield* evaluate(returnExpression, context))
    }
  },

  WhileStatement: function* (node: es.WhileStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  BlockStatement: function* (node: es.BlockStatement, context: Context) {

	const environment = createBlockEnvironment(context, 'blockEnvironment')
    pushEnvironment(context, environment)
    const result: Value = yield* evaluateBlockStatement(context, node)
    popEnvironment(context)
    return result
  },

  Program: function* (node: es.BlockStatement, context: Context) {
    //create new environment in program
    console.log(currentEnvironment(context)) //this is a null env
    const environment = createBlockEnvironment(context, 'globalEnvironment');
    pushEnvironment(context, environment);
    console.log(currentEnvironment(context)) //this is the 'global' env
    const result = yield* evaluateBlockStatement(context, node)
    return result;
  }
}
// tslint:enable:object-literal-shorthand

export function* evaluate(node: es.Node, context: Context) {
  const result = yield* evaluators[node.type](node, context)
  yield* leave(context)
  return result
}

function* visit(context: Context, node: es.Node) {
  context.runtime.nodes.unshift(node)
  yield context
}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}

export function* apply(
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
      result = yield* evaluateBlockStatement(context, fun.node.body as es.BlockStatement)
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
            finalArgs.push(yield* forceIt(arg, context))
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
          forcedArgs.push(yield* forceIt(arg, context))
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
