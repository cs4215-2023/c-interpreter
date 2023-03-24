/* tslint:disable:max-classes-per-file */
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import {
  BlockStatement,
  CallExpression,
  ExpressionStatement,
  Identifier,
  Node,
  Statement
} from '../parser/types'
import { Command, Context, Value, WhileStatementInstruction } from '../types'
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

    context.runtime.agenda.push(...node.expressions)
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
    context.runtime.stash.push(identifier)
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

    context.runtime.agenda.push(
      { type: 'UnaryExpression_i', operator: node.operator },
      node.argument
    )
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw new Error('Not binary expression')
    }

    context.runtime.agenda.push(
      { type: 'BinaryExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw new Error('Not conditional expression')
    }

    context.runtime.agenda.push(
      { type: 'ConditionalExpression_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw new Error('Not logical expression')
    }
    // const left = yield* evaluate(node.left, context)
    // const right = yield* evaluate(node.right, context)

    // return evaluateLogicalExpression(node.operator, left, right)
    context.runtime.agenda.push(
      { type: 'LogicalExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ForStatement: function* (node: Node, context: Context) {
    if (node.type != 'ForStatement') {
      throw new Error('Not for loop')
    }
    // Idea: Convert to while loop
    const forLoopContent = node.body

    // convert expression to statement using expressionStatement
    const updateStatement: ExpressionStatement = {
      type: 'ExpressionStatement',
      expression: node.update
    }
    forLoopContent.body.push(updateStatement)

    // wrap body in while loop instruction
    const whileStatementInstruction: WhileStatementInstruction = {
      type: 'WhileStatement_i',
      test: node.test,
      body: forLoopContent
    }

    context.runtime.agenda.push(
      { type: 'Literal', value: undefined },
      whileStatementInstruction,
      node.test,
      node.init
    )
  },

  AssignmentExpression: function* (node: Node, context: Context) {
    if (node.type != 'AssignmentExpression') {
      throw new Error('Not assignment expression')
    }

    //Assignment here refers to =
    if (node.left.type == 'Identifier') {
      context.runtime.agenda.push({ type: 'AssignmentExpression_i', symbol: node.left }, node.right)
    } else {
      context.runtime.agenda.push({ type: 'AssignmentExpression_i' }, node.left, node.right)
    }
  },

  UpdateExpression: function* (node: Node, context: Context) {
    if (node.type != 'UpdateExpression') {
      throw new Error('Not update expression')
    }

    const agenda = context.runtime.agenda
    const numberLiteral = { type: 'Literal', value: 1, valueType: 'int' }
    const binaryExpression = {
      type: 'BinaryExpression',
      operator: node.operator == '++' ? '+' : '-',
      left: node.argument,
      right: numberLiteral
    }
    const assignmentExpression = {
      type: 'AssignmentExpression',
      operator: '=',
      left: node.argument,
      right: binaryExpression
    }

    agenda.push(assignmentExpression)
  },

  // TODO
  FunctionDeclaration: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function* (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw new Error('Not if statement')
    }

    console.log(node)
    context.runtime.agenda.push(
      { type: 'IfStatement_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw new Error('Not expression statement')
    }
    context.runtime.agenda.push(node.expression)
  },

  ReturnStatement: function* (node: Node, context: Context) {
    if (node.type != 'ReturnStatement') {
      throw new Error('Not return statement')
    }
    context.runtime.agenda.push({ type: 'ReturnStatement_i' }, node.argument)
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw new Error('Not for loop')
    }

    context.runtime.agenda.push(
      { type: 'Literal', value: undefined },
      { type: 'WhileStatement_i', test: node.test, body: node.body },
      node.test
    )
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new RuntimeSourceError(node))
    }

    context.runtime.agenda.push(
      { type: 'Literal', value: undefined },
      { type: 'DoWhileStatement_i', test: node.test, body: node.body },
      node.test,
      node.body
    )
  },

  BlockStatement: function* (node: Node, context: Context) {
    if (node.type != 'BlockStatement') {
      throw new Error('Not evaluating block statement')
    }

    const A = context.runtime.agenda

    const env = createBlockEnvironment(context, 'localEnvironment')
    const typeEnv = createBlockTypeEnvironment(context, 'localTypeEnvironment')

    if (!(A.length() === 0)) {
      A.push({ type: 'EnvironmentRestoration_i' })
    }

    // make a copy of the body and then reverse it instead.
    A.push(...node.body.slice().reverse())

    context.numberOfOuterEnvironments += 1
    pushEnvironment(context, env)
    pushTypeEnvironment(context, typeEnv)
  },

  EmptyStatement: function* (node: Node, context: Context) {
    if (node.type != 'EmptyStatement') {
      throw new Error('Not evaluating empty statement')
    }
    context.runtime.stash.push(undefined)
  },

  Program: function* (node: Node, context: Context) {
    if (node.type !== 'Program') {
      throw handleRuntimeError(context, new RuntimeSourceError(node))
    }

    // Create global environment
    context.numberOfOuterEnvironments += 1
    const environment = createBlockEnvironment(context, 'globalEnvironment')
    const type_env = createBlockTypeEnvironment(context, 'globalTypeEnvironment')
    pushEnvironment(context, environment)
    pushTypeEnvironment(context, type_env)

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
      throw new Error('division by 0')
    }

    const result = evaluateBinaryExpression(operator, right, left)
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
    if (operator == '&' || operator == '*') {
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
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  DoWhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'DoWhileStatement_i') {
      throw new Error('Not while statement instruction')
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    if (stash.pop()) {
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  Pop_i: function* (command: Command, context: Context) {
    if (command.type != 'Pop_i') {
      throw new Error('Not pop instruction')
    }

    const stash = context.runtime.stash
    stash.pop()
  },

  ReturnStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'ReturnStatement_i') {
      throw new Error('Not pop instruction')
    }

    const agenda = context.runtime.agenda
    agenda.pop().type === 'Mark_i' ? null : agenda.push(command)
  },

  AssignmentExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'AssignmentExpression_i') {
      throw new Error('Not assignment expression')
    }

    const stash = context.runtime.stash
    let identifier = command.symbol

    // we are assigning to variable
    if (command.symbol == undefined) {
      identifier = stash.pop()
    }

    const value = stash.peek()
    setValueToIdentifier(context, identifier!.name, value)
  },

  EnvironmentRestoration_i: function* (command: Command, context: Context) {
    if (command.type != 'EnvironmentRestoration_i') {
      throw new Error('Not assignment expression')
    }

    popEnvironment(context)
    popTypeEnvironment(context)
    context.numberOfOuterEnvironments -= 1
  },

  LogicalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'LogicalExpression_i') {
      throw new Error('Not logical expression')
    }

    const stash = context.runtime.stash
    const left = stash.pop()
    const right = stash.pop()
    const operator = command.operator

    // TODO: error handling with rttc

    const result = evaluateLogicalExpression(operator, left, right)
    stash.push(result)
  }
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

  // By right C programs don't return anything, this should be undefined.
  return stash.peek()
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
