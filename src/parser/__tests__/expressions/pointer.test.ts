import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'
import { Identifier, PointerIdentifier } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const typedPointer: Identifier = {
  type: 'Identifier',
  name: 'a',
  isPointer: true
}
const referencePointer: Identifier = {
  type: 'Identifier',
  name: 'b',
  isPointer: undefined //can be false or true
}

const dereferencePointer: Identifier = {
  type: 'Identifier',
  name: 'b',
  isPointer: true //must be true
}

const variableA: Identifier = {
  type: 'Identifier',
  name: 'a',
  isPointer: false
}

describe('Pointer', () => {
  it('Test declare pointer', () => {
    const code = 'int* a;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                pointer: typedPointer,
                pointerType: { type: 'PrimitiveType', valueType: 'int', signed: undefined },
                type: 'PointerDeclarationExpression'
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

  it('Test pointer reference', () => {
    const code = 'a = &b;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      body: [
        {
          expression: {
            expressions: [
              {
                left: variableA,
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
                right: { argument: referencePointer, operator: '&', type: 'UnaryExpression' },
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
      ]
    }
    expect(prog).toEqual(expectedProg)
  })

  it('Test pointer dereference', () => {
    const code = 'a = *b;'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',

      body: [
        {
          expression: {
            expressions: [
              {
                left: variableA,
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
                right: { argument: dereferencePointer, operator: '*', type: 'UnaryExpression' },
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
      ]
    }
    expect(prog).toEqual(expectedProg)
  })
})
