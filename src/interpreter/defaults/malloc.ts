import MemoryModel from '../../memory/memoryModel'

export const mallocFunction = (x: number, memory: MemoryModel): number => {
  return memory.mem_heap_allocate_n(x)
}
