import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Conditional statements test', () => {
  it('Return true condition of conditional expr statement', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	int main() {
		int a = 1;
		return a > 0 ? 2 : 3;
	}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Return false condition of conditional expr statement', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	int main() {
		int a = 1;
		return a > 5 ? 2 : 3;
	}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Return true on second conditional exp statement', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	int main() {
		int a = 5;
		return a < 0 ? 2 : a < 6 ? 3 : 4;
	}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })
})
