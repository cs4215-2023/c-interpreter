import MemoryBuffer from "./memoryBuffer";
import { TAGS } from "./tags"

export default class Stack extends MemoryBuffer {
    public free: number //probably only needed for heap
    public void: number
    public unassigned: number
    public undefined: number
    constructor(node_size: number,
        size_offset: number,
        word_size: number,
        heap_size: number) {
        super(node_size, size_offset, word_size, heap_size)
    }

    public stack_init() {

    }

    public stack_allocate(tag: number, size: number) {
        if (size > this.node_size) {
            Error("limitation: nodes cannot be larger than " + this.node_size + " words")
        }
        // a value of -1 in free indicates the
        // end of the free list
        //perform garbage collection here
        //need to access OS, Env, RTS
        if (this.free === -1) {
            Error("stack memory exhausted")
        }
        const address = this.free
        this.free = this.mem_get(this.free)
        this.memoryView.setInt8(address * this.word_size, tag)
        this.memoryView.setUint16(address * this.word_size +
            this.size_offset,
            size)
        return address
    }
}