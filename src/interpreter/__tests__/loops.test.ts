import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

const context = createContext(Variant.DEFAULT, undefined, undefined)
describe('Loops', () => {
  it('While loop -- as condition', async () => {
    const code = 'int i = 3; while (i--) {} i;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('While loop comparison as condition', async () => {
    const code = 'int i = 3; while (i > 0) {i--;} i;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('While loop comparison as condition with update', async () => {
    const code = 'int i = 3;int a = 0; while (i > 0) {a = a + i; i--;} a;'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop -- as condition', async () => {
    const code = `int i = 3; do {} while (i--); i;`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop comparison as condition with update', async () => {
    const code = `int i = 3;int a = 0; do {a = a + i; i--;} while (i > 0);  a;`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Do while loop declaration in body', async () => {
    const code = `int i = 3; do {int a = 0;a = a + i; i--;} while (i > 0);  a;`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })

  it('For loop test termination', async () => {
    const code = `
	for (int i = 0; i < 5; i++) {}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('For loop test local assignment', async () => {
    const code = `
	for (int i = 0; i < 5; i++) {int a = 1; a++;}
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('For loop test  assignment', async () => {
    const code = `int a = 1;
	for (int i = 0; i < 5; i++) {a++;} a;
	`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(6)
    } else {
      expect(1).toBe(2)
    }
  })
})
