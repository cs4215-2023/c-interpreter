/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import * as es from 'estree'

import { ClangLexer } from '../lang/ClangLexer'
import { ClangParser } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { Context, ErrorSeverity } from '../types'
import { FatalSyntaxError } from './errors'
import { StatementParser } from './statementParser'

export class StatementsParser
  extends AbstractParseTreeVisitor<es.Statement[]>
  implements ClangVisitor<es.Statement[]>
{
  private statementParser = new StatementParser()

  protected defaultResult(): es.Statement[] {
    return []
  }

  visitChildren(node: RuleNode): es.Statement[] {
    let statements: es.Statement[] = []

    for (let i = 0; i < node.childCount; i++) {
      const stmt = node.getChild(i).accept(this.statementParser)

      if (stmt.type === 'EmptyStatement') {
        continue
      }

      statements = [...statements, stmt]
    }
    return statements
  }

  visitErrorNode(node: ErrorNode): es.Statement[] {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

export function parse(source: string, context: Context): es.Program | undefined {
  let content: es.Statement[] | undefined

  if (context.variant === 'Clang') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new ClangLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new ClangParser(tokenStream)
    parser.buildParseTree = true
    const statementsParser = new StatementsParser()
    try {
      const tree = parser.start()
      content = tree.accept(statementsParser)
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
        body: content
      }
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
