import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { Program, TypedIdentifier } from '../types'
import { Identifier } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const parameterA: TypedIdentifier = {
  type: 'TypedIdentifier',
  name: 'a',
  typeDeclaration: { type: 'PrimitiveType', signed: undefined, valueType: 'int' }
}

const idVoidType: Identifier = {
  name: 'foo',
  type: 'Identifier'
}

const idIntType: Identifier = {
  name: 'foo',
  type: 'Identifier'
}

describe('Return statements', () => {
  it('Returns an empty Program for the empty string', () => {
    const code = 'void foo(int a) {return;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
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
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
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
      body: [
        {
          body: {
            body: [
              {
                argument: {
                  type: 'Literal',
                  valueType: 'int',
                  value: 1,
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
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
