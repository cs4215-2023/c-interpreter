import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Conditional expression tests', () => {
  it('Single ? and :', () => {
    const code = 'a > 0 ? 1 : 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                alternate: {
                  loc: {
                    end: {
                      column: 12,
                      line: 1
                    },
                    start: {
                      column: 12,
                      line: 1
                    }
                  },
                  type: 'Literal',
                  value: 2,
                  valueType: 'int'
                },
                consequent: {
                  loc: {
                    end: {
                      column: 8,
                      line: 1
                    },
                    start: {
                      column: 8,
                      line: 1
                    }
                  },
                  type: 'Literal',
                  value: 1,
                  valueType: 'int'
                },
                test: {
                  left: {
                    name: 'a',
                    type: 'Identifier'
                  },
                  loc: {
                    end: {
                      column: 4,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  },
                  operator: '>',
                  right: {
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
                    type: 'Literal',
                    value: 0,
                    valueType: 'int'
                  },
                  type: 'BinaryExpression'
                },
                type: 'ConditionalExpression'
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

  it('Multiple ? and :', () => {
    const code = 'a > 0 ? 4 : a > 1 ? 5 : 6;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                alternate: {
                  alternate: {
                    loc: {
                      end: {
                        column: 24,
                        line: 1
                      },
                      start: {
                        column: 24,
                        line: 1
                      }
                    },
                    type: 'Literal',
                    value: 6,
                    valueType: 'int'
                  },
                  consequent: {
                    loc: {
                      end: {
                        column: 20,
                        line: 1
                      },
                      start: {
                        column: 20,
                        line: 1
                      }
                    },
                    type: 'Literal',
                    value: 5,
                    valueType: 'int'
                  },
                  test: {
                    left: {
                      name: 'a',
                      type: 'Identifier'
                    },
                    loc: {
                      end: {
                        column: 16,
                        line: 1
                      },
                      start: {
                        column: 12,
                        line: 1
                      }
                    },
                    operator: '>',
                    right: {
                      loc: {
                        end: {
                          column: 16,
                          line: 1
                        },
                        start: {
                          column: 16,
                          line: 1
                        }
                      },
                      type: 'Literal',
                      value: 1,
                      valueType: 'int'
                    },
                    type: 'BinaryExpression'
                  },
                  type: 'ConditionalExpression'
                },
                consequent: {
                  loc: {
                    end: {
                      column: 8,
                      line: 1
                    },
                    start: {
                      column: 8,
                      line: 1
                    }
                  },
                  type: 'Literal',
                  value: 4,
                  valueType: 'int'
                },
                test: {
                  left: {
                    name: 'a',
                    type: 'Identifier'
                  },
                  loc: {
                    end: {
                      column: 4,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  },
                  operator: '>',
                  right: {
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
                    type: 'Literal',
                    value: 0,
                    valueType: 'int'
                  },
                  type: 'BinaryExpression'
                },
                type: 'ConditionalExpression'
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
