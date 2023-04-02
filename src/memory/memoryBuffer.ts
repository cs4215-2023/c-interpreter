import { stringify } from 'querystring'

import { TAGS } from './tags'
//gives
export default class MemoryBuffer {
  public node_size: number
  public size_offset: number
  public word_size: number
  public mem_size: number
  public mem_size_words: number
  public memoryView: DataView

  constructor(node_size: number, size_offset: number, word_size: number, size: number) {
    this.node_size = node_size
    this.size_offset = size_offset
    this.word_size = word_size
    this.mem_size = size
    this.mem_size_words = size * word_size
    this.memoryView = this.mem_make(this.mem_size_words)
  }

  public mem_make(words: number) {
    const data = new ArrayBuffer(words * this.word_size)
    const view = new DataView(data)
    return view
  }

  public mem_set_forwarding_address = (node: number, address: number) =>
    this.memoryView.setInt32(node * this.word_size, address)

  public mem_get_forwarding_address = (node: number) =>
    this.memoryView.getInt32(node * this.word_size)

  // get and set a word in heap at given address
  public mem_get = (address: number) => this.memoryView.getFloat64(address * this.word_size)

  public mem_set = (address: number, x: number) =>
    this.memoryView.setFloat64(address * this.word_size, x)

  // child index starts at 0
  public mem_get_child = (address: number, child_index: number) =>
    this.mem_get(address + 1 + child_index)

  public mem_set_child = (address: number, child_index: number, value: number) =>
    this.mem_set(address + 1 + child_index, value)

  public mem_get_tag = (address: number) => this.memoryView.getInt8(address * this.word_size)

  public mem_get_size = (address: number) =>
    this.memoryView.getUint16(address * this.word_size + this.size_offset)
  // the number of children is one less than the size
  // except for number nodes:
  //                 they have size 2 but no children
  public mem_get_number_of_children = (address: number) =>
    this.mem_get_tag(address) === TAGS.int_tag ? 0 : this.mem_get_size(address) - 1

  // access byte in heap, using address and offset
  public mem_set_byte_at_offset = (address: number, offset: number, value: number) =>
    this.memoryView.setUint8(address * this.word_size + offset, value)

  public mem_get_byte_at_offset = (address: number, offset: number) =>
    this.memoryView.getUint8(address * this.word_size + offset)

  public is_int = (address: number) => this.mem_get_tag(address) === TAGS.int_tag

  public is_char = (address: number) => this.mem_get_tag(address) === TAGS.char_tag

  public is_void = (address: number) => this.mem_get_tag(address) === TAGS.void_tag

  public is_float = (address: number) => this.mem_get_tag(address) === TAGS.int_tag

  public address_to_JS_value = (x: number) => {
    return this.mem_get(x) //this is fine for now
  }
}
