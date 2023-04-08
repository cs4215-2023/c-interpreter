import createContext from '../../createContext'
import { InvalidNumberOfArguments } from '../../errors/errors'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'
import { TypeError } from '../errors'

describe('Type checking', () => {
  it('Int to float assignment throws error ', async () => {
    const code = 'void main() {int a = 1.5;}'
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      expect(result.error).toBeInstanceOf(TypeError)
    }
  })

  it('Floating point division leads to float ', async () => {
    const code = 'float main() {return 2.0 / 4.0;}'
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(parseFloat(result.value)).toBeCloseTo(0.5)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Mismatch function type and return value ', async () => {
    const code = `
	void f(int a) {
		return a;
	}
	void main() {
		return f(1);
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('void')
      expect(castError.received).toBe('int')
    }
  })

  it('Check array all matching elements', async () => {
    const code = `
	void main() {
		int c[4]={1,2,3,4};
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBeUndefined()
    } else {
      expect(1).toBe(2)
    }
  })

  it('Check array non type throws error', async () => {
    const code = `
	void main() {
		char c[4]={1,2,3,4};
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)

    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('char')
      expect(castError.received).toBe('int')
    }
  })

  it('Check pointer type', async () => {
    const code = `
	void main() {
		int* a = 1.5;
	}`

    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('int')
      expect(castError.received).toBe('float')
    }
  })

  it('Return pointer reference', async () => {
    const code = `
	int main() {
		int a = 4; 
		int* c = &a; 
		return *c;
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Mismatch function assignment', async () => {
    const code = `
	void foo() {
		return;
	}

	int main() {
		int a = foo();
		return 0;
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(TypeError)
      const castError = e as TypeError
      expect(castError.expected).toBe('int')
      expect(castError.received).toBe('void')
    }
  })

  it('Mismatch function parameters', async () => {
    const code = `
	void foo() {
		return;
	}

	int main() {
		foo(1);
		return 0;
	}`
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(InvalidNumberOfArguments)
    }
  })
})
