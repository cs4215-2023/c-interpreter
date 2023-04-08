import { printfFunction } from '../defaults/printf'

describe('printf tests', () => {
  it('printf with no arguments', async () => {
    const result = printfFunction('hello world!')
    expect(result).toBe('hello world!')
  })

  it('printf with integer replacement', async () => {
    const result = printfFunction('%d', 1)
    expect(result).toBe('1')
  })

  it('printf with float formatter ', async () => {
    const result = printfFunction('%f', 1.0)
    expect(result).toBe('1.000000')
  })

  it('printf with int formatter, float input', async () => {
    const result = printfFunction('%d', 1.0)
    expect(result).toBe('1')
  })

  it('printf with int formatter, char input', async () => {
    const result = printfFunction('%d', 'a')
    expect(result).toBe('97')
  })

  it('printf with char formatter, int input', async () => {
    const result = printfFunction('%c', 97)
    expect(result).toBe('a')
  })

  it('printf with multiple formatters of the same kind', async () => {
    const result = printfFunction('h%dllo w%drld', 3, 0)
    expect(result).toBe('h3llo w0rld')
  })

  it('printf with multiple formatters of different kinds', async () => {
    const result = printfFunction('h%dllo w%drl%c', 3, 0, 'd')
    expect(result).toBe('h3llo w0rld')
  })
})
