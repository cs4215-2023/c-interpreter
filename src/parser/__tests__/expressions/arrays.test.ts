import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('  declarations', () => {
  it('Test empty array initialise  ', () => {
    const code = 'int a[2];'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'ArrayDeclarationExpression',
                array: { type: 'ArrayExpression', elements: [] },
                arrayType: { type: 'PrimitiveType', signed: undefined, valueType: 'int' },
                size: 2,
                identifier: {
                  name: 'a',
                  type: 'Identifier',
                  isPointer: true
                }
              },
              {
                type: 'EmptyExpression'
              }
            ],
            type: 'SequenceExpression'
          },
          loc: undefined,
          type: 'ExpressionStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test array initialise with size  ', () => {
    const code = 'int a[2] = {1,2};'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'ArrayDeclarationExpression',
                array: {
                  elements: [
                    {
                      type: 'Literal',
                      value: 1,
                      valueType: 'int'
                    },
                    {
                      type: 'Literal',
                      value: 2,
                      valueType: 'int'
                    }
                  ],
                  type: 'ArrayExpression'
                },
                arrayType: { type: 'PrimitiveType', signed: undefined, valueType: 'int' },
                size: 2,
                identifier: {
                  name: 'a',
                  type: 'Identifier',
                  isPointer: true
                }
              },
              {
                type: 'EmptyExpression'
              }
            ],
            type: 'SequenceExpression'
          },
          loc: undefined,
          type: 'ExpressionStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test array initialise with size  ', () => {
    const code = 'int v[] = {3,3};'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                identifier: {
                  name: 'v',
                  type: 'Identifier',
                  isPointer: true
                },
                size: undefined,
                type: 'ArrayDeclarationExpression',
                arrayType: { type: 'PrimitiveType', signed: undefined, valueType: 'int' },
                array: {
                  elements: [
                    { type: 'Literal', value: 3, valueType: 'int' },
                    { type: 'Literal', value: 3, valueType: 'int' }
                  ],
                  type: 'ArrayExpression'
                }
              },
              {
                type: 'EmptyExpression'
              }
            ],
            type: 'SequenceExpression'
          },
          loc: undefined,
          type: 'ExpressionStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
