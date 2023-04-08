import { IOptions, Result } from '..'
import { handleRuntimeError } from '../interpreter/errors'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import { Program } from '../parser/types'
import { PreemptiveScheduler } from '../schedulers'
import { Context, Scheduler, SourceError, Variant } from '../types'
import { resolvedErrorPromise } from './utils'

const DEFAULT_SOURCE_OPTIONS: IOptions = {
  scheduler: 'async',
  steps: 1000,
  stepLimit: 1000,
  executionMethod: 'auto',
  variant: Variant.DEFAULT,
  originalMaxExecTime: 1000,
  useSubst: false,
  isPrelude: false,
  throwInfiniteLoops: true
}

export function sourceRunner(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const theOptions: IOptions = { ...DEFAULT_SOURCE_OPTIONS, ...options }
  context.variant = DEFAULT_SOURCE_OPTIONS.variant
  context.errors = []

  try {
    const program: Program | undefined = parse(code, context)
    if (!program) {
      return resolvedErrorPromise
    }
    const it = evaluate(program, context)
    const scheduler: Scheduler = new PreemptiveScheduler(theOptions.steps)
    return scheduler.run(it, context)
  } catch (e) {
    context.errors.push(e as SourceError)
    context.runtime.environments = context.runtime.environments.slice(
      -context.numberOfOuterEnvironments
    )
    return Promise.resolve({ status: 'error', error: e as SourceError })
  }
}
