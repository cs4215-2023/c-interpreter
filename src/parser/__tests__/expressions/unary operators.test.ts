import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Unary Operations', () => {
  it('Test positive integer', () => {
    const code = '+1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                argument: {
                  type: 'Literal',
                  value: 1,
                  valueType: 'int',
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

      body: [
        {
          expression: {
            expressions: [
              {
                argument: {
                  type: 'Literal',
                  value: 1,
                  valueType: 'int',
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
  it('Test not', () => {
    const code = '!(1);'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

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
                      valueType: 'int',
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
