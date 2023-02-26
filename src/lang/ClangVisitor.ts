// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TypeContext } from "./ClangParser";
import { StartContext } from "./ClangParser";
import { ExpressionContext } from "./ClangParser";
import { ParenthesesExpressionContext } from "./ClangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ClangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ClangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ClangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.parenthesesExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesesExpression?: (ctx: ParenthesesExpressionContext) => Result;
}

