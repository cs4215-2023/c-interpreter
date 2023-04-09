import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

import { TypeContext } from '../lang/ClangParser'
import { ClangVisitor } from '../lang/ClangVisitor'
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
    return {
      type: 'PrimitiveType',
      signed: undefined,
      valueType: ctx.text as PrimitiveValueType
    }
  }
}
