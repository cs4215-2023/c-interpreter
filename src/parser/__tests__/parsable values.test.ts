import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { Program } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Parsable Values', () => {
  it('Test integer', () => {
    const code = '1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'Literal',
                valueType: 'int',
                value: 1,
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
              { type: 'EmptyExpression' }
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

  it('Test float', () => {
    const code = '1.0;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'Literal',
                valueType: 'float',
                value: 1.0,
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
              { type: 'EmptyExpression' }
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
  it('Test char', () => {
    const code = `'a';`
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'Literal',
                valueType: 'char',
                value: 'a',
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
              { type: 'EmptyExpression' }
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
