import Heap from "../../memory/heap";
import MemoryModel from "../../memory/memoryModel";


export const mallocFunction = (x: number, memory: MemoryModel): number => {
    console.log("call malloc function with argument " + x)
    //need to abstract the memory a little from the type here
    return memory.heap.allocate_n(x)
}