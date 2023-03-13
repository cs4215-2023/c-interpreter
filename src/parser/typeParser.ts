import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'

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
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: ctx.text as PrimitiveValueType
    }
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
}
