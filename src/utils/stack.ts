export class Stack<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  push(...items: T[]): void {
    this.items.push(...items)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  length(): number {
    return this.items.length
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  debug(): void {
    for (const item of this.items) {
      console.log(item)
    }
  }
}
