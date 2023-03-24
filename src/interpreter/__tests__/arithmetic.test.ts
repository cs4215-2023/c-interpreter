import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

const context = createContext(Variant.DEFAULT, undefined, undefined)
describe('Arithmetic', () => {
  it('Simple addition ', async () => {
    const code = '1+2;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Simple subtraction ', async () => {
    const code = '2-1;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Subtraction to negative value ', async () => {
    const code = '1-2;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(-1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Division ', async () => {
    const code = '2 / 4;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0.5)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Lesser than ', async () => {
    const code = '1 < 3;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(true)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Greater than ', async () => {
    const code = '1 > 3;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(false)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Lesser than or equal', async () => {
    const code = '3 <= 3;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(true)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Less than with identifier', async () => {
    const code = 'int a = 1; a < 3;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(true)
    } else {
      expect(1).toBe(2)
    }
  })
})
