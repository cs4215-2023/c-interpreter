import {
  ExpressionStatement,
  Identifier,
  Node,
  TypedIdentifier,
  WhileStatement
} from '../../parser/types'
import { Command, Context, WhileStatementInstruction } from '../../types'
import { checkIdentifier } from '../../utils/runtime/checkIdentifier'
import { Stack } from '../../utils/stack'
import { handleRuntimeError, InterpreterError } from '../errors'
import { declareIdentifierType, getIdentifierType, setValueToIdentifier } from '../utils'
import {
  createBlockTypeEnvironment,
  currentTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import { setFunctionParams } from './utils'

export type Evaluator<T extends Node> = (node: T, context: Context) => any

export const evaluators: { [nodeType: string]: Evaluator<Node> } = {
  Literal: function (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    if (node.value === undefined || node.valueType == undefined) {
      throw handleRuntimeError(context, new InterpreterError(node))
    } else {
      return node.valueType
    }
  },

  SequenceExpression: function* (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    let result

    for (const expr of node.expressions) {
      result = typeCheck(expr, context)
    }

    return result
  },

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
    declareIdentifierType(context, identifier.name, identifier)
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    checkIdentifier(node)

    return getIdentifierType(context, node.name)
  },

  TypedIdentifier: function* (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }
    checkIdentifier(command)
    return getIdentifierType(context, command.name)
  },

  CallExpression: function* (node: Node, context: Context) {
    if (node.type != 'CallExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const paramTypes = getIdentifierType(
      context,
      (node.callee as Identifier).name
    ) as TypedIdentifier[]
    const args = node.arguments

    if (args.length != paramTypes.length) {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    for (let i = 0; i < args.length; i++) {
      typeCheck(
        {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'VariableDeclarationExpression',
            identifier: paramTypes[i],
            identifierType: paramTypes[i].typeDeclaration
          },
          right: args[i]
        },
        context
      )
    }
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

    const argumentType = typeCheck(node.argument, context)
    if (argumentType == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return argumentType == 'float' ? 'float' : 'int'
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = typeCheck(node.left, context)
    const right = typeCheck(node.right, context)

    if (left == 'void' || right == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return left == 'float' || right == 'float' ? 'float' : 'int'
  },

  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = typeCheck(node.test, context)
    if (test == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    typeCheck(node.consequent, context)
    typeCheck(node.alternate, context)
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = typeCheck(node.left, context)
    const right = typeCheck(node.right, context)

    if (left == 'void' || right == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return left == 'float' || right == 'float' ? 'float' : 'int'
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
    const whileStatement: WhileStatement = {
      type: 'WhileStatement',
      test: node.test,
      body: forLoopContent
    }

    typeCheck(node.init, context)
    return typeCheck(whileStatement, context)
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

    const argumentType = typeCheck(node.argument, context)
    if (argumentType == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return argumentType == 'float' ? 'float' : 'int'
  },

  FunctionDeclaration: function* (node: Node, context: Context) {
    if (node.type != 'FunctionDeclaration') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const funcType = node.typeDeclaration.valueType
    // declare the function
    declareIdentifierType(context, node.id.name, node)
    setFunctionParams(node, context, node.id.name, node.params)

    const returnType = typeCheck(node.body, context)
    for (const type of returnType) {
      if (type != funcType) {
        throw handleRuntimeError(context, new InterpreterError(node))
      }
    }
  },

  IfStatement: function* (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    typeCheck(node.test, context)
    typeCheck(node.consequent, context)
    typeCheck(node.alternate, context)
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return typeCheck(node.expression, context)
  },

  ReturnStatement: function* (node: Node, context: Context) {
    if (node.type != 'ReturnStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    if (node.argument == undefined || node.argument == null) {
      return 'void'
    }

    return typeCheck(node.argument, context)
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = typeCheck(node.test, context)

    if (test == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return typeCheck(node.body, context)
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    // type check body first
    typeCheck(node.body, context)
    const test = typeCheck(node.test, context)

    if (test == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
  },

  BlockStatement: function* (node: Node, context: Context) {
    if (node.type != 'BlockStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const typeEnv = createBlockTypeEnvironment(context, 'localTypeEnvironment')
    pushTypeEnvironment(context, typeEnv)

    const result = []
    for (const statement of node.body) {
      const typeCheckResult = typeCheck(statement, context)
      if (statement.type == 'ReturnStatement') {
        result.push(typeCheckResult)
      }
    }
    popTypeEnvironment(context)

    return result
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
    const type_env = createBlockTypeEnvironment(context, 'globalTypeEnvironment')
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

    let result

    for (const statement of node.body) {
      result = typeCheck(statement, context)
    }
    return result
  }
}

export function typeCheck(node: Node, context: Context) {
  return evaluators[node.type](node, context)
}
