import MemoryModel from '../../memory/memoryModel'

export const freeFunction = (address: number, memory: MemoryModel) => {
  memory.mem_heap_free(address)
  console.log('number of slots left: ' + memory.heap.get_free_heap())
}
