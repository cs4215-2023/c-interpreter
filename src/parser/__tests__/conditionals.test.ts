import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Conditional Statements', () => {
  it('Test if-else ', () => {
    const code = 'if (1) {a--;} else {b--;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          alternate: {
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
            ],
            type: 'BlockStatement'
          },
          consequent: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      argument: {
                        name: 'a',
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
            ],
            type: 'BlockStatement'
          },
          test: {
            loc: {
              end: {
                column: 4,
                line: 1
              },
              start: {
                column: 4,
                line: 1
              }
            },
            raw: '1',
            type: 'Literal',
            value: 1
          },
          type: 'IfStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test if-else if ', () => {
    const code = 'if (1) {a--;} else if (2) {b--;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          alternate: {
            alternate: {
              type: 'EmptyStatement'
            },
            consequent: {
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
              ],
              type: 'BlockStatement'
            },
            test: {
              loc: {
                end: {
                  column: 23,
                  line: 1
                },
                start: {
                  column: 23,
                  line: 1
                }
              },
              raw: '2',
              type: 'Literal',
              value: 2
            },
            type: 'IfStatement'
          },
          consequent: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      argument: {
                        name: 'a',
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
            ],
            type: 'BlockStatement'
          },
          test: {
            loc: {
              end: {
                column: 4,
                line: 1
              },
              start: {
                column: 4,
                line: 1
              }
            },
            raw: '1',
            type: 'Literal',
            value: 1
          },
          type: 'IfStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
