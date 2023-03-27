import { UNKNOWN_LOCATION } from '../../../constants'
import createContext from '../../../createContext'
import { TypeMismatch } from '../../../errors/errors'
import { PrimitiveType } from '../../../parser/types'
import { sourceRunner } from '../../../runner'
import { Variant } from '../../../types'
import { locationDummyNode } from '../../../utils/astCreator'

const location = UNKNOWN_LOCATION
const dummyNode = locationDummyNode(location.start.line, location.start.column)

const intType: PrimitiveType = {
  type: 'PrimitiveType',
  signed: undefined,
  valueType: 'int'
}

const floatType: PrimitiveType = {
  type: 'PrimitiveType',
  signed: undefined,
  valueType: 'float'
}

const voidType: PrimitiveType = {
  type: 'PrimitiveType',
  signed: undefined,
  valueType: 'void'
}

const charType: PrimitiveType = {
  type: 'PrimitiveType',
  signed: undefined,
  valueType: 'char'
}

describe('Type checking', () => {
  it('Int to float assignment throws error ', async () => {
    const code = 'int a = 1.5;'
    try {
      const context = createContext(Variant.DEFAULT, undefined, undefined)
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toStrictEqual(new TypeMismatch(dummyNode, intType, 'float'))
    }
  })

  it('Floating point division leads to float ', async () => {
    const code = '2.0 / 4.0;'
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe('0.500000')
    } else {
      expect(1).toBe(2)
    }
  })

  it('Mismatch function type and return value ', async () => {
    const code = 'void f(int a) {return a;} f(1);'
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
})
