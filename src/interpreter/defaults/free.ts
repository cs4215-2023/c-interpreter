import MemoryModel from '../../memory/memoryModel'

export const freeFunction = (address: number, memory: MemoryModel) => {
  memory.mem_heap_free(address)
}
