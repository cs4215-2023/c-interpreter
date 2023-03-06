import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'
import { flow } from 'lodash'

import { NumberExpressionContext, ParenthesesExpressionContext } from '../../lang/ClangParser'
import { ClangVisitor } from '../../lang/ClangVisitor'
import { FatalSyntaxError } from '../errors'
import { contextToLocation } from '../util'
import { parserComparatorExpression } from './comparatorParser'
import { parserBinaryExpression } from './intBinaryOpParser'
import { parserLogicalOpExpression } from './logicalOpParser'
import { parserPostFixExpression } from './postFixParser'
import { parserUnaryOpExpression } from './unaryOpParser'

class BaseParser implements ClangVisitor<es.Expression> {
  visitNumber(ctx: NumberExpressionContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitParentheses(ctx: ParenthesesExpressionContext): es.Expression {
    return this.visit(ctx.expression())
  }

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
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
  parserPostFixExpression
)(BaseParser)

export default class ExpressionParser extends ParsingBehaviors {}
