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
  public heap_end
  constructor(word_size: number, heap_size: number) {
    super(2, 1, word_size, heap_size)
    this.free = 0
    this.heap_size = heap_size * word_size
    this.heap_end = this.heap_size
    this.heap_bottom = 0
  }
  //probably no need for most of these since we only need it for malloc
  //probably move this to heap
  public init() {
    let current = this.heap_bottom
    while (current + this.word_size < this.heap_end) {
      //set the next node for current address
      this.memoryView.setInt16(current, current + this.word_size)
      current += this.word_size
    }
    this.memoryView.setInt16(current, TAGS.END_OF_FREE) //set end of heap to have a child of -1
  }
  public allocate_one() {
    if (this.free === TAGS.END_OF_FREE) {
      throw Error('heap memory exhausted')
    }
    const address = this.free
    this.free = this.get_child(this.free)
    this.set_child(address, TAGS.END_OF_MALLOC) //let heap know that this memory is at the end
    // this.memoryView.setInt8(address, tag)

    // this.memoryView.setFloat32(address + this.word_size / 2, val) //set 32bits = 4 bytes of data
    return address
  }

  public allocate_n(n: number) {
    if (this.free === -1) {
      throw Error('heap memory exhausted')
    }
    let index = 0
    const initial_addr = this.free
    while (index < n - 1) {
      //get the current free node
      // this.memoryView.setInt8(this.free, tag)
      this.free = this.get_child(this.free)
      if (this.free === TAGS.END_OF_FREE) {
        throw Error('heap memory exhausted')
      }
      index++
    }
    //at the last allocated memory
    const address = this.free
    this.free = this.get_child(this.free)
    this.set_child(address, TAGS.END_OF_MALLOC) //let heap know that this memory is at the end

    //return start of memory allocated to the variable
    return initial_addr
  }

  //free up memory to be reused by the system
  public free_up_memory(address: number) {
    //reset memory
    const initial_free = this.free
    this.print()
    //set free to be start of memory that is freed up
    this.free = address

    //get the child address of the starting point
    let child_addr = address
    let prev_addr = address
    while (true) {
      prev_addr = child_addr
      this.set_tag_and_value(child_addr, 0, 0)
      child_addr = this.get_child(child_addr)
      this.print()
      if (child_addr === TAGS.END_OF_MALLOC) {
        break
      }
    }
    this.set_tag_and_value(prev_addr, 0, 0)
    this.set_child(prev_addr, initial_free)
  }

  public get_child(address: number): number {
    return this.memoryView.getInt16(address)
  }

  public set_child(address: number, child: number) {
    this.memoryView.setInt16(address, child)
  }

  public get_tag_and_value(address: number): [number, number] {
    const type = this.memoryView.getInt8(address)
    const val = this.mem_get(address + this.word_size / 2)
    return ~~type !== TAGS.float_tag ? [~~type, ~~val] : [~~type, val]
  }

  public set_tag_and_value(address: number, tag: number, x: number) {
    this.memoryView.setInt8(address, tag)
    this.mem_set(address + this.word_size / 2, x)
  }

  //UTILS
  public print() {
    console.log(this.memoryView)
  }

  public get_free_heap(): number {
    let free = this.free
    console.log(this.free)
    let count = 0
    while (free !== TAGS.END_OF_FREE) {
      free = this.get_child(free)
      count++
      if (count > this.heap_size) {
        throw Error('counting is going wrong')
      }
    }
    return count
  }
}

// const heap_size = 20
// const heap = new Heap(8, heap_size)
// heap.init()
// heap.print()
// console.log(heap.get_free_heap())
// const address = heap.allocate_one(TAGS.int_tag)
// console.log(heap.get_free_heap())
// heap.free_up_memory(address)
// heap.print()
// console.log(heap.get_free_heap())
