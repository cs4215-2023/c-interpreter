// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TypedIdentifierExpressionContext } from "./ClangParser";
import { NumberExpressionContext } from "./ClangParser";
import { StringLiteralExpressionContext } from "./ClangParser";
import { IdentifierExpressionContext } from "./ClangParser";
import { PostFixNotationExpressionContext } from "./ClangParser";
import { ArrayInitialisationExpressionContext } from "./ClangParser";
import { ParenthesisExpressionContext } from "./ClangParser";
import { PointerExpressionContext } from "./ClangParser";
import { PointerDereferenceExpressionContext } from "./ClangParser";
import { PointerReferenceExpressionContext } from "./ClangParser";
import { FunctionCallExpressionContext } from "./ClangParser";
import { PrintfExpressionContext } from "./ClangParser";
import { MultiplicationContext } from "./ClangParser";
import { DivisionContext } from "./ClangParser";
import { ModulusDivisionContext } from "./ClangParser";
import { AdditionContext } from "./ClangParser";
import { SubtractionContext } from "./ClangParser";
import { BitShiftLeftContext } from "./ClangParser";
import { BitShiftRightContext } from "./ClangParser";
import { GreaterThanContext } from "./ClangParser";
import { LesserThanContext } from "./ClangParser";
import { GreaterThanOrEqualContext } from "./ClangParser";
import { LesserThanOrEqualContext } from "./ClangParser";
import { EqualityCheckingContext } from "./ClangParser";
import { NotEqualContext } from "./ClangParser";
import { OrContext } from "./ClangParser";
import { AndContext } from "./ClangParser";
import { BitwiseAndContext } from "./ClangParser";
import { BitwiseOrContext } from "./ClangParser";
import { XorContext } from "./ClangParser";
import { AssignmentContext } from "./ClangParser";
import { AssignAndMinusOneContext } from "./ClangParser";
import { AssignAndAddOneContext } from "./ClangParser";
import { NegativeContext } from "./ClangParser";
import { PositiveContext } from "./ClangParser";
import { NotContext } from "./ClangParser";
import { StartContext } from "./ClangParser";
import { StringLiteralContext } from "./ClangParser";
import { StringLiteralListContext } from "./ClangParser";
import { IdentifierWithTypeContext } from "./ClangParser";
import { TypeContext } from "./ClangParser";
import { IdentifierWithTypeListContext } from "./ClangParser";
import { IdentifierListContext } from "./ClangParser";
import { NumberListContext } from "./ClangParser";
import { StatementContext } from "./ClangParser";
import { ExpressionContext } from "./ClangParser";
import { ParenthesesExpressionContext } from "./ClangParser";
import { PostFixContext } from "./ClangParser";
import { ConditionalExpressionContext } from "./ClangParser";
import { ExpressionStatementContext } from "./ClangParser";
import { ConditionalStatementContext } from "./ClangParser";
import { IterationStatementContext } from "./ClangParser";
import { WhileLoopContext } from "./ClangParser";
import { DoWhileLoopContext } from "./ClangParser";
import { ForLoopContext } from "./ClangParser";
import { ForConditionContext } from "./ClangParser";
import { ArrayIdentifierWithTypeContext } from "./ClangParser";
import { ArrayContentContext } from "./ClangParser";
import { ArrayInitialisationContext } from "./ClangParser";
import { PointerContext } from "./ClangParser";
import { PointerDerefernceContext } from "./ClangParser";
import { PointerReferenceContext } from "./ClangParser";
import { FunctionContext } from "./ClangParser";
import { FunctionCallContext } from "./ClangParser";
import { FunctionCallParametersContext } from "./ClangParser";
import { PrintfContext } from "./ClangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ClangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ClangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `TypedIdentifierExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedIdentifierExpression?: (ctx: TypedIdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumberExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringLiteralExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralExpression?: (ctx: StringLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostFixNotationExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostFixNotationExpression?: (ctx: PostFixNotationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayInitialisationExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitialisationExpression?: (ctx: ArrayInitialisationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PointerExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerExpression?: (ctx: PointerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PointerDereferenceExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerDereferenceExpression?: (ctx: PointerDereferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PointerReferenceExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerReferenceExpression?: (ctx: PointerReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrintfExpression`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintfExpression?: (ctx: PrintfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ModulusDivision`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModulusDivision?: (ctx: ModulusDivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftLeft`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftLeft?: (ctx: BitShiftLeftContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftRight`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftRight?: (ctx: BitShiftRightContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThan?: (ctx: GreaterThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `LesserThan`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLesserThan?: (ctx: LesserThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `LesserThanOrEqual`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLesserThanOrEqual?: (ctx: LesserThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityChecking`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityChecking?: (ctx: EqualityCheckingContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `Or`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by the `And`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseAnd`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAnd?: (ctx: BitwiseAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseOr`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOr?: (ctx: BitwiseOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `Xor`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor?: (ctx: XorContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assignment`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignAndMinusOne`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignAndMinusOne?: (ctx: AssignAndMinusOneContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignAndAddOne`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignAndAddOne?: (ctx: AssignAndAddOneContext) => Result;

	/**
	 * Visit a parse tree produced by the `Negative`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegative?: (ctx: NegativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `Positive`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositive?: (ctx: PositiveContext) => Result;

	/**
	 * Visit a parse tree produced by the `Not`
	 * labeled alternative in `ClangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.stringLiteralList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralList?: (ctx: StringLiteralListContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.identifierWithType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierWithType?: (ctx: IdentifierWithTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.identifierWithTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierWithTypeList?: (ctx: IdentifierWithTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.numberList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberList?: (ctx: NumberListContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

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

	/**
	 * Visit a parse tree produced by `ClangParser.postFix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostFix?: (ctx: PostFixContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.whileLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoop?: (ctx: WhileLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.doWhileLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileLoop?: (ctx: DoWhileLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.forLoop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoop?: (ctx: ForLoopContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.forCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForCondition?: (ctx: ForConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.arrayIdentifierWithType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayIdentifierWithType?: (ctx: ArrayIdentifierWithTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.arrayContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayContent?: (ctx: ArrayContentContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.arrayInitialisation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitialisation?: (ctx: ArrayInitialisationContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.pointer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointer?: (ctx: PointerContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.pointerDerefernce`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerDerefernce?: (ctx: PointerDerefernceContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.pointerReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerReference?: (ctx: PointerReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.functionCallParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallParameters?: (ctx: FunctionCallParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ClangParser.printf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintf?: (ctx: PrintfContext) => Result;
}

