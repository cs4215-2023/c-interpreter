import { StackOverflowError } from '../../errors/errors'
import Stack from '../stack'
import { TAGS } from '../tags'

const STACK_ADDR_BEGIN = 0

describe('stack tests', () => {
  it('push and pop int test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_int(50)
    expect(stack.pop()).toEqual([TAGS.int_tag, 50])
  })

  it('push and pop pointer test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_pointer(TAGS.int_pointer_tag, 18)
    expect(stack.pop()).toEqual([TAGS.int_pointer_tag, 18])
  })

  it('push and pop float test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    const addr = stack.push_float(0.5)
    const [type, val] = stack.stack_get_tag_and_value(addr)
    expect(val).toBe(0.5)
    expect(type).toBe(TAGS.float_tag)
  })

  it('push and pop float test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_float(12.1)
    expect(stack.pop()[1]).toBeCloseTo(12.1)
  })

  it('push test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.push_pointer(TAGS.int_pointer_tag, 18) //technically pointing to 18 on the stack
    expect(stack.size()).toBe(4)
    expect(stack.pop()).toEqual([TAGS.int_pointer_tag, 18])
  })

  it('pop test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.push_pointer(TAGS.int_pointer_tag, 18) //technically pointing to 18 on the stack

    for (let i = 0; i < 4; i++) {
      stack.pop()
    }
    expect(stack.size()).toBe(0)
  })

  it('simple stack overflow test', () => {
    const stack_size = 5
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.push_pointer(TAGS.int_pointer_tag, 18) //technically pointing to 18 on the stack
    stack.push_float(12.1)

    try {
      stack.push_pointer(TAGS.int_pointer_tag, 18)
    } catch (e) {
      expect(e).toStrictEqual(StackOverflowError)
    }
  })

  it('big stack overflow test', () => {
    const stack_size = 30
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    for (let i = 0; i < stack_size; i++) {
      stack.push_int(5)
    }
    try {
      stack.push_int(12)
    } catch (e) {
      expect(e).toStrictEqual(StackOverflowError)
    }
  })

  it('specific addr test', () => {
    const stack_size = 50
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)
    for (let i = 0; i < 13; i++) {
      stack.push_int(1)
    }
    expect(stack.size()).toBe(13)
    const [type, val] = stack.stack_get_tag_and_value(12 * 8)
    expect(val).toBe(1)
    expect(type).toBe(2)
  })

  it('specific addr test 2', () => {
    const stack_size = 50
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)
    for (let i = 0; i < 14; i++) {
      stack.push_int(1)
    }
    expect(stack.size()).toBe(14)
    const [type, val] = stack.stack_get_tag_and_value(13 * 8)
    expect(val).toBe(1)
    expect(type).toBe(2)
  })

  it('enter scope test', () => {
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.push_pointer(TAGS.int_pointer_tag, 18) //technically pointing to 18 on the stack
    stack.enter_scope() //a base pointer will be added here
    stack.push_int(3)

    expect(stack.size()).toBe(6)
    expect(stack.pop()).toEqual([TAGS.int_tag, 3])
  })

  it('exit scope test', () => {
    /**
     * this code will be something like:
     * void foo(){
     *
     * }
     *
     * char a = 'c';
     * int b = 3;
     * float c = 12.1;
     * foo();
     */
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.push_pointer(TAGS.int_pointer_tag, 18) //technically pointing to 18 on the stack
    stack.enter_scope() //a base pointer will be added here
    stack.push_int(3)
    stack.push_float(1.3)

    expect(stack.size()).toBe(7)

    stack.exit_scope()

    expect(stack.size()).toBe(4)
    const [type, val] = stack.pop()
    expect([type, stack.type_to_data(type, val)]).toEqual([TAGS.int_pointer_tag, 18])
  })

  it('return and exit scope test', () => {
    /**
     * this code will be something like:
     * void ret_3(){
     *  return 3;
     * }
     *
     * char a = 'c';
     * int b = 3;
     * float c = 12.1;
     * int d = ret_3();
     */
    const stack_size = 20
    const stack = new Stack(stack_size, STACK_ADDR_BEGIN)

    stack.push_char('c')
    stack.push_int(3)
    stack.push_float(12.1)
    stack.enter_scope() //a base pointer will be added here
    stack.push_int(5)

    expect(stack.size()).toBe(5)

    stack.return_and_exit_scope(4)

    expect(stack.size()).toBe(4)
    expect(stack.pop()).toEqual([TAGS.int_tag, 5])
  })
})
