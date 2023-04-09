import Heap from './heap'
import Stack from './stack'
import { TAGS } from './tags'

//main class to utilize for interpreter
export default class MemoryModel {
  //potential static memory perhaps?
  public stack: Stack
  public heap: Heap
  public stack_addr_range: [number, number]
  public heap_addr_range: [number, number] //heap address should be after stack addresses
  public word_size: number
  public heap_addr_begin: number
  constructor(
    stack_size: number,
    stack_addr_begin: number,
    heap_size: number,
    heap_addr_begin: number
  ) {
    this.stack = new Stack(stack_size, stack_addr_begin)
    this.word_size = 8
    this.heap = new Heap(this.word_size, heap_size)
    this.heap.init()
    this.stack_addr_range = [stack_addr_begin, stack_size + stack_addr_begin]
    this.heap_addr_range = [heap_addr_begin, heap_addr_begin + heap_size]
    this.heap_addr_begin = heap_addr_begin
    //heap goes here
  }

  //GENERAL STUFF
  public mem_write_to_address(address: number, tag: number, x: number) {
    const heap_addr_begin = this.heap_addr_range[0]
    const heap_addr_end = this.heap_addr_range[1]

    if (address < heap_addr_begin) {
      // maybe include a runtime error
      return this.stack.stack_set_tag_and_value(address, tag, x)
    } else if (address >= heap_addr_begin && address < heap_addr_end) {
      return this.heap.set_tag_and_value(address - heap_addr_begin, tag, x)
    }
    return Error('should have added to memory at this point')
  }

  public mem_read(address: number): [number, number] {
    const heap_addr_begin = this.heap_addr_range[0]
    const heap_addr_end = this.heap_addr_range[1]

    if (address < heap_addr_begin) {
      return this.stack.stack_get_tag_and_value(address)
    } else if (address >= heap_addr_begin && address < heap_addr_end) {
      return this.heap.get_tag_and_value(address - heap_addr_begin)
    }
    throw Error('Memory only supports heap and stack')
  }

  public from_stack(address: number): boolean {
    return address < this.stack_addr_range[1] && address >= this.stack_addr_range[0]
  }
  public from_heap(address: number): boolean {
    return address < this.heap_addr_range[1] && address >= this.heap_addr_range[0]
  }

  //HEAP STUFF

  public mem_heap_allocate_one(): number {
    return this.heap.allocate_one() + this.heap_addr_begin
  }
  public mem_heap_allocate_n(n: number): number {
    return this.heap.allocate_n(n) + this.heap_addr_begin
  }

  public mem_heap_free(address: number) {
    this.heap.free_up_memory(address - this.heap_addr_begin)
  }

  //STACK STUFF
  public mem_stack_push(tag: number, x: number | string | null) {
    return tag === TAGS.int_tag
      ? this.stack.push_int(x as number)
      : tag === TAGS.float_tag
        ? this.stack.push_float(x as number)
        : tag === TAGS.char_tag
          ? this.stack.push_char(x as number | string)
          : tag === TAGS.int_pointer_tag ||
            tag === TAGS.float_pointer_tag ||
            tag === TAGS.char_pointer_tag
            ? this.stack.push_pointer(tag, x as number)
            : tag === TAGS.void_tag
              ? this.stack.push(TAGS.void_tag, 0)
              : null
  }

  public mem_stack_allocate_one(): number {
    return this.stack.allocate_one()
  }

  public mem_stack_deallocate_one() {
    this.stack.deallocate_one()
  }

  public mem_stack_deallocate_n(n: number) {
    for (let i = 0; i < n; i++) {
      this.stack.deallocate_one()
    }
  }

  public mem_stack_allocate_n(n: number): number {
    return this.stack.allocate_n(n)
  }

  public enter_scope() {
    //currently, only stack is involved with scope. heap is not involved
    this.stack.enter_scope()
  }

  public exit_scope() {
    this.stack.exit_scope()
  }

  public return_statement(address: number) {
    //exit scope but with return
    return this.stack.return_and_exit_scope(address)
  }
}
