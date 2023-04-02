import createContext from '../../createContext'
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
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })
})
