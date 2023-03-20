/* tslint:disable:max-classes-per-file */
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { BlockStatement, CallExpression, Identifier, Node } from '../parser/types'
import { Context, Value } from '../types'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from '../utils/operators'
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
import { DivisionByZeroError, handleRuntimeError } from './errors'
import {
  checkNumberOfArguments,
  getIdentifierFromEnvironment,
  scanFrameVariables,
  setValueToIdentifier
} from './utils'

class ReturnValue {
  constructor(public value: Value) {}
}

class TailCallReturnValue {
  constructor(public callee: Closure, public args: Value[], public node: CallExpression) {}
}

export function* actualValue(exp: Node, context: Context): Value {
  const evalResult = yield* evaluate(exp, context)
  return evalResult
}

export type Evaluator<T extends Node> = (node: T, context: Context) => IterableIterator<Value>

function* evaluateBlockStatement(context: Context, node: Node) {
  if (node.type != 'BlockStatement') {
    throw new Error('Not evaluating block statement')
  }
  //scan block statement here
  const frame = scanFrameVariables(node.body)
  console.log(frame)
  const env = createBlockEnvironment(context, 'blockEnvironment', frame)
  pushEnvironment(context, env)
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
  }
  return result
}

/**
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node:  Literal, ...) {...},
 *     *ThisExpression(node:  ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
// tslint:disable:object-literal-shorthand
// prettier-ignore
export const evaluators: { [nodeType: string]: Evaluator< Node> } = {
  /** Simple Values */
  Literal: function* (node:  Node, _context: Context) {
	if (node.type != 'Literal') {
		throw new Error('Not literal')
	}
    return node.value
  },

  SequenceExpression: function* (node:  Node, context: Context) {
	if (node.type != 'SequenceExpression') {
		throw new Error('Not sequence expression')
	}
    let result
    for (const expr of node.expressions) {
      if (expr.type === 'SequenceExpression' && expr.expressions.length === 0) { continue }
      result = yield* evaluate(expr, context)
    }
    return result
  },

  ArrayExpression: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  FunctionExpression: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  Identifier: function* (node:  Node, context: Context) {
	if (node.type != 'Identifier') {
		throw new Error('Not identifier')
	}
    const identifier = getIdentifierFromEnvironment(context, node.name)
    return identifier
  },

  CallExpression: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function* (node:  Node, context: Context) {
	if (node.type != 'UnaryExpression') {
		throw new Error('Not unary expression')
	}
    const value = yield* actualValue(node.argument, context)

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
	if (node.operator == '&' || node.operator == '*') {
		throw new Error('Pointer not implemented yet')
	}
    return evaluateUnaryExpression(node.operator, value)
  },

  BinaryExpression: function* (node:  Node, context: Context) {
	if (node.type != 'BinaryExpression') {
		throw new Error('Not binary expression')
	}
    const left =yield* actualValue(node.left, context)
    const right = yield*actualValue(node.right, context)
    console.log("evaluating binaryexpression for " + left + " and " + right)
    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    if (node.operator === '/' && right === 0) {
      return handleRuntimeError(context, new DivisionByZeroError(node));
    }
    return evaluateBinaryExpression(node.operator, left, right)
  },

  //need to verify this once loops are implemented
  ConditionalExpression: function* (node:  Node, context: Context) {
	if (node.type != 'ConditionalExpression') {
		throw new Error('Not conditional expression')
	}
    const result = yield*evaluate(node.test, context)
    //not sure if pushenv is needed here, depending on the definition of conditional expr
    if (result) {
      return yield*evaluate(node.consequent, context)
    }
    else {
      return yield*evaluate(node.alternate, context)
    }
  },

  LogicalExpression: function* (node:  Node, context: Context) {
	if (node.type != 'LogicalExpression') {
		throw new Error('Not logical expression')
	}
	const left =yield* actualValue(node.left, context)
    const right = yield*actualValue(node.right, context)
    console.log("evaluating logicalexpression for " + left + " and " + right)

    return evaluateLogicalExpression(node.operator, left, right)
  },

  ForStatement: function* (node:  Node, context: Context) {
	throw new Error(`not supported yet: ${node.type}`)
  },


  AssignmentExpression: function* (node: Node , context: Context) {
	if (node.type != 'AssignmentExpression') {
		throw new Error('Not assignment expression')
	}

    const id = node.left as Identifier
    const value = yield*evaluate(node.right, context)
    setValueToIdentifier(context, id.name, value)
    return value;
  },

  FunctionDeclaration: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function* (node: Node, context: Context) {
	if (node.type != 'IfStatement') {
		throw new Error('Not if statement')
	}
    const result =yield* evaluate(node.test, context)
    if (result) {
      const consequent = node.consequent as  BlockStatement
      return yield*evaluate(consequent, context)
    }
    else {
      if (node.alternate == null || node.alternate == undefined) { return undefined }
      else {
        const alternate = node.alternate as  BlockStatement
        return yield*evaluate(alternate, context)
      }
    }
  },

  ExpressionStatement: function* (node:  Node, context: Context) {
	if (node.type != 'ExpressionStatement') {
		throw new Error('Not expression statement')
	}
    return yield*evaluate(node.expression, context)
  },

  ReturnStatement: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  WhileStatement: function* (node:  Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  BlockStatement: function* (node:  Node, context: Context) {
    return yield*evaluateBlockStatement(context, node)
  },

  Program: function* (node:  Node, context: Context) {
	if (node.type !== 'Program') {
		return handleRuntimeError(context, new RuntimeSourceError(node));
	}

    // Create global environment 
    console.log(currentEnvironment(context)) //this is a null env
    context.numberOfOuterEnvironments += 1;
    const environment = createBlockEnvironment(context, 'globalEnvironment');
    pushEnvironment(context, environment);
    console.log(currentEnvironment(context)) //this is the 'global' env

	
	// Create local environment
	// TODO: create a frame update instead of scanning all the variables at one shot in the beginning
	const frame = scanFrameVariables(node.body)
	console.log(frame)
	const env = createBlockEnvironment(context, 'localEnvironment', frame)
	context.numberOfOuterEnvironments += 1;
	pushEnvironment(context, env)
	let result
	for (const statement of node.body) {
	  result = yield* evaluate(statement, context)
	}
	return result
  }
}
// tslint:enable:object-literal-shorthand

export function* evaluate(node: Node, context: Context) {
  const result = yield* evaluators[node.type](node, context)
  yield* leave(context)
  return result
}

function* visit(context: Context, node: Node) {
  context.runtime.nodes.unshift(node)
  yield context
}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}

export function apply(
  context: Context,
  fun: Closure | Value,
  args: Value[],
  node: CallExpression,
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
      result = evaluateBlockStatement(context, fun.node.body as BlockStatement)
      popEnvironment(context)
      if (result instanceof TailCallReturnValue) {
        fun = result.callee
        node = result.node
        args = result.args
      } else if (!(result instanceof ReturnValue)) {
        // No Return Value, set it as undefined
        result = new ReturnValue(undefined)
      }
    } else if (typeof fun === 'function') {
      checkNumberOfArguments(context, fun, args, node!)
      try {
        const forcedArgs = []

        for (const arg of args) {
          forcedArgs.push(arg)
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
