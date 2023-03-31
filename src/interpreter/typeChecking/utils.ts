import * as errors from '../../errors/errors'
import { TypedIdentifier } from '../../parser/types'
import { Node } from '../../parser/types'
import { Context, TypeEnvironment } from '../../types'
import { handleRuntimeError } from '../errors'
import { currentTypeEnvironment } from './typeEnvironment'

export function setFunctionParams(
  node: Node,
  context: Context,
  name: string,
  params: TypedIdentifier[]
) {
  let environment: TypeEnvironment | null = currentTypeEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      environment.head[name] = params
      return
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, context.runtime.nodes[0]))
}

// export function* apply(
//   context: Context,
//   fun: Closure | Value,
//   args: Value[],
//   node: CallExpression
// ) {
//   let result: Value
//   let total = 0
//   while (!(result instanceof ReturnValue)) {
//     if (fun instanceof Closure) {
//       checkNumberOfArguments(context, fun, args, node!)
//       const environment = createEnvironment(fun, args, node)
//       if (result instanceof TailCallReturnValue) {
//         replaceEnvironment(context, environment)
//       } else {
//         pushEnvironment(context, environment)
//         total++
//       }
//       const bodyEnvironment = createBlockEnvironment(context, 'functionBodyEnvironment')
//       bodyEnvironment.thisContext = thisContext
//       pushEnvironment(context, bodyEnvironment)
//       result = yield* evaluateBlockStatement(context, fun.node.body as es.BlockStatement)
//       popEnvironment(context)
//       if (result instanceof TailCallReturnValue) {
//         fun = result.callee
//         node = result.node
//         args = result.args
//       } else if (!(result instanceof ReturnValue)) {
//         // No Return Value, set it as undefined
//         result = new ReturnValue(undefined)
//       }
//     } else if (typeof fun === 'function') {
//       checkNumberOfArguments(context, fun, args, node!)
//       try {
//         const forcedArgs = []
//         for (const arg of args) {
//           forcedArgs.push(yield* forceIt(arg, context))
//         }
//         result = fun.apply(thisContext, forcedArgs)
//         break
//       } catch (e) {
//         // Recover from exception
//         context.runtime.environments = context.runtime.environments.slice(
//           -context.numberOfOuterEnvironments
//         )
//         const loc = node ? node.loc! : constants.UNKNOWN_LOCATION
//         if (!(e instanceof RuntimeSourceError || e instanceof errors.ExceptionError)) {
//           // The error could've arisen when the builtin called a source function which errored.
//           // If the cause was a source error, we don't want to include the error.
//           // However if the error came from the builtin itself, we need to handle it.
//           return handleRuntimeError(context, new errors.ExceptionError(e, loc))
//         }
//         result = undefined
//         throw e
//       }
//     } else {
//       return handleRuntimeError(context, new errors.CallingNonFunctionValue(fun, node))
//     }
//   }
//   // Unwraps return value and release stack environment
//   if (result instanceof ReturnValue) {
//     result = result.value
//   }
//   for (let i = 1; i <= total; i++) {
//     popEnvironment(context)
//   }
//   return result
// }
