import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { Identifier } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const parameterA: Identifier = {
  name: 'a',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
}

const idVoidType: Identifier = {
  name: 'foo',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
}

const idIntType: Identifier = {
  name: 'foo',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
}

describe('Return statements', () => {
  it('Returns an empty Program for the empty string', () => {
    const code = 'void foo(int a) {return;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [
              {
                argument: undefined,
                type: 'ReturnStatement'
              }
            ],
            type: 'BlockStatement'
          },
          id: idVoidType,
          params: [parameterA],
          type: 'FunctionDeclaration'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Returns a value', () => {
    const code = 'int foo(int a) {return 1;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [
              {
                argument: {
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  loc: {
                    end: {
                      column: 23,
                      line: 1
                    },
                    start: {
                      column: 23,
                      line: 1
                    }
                  }
                },
                type: 'ReturnStatement'
              }
            ],
            type: 'BlockStatement'
          },
          id: idIntType,
          params: [parameterA],
          type: 'FunctionDeclaration'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
