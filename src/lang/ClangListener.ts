// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
   * Enter a parse tree produced by `ClangParser.identifierWithType`.
   * @param ctx the parse tree
   */
  enterIdentifierWithType?: (ctx: IdentifierWithTypeContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.identifierWithType`.
   * @param ctx the parse tree
   */
  exitIdentifierWithType?: (ctx: IdentifierWithTypeContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.identifierWithTypeList`.
   * @param ctx the parse tree
   */
  enterIdentifierWithTypeList?: (ctx: IdentifierWithTypeListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.identifierWithTypeList`.
   * @param ctx the parse tree
   */
  exitIdentifierWithTypeList?: (ctx: IdentifierWithTypeListContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.identifierList`.
   * @param ctx the parse tree
   */
  enterIdentifierList?: (ctx: IdentifierListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.identifierList`.
   * @param ctx the parse tree
   */
  exitIdentifierList?: (ctx: IdentifierListContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.numberList`.
   * @param ctx the parse tree
   */
  enterNumberList?: (ctx: NumberListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.numberList`.
   * @param ctx the parse tree
   */
  exitNumberList?: (ctx: NumberListContext) => void

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
   * Enter a parse tree produced by `ClangParser.postFixExpression`.
   * @param ctx the parse tree
   */
  enterPostFixExpression?: (ctx: PostFixExpressionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.postFixExpression`.
   * @param ctx the parse tree
   */
  exitPostFixExpression?: (ctx: PostFixExpressionContext) => void

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

  /**
   * Enter a parse tree produced by `ClangParser.arrayIdentifierWithType`.
   * @param ctx the parse tree
   */
  enterArrayIdentifierWithType?: (ctx: ArrayIdentifierWithTypeContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.arrayIdentifierWithType`.
   * @param ctx the parse tree
   */
  exitArrayIdentifierWithType?: (ctx: ArrayIdentifierWithTypeContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.arrayContent`.
   * @param ctx the parse tree
   */
  enterArrayContent?: (ctx: ArrayContentContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.arrayContent`.
   * @param ctx the parse tree
   */
  exitArrayContent?: (ctx: ArrayContentContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.arrayInitialisation`.
   * @param ctx the parse tree
   */
  enterArrayInitialisation?: (ctx: ArrayInitialisationContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.arrayInitialisation`.
   * @param ctx the parse tree
   */
  exitArrayInitialisation?: (ctx: ArrayInitialisationContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.pointer`.
   * @param ctx the parse tree
   */
  enterPointer?: (ctx: PointerContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.pointer`.
   * @param ctx the parse tree
   */
  exitPointer?: (ctx: PointerContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.pointerDerefernce`.
   * @param ctx the parse tree
   */
  enterPointerDerefernce?: (ctx: PointerDerefernceContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.pointerDerefernce`.
   * @param ctx the parse tree
   */
  exitPointerDerefernce?: (ctx: PointerDerefernceContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.pointerReference`.
   * @param ctx the parse tree
   */
  enterPointerReference?: (ctx: PointerReferenceContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.pointerReference`.
   * @param ctx the parse tree
   */
  exitPointerReference?: (ctx: PointerReferenceContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.function`.
   * @param ctx the parse tree
   */
  enterFunction?: (ctx: FunctionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.function`.
   * @param ctx the parse tree
   */
  exitFunction?: (ctx: FunctionContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.functionCall`.
   * @param ctx the parse tree
   */
  enterFunctionCall?: (ctx: FunctionCallContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.functionCall`.
   * @param ctx the parse tree
   */
  exitFunctionCall?: (ctx: FunctionCallContext) => void
}
