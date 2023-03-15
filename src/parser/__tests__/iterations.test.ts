import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Iterative Statements', () => {
  it('Test for ', () => {
    const code = 'for (int i = 0; i < 10; i++) {}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          init: {
            left: {
              name: 'i#int',
              type: 'Identifier'
            },
            loc: {
              end: {
                column: 13,
                line: 1
              },
              start: {
                column: 5,
                line: 1
              }
            },
            operator: '=',
            right: {
              loc: {
                end: {
                  column: 13,
                  line: 1
                },
                start: {
                  column: 13,
                  line: 1
                }
              },
              raw: '0',
              type: 'Literal',
              value: 0
            },
            type: 'AssignmentExpression'
          },
          test: {
            left: {
              name: 'i',
              type: 'Identifier'
            },
            loc: {
              end: {
                column: 20,
                line: 1
              },
              start: {
                column: 16,
                line: 1
              }
            },
            operator: '<',
            right: {
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
              raw: '10',
              type: 'Literal',
              value: 10
            },
            type: 'BinaryExpression'
          },
          type: 'ForStatement',
          update: {
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '++',
            prefix: false,
            type: 'UpdateExpression'
          }
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test for with body', () => {
    const code = `for (int i = 0; i < 10; i++) {int b = 1; int c = a + b;}`
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'b#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 38,
                          line: 1
                        },
                        start: {
                          column: 30,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        loc: {
                          end: {
                            column: 38,
                            line: 1
                          },
                          start: {
                            column: 38,
                            line: 1
                          }
                        },
                        raw: '1',
                        type: 'Literal',
                        value: 1
                      },
                      type: 'AssignmentExpression'
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
              },
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'c#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 53,
                          line: 1
                        },
                        start: {
                          column: 41,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        left: {
                          name: 'a',
                          type: 'Identifier'
                        },
                        loc: {
                          end: {
                            column: 53,
                            line: 1
                          },
                          start: {
                            column: 49,
                            line: 1
                          }
                        },
                        operator: '+',
                        right: {
                          name: 'b',
                          type: 'Identifier'
                        },
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
          init: {
            left: {
              name: 'i#int',
              type: 'Identifier'
            },
            loc: {
              end: {
                column: 13,
                line: 1
              },
              start: {
                column: 5,
                line: 1
              }
            },
            operator: '=',
            right: {
              loc: {
                end: {
                  column: 13,
                  line: 1
                },
                start: {
                  column: 13,
                  line: 1
                }
              },
              raw: '0',
              type: 'Literal',
              value: 0
            },
            type: 'AssignmentExpression'
          },
          test: {
            left: {
              name: 'i',
              type: 'Identifier'
            },
            loc: {
              end: {
                column: 20,
                line: 1
              },
              start: {
                column: 16,
                line: 1
              }
            },
            operator: '<',
            right: {
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
              raw: '10',
              type: 'Literal',
              value: 10
            },
            type: 'BinaryExpression'
          },
          type: 'ForStatement',
          update: {
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '++',
            prefix: false,
            type: 'UpdateExpression'
          }
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test while', () => {
    const code = 'while (i--) {}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          test: {
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '--',
            prefix: false,
            type: 'UpdateExpression'
          },
          type: 'WhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test while with body', () => {
    const code = 'while (i--) {int a = 2; int b = 3 + a;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'a#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 21,
                          line: 1
                        },
                        start: {
                          column: 13,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        loc: {
                          end: {
                            column: 21,
                            line: 1
                          },
                          start: {
                            column: 21,
                            line: 1
                          }
                        },
                        raw: '2',
                        type: 'Literal',
                        value: 2
                      },
                      type: 'AssignmentExpression'
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
              },
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'b#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 36,
                          line: 1
                        },
                        start: {
                          column: 24,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        left: {
                          loc: {
                            end: {
                              column: 32,
                              line: 1
                            },
                            start: {
                              column: 32,
                              line: 1
                            }
                          },
                          raw: '3',
                          type: 'Literal',
                          value: 3
                        },
                        loc: {
                          end: {
                            column: 36,
                            line: 1
                          },
                          start: {
                            column: 32,
                            line: 1
                          }
                        },
                        operator: '+',
                        right: {
                          name: 'a',
                          type: 'Identifier'
                        },
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '--',
            prefix: false,
            type: 'UpdateExpression'
          },
          type: 'WhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test do while', () => {
    const code = 'do {} while (i--);'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          test: {
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '--',
            prefix: false,
            type: 'UpdateExpression'
          },
          type: 'DoWhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test do while with body', () => {
    const code = 'do {int a = 1; int c = 10 - a;} while (i--);'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'a#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 12,
                          line: 1
                        },
                        start: {
                          column: 4,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
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
                        raw: '1',
                        type: 'Literal',
                        value: 1
                      },
                      type: 'AssignmentExpression'
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
              },
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        name: 'c#int',
                        type: 'Identifier'
                      },
                      loc: {
                        end: {
                          column: 28,
                          line: 1
                        },
                        start: {
                          column: 15,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        left: {
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
                          raw: '10',
                          type: 'Literal',
                          value: 10
                        },
                        loc: {
                          end: {
                            column: 28,
                            line: 1
                          },
                          start: {
                            column: 23,
                            line: 1
                          }
                        },
                        operator: '-',
                        right: {
                          name: 'a',
                          type: 'Identifier'
                        },
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
            argument: {
              name: 'i',
              type: 'Identifier'
            },
            operator: '--',
            prefix: false,
            type: 'UpdateExpression'
          },
          type: 'DoWhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})