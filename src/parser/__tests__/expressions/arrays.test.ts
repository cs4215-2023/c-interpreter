import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('  declarations', () => {
  it('Test empty array initialise  ', () => {
    const code = 'int a[2];'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                elements: [
                  {
                    name: 'a#int',
                    type: 'Identifier'
                  }
                ],
                type: 'ArrayExpression'
              },
              {
                expressions: [],
                type: 'SequenceExpression'
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
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                elements: [
                  { type: 'Identifier', name: 'a#int' },
                  { type: 'Literal', value: 1, raw: '1' },
                  { type: 'Literal', value: 2, raw: '2' }
                ],
                type: 'ArrayExpression'
              },
              {
                expressions: [],
                type: 'SequenceExpression'
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
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                elements: [
                  { type: 'Identifier', name: 'v#int' },
                  { type: 'Literal', value: 3, raw: '3' },
                  { type: 'Literal', value: 3, raw: '3' }
                ],
                type: 'ArrayExpression'
              },
              {
                expressions: [],
                type: 'SequenceExpression'
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
