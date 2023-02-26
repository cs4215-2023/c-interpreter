// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { PrimaryExpressionContext } from './ClangParser'
import { PostfixExpressionContext } from './ClangParser'
import { ArgumentExpressionListContext } from './ClangParser'
import { UnaryExpressionContext } from './ClangParser'
import { UnaryOperatorContext } from './ClangParser'
import { CastExpressionContext } from './ClangParser'
import { MultiplicativeExpressionContext } from './ClangParser'
import { AdditiveExpressionContext } from './ClangParser'
import { ShiftExpressionContext } from './ClangParser'
import { RelationalExpressionContext } from './ClangParser'
import { EqualityExpressionContext } from './ClangParser'
import { AndExpressionContext } from './ClangParser'
import { ExclusiveOrExpressionContext } from './ClangParser'
import { InclusiveOrExpressionContext } from './ClangParser'
import { LogicalAndExpressionContext } from './ClangParser'
import { LogicalOrExpressionContext } from './ClangParser'
import { ConditionalExpressionContext } from './ClangParser'
import { AssignmentExpressionContext } from './ClangParser'
import { AssignmentOperatorContext } from './ClangParser'
import { ExpressionContext } from './ClangParser'
import { ConstantExpressionContext } from './ClangParser'
import { DeclarationContext } from './ClangParser'
import { DeclarationSpecifiersContext } from './ClangParser'
import { DeclarationSpecifiers2Context } from './ClangParser'
import { DeclarationSpecifierContext } from './ClangParser'
import { InitDeclaratorListContext } from './ClangParser'
import { InitDeclaratorContext } from './ClangParser'
import { TypeSpecifierContext } from './ClangParser'
import { StructSpecifierContext } from './ClangParser'
import { StructDeclarationListContext } from './ClangParser'
import { StructDeclarationContext } from './ClangParser'
import { SpecifierQualifierListContext } from './ClangParser'
import { StructDeclaratorListContext } from './ClangParser'
import { StructDeclaratorContext } from './ClangParser'
import { TypeQualifierContext } from './ClangParser'
import { FunctionSpecifierContext } from './ClangParser'
import { DeclaratorContext } from './ClangParser'
import { DirectDeclaratorContext } from './ClangParser'
import { NestedParenthesesBlockContext } from './ClangParser'
import { PointerContext } from './ClangParser'
import { TypeQualifierListContext } from './ClangParser'
import { ParameterTypeListContext } from './ClangParser'
import { ParameterListContext } from './ClangParser'
import { ParameterDeclarationContext } from './ClangParser'
import { IdentifierListContext } from './ClangParser'
import { TypeNameContext } from './ClangParser'
import { AbstractDeclaratorContext } from './ClangParser'
import { DirectAbstractDeclaratorContext } from './ClangParser'
import { TypedefNameContext } from './ClangParser'
import { InitializerContext } from './ClangParser'
import { InitializerListContext } from './ClangParser'
import { DesignationContext } from './ClangParser'
import { DesignatorListContext } from './ClangParser'
import { DesignatorContext } from './ClangParser'
import { StatementContext } from './ClangParser'
import { CompoundStatementContext } from './ClangParser'
import { BlockItemListContext } from './ClangParser'
import { BlockItemContext } from './ClangParser'
import { ExpressionStatementContext } from './ClangParser'
import { SelectionStatementContext } from './ClangParser'
import { IterationStatementContext } from './ClangParser'
import { ForConditionContext } from './ClangParser'
import { ForDeclarationContext } from './ClangParser'
import { ForExpressionContext } from './ClangParser'
import { CompilationUnitContext } from './ClangParser'
import { TranslationUnitContext } from './ClangParser'
import { ExternalDeclarationContext } from './ClangParser'
import { FunctionDefinitionContext } from './ClangParser'
import { DeclarationListContext } from './ClangParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ClangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ClangVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `ClangParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.argumentExpressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.unaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.unaryOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.castExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpression?: (ctx: CastExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.multiplicativeExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.additiveExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.shiftExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShiftExpression?: (ctx: ShiftExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.relationalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.equalityExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.andExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndExpression?: (ctx: AndExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.exclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.inclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.logicalAndExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.logicalOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.assignmentOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.constantExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantExpression?: (ctx: ConstantExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declarationSpecifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declarationSpecifiers2`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationSpecifiers2?: (ctx: DeclarationSpecifiers2Context) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declarationSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.initDeclaratorList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.initDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.typeSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.structSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructSpecifier?: (ctx: StructSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.structDeclarationList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDeclarationList?: (ctx: StructDeclarationListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.structDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDeclaration?: (ctx: StructDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.specifierQualifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSpecifierQualifierList?: (ctx: SpecifierQualifierListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.structDeclaratorList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDeclaratorList?: (ctx: StructDeclaratorListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.structDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStructDeclarator?: (ctx: StructDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.typeQualifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeQualifier?: (ctx: TypeQualifierContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.functionSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionSpecifier?: (ctx: FunctionSpecifierContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarator?: (ctx: DeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.directDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclarator?: (ctx: DirectDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.nestedParenthesesBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.pointer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPointer?: (ctx: PointerContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.typeQualifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeQualifierList?: (ctx: TypeQualifierListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.parameterTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterTypeList?: (ctx: ParameterTypeListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.parameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterList?: (ctx: ParameterListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.parameterDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.identifierList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifierList?: (ctx: IdentifierListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.typeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeName?: (ctx: TypeNameContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.abstractDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.directAbstractDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.typedefName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypedefName?: (ctx: TypedefNameContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.initializerList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerList?: (ctx: InitializerListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.designation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignation?: (ctx: DesignationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.designatorList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignatorList?: (ctx: DesignatorListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.designator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignator?: (ctx: DesignatorContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.compoundStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundStatement?: (ctx: CompoundStatementContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.blockItemList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockItemList?: (ctx: BlockItemListContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.blockItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockItem?: (ctx: BlockItemContext) => Result

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
   * Visit a parse tree produced by `ClangParser.forDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForDeclaration?: (ctx: ForDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.forExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForExpression?: (ctx: ForExpressionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.compilationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompilationUnit?: (ctx: CompilationUnitContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.translationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTranslationUnit?: (ctx: TranslationUnitContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.externalDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalDeclaration?: (ctx: ExternalDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.functionDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result

  /**
   * Visit a parse tree produced by `ClangParser.declarationList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationList?: (ctx: DeclarationListContext) => Result
}
