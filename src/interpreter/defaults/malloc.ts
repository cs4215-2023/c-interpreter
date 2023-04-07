import Heap from '../../memory/heap'
import MemoryModel from '../../memory/memoryModel'

export const mallocFunction = (x: number, memory: MemoryModel): number => {
  //memory literally takes x as number of items atm
  console.log('malloc taking place')
  return memory.mem_heap_allocate_n(x)
}
