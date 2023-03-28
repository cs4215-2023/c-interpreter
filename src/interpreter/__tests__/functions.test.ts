import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Functions', () => {
  it('Empty function returns undefined', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	void foo(int a) {
		return ;
	}
	foo(1);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('Function call returns value ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	int foo(int a) {
		return 1;
	}
	foo(1);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Function reads parameter ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	int foo(int a) {
		return a;
	}
	foo(2);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Multiple returns in function ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `
	int foo(int a) {
		if (1) {
			return 2;
		} else {
			return 3;
		}
	}
	foo(2);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(2)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Multiple parameters in function ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `
	int foo(int a, int b) {
		return a + b;
	}
	foo(1,2);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Recursive function ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `
	int a = 2;
	int foo(int a) {
		if (a == 0) {
			return a;
		}
		return a + foo(a-1);
	}
	foo(a);`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })
})
