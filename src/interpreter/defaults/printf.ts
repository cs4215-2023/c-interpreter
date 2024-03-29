import { FLOAT_PRECISION } from '../../constants'
import { PrintfError } from '../../errors/errors'

const REGEX = /%[c,f,d]+/g

export const printfFunction = (stringInput: string, ...args: any[]) => {
  const found = stringInput.match(REGEX)
  if (found == null) {
    return stringInput
  }

  if (found.length != args.length) {
    throw new PrintfError()
  }

  let index = 0
  const replaceTokens = (match: string, ..._others: any[]) => {
    const currentArg = args[index]
    index++
    if (match == '%c') {
      if (typeof currentArg == 'string') {
        if (currentArg.length == 1) {
          return currentArg
        } else {
          throw new PrintfError()
        }
      }
      return String.fromCharCode(currentArg)
    } else if (match == '%d') {
      if (typeof currentArg == 'string') {
        return currentArg.charCodeAt(0)
      }
      return Math.floor(currentArg)
    } else {
      if (typeof currentArg == 'string' && Number.isInteger(currentArg)) {
        throw new PrintfError()
      }
      return currentArg.toFixed(FLOAT_PRECISION)
    }
  }

  const replacedString = stringInput.replace(REGEX, replaceTokens)
  return replacedString
}
