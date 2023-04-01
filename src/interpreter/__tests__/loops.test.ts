import { UNKNOWN_LOCATION } from '../../constants'
import createContext from '../../createContext'
import { UndefinedVariable } from '../../errors/errors'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'
import { locationDummyNode } from '../../utils/astCreator'

const location = UNKNOWN_LOCATION
const dummyNode = locationDummyNode(location.start.line, location.start.column)

describe('Loops', () => {
  it('While loop -- as condition', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int i = 3; while (i--) {} i;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('While loop comparison as condition', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int i = 3; while (i > 0) {i--;} i;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('While loop comparison as condition with update', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 1; int i = 0; while (i < 5) {a++; i++;} return a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop -- as condition', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `void main() {int i = 3; do {} while (i--); i;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop comparison as condition with update', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `void main() {int i = 3;int a = 0; do {a = a + i; i--;} while (i > 0);  a;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop declaration in body', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `void main() {int i = 3; do {int a = 0;a = a + i; i--;} while (i > 0);  a;}`
    try {
      await sourceRunner(code, context)
    } catch (e) {
      expect(e).toStrictEqual(new UndefinedVariable('a', dummyNode))
    }
  })

  it('For loop test termination', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `void main() {
	for (int i = 0; i < 5; i++) {}}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('For loop test local assignment', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `
	void main() {for (int i = 0; i < 5; i++) {int a = 1; a++;}}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('For loop test  assignment', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {int a = 1;
	for (int i = 0; i < 3; i++) {a++;} return a;}
	`

    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })
})
