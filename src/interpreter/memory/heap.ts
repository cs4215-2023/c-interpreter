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

  // builtins: builtin id is encoded in second byte
  // [1 byte tag, 1 byte id, 3 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // Note: #children is 0

  public is_Builtin = (address: number) => this.mem_get_tag(address) === TAGS.Builtin_tag

  public heap_allocate_Builtin = (id: number) => {
    const address = this.heap_allocate(TAGS.Builtin_tag, 1)
    this.mem_set_byte_at_offset(address, 1, id)
    return address
  }

  public heap_get_Builtin_id = (address: number) => this.mem_get_byte_at_offset(address, 1)

  // closure
  // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the address of env
  // note: currently bytes at offset 4 and 7 are not used;
  //   they could be used to increase pc and #children range

  public heap_allocate_Closure = (arity: number, env: number) => {
    const address = this.heap_allocate(TAGS.Closure_tag, 2)
    this.mem_set_byte_at_offset(address, 1, arity)
    this.mem_set(address + 1, env)
    return address
  }

  public heap_get_Closure_arity = (address: number) => this.mem_get_byte_at_offset(address, 1)

  public heap_get_Closure_environment = (address: number) => this.mem_get_child(address, 0)

  public is_Closure = (address: number) => this.mem_get_tag(address) === TAGS.Closure_tag

  // block frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]

  public heap_allocate_Blockframe = (env: number) => {
    const address = this.heap_allocate(TAGS.Blockframe_tag, 2)
    this.mem_set(address + 1, env)
    return address
  }

  public heap_get_Blockframe_environment = (address: number) => this.mem_get_child(address, 0)

  public is_Blockframe = (address: number) => this.mem_get_tag(address) === TAGS.Blockframe_tag

  // call frame
  // [1 byte tag, 1 byte unused, 2 bytes pc,
  //  1 byte unused, 2 bytes #children, 1 byte unused]
  // followed by the address of env

  public heap_allocate_Callframe = (env: number) => {
    const address = this.heap_allocate(TAGS.Callframe_tag, 2)
    this.mem_set(address + 1, env)
    return address
  }

  public heap_get_Callframe_environment = (address: number) => this.mem_get_child(address, 0)

  public is_Callframe = (address: number) => this.mem_get_tag(address) === TAGS.Callframe_tag

  // environment frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its values

  public heap_allocate_Frame = (number_of_values: number) =>
    this.heap_allocate(TAGS.Frame_tag, number_of_values + 1)

  // environment
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its frames

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
