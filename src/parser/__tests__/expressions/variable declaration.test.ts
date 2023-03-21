import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { FatalSyntaxError } from '../../errors'
import { parse } from '../../parser'
import { PrimitiveType, Program } from '../../types'
import { Identifier } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Variable declarations', () => {
  it('Test 1 declaration', () => {
    const code = 'int a;'
    const prog = parse(code, context)

    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                identifier: { name: 'a', type: 'Identifier' },
                type: 'VariableDeclarationExpression',
                identifierType: { type: 'PrimitiveType', signed: undefined, valueType: 'int' }
              },
              { expressions: [], type: 'SequenceExpression' }
            ],
            type: 'SequenceExpression'
          },
          type: 'ExpressionStatement',
          loc: undefined
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test multiple declarations on different lines', () => {
    const code = 'int a; int b;'
    const prog = parse(code, context)

    const intType: PrimitiveType = { type: 'PrimitiveType', signed: undefined, valueType: 'int' }

    const identifierA: Identifier = {
      name: 'a',
      type: 'Identifier'
    }

    const identifierB: Identifier = {
      name: 'b',
      type: 'Identifier'
    }

    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                identifier: identifierA,
                type: 'VariableDeclarationExpression',
                identifierType: intType
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
                identifier: identifierB,
                type: 'VariableDeclarationExpression',
                identifierType: intType
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
