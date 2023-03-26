import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Program } from '../../types'
import { Identifier, PointerIdentifier } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const typedPointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'a',
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: false,
  isDereferenced: false
}

const referencePointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'b',
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: true,
  isDereferenced: false
}

const dereferencePointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'b',
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: false,
  isDereferenced: true
}

const variableA: Identifier = {
  type: 'Identifier',
  name: 'a'
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
                right: referencePointer,
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
                right: dereferencePointer,
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
