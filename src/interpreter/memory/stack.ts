import { assert } from 'console'

import MemoryBuffer from './memoryBuffer'
import { TAGS } from './tags'

export default class Stack extends MemoryBuffer {
  public stack_size: number
  public stack_pointer: number
  public base_pointer: number
  public stack_addr_begin: number
  //check what is happening here
  constructor(stack_size: number, stack_addr_begin: number) {
    super(1, 1, 4, stack_size)
    this.stack_pointer = stack_addr_begin
    this.stack_addr_begin = stack_addr_begin
    this.base_pointer = stack_addr_begin
    this.stack_size = stack_size
  }

  //BASIC FUNCTIONALITY
  public stack_get(address: number) {
    return this.memoryView.getFloat32(address)
  }

  public stack_set(address: number, x: number) {
    return this.memoryView.setFloat32(address, x)
  }

  //this is to directly access and modify memory in the stack, might be useful for pointers
  public stack_get_tag_and_value(address: number): [number, number] {
    const type = this.stack_get(address)
    const val = this.stack_get(address + this.word_size / 2)
    return ~~type !== TAGS.float_tag ? [~~type, ~~val] : [~~type, val]
  }

  public stack_set_tag_and_value(address: number, tag: number, x: number) {
    this.stack_set(address, tag)
    this.stack_set(address + this.word_size / 2, x)
  }

  public allocate_one() { //allocate one slot of data
    const address = this.stack_pointer
    this.stack_pointer += this.word_size
    return address
  }

  public push(tag: number, x: number) {
    if ((this.stack_pointer - this.stack_addr_begin) / this.word_size >= this.stack_size) {
      console.log('stack overflow,replacing top of stack')
      this.stack_set_tag_and_value(this.stack_pointer - this.word_size, tag, x)
      return this.stack_pointer - this.word_size
    }
    const address = this.stack_pointer
    //first is the type
    this.stack_set(address, tag)
    //second is the value
    this.stack_set(address + this.word_size / 2, x)

    this.stack_pointer += this.word_size
    return address
  }

  public pop() {
    const address = this.stack_pointer
    const val = this.stack_get(address - this.word_size / 2)
    const type = this.stack_get(address - this.word_size)

    this.stack_pointer -= this.word_size //move stack pointer backwards
    return [~~type, val]
  }
  //END BASIC FUNCTIONALITY

  //DATA TYPES
  public push_int(x: number) {
    return this.push(TAGS.int_tag, x)
  }

  public push_char(x: string) {
    assert(x.length == 1) //should be a char and not string
    return this.push(TAGS.char_tag, x.charCodeAt(0))
  }

  public push_float(x: number) {
    console.log("pushing " + x + " as float")
    return this.push(TAGS.float_tag, x)
  }

  //for arrays, i think the question now is where in the memory do we store the values?
  public push_pointer(address: number) {
    return this.push(TAGS.pointer_tag, address)
  }

  public type_to_data = (tag: number, x: number | string) =>
    tag === TAGS.int_tag || tag === TAGS.pointer_tag
      ? ~~x
      : tag === TAGS.char_tag
        ? String.fromCharCode(x as number)
        : tag === TAGS.float_tag
          ? x
          : Error('Tag is undefined')

  //END DATA TYPES

  //SCOPE
  public enter_scope() {
    this.push(TAGS.base_pointer_tag, this.base_pointer) // save old pointer from previous stack frame
    this.base_pointer = this.stack_pointer
  }

  public exit_scope() {
    while (true) {
      const [tag, value] = this.pop()
      if (tag === TAGS.base_pointer_tag) {
        this.base_pointer = value //reset base pointer to old one
        break
      }
    }
  }

  public return_and_exit_scope(address: number) {
    //return value is the top of stack
    const [type, val] = this.stack_get_tag_and_value(address * this.word_size)
    this.exit_scope()
    return this.push(type, val)
  }
  //END SCOPE

  //PROPERTIES
  public size() {
    return (this.stack_pointer - this.stack_addr_begin) / this.word_size
  }
  //ENDPROPERTIES
}
