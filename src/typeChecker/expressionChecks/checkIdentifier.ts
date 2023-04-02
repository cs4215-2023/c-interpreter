import { Identifier } from '../../parser/types'

export const checkIdentifierNotUndefined = (node: any): node is Identifier => {
  return (node as Identifier).name !== undefined
}
