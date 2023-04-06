import { SourceMapConsumer } from 'source-map'

import createContext from './createContext'
import { sourceRunner } from './runner'
import { Context, ExecutionMethod, Result, SourceError, Variant } from './types'
export { SourceDocumentation } from './editors/ace/docTooltip'

export interface IOptions {
  scheduler: 'preemptive' | 'async'
  steps: number
  stepLimit: number
  executionMethod: ExecutionMethod
  variant: Variant
  originalMaxExecTime: number
  useSubst: boolean
  isPrelude: boolean
  throwInfiniteLoops: boolean
}

// needed to work on browsers
if (typeof window !== 'undefined') {
  // @ts-ignore
  SourceMapConsumer.initialize({
    'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm'
  })
}

export function parseError(errors: SourceError[]): string {
  const errorMessagesArr = errors.map(error => {
    const line = error.location ? error.location.start.line : '<unknown>'
    const explanation = error.explain()
    return line < 1 ? explanation : `Line ${line}: ${explanation}`
  })
  return errorMessagesArr.join('\n')
}

export async function runInContext(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const defaultFilePath = '/default.js'
  return sourceRunner(code, context, options)
}

export { createContext, Context, Result }
