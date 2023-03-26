import * as errors from '../errors/errors'
import { Expression, ExpressionStatement, Identifier, Node, Statement } from '../parser/types'
import {
  CallInstruction,
  ClosureInstruction,
  Command,
  Context,
  Environment,
  Frame,
  TypeEnvironment
} from '../types'
import { checkType } from '../utils/runtime/checkType'
import { currentEnvironment } from './environment'
import { handleRuntimeError } from './errors'
import { currentTypeEnvironment } from './typeEnvironment'

export function checkNumberOfArguments(
  context: Context,
  command: CallInstruction,
  lambda: ClosureInstruction
) {
  if (lambda.parameters.length != command.arity) {
    return handleRuntimeError(
      context,
      new errors.InvalidNumberOfArguments(command, lambda.parameters.length, command.arity)
    )
  }

  return undefined
}

export function scanFrameVariables(nodes: Statement[]): [Frame, Frame] {
  let var_arr = {}
  let type_arr = {}
  for (let node of nodes) {
    node = node as ExpressionStatement
    const values = makeVariableDeclarations(node)
    const types = getFrameTypes(node)
    var_arr = { ...var_arr, ...values }
    type_arr = { ...type_arr, ...types }
  }
  // var_arr = var_arr.filter((item, pos) => var_arr.indexOf(item) === pos)
  return [var_arr, type_arr]
}

// TODO: Add identifier type to type environment
export function makeVariableDeclarations(node: Statement | Expression): Frame {
  let arr = {}
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = makeVariableDeclarations(expr)
      arr = { ...arr, ...res }
    }
  } else if (node.type == 'ExpressionStatement') {
    return makeVariableDeclarations(node.expression)
  } else if (node.type == 'AssignmentExpression') {
    const left = node.left as Identifier

    arr[left.name] = DECLARED_BUT_NOT_YET_ASSIGNED
  } else if (node.type == 'Identifier') {
    arr[node.name] = DECLARED_BUT_NOT_YET_ASSIGNED
  }
  return arr
}

export function getFrameTypes(node: Statement | Expression): Frame {
  let arr = {}
  if (node.type == 'SequenceExpression') {
    for (const expr of node.expressions) {
      const res = getFrameTypes(expr)
      arr = { ...arr, ...res }
    }
  } else if (node.type == 'ExpressionStatement') {
    return getFrameTypes(node.expression)
  } else if (node.type == 'AssignmentExpression') {
    return getFrameTypes(node.left)
  } else if (node.type == 'VariableDeclarationExpression') {
    //might want to do for functions soon)
    arr[node.identifier.name] = node.identifierType
  } else if (node.type == 'ArrayDeclarationExpression') {
    arr[node.identifier.name] = node.arrayType //maybe should just combine w vardeclaration lmao
  }
  return arr
}

/* 
Gets a variable from the environment based on the name.
*/
export const getIdentifierValueFromEnvironment = (context: Context, name: string) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      console.log(environment.head)
      return environment.head[name]
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export const setValueToIdentifier = (
  command: Command,
  context: Context,
  name: string,
  value: any
) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      const type = getType(context, name)
      console.log(type, value)
      checkType(context, type, value, command)
      environment.head[name] = value
      return value
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

const DECLARED_BUT_NOT_YET_ASSIGNED = Symbol('Used to implement hoisting')

export function declareIdentifier(context: Context, name: string, node: Node) {
  const environment = currentEnvironment(context)
  const typeEnvironment = currentTypeEnvironment(context)
  if (environment.head.hasOwnProperty(name)) {
    return handleRuntimeError(
      context,
      new errors.ExceptionError(new Error('Redeclared'), node.loc!)
    )
  }
  environment.head[name] = DECLARED_BUT_NOT_YET_ASSIGNED
  if (node.type == 'VariableDeclarationExpression') {
    typeEnvironment.head[name] = node.identifierType
  } else if (node.type == 'ArrayDeclarationExpression') {
    typeEnvironment.head[name] = node.arrayType
  }
  return environment
}

export function getVariable(context: Context, name: string) {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      if (environment.head[name] === DECLARED_BUT_NOT_YET_ASSIGNED) {
        return handleRuntimeError(
          context,
          new errors.UnassignedVariable(name, context.runtime.nodes[0])
        )
      } else {
        return environment.head[name]
      }
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

export function getType(context: Context, name: string) {
  let environment: TypeEnvironment | null = currentTypeEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      return environment.head[name]
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}
