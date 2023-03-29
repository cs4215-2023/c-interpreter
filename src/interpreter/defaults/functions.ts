import { FLOAT_PRECISION } from '../../constants'

export const builtin_functions = {
  printf: (x: string, ...args: any[]) => console.log(printf(x, args))
}

const regex = /%[c,f,d]+/g

export const printf = (stringInput: string, ...args: any[]) => {
  const found = stringInput.match(regex)
  if (found == null) {
    return stringInput
  }

  if (found.length != args.length) {
    return new Error()
  }

  let index = 0
  const replaceTokens = (match: string, ...others: any[]) => {
    const currentArg = args[index]
    index++
    if (match == '%c') {
      if (typeof currentArg == 'string') {
        if (currentArg.length == 1) {
          return currentArg
        } else {
          throw new Error()
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
        return new Error()
      }
      return currentArg.toFixed(FLOAT_PRECISION)
    }
  }

  const replacedString = stringInput.replace(regex, replaceTokens)
  return replacedString
}
