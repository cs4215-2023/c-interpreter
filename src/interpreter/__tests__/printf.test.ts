import { printf } from '../defaults/functions'

describe('printf tests', () => {
  it('printf with no arguments', async () => {
    const result = printf('hello world!')
    expect(result).toBe('hello world!')
  })

  it('printf with integer replacement', async () => {
    const result = printf('%d', 1)
    expect(result).toBe('1')
  })

  it('printf with float formatter ', async () => {
    const result = printf('%f', 1.0)
    expect(result).toBe('1.000000')
  })
})
