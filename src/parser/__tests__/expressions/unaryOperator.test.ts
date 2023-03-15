import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Statements', () => {
  it('Test positive integer', () => {
    const code = '+1;'
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
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  loc: {
                    end: {
                      column: 1,
                      line: 1
                    },
                    start: {
                      column: 1,
                      line: 1
                    }
                  }
                },
                operator: '+',
                prefix: true,
                type: 'UnaryExpression'
              },
              { expressions: [], type: 'SequenceExpression' }
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
  it('Test negative integer', () => {
    const code = '-1;'
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
                  type: 'Literal',
                  value: 1,
                  raw: '1',
                  loc: {
                    end: {
                      column: 1,
                      line: 1
                    },
                    start: {
                      column: 1,
                      line: 1
                    }
                  }
                },
                operator: '-',
                prefix: true,
                type: 'UnaryExpression'
              },
              { expressions: [], type: 'SequenceExpression' }
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
  it('Test negative integer', () => {
    const code = '!(1);'
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
                  expressions: [
                    {
                      expressions: [],
                      type: 'SequenceExpression'
                    },
                    {
                      type: 'Literal',
                      value: 1,
                      raw: '1',
                      loc: {
                        end: {
                          column: 2,
                          line: 1
                        },
                        start: {
                          column: 2,
                          line: 1
                        }
                      }
                    },
                    {
                      expressions: [],
                      type: 'SequenceExpression'
                    }
                  ],
                  type: 'SequenceExpression'
                },
                operator: '!',
                prefix: true,
                type: 'UnaryExpression'
              },
              { expressions: [], type: 'SequenceExpression' }
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
