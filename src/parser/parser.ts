/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import * as es from 'estree'

import { ClangLexer } from '../lang/ClangLexer'
import { ClangParser } from '../lang/ClangParser'
import { Context, ErrorSeverity } from '../types'
import { FatalSyntaxError } from './errors'
import { convertSource } from './expressionParser'

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'Clang') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new ClangLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new ClangParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.expression()
      program = convertSource(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
