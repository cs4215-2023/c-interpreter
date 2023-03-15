import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Pointer', () => {
  it('Test declare pointer', () => {
    const code = 'int* a;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          expression: {
            expressions: [
              {
                name: '*#a',
                type: 'Identifier'
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

  it('Test pointer reference', () => {
    const code = 'a = &b;'
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
                  name: 'a',
                  type: 'Identifier'
                },
                loc: {
                  end: {
                    column: 5,
                    line: 1
                  },
                  start: {
                    column: 0,
                    line: 1
                  }
                },
                operator: '=',
                right: {
                  name: '&#b',
                  type: 'Identifier'
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

  it('Test pointer dereference', () => {
    const code = 'a = *b;'
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
                  name: 'a',
                  type: 'Identifier'
                },
                loc: {
                  end: {
                    column: 5,
                    line: 1
                  },
                  start: {
                    column: 0,
                    line: 1
                  }
                },
                operator: '=',
                right: {
                  name: '**#b',
                  type: 'Identifier'
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
