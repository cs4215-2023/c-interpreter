/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import * as es from 'estree'

import { ClangLexer } from '../lang/ClangLexer'
import { ClangParser } from '../lang/ClangParser'
import { Context, ErrorSeverity } from '../types'
import { FatalSyntaxError } from './errors'
import { StatementParser } from './statementParser'

export function parse(source: string, context: Context): es.Program | undefined {
  let content: es.Statement | undefined

  if (context.variant === 'Clang') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new ClangLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new ClangParser(tokenStream)
    parser.buildParseTree = true
    const statementParser = StatementParser.getInstance()
    try {
      const tree = parser.start()
      content = tree.accept(statementParser)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (content && !hasErrors) {
      return {
        type: 'Program',
        sourceType: 'script',
        body: [content]
      }
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
