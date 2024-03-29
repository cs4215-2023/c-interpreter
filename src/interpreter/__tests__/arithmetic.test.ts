import createContext from '../../createContext'
import { sourceRunner } from '../../runner'
import { Variant } from '../../types'
import { DivisionByZeroError } from '../errors'

describe('Arithmetic', () => {
  it('negative number ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'int main() {int a = -1; return a;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(-1)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Simple addition ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1+2;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Simple subtraction ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {2-1;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Subtraction to negative value ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1-2;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(-1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Division ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {2 / 4;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Lesser than ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1 < 3;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Greater than ', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1 > 3;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Lesser than or equal', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {3 <= 3;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Less than with identifier', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {int a = 1; a < 3;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Unary expression', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {!(1);}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Logical and expression', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1 && 2;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Logical or expression', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = 'void main() {1 || 2;}'
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Char int operations', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 'a' + 1;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(98)
    } else {
      expect(1).toBe(2)
    }
  })
  it('Char int operations 2', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 1+'a';}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(98)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Unary addition operation', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return +1;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Division by 0 throws error', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 1 / 0;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(DivisionByZeroError)
    }
  })

  it('Modulo 0 throws error', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 1 % 0;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(1).toBe(2)
    } else {
      const e = result.error
      expect(e).toBeInstanceOf(DivisionByZeroError)
    }
  })

  it('Inequality returns 1 if unequal', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 1 != 0;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Inequality returns 0 if equal', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {return 0 != 0;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Greater than or equal returns 0', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {int a = 1 >= 2; int b = 3 >= 2; return a;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(0)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Bitshift right', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {int a = 2 >> 1; return a;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(1)
    } else {
      expect(1).toBe(2)
    }
  })

  it('Bitshift left', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {int a = 2 << 1; return a;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(4)
    } else {
      expect(1).toBe(2)
    }
  })

  it('XOR operation', async () => {
    const context = createContext(Variant.DEFAULT, undefined, undefined)
    const code = `int main() {int a = 2 ^ 1; return a;}`
    const result = await sourceRunner(code, context)
    if (result.status == 'finished') {
      expect(result.value).toBe(3)
    } else {
      expect(1).toBe(2)
    }
  })
})
