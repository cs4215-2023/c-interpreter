/*
	This file contains definitions of some interfaces and classes that are used in Source (such as
	error-related classes).
*/

/* tslint:disable:max-classes-per-file */

import { CallExpression, Node, SourceLocation } from '../src/parser/types'
import { EnvTree } from './createContext'

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
    environmentTree: EnvTree
    environments: Environment[]
    nodes: Node[]
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
}

export interface Finished {
  status: 'finished'
  context: Context
  value: Value
}

export type Result = Finished | Error

export interface Scheduler {
  run(it: IterableIterator<Value>, context: Context): Promise<Result>
}

/**
 * Each element in the TypeEnvironment array represents a different scope
 * (e.g. first element is the global scope, last element is the closest).
 * Within each scope, variable types/declaration kinds, as well as type aliases, are stored.
 */
export type TypeEnvironment = {
  // TODO
}[]
