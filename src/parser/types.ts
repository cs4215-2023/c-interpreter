import { BaseDeclaration, BlockStatement } from 'estree'

export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

export interface SourceLocation {
  source?: string | null
  start: Position
  end: Position
}

interface BaseNode {
  type: string
  loc?: SourceLocation
}

export interface Program extends BaseNode {
  type: 'Program'
  body: Array<Statement>
}

interface BaseFunction extends BaseNode {
  params: Array<Pattern>
  body: BlockStatement
}

type BaseStatement = BaseNode

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export type Function = FunctionDeclaration

export type Statement = Declaration | ExpressionStatement | EmptyStatement

export type Declaration = FunctionDeclaration | VariableDeclaration

export interface FunctionDeclaration extends BaseFunction, BaseExpression {
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

// export interface ExpressionMap {
//   ArrayExpression: ArrayExpression
//   AssignmentExpression: AssignmentExpression
//   BinaryExpression: BinaryExpression
//   ConditionalExpression: ConditionalExpression
//   Identifier: Identifier
//   Literal: Literal
//   LogicalExpression: LogicalExpression
//   UnaryExpression: UnaryExpression
//   UpdateExpression: UpdateExpression
// }

export type Expression =
  | ArrayExpression
  | Literal
  | Identifier
  | UnaryExpression
  | BinaryExpression
  | LogicalExpression
  | ConditionalExpression
  | UpdateExpression
  | EmptyExpression

// TODO: add type of expression

export type BaseExpression = BaseNode

export interface ArrayExpression extends BaseExpression {
  type: 'ArrayExpression'
  elements: Array<Expression | null>
}

export interface EmptyExpression extends BaseExpression {
  type: 'EmptyExpression'
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
export interface Identifier extends BaseExpression {
  type: 'Identifier'
  name: string
  typeDeclaration?: Type
}

/**
 * PRIMITIVE LITERAL TYPES
 */

interface BaseLiteral extends BaseNode {
  type: 'Literal'
  valueType: string
}

export interface Integer extends BaseLiteral {
  valueType: 'int'
  value: number
}

export interface Character extends BaseLiteral {
  valueType: 'char'
  value: string
}

export interface Float extends BaseLiteral {
  valueType: 'float'
  value: number
}

export interface Void extends BaseLiteral {
  valueType: 'void'
}
export type Literal = Integer | Float | Character | Void

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

export type Type = PrimitiveType | FunctionType

export type PrimitiveValueType = 'int' | 'float' | 'char' | 'void'

export type SignedType = 'signed' | 'unsigned'

export interface PrimitiveType {
  type: 'PrimitiveType'
  signed: SignedType | undefined
  valueType: PrimitiveValueType
}

export interface FunctionType {
  type: 'FunctionType'
  signed: SignedType | undefined
  parameterType: Type[]
  returnType: Type
}
