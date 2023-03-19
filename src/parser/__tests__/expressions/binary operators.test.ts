import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Binary Operator Tests', () => {
  it('Test addition', () => {
    const code = '4+1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 4,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
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
                operator: '+',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 2,
                    line: 1
                  }
                }
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

  it('Test subtraction', () => {
    const code = '3-1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 3,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
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
                operator: '-',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 2,
                    line: 1
                  }
                }
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

  it('Test division', () => {
    const code = '5/2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 5,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 2,
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
                operator: '/',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 2,
                    line: 1
                  }
                }
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

  it('Test multiplication', () => {
    const code = '8*3;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 8,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 3,
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
                operator: '*',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 2,
                    line: 1
                  }
                }
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

  it('Test modulo', () => {
    const code = '5%7;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 5,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 7,
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
                operator: '%',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 2,
                    line: 1
                  }
                }
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

  it('Test bit shift left', () => {
    const code = '3 << 1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 3,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 1,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 5,
                      line: 1
                    },
                    start: {
                      column: 5,
                      line: 1
                    }
                  }
                },
                operator: '<<',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 5,
                    line: 1
                  }
                }
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

  it('Test bit shift left', () => {
    const code = '4 >> 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 4,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 2,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 5,
                      line: 1
                    },
                    start: {
                      column: 5,
                      line: 1
                    }
                  }
                },
                operator: '>>',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 5,
                    line: 1
                  }
                }
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

  it('Test bitwise and', () => {
    const code = '1 && 0;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 1,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 0,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 5,
                      line: 1
                    },
                    start: {
                      column: 5,
                      line: 1
                    }
                  }
                },
                operator: '&&',
                type: 'LogicalExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 5,
                    line: 1
                  }
                }
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

  it('Test bitwise or', () => {
    const code = '2 || 5;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 2,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 5,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 5,
                      line: 1
                    },
                    start: {
                      column: 5,
                      line: 1
                    }
                  }
                },
                operator: '||',
                type: 'LogicalExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 5,
                    line: 1
                  }
                }
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

  it('Test bitwise xor', () => {
    const code = '3 ^ 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 3,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 0,
                      line: 1
                    },
                    start: {
                      column: 0,
                      line: 1
                    }
                  }
                },
                right: {
                  type: 'Literal',
                  value: 2,
                  valueType: 'int',
                  loc: {
                    end: {
                      column: 4,
                      line: 1
                    },
                    start: {
                      column: 4,
                      line: 1
                    }
                  }
                },
                operator: '^',
                type: 'BinaryExpression',
                loc: {
                  start: {
                    column: 0,
                    line: 1
                  },
                  end: {
                    column: 4,
                    line: 1
                  }
                }
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

  it('Test assignment', () => {
    const code = 'a = 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  name: 'a',
                  type: 'Identifier',
                  primitiveType: undefined
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
                operator: '=',
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
                  value: 2,
                  valueType: 'int'
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
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
