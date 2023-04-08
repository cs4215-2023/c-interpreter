import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Conditionals', () => {
  it('Test if-else, if conditional is true', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int a = 1; if (1) { a++; } else { a--; } a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Test if-else, if conditional is false', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int a = 1; if (0) { a++; } else { a--; } a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Test else-if condition is true', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      'void main() {int a = 1; if (0) { a++; } else if (1) { a = a + 2; } else { a--; } a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Test if condtion false, no else statement', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int a = 1; if (0) { a++; } a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
})
