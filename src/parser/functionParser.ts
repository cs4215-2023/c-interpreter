import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import * as es from 'estree'

import { FunctionContext, FunctionDeclarationContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { StatementParser } from './statementParser'
import { TypeParser } from './typeParser'
import { tokenToIdentifierWrapper } from './util'

export class FunctionParser
  extends AbstractParseTreeVisitor<es.Statement>
  implements ClangVisitor<es.Statement>
{
  protected defaultResult(): es.Statement {
    return { type: 'EmptyStatement' }
  }

  bodyWrapper(ctx: FunctionContext): es.Statement[] {
    console.log('body wapper')
    const statements = new StatementParser().visit(ctx._body)
    if (statements.type == 'BlockStatement') {
      return statements.body
    } else {
      return [statements]
    }
  }

  paramsWrapper(ctx: FunctionContext): es.Pattern[] {
    console.log('params wrapper')
    const params = new ExpressionParser().visit(ctx._params)
    console.log(params)
    return params
  }

  visit(tree: ParseTree): es.Statement {
    console.log('in func parser')
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    console.log(node.childCount)
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

  visitFunctionDeclaration(ctx: FunctionDeclarationContext): es.Statement {
    return this.visitFunctionProperties(ctx.function())
  }

  visitFunctionProperties(ctx: FunctionContext): es.Statement {
    console.log('visit function declaration')
    const type = new TypeParser().visit(ctx._funcType)
    return {
      type: 'FunctionDeclaration',
      id: tokenToIdentifierWrapper(ctx._funcName),
      body: { type: 'BlockStatement', body: this.bodyWrapper(ctx) },
      params: this.paramsWrapper(ctx)
    }
  }
}
