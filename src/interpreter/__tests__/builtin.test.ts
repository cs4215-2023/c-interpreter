import createContext from '../../createContext'
import { PrintfError } from '../../errors/errors'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Builtin functions test', () => {
  it('Printf test', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
  	void main() {
  		printf("h%dllo w%drl%c", 3, 0, 'd');
  	}
  	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('Printf test with string', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    try {
      const code = `
	void main() {
		printf("h%dllo w%drl%c", 0, 'd', "C");
	}
	`
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toBeInstanceOf(PrintfError)
    }
  })
})
