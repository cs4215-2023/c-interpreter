import MemoryModel from "../../memory/memoryModel"



export const freeFunction = (address: number, memory: MemoryModel) => {
    console.log("call malloc function with argument " + address)
    //need to abstract the memory a little from the type here
    memory.heap.free_up_memory(address)
}