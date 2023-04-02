import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Arrays', () => {
  it('Array assignment ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int c[4]={1,2,3,4};}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })
})
