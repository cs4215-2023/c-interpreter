// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { StartContext } from './ClangParser'
import { IdentifierWithTypeContext } from './ClangParser'
import { IdentifierWithTypeListContext } from './ClangParser'
import { IdentifierListContext } from './ClangParser'
import { NumberListContext } from './ClangParser'
import { StatementContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { ParenthesesExpressionContext } from './ClangParser'
import { PostFixExpressionContext } from './ClangParser'
import { ConditionalExpressionContext } from './ClangParser'
import { ExpressionStatementContext } from './ClangParser'
import { SelectionStatementContext } from './ClangParser'
import { IterationStatementContext } from './ClangParser'
import { ForConditionContext } from './ClangParser'
import { ArrayIdentifierWithTypeContext } from './ClangParser'
import { ArrayContentContext } from './ClangParser'
import { ArrayInitialisationContext } from './ClangParser'
import { PointerContext } from './ClangParser'
import { PointerDerefernceContext } from './ClangParser'
import { PointerReferenceContext } from './ClangParser'
import { FunctionContext } from './ClangParser'
import { FunctionCallContext } from './ClangParser'

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
   * Visit a parse tree produced by `ClangParser.identifierWithType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierWithType?: (ctx: IdentifierWithTypeContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.identifierWithTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierWithTypeList?: (ctx: IdentifierWithTypeListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.identifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierList?: (ctx: IdentifierListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.numberList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumberList?: (ctx: NumberListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.postFixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostFixExpression?: (ctx: PostFixExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result

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

  /**
   * Visit a parse tree produced by `ClangParser.arrayIdentifierWithType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayIdentifierWithType?: (ctx: ArrayIdentifierWithTypeContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.arrayContent`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayContent?: (ctx: ArrayContentContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.arrayInitialisation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayInitialisation?: (ctx: ArrayInitialisationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.pointerDerefernce`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointerDerefernce?: (ctx: PointerDerefernceContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.pointerReference`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointerReference?: (ctx: PointerReferenceContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction?: (ctx: FunctionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.functionCall`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionCall?: (ctx: FunctionCallContext) => Result
}
