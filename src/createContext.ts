import { Context, Variant } from './types'
import { Stack } from './utils/stack'

const createEmptyRuntime = () => ({
  break: false,
  debuggerOn: true,
  isRunning: false,
  environments: [],
  typeEnv: [],
  value: undefined,
  nodes: [],
  stash: new Stack<any>(),
  agenda: new Stack<any>()
})

export const createEmptyContext = <T>(
  variant: Variant,
  externalSymbols: string[],
  externalContext?: T
): Context<T> => {
  return {
    externalSymbols,
    errors: [],
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    executionMethod: 'auto',
    variant,
    unTypecheckedCode: [],
    previousCode: []
  }
}

const createContext = <T>(
  variant: Variant = Variant.DEFAULT,
  externalSymbols: string[] = [],
  externalContext?: T
): Context => {
  const context = createEmptyContext(variant, externalSymbols, externalContext)

  return context
}

export default createContext
