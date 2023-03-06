import { BaseDeclaration, BasePattern, BlockStatement } from 'estree'

interface BaseNode {
  type: string
}

export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

export interface Program extends BaseNode {
  type: 'Program'
  body: Array<Statement>
}

interface BaseFunction extends BaseNode {
  params: Array<Pattern>
  body: BlockStatement
}

export type Function = FunctionDeclaration

export type Statement = Declaration

export type Declaration = FunctionDeclaration | VariableDeclaration

export interface FunctionDeclaration extends BaseFunction, BaseDeclaration {
  type: 'FunctionDeclaration'
  id: Identifier
  body: BlockStatement
  typeDeclaration: Type
}

export interface VariableDeclaration extends BaseDeclaration {
  type: 'VariableDeclaration'
  declarations: VariableDeclarator
  typeDeclaration: Type
}

export interface VariableDeclarator extends BaseNode {
  type: 'VariableDeclarator'
  id: Pattern
  init?: Expression | null | undefined
}

export interface ExpressionMap {
  ArrayExpression: ArrayExpression
  AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
  ConditionalExpression: ConditionalExpression
  Identifier: Identifier
  Literal: Literal
  LogicalExpression: LogicalExpression
  UnaryExpression: UnaryExpression
  UpdateExpression: UpdateExpression
}

type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

export interface ArrayExpression extends BaseExpression {
  type: 'ArrayExpression'
  elements: Array<Expression | null>
}

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: UnaryOperator
  argument: Expression
}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export interface AssignmentExpression extends BaseExpression {
  type: 'AssignmentExpression'
  operator: AssignmentOperator
  left: Pattern
  right: Expression
}

export interface UpdateExpression extends BaseExpression {
  type: 'UpdateExpression'
  operator: UpdateOperator
  argument: Expression
}

export interface LogicalExpression extends BaseExpression {
  type: 'LogicalExpression'
  operator: LogicalOperator
  left: Expression
  right: Expression
}

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression'
  test: Expression
  alternate: Expression
  consequent: Expression
}

export type Pattern = Identifier
export interface Identifier extends BaseNode, BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
  typeDeclaration?: Type
}

export type Literal = Integer | Float | Character

export interface Integer extends BaseNode, BaseExpression {
  type: 'Integer'
  value: number
}

export interface Float extends BaseNode, BaseExpression {
  type: 'Float'
  value: number
}

export interface Character extends BaseNode, BaseExpression {
  valueType: 'char'
  value: string
}

export interface Void extends BaseNode, BaseExpression {
  valueType: 'void'
}

export type UnaryOperator = '-' | '+' | '!' | '&' | '*'

export type BinaryOperator =
  | '=='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | '<<'
  | '>>'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '|'
  | '^'
  | '&'

export type LogicalOperator = '||' | '&&'

export type AssignmentOperator = '=' | '+=' | '-='

export type UpdateOperator = '++' | '--'

export type Type = 'void' | 'char' | 'int' | 'float'
