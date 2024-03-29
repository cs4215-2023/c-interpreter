/*
  This file contains definitions of some interfaces and classes that are used in Source (such as
  error-related classes).
*/

/* tslint:disable:max-classes-per-file */

import {
  ArrayIdentifier,
  BinaryOperator,
  BlockStatement,
  CallExpression,
  Expression,
  Identifier,
  LogicalOperator,
  Node,
  Pattern,
  SourceLocation,
  Statement,
  Type,
  UnaryOperator
} from '../src/parser/types'
import { Stack } from './utils/stack'

/**
 * Defines functions that act as built-ins, but might rely on
 * different implementations. e.g display() in a web application.
 */

export enum ErrorType {
  SYNTAX = 'Syntax',
  TYPE = 'Type',
  RUNTIME = 'Runtime'
}

export enum ErrorSeverity {
  WARNING = 'Warning',
  ERROR = 'Error'
}

// any and all errors ultimately implement this interface. as such, changes to this will affect every type of error.
export interface SourceError {
  type: ErrorType
  severity: ErrorSeverity
  location: SourceLocation
  explain(): string
  elaborate(): string
}

export type ExecutionMethod = 'native' | 'interpreter' | 'auto'

export enum Chapter {
  CLANG = 1
}

export enum Variant {
  DEFAULT = 'Clang'
}

export interface Language {
  chapter: Chapter
  variant: Variant
}

export interface Context<T = any> {
  /** The external symbols that exist in the Context. */
  externalSymbols: string[]

  /** All the errors gathered */
  errors: SourceError[]

  /** Runtime Sepecific state */
  runtime: {
    break: boolean
    debuggerOn: boolean
    isRunning: boolean
    environments: Environment[]
    typeEnv: TypeEnvironment[]
    nodes: Node[]
    agenda: Stack<T>
    stash: Stack<T>
  }

  numberOfOuterEnvironments: number

  prelude: string | null

  /**
   * Used for storing external properti
   * For e.g, this can be used to store some application-related
   * context for use in your own built-in functions (like `display(a)`)
   */
  externalContext?: T

  /**
   * Describes the language processor to be used for evaluation
   */
  executionMethod: ExecutionMethod

  /**
   * Describes the strategy / paradigm to be used for evaluation
   * Examples: lazy, concurrent or nondeterministic
   */
  variant: Variant

  /**
   * Contains the evaluated code that has not yet been typechecked.
   */
  unTypecheckedCode: string[]

  /**
   * Code previously executed in this context
   */
  previousCode: string[]
}

// tslint:disable:no-any
export interface Frame {
  [name: string]: any
}
export type Value = any
// tslint:enable:no-any

export interface Environment {
  id: string
  name: string
  tail: Environment | null
  callExpression?: CallExpression
  head: Frame
  thisContext?: Value
}

export interface Error {
  status: 'error'
  error: SourceError
}

export interface Finished {
  status: 'finished'
  context: Context
  value: Value
}

export type Result = Finished | Error

export interface Scheduler {
  run(it: Value, context: Context): Promise<Result>
}

/**
 * Each element in the TypeEnvironment array represents a different scope
 * (e.g. first element is the global scope, last element is the closest).
 * Within each scope, variable types/declaration kinds, as well as type aliases, are stored.
 */
export type TypeEnvironment = {
  id: string
  name: string
  tail: TypeEnvironment | null
  callExpression?: CallExpression
  head: Frame
  thisContext?: Value
}

export type Command =
  | Node
  | ArrayIdentifierInstruction
  | UnaryExpressionInstruction
  | BinaryExpressionInstruction
  | ConditionalExpressionInstruction
  | LogicalExpressionInstruction
  | AssignmentExpressionInstruction
  | IfStatementInstruction
  | WhileStatementInstruction
  | DoWhileStatementInstruction
  | PopInstruction
  | ReturnInstruction
  | EnvironmentRestorationInstruction
  | FunctionDeclarationInstruction
  | LambdaExpressionInstruction
  | CallInstruction
  | MarkInstruction
  | ClosureInstruction

type Instruction = {
  loc?: SourceLocation
}

export interface ArrayIdentifierInstruction extends Instruction {
  type: 'ArrayIdentifier_i'
}

export interface UnaryExpressionInstruction extends Instruction {
  type: 'UnaryExpression_i'
  operator: UnaryOperator
}

export interface BinaryExpressionInstruction extends Instruction {
  type: 'BinaryExpression_i'
  operator: BinaryOperator
}

export interface ConditionalExpressionInstruction extends Instruction {
  type: 'ConditionalExpression_i'
  alternate: Expression
  consequent: Expression
}

export interface LogicalExpressionInstruction extends Instruction {
  type: 'LogicalExpression_i'
  operator: LogicalOperator
}

export interface AssignmentExpressionInstruction extends Instruction {
  type: 'AssignmentExpression_i'
  symbol?: Identifier | ArrayIdentifier
}

export interface IfStatementInstruction extends Instruction {
  type: 'IfStatement_i'
  alternate: Statement
  consequent: Statement
}

export interface WhileStatementInstruction extends Instruction {
  type: 'WhileStatement_i'
  test: Expression
  body: BlockStatement
}

export interface DoWhileStatementInstruction extends Instruction {
  type: 'DoWhileStatement_i'
  test: Expression
  body: BlockStatement
}

export interface PopInstruction extends Instruction {
  type: 'Pop_i'
}

export interface ReturnInstruction extends Instruction {
  type: 'ReturnStatement_i'
}

export interface EnvironmentRestorationInstruction extends Instruction {
  type: 'EnvironmentRestoration_i'
}

export interface FunctionDeclarationInstruction extends Instruction {
  type: 'FunctionDeclaration_i'
  id: Identifier
  parameters: Pattern[]
  body: BlockStatement
  typeDeclaration: Type
}

export interface LambdaExpressionInstruction extends Instruction {
  type: 'LambdaExpression_i'
  parameters: Array<Expression>
  body: BlockStatement
  typeDeclaration: Type
}

export interface CallInstruction extends Instruction {
  type: 'CallExpression_i'
  arity: number
  loc?: SourceLocation
}

export interface MarkInstruction extends Instruction {
  type: 'Mark_i'
  loc?: SourceLocation
}

export interface ClosureInstruction extends Instruction {
  type: 'Closure_i'
  parameters: Array<Expression>
  body: BlockStatement
  loc?: SourceLocation
  typeDeclaration: Type
}
