import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'

describe('Programs', () => {
  it('simple malloc', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main(){
        int* c = malloc(1);
        c[0] = 1;
        return c[0];
    }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('malloc w multiple slots', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main(){
            int* c = malloc(3);
            c[0] = 1;
            c[1] = 2;
            c[2] = 3;
            return c[2];
        }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('simple char malloc', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `char main(){
        char* c = malloc(1);
        c[0] = 'a';
        return c[0];
    }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(97)
    } else {
      expect(1).toBe(2)
    }
  })

  it('char malloc w multiple slots', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `char main(){
            char* c = malloc(3);
            c[0] = 'a';
            c[1] = 'b';
            c[2] = 'c';
            return c[1];
        }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(98)
    } else {
      expect(1).toBe(2)
    }
  })

  it('simple float malloc', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `float main(){
        float* c = malloc(1);
        c[0] = 0.1234;
        return c[0];
    }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(parseFloat(result.value)).toBeCloseTo(0.1234)
    } else {
      expect(1).toBe(2)
    }
  })

  it('float malloc w multiple slots', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `float main(){
            float* c = malloc(1);
            c[0] = 0.1234;
            c[1] = 12.3123;
            c[2] = 13.41234523;
            return c[2];
        }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(parseFloat(result.value)).toBeCloseTo(13.41234523)
    } else {
      expect(1).toBe(2)
    }
  })

  it('simple malloc and free', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main(){
        int* c = malloc(1);
        c[0] = 1;
        free(c);
        return 1;
    }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('malloc w multiple slots and free', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main(){
            int* c = malloc(3);
            c[0] = 1;
            c[1] = 2;
            c[2] = 3;
            free(c);
            return 3;
        }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('multiple malloc w multiple slots and some free', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `float main(){
            int* c = malloc(3);
            int* d = malloc(5);
            char* f = malloc(6);
            float* s = malloc(3);
            s[0] = 1.5; s[1] = 2.321; s[2] = 13.231;
            free(c);
            free(d);
            free(f);
            return s[2];
        }`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(parseFloat(result.value)).toBeCloseTo(13.231)
    } else {
      expect(1).toBe(2)
    }
  })
})
