import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { Identifier, PrimitiveType, Program } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const intType: PrimitiveType = { type: 'PrimitiveType', signed: undefined, valueType: 'int' }

const identifierI: Identifier = {
  name: 'i',
  type: 'Identifier'
}

const identifierB: Identifier = {
  name: 'b',
  type: 'Identifier'
}

const identifierA: Identifier = {
  name: 'a',
  type: 'Identifier'
}

const identifierC: Identifier = {
  name: 'c',
  type: 'Identifier'
}

describe('Iterative Statements', () => {
  it('Test for ', () => {
    const code = 'for (int i = 0; i < 10; i++) {}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          init: {
            left: {
              identifier: identifierI,
              type: 'VariableDeclarationExpression',
              identifierType: intType
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
              type: 'Literal',
              valueType: 'int',
              value: 0
            },
            type: 'AssignmentExpression'
          },
          test: {
            left: identifierI,
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
              type: 'Literal',
              valueType: 'int',
              value: 10
            },
            type: 'BinaryExpression'
          },
          type: 'ForStatement',
          update: {
            argument: identifierI,
            operator: '++',
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
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        identifier: identifierB,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                        type: 'Literal',
                        valueType: 'int',
                        value: 1
                      },
                      type: 'AssignmentExpression'
                    },
                    {
                      type: 'EmptyExpression'
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
                        identifier: identifierC,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                        left: identifierA,
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
                        right: identifierB,
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
            ],
            type: 'BlockStatement'
          },
          init: {
            left: {
              identifier: identifierI,
              type: 'VariableDeclarationExpression',
              identifierType: intType
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
              type: 'Literal',
              valueType: 'int',
              value: 0
            },
            type: 'AssignmentExpression'
          },
          test: {
            left: identifierI,
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
              type: 'Literal',
              valueType: 'int',
              value: 10
            },
            type: 'BinaryExpression'
          },
          type: 'ForStatement',
          update: {
            argument: identifierI,
            operator: '++',
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
            type: 'UpdateExpression'
          },
          type: 'WhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test while with body', () => {
    const code = 'while (i--) {int b = 2; int c = 3 + a;}'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        identifier: identifierB,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                        type: 'Literal',
                        valueType: 'int',
                        value: 2
                      },
                      type: 'AssignmentExpression'
                    },
                    {
                      type: 'EmptyExpression'
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
                        identifier: identifierC,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                          type: 'Literal',
                          valueType: 'int',
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
                        right: identifierA,
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
            ],
            type: 'BlockStatement'
          },
          test: {
            argument: identifierI,
            operator: '--',
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
            type: 'UpdateExpression'
          },
          type: 'DoWhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test do while with body', () => {
    const code = 'do {int b = 1; int c = 10 - b;} while (i--);'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          body: {
            body: [
              {
                expression: {
                  expressions: [
                    {
                      left: {
                        identifier: identifierB,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                        type: 'Literal',
                        valueType: 'int',
                        value: 1
                      },
                      type: 'AssignmentExpression'
                    },
                    {
                      type: 'EmptyExpression'
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
                        identifier: identifierC,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
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
                          type: 'Literal',
                          valueType: 'int',
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
                        right: identifierB,
                        type: 'BinaryExpression'
                      },
                      type: 'AssignmentExpression'
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
            ],
            type: 'BlockStatement'
          },
          test: {
            argument: identifierI,
            operator: '--',
            type: 'UpdateExpression'
          },
          type: 'DoWhileStatement'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
