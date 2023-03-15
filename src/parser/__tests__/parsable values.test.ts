import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Parsable Values', () => {
  it('Test integer', () => {
    const code = '1;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
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
  it('Test float', () => {
    const code = '1.0;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'Literal',
                value: 1.0,
                raw: '1.0',
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
  it('Test char', () => {
    const code = `'a';`
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                type: 'Literal',
                value: 'a',
                raw: "'a'",
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
