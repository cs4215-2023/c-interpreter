import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Functions', () => {
  it('Empty function returns undefined', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)

    const code = `
	void main() {
		return ;
	}
	`
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

	void main() {
		return foo(3);
	}
 	`
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

	void main() {
		return foo(2);
	}`
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
	int main() {
		return foo(2);
	}`
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
	int main() {
		return foo(1,2);
	}
	`
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
	int main() {
		return foo(a);
	}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })
})
