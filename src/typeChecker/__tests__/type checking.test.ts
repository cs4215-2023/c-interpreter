import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'
import { TypeError } from '../errors'

describe('Type checking', () => {
  it('Int to float assignment throws error ', async () => {
    const code = 'void main() {int a = 1.5;}'
    try {
      const context = createContext(Variant.DEFAULT, undefined, undefined)
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('int')
      expect(castError.received).toBe('float')
    }
  })

  it('Floating point division leads to float ', async () => {
    const code = 'float main() {return 2.0 / 4.0;}'
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(parseFloat(result.value)).toBeCloseTo(0.5)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Mismatch function type and return value ', async () => {
    const code = `
	void f(int a) {
		return a;
	}
	void main() {
		return f(1);
	}`
    try {
      const context = createContext(Variant.DEFAULT, undefined, undefined)
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('void')
      expect(castError.received).toBe('int')
    }
  })

  it('Check array all matching elements', async () => {
    const code = `
	void main() {
		int c[4]={1,2,3,4};
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('Check array non type throws error', async () => {
    const code = `
	void main() {
		char c[4]={1,2,3,4};
	}`
    try {
      const context = createContext(Variant.DEFAULT, undefined, undefined)
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('char')
      expect(castError.received).toBe('int')
    }
  })
})
