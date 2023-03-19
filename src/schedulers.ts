/* tslint:disable:max-classes-per-file */
import { Context, Result, Scheduler, Value } from './types'

export class PreemptiveScheduler implements Scheduler {
  constructor(public steps: number) {}

  public run(it: IterableIterator<Value>, context: Context): Promise<Result> {
    return new Promise((resolve, _reject) => {
      context.runtime.isRunning = true
      // This is used in the evaluation of the REPL during a paused state.
      // The debugger is turned off while the code evaluates just above the debugger statement.
      let actuallyBreak: boolean = false
      let itValue = it.next()
      const interval = setInterval(() => {
        let step = 0
        try {
          while (!itValue.done && step < this.steps) {
            step++
            itValue = it.next()

            actuallyBreak = context.runtime.break && context.runtime.debuggerOn
            if (actuallyBreak) {
              itValue.done = true
            }
          }
        } catch (e) {
          context.runtime.isRunning = false
          clearInterval(interval)
          resolve({ status: 'error' })
        }
        if (itValue.done) {
          context.runtime.isRunning = false
          clearInterval(interval)
          if (actuallyBreak) {
            resolve({
              status: 'suspended',
              it,
              scheduler: this,
              context
            })
          } else {
            resolve({ status: 'finished', context, value: itValue.value })
          }
        }
      })
    })
  }
}
