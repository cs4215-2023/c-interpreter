import { BaseDeclaration } from 'estree'

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
  loc?: SourceLocation | null
}

export interface Program extends BaseNode {
  type: 'Program'
  body: Array<Statement>
}

interface BaseFunction extends BaseNode {
  params: Array<Pattern>
  body: BlockStatement
}

export type Node = Program | Statement | Expression

type BaseStatement = BaseNode

export type Statement =
  | Declaration
  | ExpressionStatement
  | EmptyStatement
  | ReturnStatement
  | BlockStatement
  | IfStatement
  | DoWhileStatement
  | WhileStatement
  | ForStatement

export interface BlockStatement extends BaseStatement {
  type: 'BlockStatement'
  body: Array<Statement>
  innerComments?: Array<Comment> | undefined
}

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export interface ReturnStatement extends BaseStatement {
  type: 'ReturnStatement'
  argument?: Expression | null | undefined
}

export interface IfStatement extends BaseStatement {
  type: 'IfStatement'
  test: Expression
  alternate: Statement
  consequent: Statement
}

export interface DoWhileStatement extends BaseStatement {
  type: 'DoWhileStatement'
  test: Expression
  body: BlockStatement
}

export interface WhileStatement extends BaseStatement {
  type: 'WhileStatement'
  test: Expression
  body: BlockStatement
}

export interface ForStatement extends BaseStatement {
  type: 'ForStatement'
  init: Expression
  test: Expression
  update: Expression
  body: BlockStatement
}

export type Function = FunctionDeclaration

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

export type Expression =
  | IdentifierWithTypeExpression
  | ArrayExpression
  | Literal
  | Identifier
  | UnaryExpression
  | BinaryExpression
  | LogicalExpression
  | ConditionalExpression
  | UpdateExpression
  | EmptyExpression
  | SequenceExpression
  | CallExpression
  | AssignmentExpression

export type BaseExpression = BaseNode

interface BaseCallExpression extends BaseExpression {
  callee: Expression
  arguments: Array<Expression>
}

export interface CallExpression extends BaseCallExpression {
  type: 'CallExpression'
}

export interface IdentifierWithTypeExpression extends BaseExpression {
  type: 'IdentifierWithTypeExpression'
  identifier: Identifier
  identifierType?: Type
}

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

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export type Pattern = Identifier | PointerIdentifier

export interface Identifier extends BaseExpression {
  type: 'Identifier'
  name: string
  primitiveType: PrimitiveType | undefined
}

// Have to be the same type as Identifier otherwise an error is thrown by acorn
export interface PointerIdentifier extends BaseExpression {
  type: 'Identifier'
  name: string
  primitiveType: PrimitiveType | undefined
  pointingAddress: undefined
  pointerAddress: undefined
  isReferenced: boolean
  isDereferenced: boolean
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
  value: null
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

export type Type = PrimitiveType

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
  parameterType: PrimitiveValueType[]
  returnType: PrimitiveValueType
}
