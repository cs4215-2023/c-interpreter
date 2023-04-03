import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Arrays and Pointer', () => {
  it('Pointer assignment ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4; int* c = &a; return c;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(12)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Referencing variables', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4; return &a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(12)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Multiple pointers', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int* b = &a; int* c = &a; int* d = c; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(12)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Pointer arithmetic', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int b = 5; int* c = &a; int* d = &b + 1; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(24)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Pointer arithmetic', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int b = 5; int* c = &a; int* d = c + 1; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(16)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Array assignment ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int c[]={1,2,3,4}; return c[0];}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Array assignment 2', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      'int main() {int c[5]; c[0] = 12; c[1] =15; c[2] = 3; c[3]=4; c[4]=5; return c[3];}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Loop array', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      'int main() {int c[4]={1,2,3,4}; int sum = 0; for (int i = 0; i < 4; i++){sum=sum+c[i];} return sum;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(10)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Array dereferencing', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int c[4]={1,2,3,4}; return *c;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
})
