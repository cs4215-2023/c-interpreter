import { assert } from "console";
import Heap from "./heap";
import Stack from "./stack";
import { MEM_TYPE } from "./tags";

//main class to utilize for interpreter
export default class MemoryModel {
    //potential static memory perhaps?
    public stack: Stack
    public heap: Heap
    public stack_addr_range: [number, number]
    public heap_addr_range: [number, number] //heap address should be after stack addresses

    constructor(stack_size: number, stack_addr_begin: number, heap_size: number, heap_addr_begin: number) {
        this.stack = new Stack(stack_size, stack_addr_begin)
        this.stack_addr_range = [stack_addr_begin, stack_size + stack_addr_begin]
        this.heap_addr_range = [heap_addr_begin, heap_addr_begin + heap_size]
        //heap goes here
    }

    public mem_write_to_address(address: number, tag: number, x: number) {
        const heap_addr_begin = this.heap_addr_range[0]
        const heap_addr_end = this.heap_addr_range[1]
        const stack_addr_start = this.stack_addr_range[0]
        if (address < heap_addr_begin) {
            assert(address >= stack_addr_start) //or maybe include a runtime error
            return this.stack.stack_set_tag_and_value(address, tag, x)
        }
        else if (address >= heap_addr_begin && address < heap_addr_end) {
            Error("heap not implemented, not able to read from heap memory")
        }
        return Error("should have added to memory")
    }

    public mem_read(address: number): [number, number] {
        const heap_addr_begin = this.heap_addr_range[0]
        const heap_addr_end = this.heap_addr_range[1]
        const stack_addr_start = this.stack_addr_range[0]
        if (address < heap_addr_begin) {
            assert(address >= stack_addr_start) //or maybe include a runtime error
            return this.stack.stack_get_tag_and_value(address)
        }
        else if (address >= heap_addr_begin && address < heap_addr_end) {
            Error("heap not implemented, not able to read from heap memory")
        }
        Error("Memory only supports heap and stack")
        return [0, 0]
    }

    public enter_scope() { //currently, only stack is involved with scope
        this.stack.enter_scope()
    }

    public exit_scope() {
        this.stack.exit_scope()
    }

    public return_statement(address: number) { //exit scope but with return
        return this.stack.return_and_exit_scope(address)
    }

}