import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { FunctionContext, TypeContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
import { FatalSyntaxError } from './errors'
import { PrimitiveType, PrimitiveValueType, Type } from './types'

export class TypeParser
  extends AbstractParseTreeVisitor<PrimitiveType>
  implements ClangVisitor<PrimitiveType>
{
  protected defaultResult(): Type {
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: 'void'
    }
  }

  visitType(ctx: TypeContext): PrimitiveType {
    console.log('prim type')
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: ctx.text as PrimitiveValueType
    }
  }
}
