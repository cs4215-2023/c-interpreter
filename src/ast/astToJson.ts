import { isInteger } from 'lodash'

import {
  ArrayExpression,
  AssignmentExpression,
  BinaryExpression,
  BinaryOperator,
  BlockStatement,
  CallExpression,
  ConditionalExpression,
  Expression,
  ExpressionStatement,
  FunctionDeclaration,
  Identifier,
  IfStatement,
  Literal,
  LogicalExpression,
  LogicalOperator,
  Node,
  Pattern,
  PrimitiveType,
  Program,
  ReturnStatement,
  SourceLocation,
  Statement,
  Type,
  UnaryExpression,
  UnaryOperator,
  VariableDeclarationExpression,
  WhileStatement
} from '../parser/types'

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', { start: { line, column }, end: { line, column } })

export const identifier = (name: string, loc?: SourceLocation | null): Identifier => ({
  type: 'Identifier',
  name,
  loc
})

export const literal = (value: string | number | null, loc?: SourceLocation | null): Literal => {
  if (typeof value == 'string') {
    return { type: 'Literal', value, valueType: 'char', loc }
  } else if (value == null) {
    return { type: 'Literal', value, valueType: 'void', loc }
  } else if (typeof value === 'number' && isInteger(value)) {
    return { type: 'Literal', value, valueType: 'int', loc }
  } else {
    return { type: 'Literal', value, valueType: 'float', loc }
  }
}

// primitive: undefined is a possible value
export const primitive = (value: any): Expression => {
  return value === undefined ? identifier('undefined') : literal(value)
}

export const callExpression = (
  callee: Expression,
  args: Expression[],
  loc?: SourceLocation | null
): CallExpression => ({
  type: 'CallExpression',
  callee,
  arguments: args,
  loc
})

export const getVariableDecarationName = (decl: VariableDeclarationExpression) =>
  (decl.identifier as Identifier).name

export const expressionStatement = (expression: Expression): ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression
})

export const blockStatement = (body: Statement[]): BlockStatement => ({
  type: 'BlockStatement',
  body
})

export const program = (body: Statement[]): Program => ({
  type: 'Program',
  body
})

export const returnStatement = (
  argument: Expression,
  loc?: SourceLocation | null
): ReturnStatement => ({
  type: 'ReturnStatement',
  argument,
  loc
})

export const mutateToCallExpression = (node: Node, callee: Expression, args: Expression[]) => {
  node.type = 'CallExpression'
  node = node as CallExpression
  node.callee = callee
  node.arguments = args
}

export const mutateToAssignmentExpression = (node: Node, left: Pattern, right: Expression) => {
  node.type = 'AssignmentExpression'
  node = node as AssignmentExpression
  node.operator = '='
  node.left = left
  node.right = right
}

export const mutateToExpressionStatement = (node: Node, expr: Expression) => {
  node.type = 'ExpressionStatement'
  node = node as ExpressionStatement
  node.expression = expr
}

export const mutateToReturnStatement = (node: Node, expr: Expression) => {
  node.type = 'ReturnStatement'
  node = node as ReturnStatement
  node.argument = expr
}

export const logicalExpression = (
  operator: LogicalOperator,
  left: Expression,
  right: Expression,
  loc?: SourceLocation | null
): LogicalExpression => ({
  type: 'LogicalExpression',
  operator,
  left,
  right,
  loc
})

export const mutateToConditionalExpression = (
  node: Node,
  test: Expression,
  consequent: Expression,
  alternate: Expression
) => {
  node.type = 'ConditionalExpression'
  node = node as ConditionalExpression
  node.test = test
  node.consequent = consequent
  node.alternate = alternate
}

export const conditionalExpression = (
  test: Expression,
  consequent: Expression,
  alternate: Expression,
  loc?: SourceLocation | null
): ConditionalExpression => ({
  type: 'ConditionalExpression',
  test,
  consequent,
  alternate,
  loc
})

export const arrayExpression = (elements: Expression[]): ArrayExpression => ({
  type: 'ArrayExpression',
  elements
})

export const assignmentExpression = (
  left: Identifier,
  right: Expression
): AssignmentExpression => ({
  type: 'AssignmentExpression',
  operator: '=',
  left,
  right
})

export const binaryExpression = (
  operator: BinaryOperator,
  left: Expression,
  right: Expression,
  loc?: SourceLocation | null
): BinaryExpression => ({
  type: 'BinaryExpression',
  operator,
  left,
  right,
  loc
})

export const unaryExpression = (
  operator: UnaryOperator,
  argument: Expression,
  loc?: SourceLocation | null
): UnaryExpression => ({
  type: 'UnaryExpression',
  operator,
  argument,
  loc
})

export const functionDeclaration = (
  id: Identifier,
  params: Pattern[],
  body: BlockStatement,
  typeDeclaration: PrimitiveType,
  loc?: SourceLocation | null
): FunctionDeclaration => ({
  type: 'FunctionDeclaration',
  id,
  params,
  body,
  loc,
  typeDeclaration
})

export const variableDeclaration = (
  identifier: Identifier,
  identifierType: Type
): VariableDeclarationExpression => ({
  type: 'VariableDeclarationExpression',
  identifier,
  identifierType
})

export const ifStatement = (
  test: Expression,
  consequent: BlockStatement,
  alternate: Statement,
  loc?: SourceLocation | null
): IfStatement => ({
  type: 'IfStatement',
  test,
  consequent,
  alternate,
  loc
})

export const whileStatement = (
  body: BlockStatement,
  test: Expression,
  loc?: SourceLocation | null
): WhileStatement => ({
  type: 'WhileStatement',
  test,
  body,
  loc
})
