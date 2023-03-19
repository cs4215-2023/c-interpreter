/* tslint:disable:max-classes-per-file */
import { Context, Result, Scheduler, Value } from './types'

export class PreemptiveScheduler implements Scheduler {
  constructor(public steps: number) {}

  public run(it: IterableIterator<Value>, context: Context): Promise<Result> {
    return new Promise((resolve, _reject) => {
      context.runtime.isRunning = true
      let itValue = it.next()
      const interval = setInterval(() => {
        let step = 0
        try {
          while (!itValue.done && step < this.steps) {
            step++
            itValue = it.next()
          }
        } catch (e) {
          context.runtime.isRunning = false
          clearInterval(interval)
          resolve({ status: 'error' })
        }
        if (itValue.done) {
          context.runtime.isRunning = false
          clearInterval(interval)
          resolve({ status: 'finished', context, value: itValue.value })
        }
      })
    })
  }
}
