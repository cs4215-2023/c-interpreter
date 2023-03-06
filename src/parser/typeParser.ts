import { PrimitiveTypeContext } from '../lang/ClangParser'
import { Type } from '../types'
import { Constructable } from './util'

// TODO: Validate the correctness of this
export const TypeParser = <T extends Constructable>(BaseClass: T): typeof DerivedClass => {
  const DerivedClass = class extends BaseClass {
    visitPrimType(ctx: PrimitiveTypeContext): Type {
      return {
        kind: 'primitive',
        name: 'string',
        value: ctx.PRIMITIVETYPE().text
      }
    }
  }
  return DerivedClass
}
