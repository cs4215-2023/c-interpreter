import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { FatalSyntaxError } from '../../errors'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Variable declarations', () => {
  it('Test 1 declaration', () => {
    const code = 'int a;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                name: 'a#int',
                type: 'Identifier'
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

  it('Test multiple declarations on different lines', () => {
    const code = 'int a; int b;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                name: 'a#int',
                type: 'Identifier'
              },
              { expressions: [], type: 'SequenceExpression' }
            ],
            type: 'SequenceExpression'
          },
          loc: undefined,
          type: 'ExpressionStatement'
        },
        {
          expression: {
            expressions: [
              {
                name: 'b#int',
                type: 'Identifier'
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

  // This is not supported
  it('Test multiple declarations on same line', () => {
    const code = 'int a, b;'
    try {
      parse(code, context)
      expect(true).toBe(false)
    } catch (error) {
      const err = new FatalSyntaxError(
        {
          start: {
            line: 1,
            column: 5
          },
          end: {
            line: 1,
            column: 6
          }
        },
        `Syntax error at Line 1:5`
      )
      expect(error).toStrictEqual(err)
    }
  })
})
