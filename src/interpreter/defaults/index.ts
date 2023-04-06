import { VOID_TYPE } from '../../constants'
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
  }
}
