import MemoryBuffer from './memoryBuffer'
import { TAGS } from './tags'

export default class Heap extends MemoryBuffer {
  public free: number //probably only needed for heap
  public void: number
  public unassigned: number
  public undefined: number
  constructor(node_size: number, size_offset: number, word_size: number, heap_size: number) {
    super(node_size, size_offset, word_size, heap_size)
  }
  //probably no need for most of these since we only need it for malloc
  //probably move this to heap
  public heap_allocate(tag: number, size: number) {
    if (size > this.node_size) {
      Error('limitation: nodes cannot be larger than ' + this.node_size + ' words')
    }
    // a value of -1 in free indicates the
    // end of the free list
    //perform garbage collection here
    //need to access OS, Env, RTS
    if (this.free === -1) {
      //mark and sweep here
      Error('heap memory exhausted')
    }
    const address = this.free
    this.free = this.mem_get(this.free)
    this.memoryView.setInt8(address * this.word_size, tag)
    this.memoryView.setUint16(address * this.word_size + this.size_offset, size)
    return address
  }

  public allocate_literal_values = () => {
    this.void = this.heap_allocate(TAGS.void_tag, 1)
    this.unassigned = this.heap_allocate(TAGS.Unassigned_tag, 1)
  }

  public heap_allocate_int = (n: number) => {
    const number_address = this.heap_allocate(TAGS.int_tag, 2)
    this.mem_set(number_address + 1, n)
    return number_address
  }
  public heap_allocate_char = (n: number) => {
    const char_address = this.heap_allocate(TAGS.char_tag, 2)
    this.mem_set(char_address + 1, n)
    return char_address
  }
  public heap_allocate_float = (n: number) => {
    const float_address = this.heap_allocate(TAGS.float_tag, 2)
    this.mem_set(float_address + 1, n)
    return float_address
  }
}
