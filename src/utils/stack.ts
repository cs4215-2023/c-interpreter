export class Stack<Literal> {
  private items: Literal[]

  constructor() {
    this.items = []
  }

  push(...items: Literal[]): void {
    this.items.push(...items)
  }

  pop(): Literal | undefined {
    return this.items.pop()
  }

  peek(): Literal | undefined {
    return this.items[this.items.length - 1]
  }

  length(): number {
    return this.items.length
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  debug(): void {
    console.log(this.items)
    for (const item of this.items) {
      console.log(item)
    }
  }
}
