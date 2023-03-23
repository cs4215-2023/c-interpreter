/* tslint:disable:max-classes-per-file */
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { BlockStatement, CallExpression, Identifier, Node, Statement } from '../parser/types'
import { Command, Context, Value } from '../types'
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
  createBlockTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import {
  checkNumberOfArguments,
  declareIdentifier,
  getIdentifierValueFromEnvironment,
  getVariable,
  scanFrameVariables,
  setValueToIdentifier
} from './utils'

class ReturnValue {
  constructor(public value: Value) {}
}

class TailCallReturnValue {
  constructor(public callee: Closure, public args: Value[], public node: CallExpression) {}
}

export type Evaluator<T extends Node> = (node: T, context: Context) => IterableIterator<Value>

function* evaluateBlockStatement(context: Context, node: Node) {
  if (node.type != 'BlockStatement') {
    throw new Error('Not evaluating block statement')
  }
  //scan block statement here
  //   const [varFrame, typeFrame] = scanFrameVariables(node.body)
  const env = createBlockEnvironment(context, 'blockEnvironment')
  const typeEnv = createBlockTypeEnvironment(context, 'blockEnvironment')

  pushEnvironment(context, env)
  pushTypeEnvironment(context, typeEnv)
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
  }
  console.log(result)
  popEnvironment(context)
  popTypeEnvironment(context)
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
export const evaluators: { [nodeType: string]: Evaluator<Node> } = {
	// expressions and statements
  Literal: function* (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw new Error('Not literal')
    }

	context.runtime.stash.push(node.value)
  },

  SequenceExpression: function* (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw new Error('Not sequence expression')
    }
	
	node.expressions.reverse()
	context.runtime.agenda.push(...node.expressions)
	
    // let result
    // for (const expr of node.expressions) {
    //   if (expr.type === 'SequenceExpression' && expr.expressions.length === 0) { continue }
    //   result = yield* evaluate(expr, context)
    // }
    // return result
  },

  // TODO
  ArrayExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  // TODO
  FunctionExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  VariableDeclarationExpression: function* (node: Node, context: Context) {
    if (node.type != 'VariableDeclarationExpression') {
      throw new Error('not var declaration')
    }
	const identifier = node.identifier as Identifier
	declareIdentifier(context, identifier.name, node)
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw new Error('Not identifier')
    }
    const identifier = getVariable(context, node.name)
	context.runtime.stash.push(identifier)
  },

  // TODO
  CallExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'UnaryExpression') {
      throw new Error('Not unary expression')
    }

    if (node.operator == '&' || node.operator == '*') {
      throw new Error('Pointer not implemented yet')
    }

	context.runtime.agenda.push({type: 'UnaryExpression_i', operator: node.operator}, node.argument)
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw new Error('Not binary expression')
    }

	context.runtime.agenda.push( {type: 'BinaryExpression_i', operator: node.operator}, node.right, node.left)
  },

  //need to verify this once loops are implemented
  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw new Error('Not conditional expression')
    }

	context.runtime.agenda.push({type: 'ConditionalExpression_i', consequent: node.consequent, alternate: node.alternate}, node.test)
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw new Error('Not logical expression')
    }
    // const left = yield* evaluate(node.left, context)
    // const right = yield* evaluate(node.right, context)

    // return evaluateLogicalExpression(node.operator, left, right)
	context.runtime.agenda.push({type: 'LogicalExpression_i', operator: node.operator}, node.right, node.left)
  },

  // TODO
  ForStatement: function* (node: Node, context: Context) {
    if (node.type != 'ForStatement') {
      throw new Error('Not for loop')
    }
    const loopVariableEnvironment = createBlockEnvironment(context, 'forLoopEnvironment')
	const loopTypeEnvironment = createBlockTypeEnvironment(context, 'forLoopTypeEnvironment')
    pushEnvironment(context, loopVariableEnvironment)
	pushTypeEnvironment(context, loopTypeEnvironment)

    const init = node.init
	const test = node.test
	const update = node.update
    yield* evaluate(init, context)

	let value
	while (yield *evaluate(test, context)) {
		value = yield* evaluate(node.body, context)
		yield* evaluate(update, context)
	}
	return value
	
  },

  AssignmentExpression: function* (node: Node, context: Context) {
    if (node.type != 'AssignmentExpression') {
      throw new Error('Not assignment expression')
    }

	context.runtime.agenda.push( {type: 'AssignmentExpression_i', operator: node.operator}, node.left, node.right)

    // let id = node.left as Identifier
    // if (node.left.type == 'VariableDeclarationExpression') {
    //   yield* evaluate(node.left, context)
    //   id = node.left.identifier
    // }
    // const value = yield* evaluate(node.right, context)
    // setValueToIdentifier(context, id.name, value)
    // return value;
  },

  // TODO
  UpdateExpression: function* (node: Node, context: Context) {
	if (node.type != 'UpdateExpression') {
		throw new Error('Not update expression')
	}

	const identifier = node.argument as Identifier

	let value = getIdentifierValueFromEnvironment(context, identifier.name)
	if (node.operator == '++') {
		value += 1
	} else {
		value -= 1
	}

	setValueToIdentifier(context, identifier.name, value)
  return value
  },

  // TODO
  FunctionDeclaration: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function* (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw new Error('Not if statement')
    }
	context.runtime.agenda.push({type: 'IfStatement_i', consequent: node.consequent, alternate: node.alternate}, node.test)
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw new Error('Not expression statement')
    }
    context.runtime.agenda.push(node.expression)
  },

  ReturnStatement: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw new Error('Not for loop')
    }
    // const loopVariableEnvironment = createBlockEnvironment(context, 'whileLoopEnvironment')
    // const loopTypeEnvironment = createBlockTypeEnvironment(context, 'whileLoopTypeEnvironment')
    // pushEnvironment(context, loopVariableEnvironment)
    // pushTypeEnvironment(context, loopTypeEnvironment)

    // const test = node.test
    // let value
    // while (yield *evaluate(test, context)) {
    //   value = yield* evaluate(node.body, context)
    //   console.log(value)
    // }
    // return value
	context.runtime.agenda.push({tag: 'lit', val: undefined},
            {type: 'WhileStatement_i', test: node.test, body: node.body},
            node.test)
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new RuntimeSourceError(node));
    }

    // const loopVariableEnvironment = createBlockEnvironment(context, 'doWhileLoopEnvironment')
    // const loopTypeEnvironment = createBlockTypeEnvironment(context, 'doWhileLoopTypeEnvironment')
    // pushEnvironment(context, loopVariableEnvironment)
    // pushTypeEnvironment(context, loopTypeEnvironment)

    // // perform statements in do first
    // let value
    // value = yield* evaluate(node.body, context)
    
    // const test = node.test
    // while (yield *evaluate(test, context)) {
    //   value = yield* evaluate(node.body, context)
    // }
    // return value
	context.runtime.agenda.push({tag: 'lit', val: undefined},
	{type: 'DoWhileStatement_i', test: node.test, body: node.body},
	node.body)
  },


  BlockStatement: function* (node: Node, context: Context) {
	if (node.type != 'BlockStatement') {
		throw new Error('Not evaluating block statement')
	  }

	const A = context.runtime.agenda
	const E = context.runtime.environments

    const [varFrame, typeFrame] = scanFrameVariables(node.body)
    const env = createBlockEnvironment(context, 'localEnvironment', varFrame)
    const typeEnv = createBlockTypeEnvironment(context, 'localTypeEnvironment', typeFrame)

    if (! (A.length() === 0)) {
		A.push({tag: 'env_i', env: E})
	}

	// reverse the order
	node.body.reverse()
    A.push(...node.body)

	context.numberOfOuterEnvironments += 1;
    pushEnvironment(context, env)
    pushTypeEnvironment(context, typeEnv)

        
  },

  Program: function* (node: Node, context: Context) {
    if (node.type !== 'Program') {
      throw handleRuntimeError(context, new RuntimeSourceError(node));
    }

    // Create global environment 
    context.numberOfOuterEnvironments += 1;
    const environment = createBlockEnvironment(context, 'globalEnvironment');
    const type_env = createBlockTypeEnvironment(context, 'globalTypeEnvironment');
    pushEnvironment(context, environment);
    pushTypeEnvironment(context, type_env)


    // Create local environment
    const env = createBlockEnvironment(context, 'localEnvironment')
    const typeEnv = createBlockTypeEnvironment(context, 'localTypeEnvironment')
    context.numberOfOuterEnvironments += 1;
    pushEnvironment(context, env)
    pushTypeEnvironment(context, typeEnv)
	
	// reverse the order
	node.body.reverse()
	context.runtime.agenda.push(...node.body)
  },

  // INSTRUCTIONS

  BinaryExpression_i: function* (command: Command, context: Context) {
	if (command.type != 'BinaryExpression_i') {
		throw new Error('not instruction')
	}
	const stash = context.runtime.stash
    const left = stash.pop()
    const right = stash.pop()
	const operator = command.operator

	// TODO: error handling with rttc
    if (operator === '/' && right === 0) {
      throw new Error('division by 0');
    }

	const result = evaluateBinaryExpression(operator, left, right)
    stash.push(result)
  },

  UnaryExpression_i: function* (command: Command, context: Context) {
	if (command.type != 'UnaryExpression_i') {
		throw new Error('Not unary expression instruction')
	  }

	  const stash = context.runtime.stash
	  const operator = command.operator
	  const value = stash.pop()

	  // TODO: error handling with rttc
	  if (operator == '&' || operator  == '*') {
		throw new Error('Pointer not implemented yet')
	  }

	  stash.push(evaluateUnaryExpression(operator, value))
  },

  ConditionalExpression_i: function* (command: Command, context: Context) {
	if (command.type != 'ConditionalExpression_i') {
		throw new Error('Not conditional expression instruction')
	  }
	
	const stash = context.runtime.stash
	const agenda = context.runtime.agenda

	agenda.push(stash.pop() ? command.consequent : command.alternate)
  },

  IfStatement_i: function* (command: Command, context: Context) {
	if (command.type != 'IfStatement_i') {
		throw new Error('Not conditional expression instruction')
	  }
	
	const stash = context.runtime.stash
	const agenda = context.runtime.agenda

	agenda.push(stash.pop() ? command.consequent : command.alternate)
  },

  WhileStatement_i: function* (command: Command, context: Context) {
	if (command.type != 'WhileStatement_i') {
		throw new Error('Not while statement instruction')
	  }
	
	const stash = context.runtime.stash
	const agenda = context.runtime.agenda

	if (stash.pop()) {
		agenda.push(command, command.test, {type: 'Pop_i'}, command.body)
	}
  },

  Pop_i: function* (command: Command, context: Context) {
	if (command.type != 'Pop_i') {
		throw new Error('Not pop instruction')
	  }
	
	const stash = context.runtime.stash
	stash.pop()
  },


}

// tslint:enable:object-literal-shorthand

export function* evaluate(node: Node, context: Context) {
  // compile the program to instructions
  yield* evaluators[node.type](node, context)
  const agenda = context.runtime.agenda
  const stash = context.runtime.stash
  while (agenda.length()) {
    const command = agenda.pop() as Node
    yield* evaluators[command.type](command, context)
  }

  console.log(stash.isEmpty())

  return stash.peek()
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
