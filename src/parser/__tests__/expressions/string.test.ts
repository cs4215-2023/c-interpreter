import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('String', () => {
  it('Test string', () => {
    const code = '"hello world";'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                string: 'helloworld',
                type: 'StringLiteral'
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
  it('Test string with identifier', () => {
    const code = '"hello world%d";'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                string: 'helloworld%d',
                type: 'StringLiteral'
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

  it('Test string as parameter', () => {
    const code = 'printf("hello world");'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                expressions: [
                  {
                    arguments: [
                      {
                        string: 'helloworld',
                        type: 'StringLiteral'
                      }
                    ],
                    callee: {
                      name: 'printf',
                      type: 'Identifier'
                    },
                    type: 'CallExpression'
                  }
                ],
                type: 'SequenceExpression'
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
