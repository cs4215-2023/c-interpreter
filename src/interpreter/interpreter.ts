/* tslint:disable:max-classes-per-file */
import { ExpressionStatement, Identifier, Literal, Node } from '../parser/types'
import { ClosureInstruction, Command, Context, Value, WhileStatementInstruction } from '../types'
import { checkBinaryExpression } from '../utils/runtime/checkBinaryExp'
import { checkIdentifier } from '../utils/runtime/checkIdentifier'
import { checkLogicalExpression } from '../utils/runtime/checkLogicalExp'
import { checkUnaryExpression } from '../utils/runtime/checkUnaryExp'
import { checkIfStatement } from '../utils/runtime/statements/checkIf'
import { checkLoop } from '../utils/runtime/statements/checkLoop'
import { createBlockEnvironment, popEnvironment, pushEnvironment } from './environment'
import { DivisionByZeroError, handleRuntimeError, InterpreterError } from './errors'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from './operators'
import {
  createBlockTypeEnvironment,
  currentTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import {
  checkNumberOfArguments,
  declareIdentifier,
  getVariable,
  setValueToIdentifier
} from './utils'

export type Evaluator<T extends Node> = (node: T, context: Context) => IterableIterator<Value>

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

    context.runtime.stash.push(node)
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
    declareIdentifier(context, identifier.name, node)
    context.runtime.stash.push(identifier)
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    checkIdentifier(node)

    const identifier = getVariable(context, node.name)
    context.runtime.stash.push(identifier)
  },

  TypedIdentifier: function* (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }
    checkIdentifier(command)
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

    // calls main at the end
    node.body.push({
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'main' },
        arguments: []
      }
    })

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
    const left = stash.pop() as Literal
    const right = stash.pop() as Literal
    const operator = command.operator

    if (operator === '/' && right.value === 0) {
      throw new DivisionByZeroError(command)
    }

    checkBinaryExpression(command, operator, left, right)

    const result = evaluateBinaryExpression(operator, right, left)
    stash.push(result)
  },

  UnaryExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'UnaryExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const operator = command.operator
    const value = stash.pop() as Literal

    checkUnaryExpression(command, operator, value, context)

    if (operator == '&' || operator == '*') {
      throw new Error('Pointer not implemented yet')
    }

    stash.push(evaluateUnaryExpression(operator, value))
  },

  ConditionalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'ConditionalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    agenda.push(stash.pop().value ? command.consequent : command.alternate)
  },

  IfStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'IfStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    const test = stash.pop()

    checkIfStatement(command, test, context)

    agenda.push(test.value ? command.consequent : command.alternate)
  },

  WhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'WhileStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda

    checkLoop(command, command.test, context)

    if (stash.pop().value) {
      agenda.push(command, command.test, { type: 'Pop_i' }, command.body)
    }
  },

  DoWhileStatement_i: function* (command: Command, context: Context) {
    if (command.type != 'DoWhileStatement_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const agenda = context.runtime.agenda
    checkLoop(command, command.test, context)

    if (stash.pop().value) {
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

    const value = stash.peek()
    setValueToIdentifier(command, context, identifier!.name, value)
  },

  EnvironmentRestoration_i: function* (command: Command, context: Context) {
    if (command.type != 'EnvironmentRestoration_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    popEnvironment(context)
    popTypeEnvironment(context)
    context.numberOfOuterEnvironments -= 1
  },

  LogicalExpression_i: function* (command: Command, context: Context) {
    if (command.type != 'LogicalExpression_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }

    const stash = context.runtime.stash
    const left = stash.pop()
    const right = stash.pop()
    const operator = command.operator

    checkLogicalExpression(command, operator, left, right, context)

    const result = evaluateLogicalExpression(operator, right, left)
    stash.push(result)
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

    for (let i = arity - 1; i >= 0; i--) args[i] = stash.pop()

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
      agenda.push({
        type: 'AssignmentExpression',
        left: { type: 'VariableDeclarationExpression', identifier: lambda.parameters[i] },
        right: args[i]
      })
    }
    const functionEnvironment = createBlockEnvironment(context, 'FunctionEnvironment')
    const functionTypeEnvironment = createBlockTypeEnvironment(context, 'FunctionTypeEnvironment', {
      ...currentTypeEnvironment(context).head
    })
    pushEnvironment(context, functionEnvironment)
    pushTypeEnvironment(context, functionTypeEnvironment)
  },

  Mark_i: function* (command: Command, context: Context) {
    if (command.type != 'Mark_i') {
      throw handleRuntimeError(context, new InterpreterError(command as Node))
    }
    // do nothing, since mark_i is already popped from agenda, its similar to return statement.
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

  console.log('type env at the end: ', currentTypeEnvironment(context))

  // By right C programs don't return anything, this should be undefined.
  const result = stash.peek()
  if (result != undefined) {
    return result.value
  }

  return result
}
