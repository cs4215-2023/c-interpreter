import { size } from 'lodash'
import Heap from '../heap'
import { TAGS } from '../tags'

const word_size = 8
const heap_size = 7

describe('stack tests', () => {
    it('simple allocate and read', () => {
        const heap_size = 20
        const heap = new Heap(word_size, heap_size)

        const address = heap.allocate(TAGS.int_tag, 1)
        const [type, val] = heap.get_tag_and_address(address)
        expect(type).toBe(TAGS.int_tag)
        expect(val).toBe(1)
    })

    it('allocate many and read one', () => {
        const heap_size = 20
        const heap = new Heap(word_size, heap_size)
        let address = 0
        for (let i = 0; i < 15; i++) {
            address = heap.allocate(TAGS.int_tag, 1)
        }
        const [type, val] = heap.get_tag_and_address(address)
        expect(type).toBe(TAGS.int_tag)
        expect(val).toBe(1)
    })
})
