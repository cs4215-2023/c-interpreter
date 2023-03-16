import { Program } from 'estree'

import createContext from '../../../createContext'
import { Variant } from '../../../types'
import { parse } from '../../parser'
import { Identifier, PointerIdentifier } from '../../types'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

const typedPointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'a',
  primitiveType: { type: 'PrimitiveType', valueType: 'int', signed: undefined },
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: false,
  isDereferenced: false
}

const referencePointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'b',
  primitiveType: undefined,
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: true,
  isDereferenced: false
}

const dereferencePointer: PointerIdentifier = {
  type: 'Identifier',
  name: 'b',
  primitiveType: undefined,
  pointerAddress: undefined,
  pointingAddress: undefined,
  isReferenced: false,
  isDereferenced: true
}

const variableA: Identifier = {
  type: 'Identifier',
  name: 'a',
  primitiveType: undefined
}

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
              typedPointer,
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
