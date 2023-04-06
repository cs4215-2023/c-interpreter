import { INT_POINTER_TYPE, VOID_TYPE } from '../../constants'
import MemoryModel from '../../memory/memoryModel'
import { freeFunction } from './free'
import { mallocFunction } from './malloc'
import { printfFunction } from './printf'

export const arity = (f: Function) => {
  return f.length
}

export const builtin_functions = {
  printf: {
    type: 'Builtin',
    returnType: VOID_TYPE,
    apply: (x: string, ...args: any[]): void => console.log(printfFunction(x, ...args)),
    arity: 0,
    hasVarArgs: true,
    name: 'printf'
  },
  malloc: {
    type: 'Builtin',
    returnType: VOID_TYPE,
    apply: (x: number): void => { },
    apply_mem: (x: number, memory: MemoryModel): number => { return mallocFunction(x, memory) },
    arity: 0,
    hasVarArgs: false,
    name: 'malloc'
  },
  free: {
    type: 'Builtin',
    returnType: VOID_TYPE,
    apply: (x: number): void => { },
    apply_mem: (x: number, memory: MemoryModel) => { freeFunction(x, memory) },
    arity: 1,
    hasVarArgs: false,
    name: 'free'
  },
}
