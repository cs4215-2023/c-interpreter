import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Comparison Operators', () => {
  it('Test greater than', () => {
    const code = '3 > 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 3,
                  raw: '3',
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
                  raw: '2',
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
                operator: '>',
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
  it('Test lesser than', () => {
    const code = '4 < 5;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 4,
                  raw: '4',
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
                  raw: '5',
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
                operator: '<',
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
  it('Test lesser than or equal to', () => {
    const code = '7 <= 1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 7,
                  raw: '7',
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
                  raw: '1',
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
                operator: '<=',
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
  it('Test greater than or equal to', () => {
    const code = '3 >= 5;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 3,
                  raw: '3',
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
                  raw: '5',
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
                operator: '>=',
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
  it('Test equality', () => {
    const code = '0 == 0;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 0,
                  raw: '0',
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
                  raw: '0',
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
                operator: '==',
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
  it('Test inequality', () => {
    const code = '1 != 2;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                left: {
                  type: 'Literal',
                  value: 1,
                  raw: '1',
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
                  raw: '2',
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
                operator: '!=',
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
})
