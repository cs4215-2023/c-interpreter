import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Arrays and Pointer', () => {
  it('Pointer assignment ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4; int* c = &a; return *c;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Referencing variables', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4; return &a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(24)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Multiple pointers', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int* b = &a; int* c = &a; int* d = c; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(24)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Pointer arithmetic', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int b = 5; int* c = &a; int* d = &b + 1; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(48)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Pointer arithmetic', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = 4;int b = 5; int* c = &a; int* d = c + 1; return d;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(32)
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
  it('Array assignment char', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = "char main() {char c[] = {'h','e','l','l','o'}; return c[4];}"
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(String.fromCharCode(result.value)).toBe('o')
    } else {
      expect(1).toBe(2)
    }
  })
  it('Array assignment char 2', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      "char main() {char c[5]; c[0] = 'h'; c[1] = 'e'; c[2]='l'; c[3]='l'; c[4]='o'; return c[4];}"
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(String.fromCharCode(result.value)).toBe('o')
    } else {
      expect(1).toBe(2)
    }
  })
  it('Array assignment string', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'char main() {char c[] = "hello world!"; return c[4];}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(String.fromCharCode(result.value)).toBe('o')
    } else {
      expect(1).toBe(2)
    }
  })
  it('Loop array', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      'int main() {int c[]={1,2,3,4}; int sum = 0; for (int i = 0; i < 4; i++){sum=sum+c[i];} return sum;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(10)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Loop arrays and sum', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code =
      `int main() {
        int c[]={1,2,3,4}; 
        int b[]={2,3,4,5};
        int a[4];
        int sum = 0; 
        for (int i = 0; i < 4; i++){
          a[i]=b[i]+c[i];
          sum=sum+a[i];
        } 
        return sum;
      }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(24)
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
