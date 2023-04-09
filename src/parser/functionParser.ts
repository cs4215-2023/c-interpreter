import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'

import { FunctionContext, FunctionDeclarationContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { StatementParser } from './statementParser'
import { TypeParser } from './typeParser'
import { Statement, TypedIdentifier } from './types'
import { tokenToIdentifierWrapper } from './util'

export class FunctionParser
  extends AbstractParseTreeVisitor<Statement>
  implements ClangVisitor<Statement>
{
  protected defaultResult(): Statement {
    return { type: 'EmptyStatement' }
  }

  bodyWrapper(ctx: FunctionContext): Statement[] {
    const body = ctx._body

    if (body == undefined) {
      return [this.defaultResult()]
    }

    const statements = new StatementParser().visit(body)

    if (statements.type == 'BlockStatement') {
      return statements.body
    } else {
      return [statements]
    }
  }

  paramsWrapper(ctx: FunctionContext): TypedIdentifier[] {
    if (ctx._params == undefined) {
      return []
    }

    const params = ctx._params
    const expressionParser = new ExpressionParser()
    const patterns: TypedIdentifier[] = []

    for (let i = 0; i < params.childCount; i++) {
      const child = params.getChild(i)
      // brute force comma work around
      if (child.text != ',') {
        patterns.push(expressionParser.visit(child))
      }
    }

    return patterns
  }

  visitErrorNode(node: ErrorNode): Statement {
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

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): Statement {
    return this.visitFunctionProperties(ctx.function())
  }

  visitFunctionProperties(ctx: FunctionContext): Statement {
    const id = tokenToIdentifierWrapper(ctx._id)
    const type = new TypeParser().visit(ctx._idType)

    return {
      type: 'FunctionDeclaration',
      id: id,
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) },
      params: this.paramsWrapper(ctx),
      typeDeclaration: type
    }
  }
}
