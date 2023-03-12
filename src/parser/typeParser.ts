import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { IdentifierWithTypeContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import ExpressionParser from './expressionParser'
import { PrimitiveValueType, SignedType, Type } from './types'

// TODO: Validate the correctness of this
export class typeParser extends AbstractParseTreeVisitor<Type> implements ClangVisitor<Type> {
  expressionParser = new ExpressionParser()

  private static instance: typeParser

  // singleton
  static getInstance(): typeParser {
    if (!this.instance) {
      this.instance = new typeParser()
    }
    return this.instance
  }

  protected defaultResult(): Type {
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: 'void'
    }
  }

  visit(ctx: ParseTree): Type {
    return ctx.accept(this)
  }

  // no children to visit?
  visitChildren(node: RuleNode): Type {
    return this.defaultResult()
  }

  visitTerminal(node: TerminalNode): Type {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): Type {
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

  visitIdentifierWithType(ctx: IdentifierWithTypeContext): Type {
    const idType = ctx._idType
    return {
      type: 'PrimitiveType',
      signed: idType._signed.text as SignedType,
      valueType: idType._primType.text as PrimitiveValueType
    }
  }
}
