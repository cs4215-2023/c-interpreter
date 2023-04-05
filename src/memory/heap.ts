import { size } from 'lodash'
import MemoryBuffer from './memoryBuffer'
import { TAGS } from './tags'

//FOR THE HEAP: (FOR MY FUTURE SELF)
//ON INITIALIZATION, EACH ADDRESS IS LINKED TO THE NEXT ADDRESS IN FRONT OF IT
//DURING USE, THE HEAP WON'T CHANGE SIZE, SO WHEN REASSIGNING STUFF LIKE VALUES
//WE JUST NEED TO POINT TO THE NEXT ADDRESS
//FREE IS THE CLOSEST WE CAN GET TO GC, WE JUST FREE UP MEMORY STARTING FROM THAT ADDRESS, AND MAKE SURE TO LINK UP
//THE START OF THE FREED ADDRESS TO THE PREVIOUS FREE POINTER
export default class Heap extends MemoryBuffer {
  public free: number //probably only needed for heap
  public void: number
  public unassigned: number
  public undefined: number
  public heap_size: number
  public heap_bottom: number
  constructor(word_size: number, heap_size: number) {
    super(2, 1, word_size, heap_size)
    this.free = 0
    this.heap_size = heap_size * word_size
    this.heap_bottom = 0
  }
  //probably no need for most of these since we only need it for malloc
  //probably move this to heap
  public init() {
    let current = this.heap_bottom
    while (current + this.word_size < this.heap_size) {
      //set the next node for current address
      this.memoryView.setInt16(current, current + this.word_size)
      current += this.word_size
    }
    this.memoryView.setInt16(current, -1)
  }
  public allocate(tag: number, val: number) {

    if (this.free === -1) {
      Error('heap memory exhausted')
    }
    const address = this.free
    this.free = this.get_child(this.free)
    this.memoryView.setInt8(address, tag)
    this.memoryView.setFloat32(address + this.word_size / 2, val) //set 32bits = 4 bytes of data
    return address
  }

  public get_child(address: number): number {
    return this.memoryView.getInt16(address)
  }

  public get_tag_and_address(address: number) {
    const type = this.memoryView.getInt8(address)
    const val = this.mem_get(address + this.word_size / 2)
    return ~~type !== TAGS.float_tag ? [~~type, ~~val] : [~~type, val]
  }

  public allocate_literal_values = () => {
    this.void = this.allocate(TAGS.void_tag, 1)
    this.unassigned = this.allocate(TAGS.Unassigned_tag, 1)
  }

  public heap_allocate_int = (n: number) => {
    const number_address = this.allocate(TAGS.int_tag, 2)
    this.mem_set(number_address + 1, n)
    return number_address
  }
  public heap_allocate_char = (n: number) => {
    const char_address = this.allocate(TAGS.char_tag, 2)
    this.mem_set(char_address + 1, n)
    return char_address
  }
  public heap_allocate_float = (n: number) => {
    const float_address = this.allocate(TAGS.float_tag, 2)
    this.mem_set(float_address + 1, n)
    return float_address
  }
  public print() {
    console.log(this.memoryView)
  }
}

let word_size = 8
let heap_size = 7
//1 entry in Uint8Contents = 8bytes (8bits = 1 byte)
//1 byte tag, 2 bytes children, 1 byte unused, 4 bytes payload (32 bits data)
let heap = new Heap(word_size, heap_size)
heap.init()
heap.print()
const address = heap.allocate(TAGS.int_tag, 1)
heap.print()
heap.allocate(TAGS.int_tag, 1)
heap.print()
console.log(heap.get_tag_and_address(address))