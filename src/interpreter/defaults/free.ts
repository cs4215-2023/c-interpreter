import MemoryModel from '../../memory/memoryModel'

export const freeFunction = (address: number, memory: MemoryModel) => {
  console.log('call free function with argument ' + address)
  //need to abstract the memory a little from the type here
  memory.mem_heap_free(address)
  console.log('number of slots left: ' + memory.heap.get_free_heap())
}
