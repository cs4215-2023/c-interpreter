import { TAGS } from './tags'
//gives
export default class MemoryBuffer {
  public node_size: number
  public size_offset: number
  public word_size: number
  public mem_size: number
  public mem_size_words: number
  public memoryView: DataView

  constructor(node_size: number, size_offset: number, word_size: number, size: number) {
    this.node_size = node_size
    this.size_offset = size_offset
    this.word_size = word_size
    this.mem_size = size
    this.mem_size_words = size * word_size
    this.memoryView = this.mem_make(this.mem_size_words)
  }

  public mem_make(words: number) {
    const data = new ArrayBuffer(words * this.word_size)
    const view = new DataView(data)
    return view
  }

  // get and set a word in heap at given address
  public mem_get = (address: number) => this.memoryView.getFloat32(address)

  public mem_set = (address: number, x: number) => this.memoryView.setFloat32(address, x)

  public address_to_JS_value = (x: number) => {
    return this.mem_get(x) //this is fine for now
  }
}
