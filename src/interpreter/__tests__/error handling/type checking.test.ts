import createContext from '../../../createContext'
import { sourceRunner } from '../../../runner'
import { Variant } from '../../../types'
import { TypeError } from '../../typeChecking/errors'

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
})
