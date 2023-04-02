/* tslint:disable:max-classes-per-file */

import MemoryModel from '../memory/memoryModel'
import { TAG_TO_TYPE, TYPE_TO_TAG } from '../memory/tags'
import { ExpressionStatement, Identifier, Node } from '../parser/types'
import { typeCheck } from '../typeChecker/typeChecker'
import { ClosureInstruction, Command, Context, Value, WhileStatementInstruction } from '../types'
import { createBlockEnvironment, popEnvironment, pushEnvironment } from './environment'
import { handleRuntimeError, InterpreterError } from './errors'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from './operators'
import { isNumber } from './utils'
import {
  checkNumberOfArguments,
  declareIdentifier,
  getVariable,
  setValueToIdentifier
} from './utils'

export type Evaluator<T extends Node> = (node: T, context: Context) => IterableIterator<Value>

const STACK_SIZE = 500
const STACK_BEGIN = 0
const HEAP_SIZE = 100
const HEAP_BEGIN = STACK_BEGIN + STACK_SIZE + 1
const memory = new MemoryModel(STACK_SIZE, STACK_BEGIN, HEAP_SIZE, HEAP_BEGIN)

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
  Literal: function* (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    if (node.value === undefined || node.valueType == undefined) {
      context.runtime.stash.push(node)
    } else {
      const address = memory.mem_stack_push(TYPE_TO_TAG[node.valueType], node.value)
      console.log(
        'storing literal ' +
          node.value +
          ' with address ' +
          address +
          ' as ' +
          node.valueType +
          '(' +
          TYPE_TO_TAG[node.valueType] +
          ')'
      )
      context.runtime.stash.push(address)
    }
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

    if (node.identifier.type == 'TypedIdentifier') {
      node.identifierType = node.identifier.typeDeclaration
    }
    const identifier = node.identifier as Identifier
    const address = memory.mem_stack_allocate_one()
    declareIdentifier(context, identifier.name, node, address)

    context.runtime.stash.push(identifier)
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const identifier = getVariable(context, node.name)
    console.log('load identifier ' + node.name + ' at addr ' + identifier)

    context.runtime.stash.push(identifier)
  },

  TypedIdentifier: function* (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }

    const identifier = getVariable(context, command.name)
    context.runtime.stash.push(identifier)
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
    // Idea: Convert to while loop.
    const forLoopContent = node.body

    // Convert expression to statement using expressionStatement.
    const updateStatement: ExpressionStatement = {
      type: 'ExpressionStatement',
      expression: node.update
    }
    forLoopContent.body.push(updateStatement)

    // Wrap body in while loop instruction.
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

    //Assignment here refers to =.
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

    // Call the argument.
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
      body: node.body,
      typeDeclaration: node.typeDeclaration
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

    if (!(A.length() === 0)) {
      A.push({ type: 'EnvironmentRestoration_i' })
    }

    // Make a copy of the body and then reverse it instead.
    A.push(...node.body.slice().reverse())

    context.numberOfOuterEnvironments += 1
    pushEnvironment(context, env)
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

    // Create global environment.
    context.numberOfOuterEnvironments += 1
    const environment = createBlockEnvironment(context, 'globalEnvironment')
    pushEnvironment(context, environment)

    // Call main at the end.
    node.body.push({
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'main' },
        arguments: []
      }
    })

    // Reverse the order
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
    const result = evaluateBinaryExpression(command, operator, right, left)
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
    // Get address here.
    const [type, value] = memory.mem_read(address)
    if (operator == '&' || operator == '*') {
      throw new Error('Pointer not implemented yet')
    }

    const result = evaluateUnaryExpression(operator, value)
    const push_addr = memory.mem_stack_push(type, result as number)
    stash.push(push_addr)
  },

  ConditionalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'ConditionalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const bool_addr = stash.pop()
    const [type, bool] = memory.mem_read(bool_addr)
    agenda.push(bool ? command.consequent : command.alternate)
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

    const [type, value] = memory.mem_read(stash.pop())
    if (value) {
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  DoWhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'DoWhileStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    const address = stash.pop()
    const [type, value] = memory.mem_read(address)
    if (value) {
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
    const agenda = context.runtime.agenda
    agenda.pop().type === 'Mark_i' ? memory.exit_scope() : agenda.push(command)
  },

  AssignmentExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'AssignmentExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    let identifier = command.symbol

    // We are assigning to a variable.
    if (command.symbol == undefined) {
      identifier = stash.pop()
    }

    const addr = stash.peek()
    if (addr.type != 'Closure_i') {
      // Get address here.
      const var_addr = getVariable(context, identifier!.name)
      const [valueType, newVal] = memory.mem_read(addr)
      memory.mem_write_to_address(var_addr, valueType, newVal)
      console.log(
        'setting ' + newVal + ' to identifier ' + identifier!.name + ' at addr ' + var_addr
      )
      setValueToIdentifier(command, context, identifier!.name, var_addr)
    } else {
      setValueToIdentifier(command, context, identifier!.name, addr)
    }
  },

  EnvironmentRestoration_i: function* (command: Command, context: Context) {
    if (command.type != 'EnvironmentRestoration_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    popEnvironment(context)
    context.numberOfOuterEnvironments -= 1
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

    const result = evaluateLogicalExpression(operator, left, right)
    const push_addr = memory.mem_stack_push(type_left, result)
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
        left: {
          type: 'VariableDeclarationExpression',
          identifier: command.id,
          identifierType: command.typeDeclaration
        },
        right: {
          type: 'LambdaExpression_i',
          parameters: command.parameters,
          body: command.body,
          typeDeclaration: command.typeDeclaration
        }
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
      body: command.body,
      typeDeclaration: command.typeDeclaration
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

    for (let i = arity - 1; i >= 0; i--) args[i] = memory.mem_read(stash.pop())
    const lambda = stash.pop() as ClosureInstruction

    checkNumberOfArguments(context, command, lambda)

    const agendaTop = agenda.peek() as Command
    if (agenda.length() === 0 || agendaTop.type === 'EnvironmentRestoration_i') {
      agenda.push({ type: 'Mark_i' })
    } else if (agendaTop.type === 'ReturnStatement_i') {
      agenda.pop()
    } else {
      agenda.push({ type: 'EnvironmentRestoration_i' }, { type: 'Mark_i' })
    }

    const bodyStatements = lambda.body
    agenda.push(...bodyStatements.body.slice().reverse())

    for (let i = 0; i < args.length; i++) {
      const [type, val] = args[i]
      agenda.push({
        type: 'AssignmentExpression',
        left: { type: 'VariableDeclarationExpression', identifier: lambda.parameters[i] },
        right: { type: 'Literal', value: val, valueType: TAG_TO_TYPE[type.toString()] }
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
    // Do nothing, since mark_i is already popped from agenda, its similar to return statement.
  }
}

// tslint:enable:object-literal-shorthand

export function* evaluate(node: Node, context: Context) {
  yield* typeCheck(node, context)
  yield* evaluators[node.type](node, context)
  const agenda = context.runtime.agenda
  const stash = context.runtime.stash
  while (agenda.length()) {
    const command = agenda.pop() as Node
    yield* evaluators[command.type](command, context)
  }

  // By right C programs don't return anything, this should be undefined.

  if (isNumber(stash.peek())) {
    const [type, value] = memory.mem_read(stash.peek())
    if (TAG_TO_TYPE[type] == 'float') {
      return value.toFixed(6)
    }
    return value
  }
  return undefined
}
