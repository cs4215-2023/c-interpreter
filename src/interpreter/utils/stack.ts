export class Stack<T> {
  name: string
  stack: Array<T>

  constructor(name: string) {
    this.name = name
    this.stack = []
  }

  push(...items: T[]): void {
    this.stack.push(...items)
  }

  peek(): T {
    return this.stack.slice(-1)[0]
  }

  pop(): void {
    this.stack.pop()
  }

  toString(): string {
    let s = ''
    for (const val of this.stack) {
      s += val + ','
    }
    return s
  }
}
