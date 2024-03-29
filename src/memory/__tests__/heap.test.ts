import Heap from '../heap'
import { TAGS } from '../tags'

const word_size = 8
const heap_start = 100

describe('stack tests', () => {
  it('set to memory and read', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    heap.init()
    heap.set_tag_and_value(heap_start, TAGS.int_tag, 1)
    const [type, val] = heap.get_tag_and_value(heap_start)
    expect(type).toBe(TAGS.int_tag)
    expect(val).toBe(1)
  })

  it('set many to memory and read one', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    let address = heap_start
    heap.init()
    for (let i = 0; i < 15; i++) {
      heap.set_tag_and_value(address, TAGS.int_tag, 1)
      address += heap.word_size
    }
    const [type, val] = heap.get_tag_and_value(address - heap.word_size)
    expect(type).toBe(TAGS.int_tag)
    expect(val).toBe(1)
  })

  it('allocate one and write to one', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    heap.init()
    const address = heap.allocate_one()
    heap.set_tag_and_value(address, TAGS.int_tag, 1)
    const [type, val] = heap.get_tag_and_value(address)
    expect(type).toBe(TAGS.int_tag)
    expect(val).toBe(1)
  })
  it('allocate one and free one', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    heap.init()
    expect(heap.get_free_heap()).toBe(20)
    const address = heap.allocate_one()
    expect(heap.get_free_heap()).toBe(19)
    heap.free_up_memory(address)
    expect(heap.get_free_heap()).toBe(20)
  })
  it('allocate many and free all', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    const addresses = []
    heap.init()
    for (let i = 0; i < heap_size; i++) {
      addresses.push(heap.allocate_one())
    }
    expect(heap.get_free_heap()).toBe(0)
    addresses.forEach((addr, _i) => {
      heap.free_up_memory(addr)
    })
    expect(heap.get_free_heap()).toBe(20)
  })
  it('allocate many and free all in reverse', () => {
    const heap_size = 20
    const heap = new Heap(word_size, heap_size)
    const addresses = []
    heap.init()
    for (let i = 0; i < heap_size; i++) {
      addresses.push(heap.allocate_one())
    }
    expect(heap.get_free_heap()).toBe(0)
    addresses.reverse().forEach((addr, _i) => {
      heap.free_up_memory(addr)
    })
    expect(heap.get_free_heap()).toBe(20)
  })
})
