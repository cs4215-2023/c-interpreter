import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Post fix notation', () => {
  it('Test i++', () => {
    const code = 'a++;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                argument: {
                  name: 'a',
                  type: 'Identifier'
                },
                operator: '++',
                prefix: false,
                type: 'UpdateExpression'
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
  it('Test i--', () => {
    const code = 'b--;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                argument: {
                  name: 'b',
                  type: 'Identifier'
                },
                operator: '--',
                prefix: false,
                type: 'UpdateExpression'
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
