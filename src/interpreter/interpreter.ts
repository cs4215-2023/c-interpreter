/* tslint:disable:max-classes-per-file */

import { start } from 'repl'

import { InvalidTypeError } from '../errors/errors'
import MemoryModel from '../memory/memoryModel'
import { TAG_TO_TYPE, TAGS, TYPE_TO_TAG } from '../memory/tags'
import { ArrayIdentifier, ExpressionStatement, Identifier, Literal, Node } from '../parser/types'
import { typeCheck } from '../typeChecker/typeChecker'
import { Builtin } from '../typeChecker/types'
import { getVariableType } from '../typeChecker/utils'
import { Command, Context, SourceError, Value, WhileStatementInstruction } from '../types'
import { arity, builtin_functions } from './defaults'
import { createBlockEnvironment, popEnvironment, pushEnvironment } from './environment'
import { handleRuntimeError, InterpreterError } from './errors'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from './operators'
import { apply_builtin, isNumber } from './utils'
import {
  checkNumberOfArguments,
  declareIdentifier,
  getVariable,
  setValueToIdentifier
} from './utils'

export type Evaluator<T extends Node> = (node: T, context: Context) => Value

const STACK_SIZE = 500
const STACK_BEGIN = 0
const HEAP_SIZE = 600
const HEAP_BEGIN = 600
let memory = new MemoryModel(STACK_SIZE, STACK_BEGIN, HEAP_SIZE, HEAP_BEGIN)

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
  Literal: function (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    if (node.value === undefined || node.valueType == undefined) {
      context.runtime.stash.push(node)
    } else {
      const address = memory.mem_stack_push(TYPE_TO_TAG[node.valueType], node.value)
      context.runtime.stash.push(address)
    }
  },

  StringLiteral: function (node: Node, context: Context) {
    if (node.type != 'StringLiteral') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const chars = [...node.string]
    chars.reverse().forEach((c, i) => {
      if (i !== 0 && i !== chars.length - 1) {
        context.runtime.agenda.push({ type: 'Literal', value: c, valueType: 'char' })
      }
    })
    context.runtime.agenda.push({ type: 'Literal', value: '\0', valueType: 'char' })
  },

  SequenceExpression: function (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(...node.expressions)
  },

  VariableDeclarationExpression: function (node: Node, context: Context) {
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

  PointerDeclarationExpression: function (node: Node, context: Context) {
    if (node.type != 'PointerDeclarationExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const identifier = node.pointer as Identifier

    // Pointer assertion
    if (identifier.isPointer !== true) {
      throw InvalidTypeError
    }

    const address = memory.mem_stack_allocate_one()
    declareIdentifier(context, identifier.name, node, address)
    context.runtime.stash.push(identifier)
  },

  ArrayDeclarationExpression: function (node: Node, context: Context) {
    if (node.type != 'ArrayDeclarationExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    let size

    // Elements are already declared
    if (node.size === undefined) {
      size = node.array!.elements.length
    } else {
      size = node.size
    }

    // Allocate memory for both address and content
    const address = memory.mem_stack_allocate_n(2 * size)
    const type = node.arrayType.valueType
    declareIdentifier(context, node.identifier.name, node, address)

    // Write pointers to memory
    for (let i = 0; i < size; i++) {
      const pointer_addr = i * memory.word_size + address
      const value_addr = i * memory.word_size + size * memory.word_size + address
      memory.mem_write_to_address(pointer_addr, TYPE_TO_TAG[type] + 3, value_addr)
    }
    if (node.array === undefined) {
      context.runtime.stash.push(node.identifier)
    } else {
      for (let i = node.array.elements.length - 1; i >= 0; i--) {
        const expression = {
          type: 'Literal',
          valueType: 'int',
          value: i
        } as Literal
        const pointer_identifier: ArrayIdentifier = {
          type: 'ArrayIdentifier',
          name: node.identifier.name,
          index: expression,
          isPointer: true
        }
        const assignmentExpression = {
          type: 'AssignmentExpression',
          operator: '=',
          left: pointer_identifier,
          right: node.array.elements[i]
        }
        context.runtime.agenda.push(assignmentExpression)
      }
    }
  },

  ArrayIdentifier: function (node: Node, context: Context) {
    if (node.type != 'ArrayIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    const identifier = getVariable(context, node.name)
    context.runtime.agenda.push({ type: 'ArrayIdentifier_i' })
    context.runtime.stash.push(identifier)
    context.runtime.agenda.push(node.index)
  },

  Identifier: function (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const identifier = getVariable(context, node.name)
    if (typeof identifier === 'number') {
      memory.mem_read(identifier)
    }
    context.runtime.stash.push(identifier)
  },

  TypedIdentifier: function (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }

    const identifier = getVariable(context, command.name)
    context.runtime.stash.push(identifier)
  },

  CallExpression: function (node: Node, context: Context) {
    if (node.type != 'CallExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const agenda = context.runtime.agenda
    let actualArgLength = 0

    const callArguments = []
    for (const expression of node.arguments) {
      if (expression.type != 'EmptyExpression') {
        callArguments.push(expression)
        if (expression.type == 'StringLiteral') {
          // Less null byte at the end
          actualArgLength += expression.string.length - 1
        } else {
          actualArgLength += 1
        }
      }
    }
    agenda.push({ type: 'CallExpression_i', arity: actualArgLength }, ...callArguments, node.callee)
  },

  EmptyExpression: function (node: Node, context: Context) {
    if (node.type != 'EmptyExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
  },

  UnaryExpression: function (node: Node, context: Context) {
    if (node.type != 'UnaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'UnaryExpression_i', operator: node.operator },
      node.argument
    )
  },

  BinaryExpression: function (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'BinaryExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ConditionalExpression: function (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'ConditionalExpression_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  LogicalExpression: function (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'LogicalExpression_i', operator: node.operator },
      node.right,
      node.left
    )
  },

  ForStatement: function (node: Node, context: Context) {
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

  AssignmentExpression: function (node: Node, context: Context) {
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
    } else if (node.left.type == 'ArrayIdentifier') {
      context.runtime.agenda.push(
        { type: 'Pop_i' },
        { type: 'AssignmentExpression_i', symbol: node.left },
        node.left.index,
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

  UpdateExpression: function (node: Node, context: Context) {
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

  FunctionDeclaration: function (node: Node, context: Context) {
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

  IfStatement: function (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'IfStatement_i', consequent: node.consequent, alternate: node.alternate },
      node.test
    )
  },

  ExpressionStatement: function (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    context.runtime.agenda.push(node.expression)
  },

  ReturnStatement: function (node: Node, context: Context) {
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

  WhileStatement: function (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    context.runtime.agenda.push(
      { type: 'Literal', value: undefined },
      { type: 'WhileStatement_i', test: node.test, body: node.body },
      node.test
    )
  },

  DoWhileStatement: function (node: Node, context: Context) {
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

  BlockStatement: function (node: Node, context: Context) {
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

  EmptyStatement: function (node: Node, context: Context) {
    if (node.type != 'EmptyStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
  },

  Program: function (node: Node, context: Context) {
    if (node.type !== 'Program') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const global_frame = {}
    for (const key in builtin_functions) {
      const builtin = builtin_functions[key] as Builtin
      builtin.arity = arity(builtin.apply)
      global_frame[key] = builtin
    }

    // Create global environment.
    context.numberOfOuterEnvironments += 1
    const environment = createBlockEnvironment(context, 'globalEnvironment', global_frame)
    pushEnvironment(context, environment)

    // Call main at the end.
    node.body.push({
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'main', isPointer: false },
        arguments: []
      }
    })

    // Reverse the order
    node.body.reverse()
    context.runtime.agenda.push(...node.body)
  },

  // INSTRUCTIONS
  ArrayIdentifier_i: function (command: Command, context: Context) {
    if (command.type != 'ArrayIdentifier_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const index_addr = context.runtime.stash.pop()
    const array_addr = context.runtime.stash.pop()
    const [_, start_addr] = memory.mem_read(array_addr)
    if (start_addr >= HEAP_BEGIN) {
      const [type, index] = memory.mem_read(index_addr)
      let new_write_addr = start_addr
      for (let i = 0; i < index; i++) {
        new_write_addr = memory.mem_heap_get_child(new_write_addr)
      }
      context.runtime.stash.push(new_write_addr)
    } else {
      const [type, index] = memory.mem_read(index_addr)
      const [typeVal, val] = memory.mem_read(index * memory.stack.word_size + array_addr)
      context.runtime.stash.push(val)
    }
  },

  BinaryExpression_i: function (command: Command, context: Context) {
    if (command.type != 'BinaryExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    const left_addr = stash.pop()
    const right_addr = stash.pop()
    let [type_left, left] = memory.mem_read(left_addr)
    let [type_right, right] = memory.mem_read(right_addr)
    const operator = command.operator

    // Pointer arithmetic
    if (type_left >= TAGS.int_pointer_tag) {
      // The assumption is that one of these will be a pointer
      right *= memory.stack.word_size
      type_right = type_left
    } else if (type_right >= TAGS.int_pointer_tag) {
      left *= memory.stack.word_size
      type_left = type_right
    }

    const result = evaluateBinaryExpression(command, operator, right, left)
    const push_addr = memory.mem_stack_push(type_left, result)
    stash.push(push_addr)
  },

  UnaryExpression_i: function (command: Command, context: Context) {
    if (command.type != 'UnaryExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const operator = command.operator
    const address = stash.pop()
    // Get address here.
    const [type, value] = memory.mem_read(address)
    if (operator == '&') {
      // Pointer type is offset by 3
      const push_addr = memory.mem_stack_push(type + 3, address as number)
      stash.push(push_addr)
    } else if (operator == '*') {
      if (
        type === TAGS.char_pointer_tag ||
        type === TAGS.int_pointer_tag ||
        type === TAGS.float_pointer_tag
      ) {
        stash.push(value)
      } else {
        throw InvalidTypeError
      }
    } else {
      const result = evaluateUnaryExpression(operator, value)
      // Get new address
      const push_addr = memory.mem_stack_push(type, result as number)
      stash.push(push_addr)
    }
  },

  ConditionalExpression_i: function (command: Command, context: Context) {
    if (command.type != 'ConditionalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const bool_addr = stash.pop()
    const [type, bool] = memory.mem_read(bool_addr)
    agenda.push(bool ? command.consequent : command.alternate)
  },

  IfStatement_i: function (command: Command, context: Context) {
    if (command.type != 'IfStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const bool_addr = stash.pop()
    const [type, bool] = memory.mem_read(bool_addr)
    agenda.push(bool ? command.consequent : command.alternate)
  },

  WhileStatement_i: function (command: Command, context: Context) {
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

  DoWhileStatement_i: function (command: Command, context: Context) {
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

  Pop_i: function (command: Command, context: Context) {
    if (command.type != 'Pop_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    stash.pop()
  },

  ReturnStatement_i: function (command: Command, context: Context) {
    if (command.type != 'ReturnStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const agenda = context.runtime.agenda
    agenda.pop().type === 'Mark_i' ? memory.exit_scope() : agenda.push(command)
  },

  AssignmentExpression_i: function (command: Command, context: Context) {
    if (command.type != 'AssignmentExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    const stash = context.runtime.stash
    let identifier = command.symbol

    // Variable assignment
    if (command.symbol == undefined) {
      identifier = stash.pop()
    }
    let addr = stash.peek()

    const varType = TYPE_TO_TAG[getVariableType(context, identifier!.name)]
    if (identifier!.type === 'ArrayIdentifier') {
      const index_addr = stash.pop()
      addr = stash.peek()
      const id = identifier as ArrayIdentifier
      const var_addr = getVariable(context, id.name) // Get addr of pointer
      const [valueType, newVal] = memory.mem_read(addr) // Get the value and type to be written to variable
      const [type, write_addr] = memory.mem_read(var_addr) // Get the address that the pointer is pointing to
      const [itype, index] = memory.mem_read(index_addr) // Get the index to write to
      if (write_addr >= HEAP_SIZE) {
        let new_write_addr = write_addr
        for (let i = 0; i < index; i++) {
          new_write_addr = memory.mem_heap_get_child(new_write_addr)
        }
        memory.mem_stack_deallocate_n(2)
        memory.mem_write_to_address(new_write_addr, varType, newVal)
      } else {
        memory.mem_write_to_address(write_addr + index * memory.stack.word_size, varType, newVal)
      }
    } else if (addr.type != 'Closure_i') {
      const [valueType, newVal] = memory.mem_read(addr)
      const var_addr = getVariable(context, identifier!.name) // Get addr

      if (identifier?.isPointer) {
        const actualAddr = newVal
        memory.mem_write_to_address(var_addr, valueType, actualAddr)
        setValueToIdentifier(command, context, identifier!.name, var_addr)
      } else {
        memory.mem_write_to_address(var_addr, varType, newVal)
        setValueToIdentifier(command, context, identifier!.name, var_addr)
      }
    } else {
      setValueToIdentifier(command, context, identifier!.name, addr)
    }
  },

  EnvironmentRestoration_i: function (command: Command, context: Context) {
    if (command.type != 'EnvironmentRestoration_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    popEnvironment(context)
    context.numberOfOuterEnvironments -= 1
  },

  LogicalExpression_i: function (command: Command, context: Context) {
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

  FunctionDeclaration_i: function (command: Command, context: Context) {
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

  LambdaExpression_i: function (command: Command, context: Context) {
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

  CallExpression_i: function (command: Command, context: Context) {
    if (command.type != 'CallExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const arity = command.arity
    const args = []
    for (let i = arity - 1; i >= 0; i--) args[i] = memory.mem_read(stash.pop())
    const lambda = stash.pop()
    checkNumberOfArguments(context, command, lambda)

    const agendaTop = agenda.peek() as Command

    if (lambda.type == 'Builtin') {
      const result = apply_builtin(lambda.name, args, memory)
      if (lambda.name === 'malloc') {
        agenda.push({ type: 'Literal', value: result, valueType: 'int' })
      }
      return
    }

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

  Mark_i: function (command: Command, context: Context) {
    if (command.type != 'Mark_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    // Do nothing, since mark_i is already popped from agenda, its similar to return statement.
  }
}

// tslint:enable:object-literal-shorthand

export function evaluate(node: Node, context: Context) {
  try {
    typeCheck(node, context)
    memory = new MemoryModel(STACK_SIZE, STACK_BEGIN, HEAP_SIZE, HEAP_BEGIN)
    // Compile the program to instructions
    evaluators[node.type](node, context)
    const agenda = context.runtime.agenda
    const stash = context.runtime.stash
    while (agenda.length()) {
      const command = agenda.pop() as Node
      evaluators[command.type](command, context)
    }

    if (isNumber(stash.peek())) {
      const [type, value] = memory.mem_read(stash.peek())
      if (TAG_TO_TYPE[type] == 'float') {
        return { status: 'finished', value: parseFloat(value.toFixed(6)), context: context }
      }
      return { status: 'finished', value: value, context: context }
    }
    return { status: 'finished', value: undefined, context: context }
  } catch (e) {
    return { status: 'error', error: e as SourceError }
  }
}
