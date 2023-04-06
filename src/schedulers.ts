/* tslint:disable:max-classes-per-file */
import { Context, Result, Scheduler, Value } from './types'

export class PreemptiveScheduler implements Scheduler {
  constructor(public steps: number) {}

  public run(it: Value, context: Context): Promise<Result> {
    return new Promise((resolve, _reject) => {
      resolve({ status: 'finished', context, value: it })
    })
  }
}
