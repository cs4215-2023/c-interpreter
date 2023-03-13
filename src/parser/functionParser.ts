import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import * as es from 'estree'

import { FunctionContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { StatementParser } from './statementParser'
import { tokenToIdentifierWrapper } from './util'

export class FunctionParser
  extends AbstractParseTreeVisitor<es.Statement>
  implements ClangVisitor<es.Statement>
{
  protected defaultResult(): es.Statement {
    return { type: 'EmptyStatement' }
  }

  bodyWrapper(ctx: FunctionContext): es.Statement[] {
    const statements = new StatementParser().visit(ctx._body)
    if (statements.type == 'BlockStatement') {
      return statements.body
    } else {
      return [statements]
    }
  }

  paramsWrapper(ctx: FunctionContext): es.Pattern[] {
    const params = new ExpressionParser().visit(ctx._params)
    return params
  }

  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    const statements: es.Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this))
    }
    return {
      type: 'BlockStatement',
      body: statements
    }
  }

  visitErrorNode(node: ErrorNode): es.Statement {
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

  visitFunctionDeclaration(ctx: FunctionContext): es.Statement {
    return {
      type: 'FunctionDeclaration',
      id: tokenToIdentifierWrapper(ctx._funcName),
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) },
      params: this.paramsWrapper(ctx)
    }
  }
}
