/* tslint:disable:max-classes-per-file */
import * as constants from '../constants'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import {
  BlockStatement,
  CallExpression,
  ExpressionStatement,
  Identifier,
  Node
} from '../parser/types'
import { ClosureInstruction, Command, Context, Value, WhileStatementInstruction } from '../types'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from '../utils/operators'
import { checkBinaryExpression, checkUnaryExpression } from '../utils/rttc'
import Closure from './closure'
import {
  createBlockEnvironment,
  createEnvironment,
  popEnvironment,
  pushEnvironment,
  replaceEnvironment
} from './environment'
import { handleRuntimeError, InterpreterError } from './errors'
import MemoryModel from './memory/memoryModel'
import { TAG_TO_TYPE, TAGS } from './memory/tags'
import {
  createBlockTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import {
  checkNumberOfArguments,
  declareIdentifier,
  getVariable,
  setValueToIdentifier
} from './utils'

class ReturnValue {
  constructor(public value: Value) {}
}

class TailCallReturnValue {
  constructor(public callee: Closure, public args: Value[], public node: CallExpression) {}
}

export type Evaluator<T extends Node> = (node: T, context: Context) => IterableIterator<Value>

const STACK_SIZE = 100
const STACK_BEGIN = 0
const HEAP_SIZE = 100
const HEAP_BEGIN = STACK_BEGIN + STACK_SIZE + 1
const memory = new MemoryModel(STACK_SIZE, STACK_BEGIN, HEAP_SIZE, HEAP_BEGIN)

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
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    console.log('loaded literal ' + node.value)
    const address = memory.mem_stack_push(TAG_TO_TYPE[node.valueType], node.value)
    context.runtime.stash.push(address) //replace with address
  },

  SequenceExpression: function* (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(...node.expressions)
  },

  // TODO
  ArrayExpression: function* (node: Node, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  VariableDeclarationExpression: function* (node: Node, context: Context) {
    if (node.type != 'VariableDeclarationExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const identifier = node.identifier as Identifier
    declareIdentifier(context, identifier.name, node)
    context.runtime.stash.push(identifier)
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const value = getVariable(context, node.name)
    context.runtime.stash.push(value)
  },

  CallExpression: function* (node: Node, context: Context) {
    if (node.type != 'CallExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const agenda = context.runtime.agenda

    const callArguments = []
    for (const expression of node.arguments) {
      if (expression.type != 'EmptyExpression') {
        callArguments.push(expression)
      }
    }

    agenda.push(
      { type: 'CallExpression_i', arity: callArguments.length },
      ...callArguments,
      node.callee
    )
  },

  EmptyExpression: function* (node: Node, context: Context) {
    if (node.type != 'EmptyExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
  },

  UnaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'UnaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
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
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    context.runtime.agenda.push(
      { type: 'BinaryExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'ConditionalExpression_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'LogicalExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ForStatement: function* (node: Node, context: Context) {
    if (node.type != 'ForStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
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
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    //Assignment here refers to =
    if (node.left.type == 'Identifier') {
      context.runtime.agenda.push(
        { type: 'Pop_i' },
        { type: 'AssignmentExpression_i', symbol: node.left },
        node.right
      )
    } else {
      context.runtime.agenda.push(
        { type: 'Pop_i' },
        { type: 'AssignmentExpression_i' },
        node.left,
        node.right
      )
    }
  },

  UpdateExpression: function* (node: Node, context: Context) {
    if (node.type != 'UpdateExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
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

    // call the argument
    agenda.push(node.argument, assignmentExpression)
  },

  FunctionDeclaration: function* (node: Node, context: Context) {
    if (node.type != 'FunctionDeclaration') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push({
      type: 'FunctionDeclaration_i',
      id: node.id,
      parameters: node.params,
      body: node.body
    })
  },

  IfStatement: function* (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'IfStatement_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    context.runtime.agenda.push(node.expression)
  },

  ReturnStatement: function* (node: Node, context: Context) {
    if (node.type != 'ReturnStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    if (node.argument != undefined || node.argument != null) {
      context.runtime.agenda.push({ type: 'ReturnStatement_i' }, node.argument)
    } else {
      context.runtime.agenda.push(
        { type: 'ReturnStatement_i' },
        { type: 'Literal', value: node.argument }
      )
    }
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'Literal', value: undefined },
      { type: 'WhileStatement_i', test: node.test, body: node.body },
      node.test
    )
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
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
      throw handleRuntimeError(context, new InterpreterError(node))
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
    memory.enter_scope()
  },

  EmptyStatement: function* (node: Node, context: Context) {
    if (node.type != 'EmptyStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
  },

  Program: function* (node: Node, context: Context) {
    if (node.type !== 'Program') {
      throw handleRuntimeError(context, new InterpreterError(node))
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
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    const left_addr = stash.pop()
    const right_addr = stash.pop()
    const [type_left, left] = memory.mem_read(left_addr)
    const [type_right, right] = memory.mem_read(right_addr)
    const operator = command.operator
    // TODO: error handling with rttc
    if (operator === '/' && right === 0) {
      throw new Error('division by 0')
    }

    const result = evaluateBinaryExpression(operator, right, left) //need to reintroduce divisionbyzero error here
    const push_addr = memory.mem_stack_push(type_left, result)
    stash.push(push_addr)
  },

  UnaryExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'UnaryExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const operator = command.operator
    const address = stash.pop()
    //get address here
    const [type, value] = memory.mem_read(address)
    // TODO: error handling with rttc
    if (operator == '&' || operator == '*') {
      throw new Error('Pointer not implemented yet')
    }

    const result = evaluateUnaryExpression(operator, value)
    const push_addr = memory.mem_stack_push(type, result)
    stash.push(push_addr)
  },

  ConditionalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'ConditionalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    agenda.push(stash.pop() ? command.consequent : command.alternate)
  },

  IfStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'IfStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const bool_addr = stash.pop()
    const [type, bool] = memory.mem_read(bool_addr)
    agenda.push(bool ? command.consequent : command.alternate)
  },

  WhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'WhileStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    if (stash.pop()) {
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  DoWhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'DoWhileStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    if (stash.pop()) {
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  Pop_i: function* (command: Command, context: Context) {
    if (command.type != 'Pop_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    stash.pop()
  },

  ReturnStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'ReturnStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    console.log(command)
    const agenda = context.runtime.agenda
    agenda.pop().type === 'Mark_i' ? null : agenda.push(command)
  },

  AssignmentExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'AssignmentExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    let identifier = command.symbol

    // we are assigning to variable
    if (command.symbol == undefined) {
      identifier = stash.pop()
    }

    const addr = stash.peek()
    setValueToIdentifier(context, identifier!.name, addr)
  },

  EnvironmentRestoration_i: function* (command: Command, context: Context) {
    if (command.type != 'EnvironmentRestoration_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    console.log(context.runtime.environments)
    console.log('restoring env')
    popEnvironment(context)
    popTypeEnvironment(context)
    context.numberOfOuterEnvironments -= 1
    console.log(context.runtime.environments)
  },

  LogicalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'LogicalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const left_addr = stash.pop()
    const right_addr = stash.pop()
    const [type_left, left] = memory.mem_read(left_addr)
    const [type_right, right] = memory.mem_read(right_addr)
    const operator = command.operator

    // TODO: error handling with rttc
    const result = evaluateLogicalExpression(operator, left, right)
    const push_addr = memory.mem_stack_push(type_left, result) //type checking kinda?
    stash.push(push_addr)
  },

  FunctionDeclaration_i: function* (command: Command, context: Context) {
    if (command.type != 'FunctionDeclaration_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const agenda = context.runtime.agenda
    agenda.push(
      { type: 'Literal', value: undefined },
      { type: 'Pop_i' },
      {
        type: 'AssignmentExpression',
        left: { type: 'VariableDeclarationExpression', identifier: command.id },
        right: { type: 'LambdaExpression_i', parameters: command.parameters, body: command.body }
      }
    )
  },

  LambdaExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'LambdaExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    stash.push({
      type: 'Closure_i',
      parameters: command.parameters,
      body: command.body
    })
  },

  CallExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'CallExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const arity = command.arity
    const args = []
    for (let i = arity - 1; i >= 0; i--) args[i] = stash.pop()

    const lambda = stash.pop() as ClosureInstruction
    const agendaTop = agenda.peek() as Command
    if (agenda.length() === 0 || agendaTop.type === 'EnvironmentRestoration_i') {
      agenda.push({ type: 'Mark_i' })
    } else if (agendaTop.type === 'ReturnStatement_i') {
      agenda.pop()
    } else {
      // restore 2 envs here because the block has an environment as well.
      agenda.push(
        { type: 'EnvironmentRestoration_i' },
        { type: 'EnvironmentRestoration_i' },
        { type: 'Mark_i' }
      )
    }

    const bodyStatements = lambda.body
    agenda.push(...bodyStatements.body.slice().reverse())

    for (let i = 0; i < args.length; i++) {
      agenda.push({
        type: 'AssignmentExpression',
        left: { type: 'VariableDeclarationExpression', identifier: lambda.parameters[i] },
        right: { type: 'Literal', value: args[i] }
      })
    }
    const functionEnvironment = createBlockEnvironment(context, 'FunctionEnvironment')
    pushEnvironment(context, functionEnvironment)
    memory.enter_scope()
  },

  Mark_i: function* (command: Command, context: Context) {
    if (command.type != 'Mark_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    throw new Error('Return is required, even with no expression.')
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
  const [type, value] = memory.mem_read(stash.peek())
  return value
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
