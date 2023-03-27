import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

const context = createContext(Variant.DEFAULT, undefined, undefined)
describe('Assignment', () => {
  it('Assignment check ', async () => {
    const code = 'void main() {int a = 1; a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Update positive ', async () => {
    const code = 'void main() {int a = 1; a++; a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Update negative', async () => {
    const code = 'void main() {int a = 1; a--; a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })
})
