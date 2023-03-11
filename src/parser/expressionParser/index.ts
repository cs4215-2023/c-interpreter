import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import * as es from 'estree'
import { flow } from 'lodash'

import { NumberExpressionContext, ParenthesesExpressionContext } from '../../lang/ClangParser'
import { ClangVisitor } from '../../lang/ClangVisitor'
import { FatalSyntaxError } from '../errors'
import { contextToLocation } from '../util'
import { parserBitwiseOpExpression } from './bitwiseOpParser'
import { parserComparatorExpression } from './comparatorParser'
import { parserIdentifierExpression } from './identifierParser'
import { parserBinaryExpression } from './intBinaryOpParser'
import { parserLogicalOpExpression } from './logicalOpParser'
import { parserPostFixExpression } from './postFixParser'
import { parserPrimitiveExpression } from './primitiveParser'
import { parserUnaryOpExpression } from './unaryOpParser'

//TODO: integrate types.ts into expression parser
class BaseParser
  extends AbstractParseTreeVisitor<es.Expression>
  implements ClangVisitor<es.Expression>
{
  protected defaultResult(): es.Expression {
    // throw new Error('Method not implemented.')
    return {
      type: 'SequenceExpression',
      expressions: []
    }
  }

  visitParentheses(ctx: ParenthesesExpressionContext): es.Expression {
    return this.visit(ctx.expression())
  }

  visitChildren(node: RuleNode): es.Expression {
    console.log('visit children')
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      console.log(node.text)
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitErrorNode(node: ErrorNode): es.Expression {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

const ParsingBehaviors = flow(
  parserComparatorExpression,
  parserBinaryExpression,
  parserLogicalOpExpression,
  parserUnaryOpExpression,
  parserPostFixExpression,
  parserPrimitiveExpression,
  parserBitwiseOpExpression,
  parserIdentifierExpression
)(BaseParser)

export default class ExpressionParser extends ParsingBehaviors { }
