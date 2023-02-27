// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { StartContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { StatementContext } from './ClangParser'
import { ParenthesesExpressionContext } from './ClangParser'
import { ConditionalExpressionContext } from './ClangParser'
import { ExpressionStatementContext } from './ClangParser'
import { SelectionStatementContext } from './ClangParser'
import { IterationStatementContext } from './ClangParser'
import { ForConditionContext } from './ClangParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `ClangParser`.
 */
export interface ClangListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `ClangParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  enterParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  exitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.conditionalExpression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.selectionStatement`.
   * @param ctx the parse tree
   */
  enterSelectionStatement?: (ctx: SelectionStatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.selectionStatement`.
   * @param ctx the parse tree
   */
  exitSelectionStatement?: (ctx: SelectionStatementContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.iterationStatement`.
   * @param ctx the parse tree
   */
  enterIterationStatement?: (ctx: IterationStatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.iterationStatement`.
   * @param ctx the parse tree
   */
  exitIterationStatement?: (ctx: IterationStatementContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.forCondition`.
   * @param ctx the parse tree
   */
  enterForCondition?: (ctx: ForConditionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.forCondition`.
   * @param ctx the parse tree
   */
  exitForCondition?: (ctx: ForConditionContext) => void
}
