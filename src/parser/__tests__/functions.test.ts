import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'
import { PrimitiveType, Program } from '../types'
import { Identifier } from '../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const parameterA: Identifier = {
  name: 'a',
  type: 'Identifier'
}

const parameterB: Identifier = {
  name: 'b',
  type: 'Identifier'
}

const id: Identifier = {
  name: 'foo',
  type: 'Identifier'
}

describe('Function related tests', () => {
  it('Test function with no body', () => {
    const code = 'void foo(int a) {}'
    const prog = parse(code, context)

    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          id: id,
          params: [parameterA],
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
        }
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test function with body', () => {
    const code = `void foo(int a) {int b = 1; int c = a + b;}`
    const prog = parse(code, context)

    const intType: PrimitiveType = { type: 'PrimitiveType', signed: undefined, valueType: 'int' }

    const bodyB: Identifier = {
      name: 'b',
      type: 'Identifier'
    }

    const bodyC: Identifier = {
      name: 'c',
      type: 'Identifier'
    }

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
                        identifier: bodyB,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
                      },
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
                        type: 'Literal',
                        value: 1,
                        valueType: 'int'
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
                        identifier: bodyC,
                        type: 'VariableDeclarationExpression',
                        identifierType: intType
                      },
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
                        left: { type: 'Identifier', name: 'a' },
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
          id: id,
          params: [parameterA],
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
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
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          id: id,
          params: [parameterA, parameterB],
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
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
      body: [
        {
          body: {
            body: [],
            type: 'BlockStatement'
          },
          id: id,
          params: [parameterA, parameterB],
          type: 'FunctionDeclaration',
          typeDeclaration: { type: 'PrimitiveType', valueType: 'void', signed: undefined }
        },
        {
          expression: {
            expressions: [
              {
                expressions: [
                  {
                    arguments: [
                      {
                        loc: {
                          end: {
                            column: 30,
                            line: 1
                          },
                          start: {
                            column: 30,
                            line: 1
                          }
                        },
                        type: 'Literal',
                        value: 1,
                        valueType: 'int'
                      },
                      {
                        type: 'EmptyExpression'
                      },
                      {
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
                        value: 2,
                        valueType: 'int'
                      }
                    ],
                    callee: {
                      name: 'foo',
                      type: 'Identifier'
                    },
                    type: 'CallExpression'
                  }
                ],
                type: 'SequenceExpression'
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
