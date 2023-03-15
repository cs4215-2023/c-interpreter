import { Program } from 'estree'

import createContext from '../../createContext'
import { Variant } from '../../types'
import { parse } from '../parser'

const variant = Variant.DEFAULT
const context = createContext(variant, undefined, undefined)

describe('Top-level edge cases', () => {
  it('Returns an empty Program for the empty string', () => {
    const code = ''
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: []
    }
    expect(prog).toEqual(expectedProg)
  })

  it('filters out the empty statement', () => {
    const code = ';'
    const prog = parse(code, context)
    const expectedProg: Program = {
      type: 'Program',
      sourceType: 'script',
      body: []
    }
    expect(prog).toEqual(expectedProg)
  })
})
