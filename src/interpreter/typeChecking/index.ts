import { Identifier, Node } from '../../parser/types'
import { Command, Context } from '../../types'
import { checkIdentifier } from '../../utils/runtime/checkIdentifier'
import { handleRuntimeError, InterpreterError } from '../errors'
import { declareIdentifierType, getIdentifierType } from '../utils'
import { TypeError } from './errors'
import {
  createBlockTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import { ClosureType } from './types'
import { assignFunctionType } from './utils'

export type TypeChecker<T extends Node> = (node: T, context: Context) => any

export const typeCheckers: { [nodeType: string]: TypeChecker<Node> } = {
  Literal: function* (node: Node, context: Context) {
    if (node.type != 'Literal') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    if (node.value === undefined || node.valueType == undefined) {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return node.valueType
  },

  SequenceExpression: function* (node: Node, context: Context) {
    if (node.type != 'SequenceExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    let result

    for (const expr of node.expressions) {
      result = yield* typeCheck(expr, context)
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
    declareIdentifierType(context, identifier.name, node)
    return node.identifierType.valueType
  },

  Identifier: function* (node: Node, context: Context) {
    if (node.type != 'Identifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    checkIdentifier(node)

    return getIdentifierType(context, node.name).valueType
  },

  TypedIdentifier: function* (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }
    return command.typeDeclaration.valueType
  },

  CallExpression: function* (node: Node, context: Context) {
    if (node.type != 'CallExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const closure = getIdentifierType(context, (node.callee as Identifier).name) as ClosureType
    const args = []
    for (const expression of node.arguments) {
      if (expression.type != 'EmptyExpression') {
        args.push(expression)
      }
    }

    if (args.length != closure.parameterTypes.length) {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    for (let i = 0; i < args.length; i++) {
      yield* typeCheck(
        {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'VariableDeclarationExpression',
            identifier: closure.parameterTypes[i],
            identifierType: closure.parameterTypes[i].typeDeclaration
          },
          right: args[i]
        },
        context
      )
    }

    return closure.returnType.valueType
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

    const argumentType = yield* typeCheck(node.argument, context)
    if (argumentType == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return argumentType == 'float' ? 'float' : 'int'
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = yield* typeCheck(node.left, context)
    const right = yield* typeCheck(node.right, context)

    if (left == 'void' || right == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return left == 'float' || right == 'float' ? 'float' : 'int'
  },

  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = yield* typeCheck(node.test, context)
    if (test == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const returnTypes = []

    const consequent = yield* typeCheck(node.consequent, context)
    const alternate = yield* typeCheck(node.alternate, context)

    if (consequent instanceof Array) {
      returnTypes.push(...consequent)
    } else {
      returnTypes.push(consequent)
    }

    if (alternate instanceof Array) {
      returnTypes.push(...alternate)
    } else {
      returnTypes.push(alternate)
    }
    return returnTypes
  },

  LogicalExpression: function* (node: Node, context: Context) {
    if (node.type != 'LogicalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = yield* typeCheck(node.left, context)
    const right = yield* typeCheck(node.right, context)

    if (left == 'void' || right == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return left == 'float' || right == 'float' ? 'float' : 'int'
  },

  ForStatement: function* (node: Node, context: Context) {
    if (node.type != 'ForStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    yield* typeCheck(node.init, context)
    const testType = yield* typeCheck(node.test, context)
    if (testType == 'void') {
      throw handleRuntimeError(context, new TypeError(node, 'int, float or char', 'void'))
    }

    yield* typeCheck(node.update, context)
    yield* typeCheck(node.body, context)
  },

  AssignmentExpression: function* (node: Node, context: Context) {
    if (node.type != 'AssignmentExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = yield* typeCheck(node.left, context)
    const right = yield* typeCheck(node.right, context)
    if (left != right) {
      throw handleRuntimeError(context, new TypeError(node, left, right))
    }
  },

  UpdateExpression: function* (node: Node, context: Context) {
    if (node.type != 'UpdateExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const argumentType = yield* typeCheck(node.argument, context)
    if (argumentType == 'void') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    return argumentType == 'float' ? 'float' : 'int'
  },

  FunctionDeclaration: function* (node: Node, context: Context) {
    if (node.type != 'FunctionDeclaration') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const functionClosureEnv = createBlockTypeEnvironment(context, 'FunctionClosure')
    pushTypeEnvironment(context, functionClosureEnv)

    const functionClosure: ClosureType = {
      type: 'Closure',
      parameterTypes: node.params,
      returnType: node.typeDeclaration
    }

    for (const param of node.params) {
      yield* typeCheck(
        {
          type: 'VariableDeclarationExpression',
          identifier: param,
          identifierType: param.typeDeclaration
        },
        context
      )
    }

    assignFunctionType(node, context, node.id.name, functionClosure)

    const returnType: [] = yield* typeCheck(node.body, context)

    // loop through since there may be multiple return values.

    if (returnType.length == 0 && functionClosure.returnType.valueType != 'void') {
      throw handleRuntimeError(
        context,
        new TypeError(node, functionClosure.returnType.valueType, 'void')
      )
    }
    for (const type of returnType) {
      if (type != undefined && type != functionClosure.returnType.valueType) {
        throw handleRuntimeError(
          context,
          new TypeError(node, functionClosure.returnType.valueType, type)
        )
      }
    }
  },

  IfStatement: function* (node: Node, context: Context) {
    if (node.type != 'IfStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    yield* typeCheck(node.test, context)
    const returnTypes = []
    returnTypes.push(...(yield* typeCheck(node.consequent, context)))
    returnTypes.push(...(yield* typeCheck(node.alternate, context)))
    return returnTypes
  },

  ExpressionStatement: function* (node: Node, context: Context) {
    if (node.type != 'ExpressionStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    yield* typeCheck(node.expression, context)
  },

  ReturnStatement: function* (node: Node, context: Context) {
    if (node.type != 'ReturnStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    if (node.argument == undefined || node.argument == null) {
      return 'void'
    }

    return yield* typeCheck(node.argument, context)
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = yield* typeCheck(node.test, context)

    if (test == 'void') {
      throw handleRuntimeError(context, new TypeError(node, 'int, float or char', 'void'))
    }

    yield* typeCheck(node.body, context)
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    // type check body first
    yield* typeCheck(node.body, context)
    const test = yield* typeCheck(node.test, context)

    if (test == 'void') {
      throw handleRuntimeError(context, new TypeError(node, 'int, float or char', 'void'))
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
      const typeCheckResult = yield* typeCheck(statement, context)
      if (typeCheckResult != undefined) {
        if (typeCheckResult instanceof Array) {
          result.push(...typeCheckResult)
        } else {
          result.push(typeCheckResult)
        }
      }
    }
    popTypeEnvironment(context)

    return result
  },

  EmptyStatement: function* (node: Node, context: Context) {
    if (node.type != 'EmptyStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return [undefined]
  },

  Program: function* (node: Node, context: Context) {
    if (node.type !== 'Program') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    // Create global environment
    context.numberOfOuterEnvironments += 1
    const type_env = createBlockTypeEnvironment(context, 'globalTypeEnvironment')
    pushTypeEnvironment(context, type_env)

    for (const statement of node.body) {
      yield* typeCheck(statement, context)
    }
  }
}

// TODO:
// 1) testing
// 2) return type
export function* typeCheck(node: Node, context: Context) {
  const result = yield* typeCheckers[node.type](node, context)
  return result
}
