// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { StartContext } from './ClangParser'
import { TypeContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { StatementContext } from './ClangParser'
import { ParenthesesExpressionContext } from './ClangParser'
import { ConditionalExpressionContext } from './ClangParser'
import { SelectionStatementContext } from './ClangParser'
import { IterationStatementContext } from './ClangParser'
import { ForConditionContext } from './ClangParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ClangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ClangVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `ClangParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.selectionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelectionStatement?: (ctx: SelectionStatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.iterationStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIterationStatement?: (ctx: IterationStatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.forCondition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForCondition?: (ctx: ForConditionContext) => Result
}
