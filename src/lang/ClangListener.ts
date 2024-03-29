// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { VariableDeclarationExpressionContext } from './ClangParser'
import { NumberExpressionContext } from './ClangParser'
import { CharExpressionContext } from './ClangParser'
import { FloatExpressionContext } from './ClangParser'
import { StringExpressionContext } from './ClangParser'
import { IdentifierExpressionContext } from './ClangParser'
import { PostFixNotationExpressionContext } from './ClangParser'
import { ArrayInitialisationExpressionContext } from './ClangParser'
import { ArrayIdentifierExpressionContext } from './ClangParser'
import { ParenthesisExpressionContext } from './ClangParser'
import { PointerDeclarationExpressionContext } from './ClangParser'
import { PointerDereferenceExpressionContext } from './ClangParser'
import { PointerReferenceExpressionContext } from './ClangParser'
import { FunctionCallExpressionContext } from './ClangParser'
import { MultiplicationContext } from './ClangParser'
import { DivisionContext } from './ClangParser'
import { ModulusDivisionContext } from './ClangParser'
import { AdditionContext } from './ClangParser'
import { SubtractionContext } from './ClangParser'
import { BitShiftLeftContext } from './ClangParser'
import { BitShiftRightContext } from './ClangParser'
import { GreaterThanContext } from './ClangParser'
import { LesserThanContext } from './ClangParser'
import { GreaterThanOrEqualContext } from './ClangParser'
import { LesserThanOrEqualContext } from './ClangParser'
import { EqualityCheckingContext } from './ClangParser'
import { NotEqualContext } from './ClangParser'
import { OrContext } from './ClangParser'
import { AndContext } from './ClangParser'
import { BitwiseAndContext } from './ClangParser'
import { BitwiseOrContext } from './ClangParser'
import { XorContext } from './ClangParser'
import { AssignmentContext } from './ClangParser'
import { AssignAndMinusOneContext } from './ClangParser'
import { AssignAndAddOneContext } from './ClangParser'
import { NegativeContext } from './ClangParser'
import { PositiveContext } from './ClangParser'
import { NotContext } from './ClangParser'
import { ConditionalExpressionContext } from './ClangParser'
import { StartContext } from './ClangParser'
import { IdentifiersAndSpecifiersContext } from './ClangParser'
import { StringContext } from './ClangParser'
import { StringLiteralListContext } from './ClangParser'
import { IdentifierWithTypeContext } from './ClangParser'
import { TypeContext } from './ClangParser'
import { IdentifierWithTypeListContext } from './ClangParser'
import { IdentifierListContext } from './ClangParser'
import { ExpressionListContext } from './ClangParser'
import { NumberListContext } from './ClangParser'
import { CharListContext } from './ClangParser'
import { FloatListContext } from './ClangParser'
import { PointerListContext } from './ClangParser'
import { StatementContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { StatementBlockContext } from './ClangParser'
import { ParenthesesExpressionContext } from './ClangParser'
import { PostFixContext } from './ClangParser'
import { ReturnStatementContext } from './ClangParser'
import { ExpressionStatementContext } from './ClangParser'
import { ConditionalStatementContext } from './ClangParser'
import { IterationStatementContext } from './ClangParser'
import { WhileLoopContext } from './ClangParser'
import { DoWhileLoopContext } from './ClangParser'
import { ForLoopContext } from './ClangParser'
import { ForConditionContext } from './ClangParser'
import { ArrayIdentifierWithTypeContext } from './ClangParser'
import { ArrayIdentifierContext } from './ClangParser'
import { ArrayContentContext } from './ClangParser'
import { ArrayInitialisationContext } from './ClangParser'
import { PointerContext } from './ClangParser'
import { PointerDerefernceContext } from './ClangParser'
import { PointerReferenceContext } from './ClangParser'
import { FunctionDeclarationContext } from './ClangParser'
import { FunctionContext } from './ClangParser'
import { FunctionCallContext } from './ClangParser'
import { FunctionCallParametersContext } from './ClangParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `ClangParser`.
 */
export interface ClangListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `VariableDeclarationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterVariableDeclarationExpression?: (ctx: VariableDeclarationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `VariableDeclarationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitVariableDeclarationExpression?: (ctx: VariableDeclarationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `NumberExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterNumberExpression?: (ctx: NumberExpressionContext) => void
  /**
   * Exit a parse tree produced by the `NumberExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitNumberExpression?: (ctx: NumberExpressionContext) => void

  /**
   * Enter a parse tree produced by the `CharExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterCharExpression?: (ctx: CharExpressionContext) => void
  /**
   * Exit a parse tree produced by the `CharExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitCharExpression?: (ctx: CharExpressionContext) => void

  /**
   * Enter a parse tree produced by the `FloatExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterFloatExpression?: (ctx: FloatExpressionContext) => void
  /**
   * Exit a parse tree produced by the `FloatExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitFloatExpression?: (ctx: FloatExpressionContext) => void

  /**
   * Enter a parse tree produced by the `StringExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterStringExpression?: (ctx: StringExpressionContext) => void
  /**
   * Exit a parse tree produced by the `StringExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitStringExpression?: (ctx: StringExpressionContext) => void

  /**
   * Enter a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void
  /**
   * Exit a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void

  /**
   * Enter a parse tree produced by the `PostFixNotationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterPostFixNotationExpression?: (ctx: PostFixNotationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `PostFixNotationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitPostFixNotationExpression?: (ctx: PostFixNotationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ArrayInitialisationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterArrayInitialisationExpression?: (ctx: ArrayInitialisationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ArrayInitialisationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitArrayInitialisationExpression?: (ctx: ArrayInitialisationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ArrayIdentifierExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterArrayIdentifierExpression?: (ctx: ArrayIdentifierExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ArrayIdentifierExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitArrayIdentifierExpression?: (ctx: ArrayIdentifierExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ParenthesisExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ParenthesisExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void

  /**
   * Enter a parse tree produced by the `PointerDeclarationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterPointerDeclarationExpression?: (ctx: PointerDeclarationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `PointerDeclarationExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitPointerDeclarationExpression?: (ctx: PointerDeclarationExpressionContext) => void

  /**
   * Enter a parse tree produced by the `PointerDereferenceExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterPointerDereferenceExpression?: (ctx: PointerDereferenceExpressionContext) => void
  /**
   * Exit a parse tree produced by the `PointerDereferenceExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitPointerDereferenceExpression?: (ctx: PointerDereferenceExpressionContext) => void

  /**
   * Enter a parse tree produced by the `PointerReferenceExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterPointerReferenceExpression?: (ctx: PointerReferenceExpressionContext) => void
  /**
   * Exit a parse tree produced by the `PointerReferenceExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitPointerReferenceExpression?: (ctx: PointerReferenceExpressionContext) => void

  /**
   * Enter a parse tree produced by the `FunctionCallExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void
  /**
   * Exit a parse tree produced by the `FunctionCallExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void

  /**
   * Enter a parse tree produced by the `Multiplication`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterMultiplication?: (ctx: MultiplicationContext) => void
  /**
   * Exit a parse tree produced by the `Multiplication`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitMultiplication?: (ctx: MultiplicationContext) => void

  /**
   * Enter a parse tree produced by the `Division`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterDivision?: (ctx: DivisionContext) => void
  /**
   * Exit a parse tree produced by the `Division`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitDivision?: (ctx: DivisionContext) => void

  /**
   * Enter a parse tree produced by the `ModulusDivision`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterModulusDivision?: (ctx: ModulusDivisionContext) => void
  /**
   * Exit a parse tree produced by the `ModulusDivision`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitModulusDivision?: (ctx: ModulusDivisionContext) => void

  /**
   * Enter a parse tree produced by the `Addition`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterAddition?: (ctx: AdditionContext) => void
  /**
   * Exit a parse tree produced by the `Addition`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitAddition?: (ctx: AdditionContext) => void

  /**
   * Enter a parse tree produced by the `Subtraction`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterSubtraction?: (ctx: SubtractionContext) => void
  /**
   * Exit a parse tree produced by the `Subtraction`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitSubtraction?: (ctx: SubtractionContext) => void

  /**
   * Enter a parse tree produced by the `BitShiftLeft`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterBitShiftLeft?: (ctx: BitShiftLeftContext) => void
  /**
   * Exit a parse tree produced by the `BitShiftLeft`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitBitShiftLeft?: (ctx: BitShiftLeftContext) => void

  /**
   * Enter a parse tree produced by the `BitShiftRight`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterBitShiftRight?: (ctx: BitShiftRightContext) => void
  /**
   * Exit a parse tree produced by the `BitShiftRight`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitBitShiftRight?: (ctx: BitShiftRightContext) => void

  /**
   * Enter a parse tree produced by the `GreaterThan`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterThan?: (ctx: GreaterThanContext) => void
  /**
   * Exit a parse tree produced by the `GreaterThan`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterThan?: (ctx: GreaterThanContext) => void

  /**
   * Enter a parse tree produced by the `LesserThan`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterLesserThan?: (ctx: LesserThanContext) => void
  /**
   * Exit a parse tree produced by the `LesserThan`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitLesserThan?: (ctx: LesserThanContext) => void

  /**
   * Enter a parse tree produced by the `GreaterThanOrEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void
  /**
   * Exit a parse tree produced by the `GreaterThanOrEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void

  /**
   * Enter a parse tree produced by the `LesserThanOrEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterLesserThanOrEqual?: (ctx: LesserThanOrEqualContext) => void
  /**
   * Exit a parse tree produced by the `LesserThanOrEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitLesserThanOrEqual?: (ctx: LesserThanOrEqualContext) => void

  /**
   * Enter a parse tree produced by the `EqualityChecking`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterEqualityChecking?: (ctx: EqualityCheckingContext) => void
  /**
   * Exit a parse tree produced by the `EqualityChecking`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitEqualityChecking?: (ctx: EqualityCheckingContext) => void

  /**
   * Enter a parse tree produced by the `NotEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterNotEqual?: (ctx: NotEqualContext) => void
  /**
   * Exit a parse tree produced by the `NotEqual`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitNotEqual?: (ctx: NotEqualContext) => void

  /**
   * Enter a parse tree produced by the `Or`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterOr?: (ctx: OrContext) => void
  /**
   * Exit a parse tree produced by the `Or`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitOr?: (ctx: OrContext) => void

  /**
   * Enter a parse tree produced by the `And`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterAnd?: (ctx: AndContext) => void
  /**
   * Exit a parse tree produced by the `And`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitAnd?: (ctx: AndContext) => void

  /**
   * Enter a parse tree produced by the `BitwiseAnd`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterBitwiseAnd?: (ctx: BitwiseAndContext) => void
  /**
   * Exit a parse tree produced by the `BitwiseAnd`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitBitwiseAnd?: (ctx: BitwiseAndContext) => void

  /**
   * Enter a parse tree produced by the `BitwiseOr`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterBitwiseOr?: (ctx: BitwiseOrContext) => void
  /**
   * Exit a parse tree produced by the `BitwiseOr`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitBitwiseOr?: (ctx: BitwiseOrContext) => void

  /**
   * Enter a parse tree produced by the `Xor`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterXor?: (ctx: XorContext) => void
  /**
   * Exit a parse tree produced by the `Xor`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitXor?: (ctx: XorContext) => void

  /**
   * Enter a parse tree produced by the `Assignment`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignment?: (ctx: AssignmentContext) => void
  /**
   * Exit a parse tree produced by the `Assignment`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignment?: (ctx: AssignmentContext) => void

  /**
   * Enter a parse tree produced by the `AssignAndMinusOne`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignAndMinusOne?: (ctx: AssignAndMinusOneContext) => void
  /**
   * Exit a parse tree produced by the `AssignAndMinusOne`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignAndMinusOne?: (ctx: AssignAndMinusOneContext) => void

  /**
   * Enter a parse tree produced by the `AssignAndAddOne`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignAndAddOne?: (ctx: AssignAndAddOneContext) => void
  /**
   * Exit a parse tree produced by the `AssignAndAddOne`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignAndAddOne?: (ctx: AssignAndAddOneContext) => void

  /**
   * Enter a parse tree produced by the `Negative`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterNegative?: (ctx: NegativeContext) => void
  /**
   * Exit a parse tree produced by the `Negative`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitNegative?: (ctx: NegativeContext) => void

  /**
   * Enter a parse tree produced by the `Positive`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterPositive?: (ctx: PositiveContext) => void
  /**
   * Exit a parse tree produced by the `Positive`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitPositive?: (ctx: PositiveContext) => void

  /**
   * Enter a parse tree produced by the `Not`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterNot?: (ctx: NotContext) => void
  /**
   * Exit a parse tree produced by the `Not`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitNot?: (ctx: NotContext) => void

  /**
   * Enter a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `ClangParser.expression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

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
   * Enter a parse tree produced by `ClangParser.identifiersAndSpecifiers`.
   * @param ctx the parse tree
   */
  enterIdentifiersAndSpecifiers?: (ctx: IdentifiersAndSpecifiersContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.identifiersAndSpecifiers`.
   * @param ctx the parse tree
   */
  exitIdentifiersAndSpecifiers?: (ctx: IdentifiersAndSpecifiersContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.string`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.string`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.stringLiteralList`.
   * @param ctx the parse tree
   */
  enterStringLiteralList?: (ctx: StringLiteralListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.stringLiteralList`.
   * @param ctx the parse tree
   */
  exitStringLiteralList?: (ctx: StringLiteralListContext) => void

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
   * Enter a parse tree produced by `ClangParser.expressionList`.
   * @param ctx the parse tree
   */
  enterExpressionList?: (ctx: ExpressionListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.expressionList`.
   * @param ctx the parse tree
   */
  exitExpressionList?: (ctx: ExpressionListContext) => void

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
   * Enter a parse tree produced by `ClangParser.charList`.
   * @param ctx the parse tree
   */
  enterCharList?: (ctx: CharListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.charList`.
   * @param ctx the parse tree
   */
  exitCharList?: (ctx: CharListContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.floatList`.
   * @param ctx the parse tree
   */
  enterFloatList?: (ctx: FloatListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.floatList`.
   * @param ctx the parse tree
   */
  exitFloatList?: (ctx: FloatListContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.pointerList`.
   * @param ctx the parse tree
   */
  enterPointerList?: (ctx: PointerListContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.pointerList`.
   * @param ctx the parse tree
   */
  exitPointerList?: (ctx: PointerListContext) => void

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
   * Enter a parse tree produced by `ClangParser.statementBlock`.
   * @param ctx the parse tree
   */
  enterStatementBlock?: (ctx: StatementBlockContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.statementBlock`.
   * @param ctx the parse tree
   */
  exitStatementBlock?: (ctx: StatementBlockContext) => void

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
   * Enter a parse tree produced by `ClangParser.postFix`.
   * @param ctx the parse tree
   */
  enterPostFix?: (ctx: PostFixContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.postFix`.
   * @param ctx the parse tree
   */
  exitPostFix?: (ctx: PostFixContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.returnStatement`.
   * @param ctx the parse tree
   */
  enterReturnStatement?: (ctx: ReturnStatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.returnStatement`.
   * @param ctx the parse tree
   */
  exitReturnStatement?: (ctx: ReturnStatementContext) => void

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
   * Enter a parse tree produced by `ClangParser.conditionalStatement`.
   * @param ctx the parse tree
   */
  enterConditionalStatement?: (ctx: ConditionalStatementContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.conditionalStatement`.
   * @param ctx the parse tree
   */
  exitConditionalStatement?: (ctx: ConditionalStatementContext) => void

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
   * Enter a parse tree produced by `ClangParser.whileLoop`.
   * @param ctx the parse tree
   */
  enterWhileLoop?: (ctx: WhileLoopContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.whileLoop`.
   * @param ctx the parse tree
   */
  exitWhileLoop?: (ctx: WhileLoopContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.doWhileLoop`.
   * @param ctx the parse tree
   */
  enterDoWhileLoop?: (ctx: DoWhileLoopContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.doWhileLoop`.
   * @param ctx the parse tree
   */
  exitDoWhileLoop?: (ctx: DoWhileLoopContext) => void

  /**
   * Enter a parse tree produced by `ClangParser.forLoop`.
   * @param ctx the parse tree
   */
  enterForLoop?: (ctx: ForLoopContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.forLoop`.
   * @param ctx the parse tree
   */
  exitForLoop?: (ctx: ForLoopContext) => void

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
   * Enter a parse tree produced by `ClangParser.arrayIdentifier`.
   * @param ctx the parse tree
   */
  enterArrayIdentifier?: (ctx: ArrayIdentifierContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.arrayIdentifier`.
   * @param ctx the parse tree
   */
  exitArrayIdentifier?: (ctx: ArrayIdentifierContext) => void

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
   * Enter a parse tree produced by `ClangParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.functionDeclaration`.
   * @param ctx the parse tree
   */
  exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void

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

  /**
   * Enter a parse tree produced by `ClangParser.functionCallParameters`.
   * @param ctx the parse tree
   */
  enterFunctionCallParameters?: (ctx: FunctionCallParametersContext) => void
  /**
   * Exit a parse tree produced by `ClangParser.functionCallParameters`.
   * @param ctx the parse tree
   */
  exitFunctionCallParameters?: (ctx: FunctionCallParametersContext) => void
}
