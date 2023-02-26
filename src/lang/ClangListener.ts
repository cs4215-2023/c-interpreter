// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { TypeContext } from './ClangParser'
import { StartContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { ParenthesesExpressionContext } from './ClangParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `ClangParser`.
 */
export interface ClangListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `ClangParser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void

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
   * Enter a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  enterParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.parenthesesExpression`.
   * @param ctx the parse tree
   */
  exitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => void
}
