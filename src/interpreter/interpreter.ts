import * as constants from '../constants'
import { LazyBuiltIn } from '../createContext'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Node } from '../parser/types'
import { Context, Result, Value } from '../types'
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
import { handleRuntimeError } from './errors'
import { checkNumberOfArguments, getArgs, reduceIf, transformLogicalExpression } from './utils'

// class ReturnValue {
//   constructor(public value: Value) {}
// }

// class TailCallReturnValue {
//   constructor(public callee: Closure, public args: Value[], public node: es.CallExpression) {}
// }

export type Evaluator = (node: Node, context: Context) => IterableIterator<Value>

// function* evaluateBlockStatement(context: Context, node: es.BlockStatement) {
//   //scan block statement here
//   const frame = scanBlockVariables(node.body)
//   const env = createBlockEnvironment(context, 'blockEnvironment', frame)
//   console.log(currentEnvironment(context))
//   pushEnvironment(context, env)
//   console.log(currentEnvironment(context))
//   let result
//   for (const statement of node.body) {
//     result = yield* evaluate(statement, context)
//   }
//   return result
// }

export const evaluators: { [nodeType: string]: Evaluator } = {
  /** Simple Values */
  Literal: function* (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw new Error('Not a literal type')
    }
    return {
      value: node.value,
      type: node.valueType
    }
  },

  SequenceExpression: function* (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw new Error('Not a sequence expression')
    }
    let result
    for (const expr of node.expressions) {
      if (expr.type === 'SequenceExpression' && expr.expressions.length === 0) {
        continue
      }
      result = evaluate(expr, context)
    }
    return result
  },

  ArrayExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  FunctionExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  Identifier: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  CallExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'UnaryExpression') {
      throw new Error('not a unary expression')
    }
    const value = evaluate(node.argument, context)

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateUnaryExpression(node.operator, value)
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw new Error('not a binary expression')
    }
    const left = evaluate(node.left, context)
    const right = evaluate(node.right, context)
    console.log('evaluating binaryexpression for ' + left + ' and ' + right)
    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateBinaryExpression(node.operator, left, right)
  },

  //need to verify this once loops are implemented
  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type !== 'ConditionalExpression') {
      return new Error('not conditional exp')
    }
    const test = evaluate(node.test, context)
    return test.next() ? evaluate(node.consequent, context) : evaluate(node.alternate, context)
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw new Error('not a logical expression')
    }

    const left = evaluate(node.left, context)
    const right = evaluate(node.right, context)
    if (rttc.checkIfStatement(node, left) && rttc.checkIfStatement(node, right)) {
      return evaluateLogicalExpression(node.operator, left, right)
    }
    throw new Error('error')
  },

  VariableDeclaration: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  ForStatement: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  AssignmentExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  FunctionDeclaration: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type == 'ExpressionStatement') {
      return evaluate(node.expression, context)
    }
    throw new Error('not an expression statement')
  },

  ReturnStatement: function* (node: Node, context: Context) {
    if (node.type == 'ReturnStatement') {
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
    }
  },

  WhileStatement: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  BlockStatement: function* (node: Node, context: Context) {
    const environment = createBlockEnvironment(context, 'blockEnvironment')
    pushEnvironment(context, environment)
    const result: Value = yield* evaluateBlockStatement(context, node)
    popEnvironment(context)
    return result
  },

  Program: function* (node: Node, context: Context) {
    //create new environment in program
    console.log(currentEnvironment(context)) //this is a null env
    const environment = createBlockEnvironment(context, 'globalEnvironment')
    pushEnvironment(context, environment)
    console.log(currentEnvironment(context)) //this is the 'global' env
    const result = yield* evaluateBlockStatement(context, node)
    return result
  }
}
// tslint:enable:object-literal-shorthand

export function* evaluate(node: Node, context: Context): IterableIterator<Value> {
  visit(context, node)
  const evaluator = evaluators[node.type]
  if (!evaluator) {
    throw new Error('evaluator error')
  }
  const result = evaluator(node, context)
  leave(context)
  return result
}

function visit(context: Context, node: Node) {
  context.runtime.nodes.unshift(node)
}

function leave(context: Context) {
  context.runtime.nodes.shift()
}

export function* apply(
  context: Context,
  fun: Closure | Value,
  args: Value[],
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
