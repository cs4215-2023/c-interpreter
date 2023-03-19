#!/usr/bin/env node
import { createContext, IOptions, parseError } from '../index'
import { sourceRunner } from '../runner/sourceRunner'
import { ExecutionMethod, Variant } from '../types'

function startRepl(
  executionMethod: ExecutionMethod = 'interpreter',
  variant: Variant = Variant.DEFAULT,
  useSubst: boolean = false,

  prelude = ''
) {
  // use defaults for everything
  const context = createContext(Variant.DEFAULT, undefined, undefined)
  const options: Partial<IOptions> = {
    scheduler: 'preemptive',
    executionMethod,
    variant,
    useSubst
  }

  sourceRunner(prelude, context, options).then(preludeResult => {
    if (preludeResult.status === 'finished') {
      console.dir(preludeResult.value, { depth: null })
    } else {
      console.error(parseError(context.errors))
    }
  })
}

function main() {
  const opt = require('node-getopt')
    .create([
      ['v', 'variant=VARIANT', 'set the Source variant (i.e., clang)', 'Clang'],
      ['h', 'help', 'display this help'],
      ['e', 'eval', "don't show REPL, only display output of evaluation"]
    ])
    .bindHelp()
    .setHelp('Usage: js-slang [PROGRAM_STRING] [OPTION]\n\n[[OPTIONS]]')
    .parseSystem()

  const variant = opt.options.variant

  const executionMethod =
    opt.options.variant === 'interpreter' || opt.options.variant === 'non-det'
      ? 'interpreter'
      : 'native'
  const useSubst = opt.options.variant === 'substituter'
  const prelude = opt.argv[0] ?? ''
  startRepl(executionMethod, variant, useSubst, prelude)
}

main()
