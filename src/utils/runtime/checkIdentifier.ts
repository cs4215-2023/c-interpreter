import { Identifier } from '../../parser/types'

export const checkIdentifier = (node: any): node is Identifier => {
  return (node as Identifier).name !== undefined
}
