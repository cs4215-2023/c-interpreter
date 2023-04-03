import { FLOAT_TYPE, INT_TYPE, VOID_TYPE } from '../constants'
import { arity, builtin_functions } from '../interpreter/defaults/functions'
import { handleRuntimeError, InterpreterError } from '../interpreter/errors'
import { Identifier, Node } from '../parser/types'
import { Command, Context } from '../types'
import { TypeError } from './errors'
import { checkLeftRightNotVoid } from './expressionChecks/checkBinaryOps'
import { checkIdentifierNotUndefined } from './expressionChecks/checkIdentifier'
import { checkVoid } from './expressionChecks/checkSingleVoid'
import {
  createBlockTypeEnvironment,
  popTypeEnvironment,
  pushTypeEnvironment
} from './typeEnvironment'
import { Builtin, ClosureType } from './types'
import { assignFunctionType, declareIdentifierType, getVariableType } from './utils'

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

    checkIdentifierNotUndefined(node)
    return getVariableType(context, node.name).valueType
  },

  TypedIdentifier: function* (command: Command, context: Context) {
    if (command.type != 'TypedIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(command))
    }

    checkIdentifierNotUndefined(command)
    return command.typeDeclaration.valueType
  },

  ArrayDeclarationExpression: function* (node: Node, context: Context) {
    if (node.type != 'ArrayDeclarationExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const arrayType = node.arrayType.valueType
    declareIdentifierType(context, node.identifier.name, node)

    if (node.array === undefined) {
      context.runtime.stash.push(node.identifier)
    } else {
      const arrayElements = node.array.elements
      for (let i = arrayElements.length - 1; i >= 0; i--) {
        const elementType = yield* typeCheck(arrayElements[i]!, context)
        if (elementType != arrayType) {
          throw handleRuntimeError(context, new TypeError(node, arrayType, elementType))
        }
      }
    }
  },

  ArrayIdentifier: function* (node: Node, context: Context) {
    if (node.type != 'ArrayIdentifier') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }
    return getVariableType(context, node.name).valueType
  },

  CallExpression: function* (node: Node, context: Context) {
    if (node.type != 'CallExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const closure = getVariableType(context, (node.callee as Identifier).name)

    if (closure.type == 'Builtin') {
      return
    }

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
    checkVoid(node, argumentType, context)
    return argumentType == FLOAT_TYPE ? FLOAT_TYPE : INT_TYPE
  },

  BinaryExpression: function* (node: Node, context: Context) {
    if (node.type != 'BinaryExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const left = yield* typeCheck(node.left, context)
    const right = yield* typeCheck(node.right, context)

    checkLeftRightNotVoid(node, left, right, context)

    return left == FLOAT_TYPE || right == FLOAT_TYPE ? FLOAT_TYPE : INT_TYPE
  },

  ConditionalExpression: function* (node: Node, context: Context) {
    if (node.type != 'ConditionalExpression') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = yield* typeCheck(node.test, context)
    checkVoid(node, test, context)

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

    checkLeftRightNotVoid(node, left, right, context)

    return left == FLOAT_TYPE || right == FLOAT_TYPE ? FLOAT_TYPE : INT_TYPE
  },

  ForStatement: function* (node: Node, context: Context) {
    if (node.type != 'ForStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    yield* typeCheck(node.init, context)
    const testType = yield* typeCheck(node.test, context)
    checkVoid(node, testType, context)

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
    checkVoid(node, argumentType, context)

    return argumentType == FLOAT_TYPE ? FLOAT_TYPE : INT_TYPE
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

    if (returnType.length == 0 && functionClosure.returnType.valueType != VOID_TYPE) {
      throw handleRuntimeError(
        context,
        new TypeError(node, functionClosure.returnType.valueType, VOID_TYPE)
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
      return VOID_TYPE
    }

    return yield* typeCheck(node.argument, context)
  },

  WhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'WhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    const test = yield* typeCheck(node.test, context)

    checkVoid(node, test, context)

    yield* typeCheck(node.body, context)
  },

  DoWhileStatement: function* (node: Node, context: Context) {
    if (node.type != 'DoWhileStatement') {
      throw handleRuntimeError(context, new InterpreterError(node))
    }

    // type check body first
    yield* typeCheck(node.body, context)
    const test = yield* typeCheck(node.test, context)

    checkVoid(node, test, context)
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

    const global_frame = {}
    for (const key in builtin_functions) {
      const builtin = builtin_functions[key] as Builtin
      builtin.arity = arity(builtin.apply)
      global_frame[key] = builtin
    }

    // Create global environment
    const type_env = createBlockTypeEnvironment(context, 'globalTypeEnvironment', global_frame)
    pushTypeEnvironment(context, type_env)

    for (const statement of node.body) {
      yield* typeCheck(statement, context)
    }
  }
}

export function* typeCheck(node: Node, context: Context) {
  const result = yield* typeCheckers[node.type](node, context)
  return result
}
