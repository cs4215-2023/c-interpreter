
import { uniqueId } from 'lodash'
import { Context, TypeEnvironment, Frame, Value } from '../types'
import Closure from './closure'

export function createBlockTypeEnvironment(
    context: Context,
    name = 'blockEnvironment',
    head: Frame = {}
): TypeEnvironment {
    return {
        id: uniqueId(),
        name,
        tail: currentTypeEnvironment(context)!,
        head
    }
}

export function currentTypeEnvironment(context: Context): TypeEnvironment {
    return context.runtime.typeEnv[0]
}

export function replaceTypeEnvironment(context: Context, environment: TypeEnvironment): void {
    context.runtime.typeEnv[0] = environment
    // context.runtime.typeEnvTree.insert(environment)
}

export function popTypeEnvironment(context: Context): TypeEnvironment | undefined {
    return context.runtime.typeEnv.shift()
}

export function pushTypeEnvironment(context: Context, environment: TypeEnvironment): void {
    context.runtime.typeEnv.unshift(environment)
    // context.runtime.typeEnvTree.insert(environment)
}