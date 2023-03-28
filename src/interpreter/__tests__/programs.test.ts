import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Programs', () => {
  it('Multiple arithmetic statements returns the result of the last', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = '1 + 2; 2 - 1; 3 * 4; 2 / 1; 5 < 2; 1 > 2;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Multiple variable statements returns the result of the last', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int a = 1; int b = 2; int c = a + b; c++;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })
})
