import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { flow } from 'lodash'

import { ParenthesesExpressionContext } from '../../lang/ClangParser'
import { ClangVisitor } from '../../lang/ClangVisitor'
import { FatalSyntaxError } from '../errors'
import { Expression } from '../types'
import { parserArrayExpression } from './arrayParser'
import { parserAssignmentExpression } from './assignmentParser'
import { parserBitwiseOpExpression } from './bitwiseOpParser'
import { parserComparatorExpression } from './comparatorParser'
import { parserConditionalExpression } from './conditionalParser'
import { parserFunctionCallExpression } from './functionCallParser'
import { parserIdentifierExpression } from './identifierParser'
import { parserBinaryExpression } from './intBinaryOpParser'
import { parserLogicalOpExpression } from './logicalOpParser'
import { parserPointerExpression } from './pointerParser'
import { parserPostFixExpression } from './postFixParser'
import { parserPrimitiveExpression } from './primitiveParser'
import { parserStringLiteral } from './stringParser'
import { parserUnaryOpExpression } from './unaryOpParser'

class BaseParser extends AbstractParseTreeVisitor<Expression> implements ClangVisitor<Expression> {
  protected defaultResult(): Expression {
    return {
      type: 'EmptyExpression'
    }
  }

  visitParentheses(ctx: ParenthesesExpressionContext): Expression {
    return this.visit(ctx.expression())
  }

  visitChildren(node: RuleNode): Expression {
    const expressions: Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitErrorNode(node: ErrorNode): Expression {
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
  parserIdentifierExpression,
  parserAssignmentExpression,
  parserArrayExpression,
  parserPointerExpression,
  parserFunctionCallExpression,
  parserConditionalExpression,
  parserStringLiteral
)(BaseParser)

export default class ExpressionParser extends ParsingBehaviors {}
