import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { Identifier } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const parameterA: Identifier = {
  name: 'a',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
}

const parameterB: Identifier = {
  name: 'b',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
}

const id: Identifier = {
  name: 'foo',
  type: 'Identifier',
  primitiveType: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
}

describe('Function related tests', () => {
  it('Test function with no body', () => {
    const code = 'void foo(int a) {}'
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
          id: id,
          params: [parameterA],
          type: 'FunctionDeclaration'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test function with body', () => {
    const code = `void foo(int a) {int b = 1; int c = a + b;}`
    const prog = parse(code, context)

    const bodyB: Identifier = {
      name: 'b',
      type: 'Identifier',
      primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
    }

    const bodyC: Identifier = {
      name: 'c',
      type: 'Identifier',
      primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined }
    }

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
                      left: bodyB,
                      loc: {
                        end: {
                          column: 25,
                          line: 1
                        },
                        start: {
                          column: 17,
                          line: 1
                        }
                      },
                      operator: '=',
                      right: {
                        loc: {
                          end: {
                            column: 25,
                            line: 1
                          },
                          start: {
                            column: 25,
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
                      left: bodyC,
                      loc: {
                        end: {
                          column: 40,
                          line: 1
                        },
                        start: {
                          column: 28,
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
                            column: 40,
                            line: 1
                          },
                          start: {
                            column: 36,
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
          id: id,
          params: [parameterA],
          type: 'FunctionDeclaration'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test function with multiple params', () => {
    const code = 'void foo(int a, int b) {}'
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
          id: id,
          params: [parameterA, parameterB],
          type: 'FunctionDeclaration'
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test function call', () => {
    const code = 'void foo(int a, int b) {} foo(1,2);'
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
          id: id,
          params: [parameterA, parameterB],
          type: 'FunctionDeclaration'
        },
        {
          expression: {
            expressions: [
              {
                expressions: [
                  {
                    arguments: [
                      { type: 'Literal', value: 1, raw: '1' },
                      { type: 'Literal', value: 2, raw: '2' }
                    ],
                    callee: {
                      name: 'foo',
                      type: 'Identifier'
                    },
                    optional: false,
                    type: 'CallExpression'
                  }
                ],
                type: 'SequenceExpression'
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
