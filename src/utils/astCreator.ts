import {
  CallExpression,
  Expression,
  Identifier,
  Literal,
  PrimitiveType,
  SourceLocation,
  VariableDeclaration
} from '../parser/types'

export const getVariableDecarationName = (decl: VariableDeclaration) =>
  (decl.declarations[0].id as Identifier).name

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', { start: { line, column }, end: { line, column } })

export const identifier = (
  name: string,
  loc?: SourceLocation | null,
  primitiveType?: PrimitiveType | undefined
): Identifier => ({
  type: 'Identifier',
  name,
  loc,
  primitiveType
})

export const literal = (value: string | number | null, loc?: SourceLocation | null): Literal => ({
  type: 'Literal',
  value,
  loc
})

export const callExpression = (
  callee: Expression,
  args: Expression[],
  loc?: SourceLocation | null
): CallExpression => ({
  type: 'CallExpression',
  callee,
  arguments: args,
  loc
})

// primitive: undefined is a possible value
export const primitive = (value: any): Expression => {
  return value === undefined ? identifier('undefined') : literal(value)
}
