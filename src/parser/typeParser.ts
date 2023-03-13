import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { TypeContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import { PrimitiveValueType, Type } from './types'

export class TypeParser extends AbstractParseTreeVisitor<Type> implements ClangVisitor<Type> {
  protected defaultResult(): Type {
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: 'void'
    }
  }

  visit(ctx: ParseTree): Type {
    console.log(ctx.text)
    return ctx.accept(this)
  }

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

  visitPrimitiveType(ctx: TypeContext): Type {
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: ctx.text as PrimitiveValueType
    }
  }

  visitFunctionType(ctx: TypeContext): Type {
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: ctx.text as PrimitiveValueType
    }
  }
}
