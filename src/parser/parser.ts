/* tslint:disable:max-classes-per-file */
import {
  CharStreams,
  CommonTokenStream,
  ConsoleErrorListener,
  RecognitionException,
  Recognizer,
  Token
} from 'antlr4ts'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'

import { ClangLexer } from '../lang/ClangLexer'
import { ClangParser } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { Context } from '../types'
import { FatalSyntaxError } from './errors'
import { StatementParser } from './statementParser'
import { Program, Statement } from './types'

export class StatementsParser
  extends AbstractParseTreeVisitor<Statement[]>
  implements ClangVisitor<Statement[]>
{
  private statementParser = new StatementParser()

  protected defaultResult(): Statement[] {
    return []
  }

  visitChildren(node: RuleNode): Statement[] {
    let statements: Statement[] = []

    for (let i = 0; i < node.childCount; i++) {
      const stmt = node.getChild(i).accept(this.statementParser)

      if (stmt.type === 'EmptyStatement') {
        continue
      }

      statements = [...statements, stmt]
    }
    return statements
  }

  visitErrorNode(node: ErrorNode): Statement[] {
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

const syntaxErrorListener = <T extends number | Token>(
  _recognizer: Recognizer<T, any>,
  _offendingSymbol: T | undefined,
  line: number,
  charPositionInLine: number,
  _msg: string,
  _e: RecognitionException | undefined
): undefined => {
  throw new FatalSyntaxError(
    {
      start: {
        line: line,
        column: charPositionInLine
      },
      end: {
        line: line,
        column: charPositionInLine + 1
      }
    },
    `Syntax error at Line ${line}:${charPositionInLine}`
  )
}

function addCustomErrorListeners(lexer: ClangLexer, parser: ClangParser): void {
  lexer.removeErrorListener(ConsoleErrorListener.INSTANCE)
  lexer.addErrorListener({
    syntaxError: syntaxErrorListener
  })
  parser.removeErrorListener(ConsoleErrorListener.INSTANCE)
  parser.addErrorListener({
    syntaxError: syntaxErrorListener
  })
}

export function parse(source: string, context: Context): Program | undefined {
  const inputStream = CharStreams.fromString(source)
  const lexer = new ClangLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new ClangParser(tokenStream)
  parser.buildParseTree = true
  addCustomErrorListeners(lexer, parser)
  const statementsParser = new StatementsParser()
  const tree = parser.start()
  const content = tree.accept(statementsParser)

  return {
    type: 'Program',
    body: content
  }
}
