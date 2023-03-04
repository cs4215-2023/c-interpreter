// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ClangListener } from "./ClangListener";
import { ClangVisitor } from "./ClangVisitor";


export class ClangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly WHITESPACE = 39;
	public static readonly NEWLINE = 40;
	public static readonly PRIMITIVETYPE = 41;
	public static readonly SIGN = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly FORMATSPECIFIERS = 44;
	public static readonly NUMBER = 45;
	public static readonly PLUSPLUS = 46;
	public static readonly MINUSMINUS = 47;
	public static readonly RULE_start = 0;
	public static readonly RULE_stringLiteral = 1;
	public static readonly RULE_stringLiteralList = 2;
	public static readonly RULE_identifierWithType = 3;
	public static readonly RULE_identifierWithTypeList = 4;
	public static readonly RULE_identifierList = 5;
	public static readonly RULE_numberList = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_parenthesesExpression = 9;
	public static readonly RULE_statementList = 10;
	public static readonly RULE_postFix = 11;
	public static readonly RULE_conditionalExpression = 12;
	public static readonly RULE_expressionStatement = 13;
	public static readonly RULE_selectionStatement = 14;
	public static readonly RULE_iterationStatement = 15;
	public static readonly RULE_forCondition = 16;
	public static readonly RULE_arrayIdentifierWithType = 17;
	public static readonly RULE_arrayContent = 18;
	public static readonly RULE_arrayInitialisation = 19;
	public static readonly RULE_pointer = 20;
	public static readonly RULE_pointerDerefernce = 21;
	public static readonly RULE_pointerReference = 22;
	public static readonly RULE_function = 23;
	public static readonly RULE_functionCall = 24;
	public static readonly RULE_functionCallParameters = 25;
	public static readonly RULE_printf = 26;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "stringLiteral", "stringLiteralList", "identifierWithType", "identifierWithTypeList", 
		"identifierList", "numberList", "statement", "expression", "parenthesesExpression", 
		"statementList", "postFix", "conditionalExpression", "expressionStatement", 
		"selectionStatement", "iterationStatement", "forCondition", "arrayIdentifierWithType", 
		"arrayContent", "arrayInitialisation", "pointer", "pointerDerefernce", 
		"pointerReference", "function", "functionCall", "functionCallParameters", 
		"printf",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\"'", "','", "'('", "')'", "'*'", "'/'", "'%'", "'+'", "'-'", 
		"'<<'", "'>>'", "'>'", "'<'", "'>='", "'<='", "'=='", "'!='", "'||'", 
		"'&&'", "'&'", "'|'", "'^'", "'='", "'-='", "'+='", "'{'", "'}'", "'?'", 
		"':'", "';'", "'if'", "'else'", "'while'", "'do'", "'for'", "'['", "']'", 
		"'printf('", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'++'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "WHITESPACE", "NEWLINE", "PRIMITIVETYPE", 
		"SIGN", "IDENTIFIER", "FORMATSPECIFIERS", "NUMBER", "PLUSPLUS", "MINUSMINUS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ClangParser._LITERAL_NAMES, ClangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ClangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Clang.g4"; }

	// @Override
	public get ruleNames(): string[] { return ClangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ClangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ClangParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ClangParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__19) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0)) {
				{
				{
				this.state = 54;
				this.statement();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ClangParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(ClangParser.T__0);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.IDENTIFIER) {
				{
				this.state = 61;
				this.match(ClangParser.IDENTIFIER);
				}
			}

			this.state = 64;
			this.match(ClangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteralList(): StringLiteralListContext {
		let _localctx: StringLiteralListContext = new StringLiteralListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ClangParser.RULE_stringLiteralList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.stringLiteral();
			this.state = 71;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 67;
					this.match(ClangParser.T__1);
					this.state = 68;
					this.stringLiteral();
					}
					}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierWithType(): IdentifierWithTypeContext {
		let _localctx: IdentifierWithTypeContext = new IdentifierWithTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ClangParser.RULE_identifierWithType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			_localctx._idType = this.match(ClangParser.PRIMITIVETYPE);
			this.state = 75;
			_localctx._id = this.match(ClangParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierWithTypeList(): IdentifierWithTypeListContext {
		let _localctx: IdentifierWithTypeListContext = new IdentifierWithTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ClangParser.RULE_identifierWithTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.identifierWithType();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__1) {
				{
				{
				this.state = 78;
				this.match(ClangParser.T__1);
				this.state = 79;
				this.identifierWithType();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ClangParser.RULE_identifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(ClangParser.IDENTIFIER);
			this.state = 90;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 86;
					this.match(ClangParser.T__1);
					this.state = 87;
					this.match(ClangParser.IDENTIFIER);
					}
					}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberList(): NumberListContext {
		let _localctx: NumberListContext = new NumberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ClangParser.RULE_numberList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(ClangParser.NUMBER);
			this.state = 98;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 94;
					this.match(ClangParser.T__1);
					this.state = 95;
					this.match(ClangParser.NUMBER);
					}
					}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ClangParser.RULE_statement);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.selectionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.iterationStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 104;
				this.function();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, ClangParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				_localctx = new TypedIdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 108;
				this.identifierWithType();
				}
				break;

			case 2:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 109;
				this.match(ClangParser.NUMBER);
				}
				break;

			case 3:
				{
				_localctx = new StringLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 110;
				this.stringLiteral();
				}
				break;

			case 4:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 111;
				this.match(ClangParser.IDENTIFIER);
				}
				break;

			case 5:
				{
				_localctx = new PostFixNotationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 112;
				this.postFix();
				}
				break;

			case 6:
				{
				_localctx = new ArrayInitialisationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.arrayInitialisation();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(ClangParser.T__2);
				this.state = 115;
				(_localctx as ParenthesisExpressionContext)._inner = this.expression(0);
				this.state = 116;
				this.match(ClangParser.T__3);
				}
				break;

			case 8:
				{
				_localctx = new PointerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.pointer();
				}
				break;

			case 9:
				{
				_localctx = new PointerDereferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.pointerDerefernce();
				}
				break;

			case 10:
				{
				_localctx = new PointerReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.pointerReference();
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.functionCall();
				}
				break;

			case 12:
				{
				_localctx = new PrintfExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.printf();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 190;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 188;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 125;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 126;
						(_localctx as MultiplicationContext)._operator = this.match(ClangParser.T__4);
						this.state = 127;
						(_localctx as MultiplicationContext)._right = this.expression(22);
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 128;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 129;
						(_localctx as DivisionContext)._operator = this.match(ClangParser.T__5);
						this.state = 130;
						(_localctx as DivisionContext)._right = this.expression(21);
						}
						break;

					case 3:
						{
						_localctx = new ModulusDivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ModulusDivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 131;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 132;
						(_localctx as ModulusDivisionContext)._operator = this.match(ClangParser.T__6);
						this.state = 133;
						(_localctx as ModulusDivisionContext)._right = this.expression(20);
						}
						break;

					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 135;
						(_localctx as AdditionContext)._operator = this.match(ClangParser.T__7);
						this.state = 136;
						(_localctx as AdditionContext)._right = this.expression(19);
						}
						break;

					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 137;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 138;
						(_localctx as SubtractionContext)._operator = this.match(ClangParser.T__8);
						this.state = 139;
						(_localctx as SubtractionContext)._right = this.expression(18);
						}
						break;

					case 6:
						{
						_localctx = new BitShiftLeftContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftLeftContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 140;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 141;
						(_localctx as BitShiftLeftContext)._operator = this.match(ClangParser.T__9);
						this.state = 142;
						(_localctx as BitShiftLeftContext)._right = this.expression(17);
						}
						break;

					case 7:
						{
						_localctx = new BitShiftRightContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitShiftRightContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 143;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 144;
						(_localctx as BitShiftRightContext)._operator = this.match(ClangParser.T__10);
						this.state = 145;
						(_localctx as BitShiftRightContext)._right = this.expression(16);
						}
						break;

					case 8:
						{
						_localctx = new GreaterThanContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterThanContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 146;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 147;
						(_localctx as GreaterThanContext)._operator = this.match(ClangParser.T__11);
						this.state = 148;
						(_localctx as GreaterThanContext)._right = this.expression(15);
						}
						break;

					case 9:
						{
						_localctx = new LesserThanContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LesserThanContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 149;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 150;
						(_localctx as LesserThanContext)._operator = this.match(ClangParser.T__12);
						this.state = 151;
						(_localctx as LesserThanContext)._right = this.expression(14);
						}
						break;

					case 10:
						{
						_localctx = new GreaterThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 152;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 153;
						(_localctx as GreaterThanOrEqualContext)._operator = this.match(ClangParser.T__13);
						this.state = 154;
						(_localctx as GreaterThanOrEqualContext)._right = this.expression(13);
						}
						break;

					case 11:
						{
						_localctx = new LesserThanOrEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LesserThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 155;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 156;
						(_localctx as LesserThanOrEqualContext)._operator = this.match(ClangParser.T__14);
						this.state = 157;
						(_localctx as LesserThanOrEqualContext)._right = this.expression(12);
						}
						break;

					case 12:
						{
						_localctx = new EqualityCheckingContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityCheckingContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 158;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 159;
						(_localctx as EqualityCheckingContext)._operator = this.match(ClangParser.T__15);
						this.state = 160;
						(_localctx as EqualityCheckingContext)._right = this.expression(11);
						}
						break;

					case 13:
						{
						_localctx = new NotEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as NotEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 161;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 162;
						(_localctx as NotEqualContext)._operator = this.match(ClangParser.T__16);
						this.state = 163;
						(_localctx as NotEqualContext)._right = this.expression(10);
						}
						break;

					case 14:
						{
						_localctx = new OrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as OrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 164;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 165;
						(_localctx as OrContext)._operator = this.match(ClangParser.T__17);
						this.state = 166;
						(_localctx as OrContext)._right = this.expression(9);
						}
						break;

					case 15:
						{
						_localctx = new AndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 167;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 168;
						(_localctx as AndContext)._operator = this.match(ClangParser.T__18);
						this.state = 169;
						(_localctx as AndContext)._right = this.expression(8);
						}
						break;

					case 16:
						{
						_localctx = new BitwiseAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitwiseAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 170;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 171;
						(_localctx as BitwiseAndContext)._operator = this.match(ClangParser.T__19);
						this.state = 172;
						(_localctx as BitwiseAndContext)._right = this.expression(7);
						}
						break;

					case 17:
						{
						_localctx = new BitwiseOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitwiseOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 173;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 174;
						(_localctx as BitwiseOrContext)._operator = this.match(ClangParser.T__20);
						this.state = 175;
						(_localctx as BitwiseOrContext)._right = this.expression(6);
						}
						break;

					case 18:
						{
						_localctx = new XorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as XorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 176;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 177;
						(_localctx as XorContext)._operator = this.match(ClangParser.T__21);
						this.state = 178;
						(_localctx as XorContext)._right = this.expression(5);
						}
						break;

					case 19:
						{
						_localctx = new AssignmentContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignmentContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 179;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 180;
						(_localctx as AssignmentContext)._operator = this.match(ClangParser.T__22);
						this.state = 181;
						(_localctx as AssignmentContext)._right = this.expression(4);
						}
						break;

					case 20:
						{
						_localctx = new AssignAndMinusOneContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignAndMinusOneContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 182;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 183;
						(_localctx as AssignAndMinusOneContext)._operator = this.match(ClangParser.T__23);
						this.state = 184;
						(_localctx as AssignAndMinusOneContext)._right = this.expression(3);
						}
						break;

					case 21:
						{
						_localctx = new AssignAndAddOneContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AssignAndAddOneContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 185;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 186;
						(_localctx as AssignAndAddOneContext)._operator = this.match(ClangParser.T__24);
						this.state = 187;
						(_localctx as AssignAndAddOneContext)._right = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesesExpression(): ParenthesesExpressionContext {
		let _localctx: ParenthesesExpressionContext = new ParenthesesExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ClangParser.RULE_parenthesesExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(ClangParser.T__2);
			this.state = 194;
			_localctx._inner = this.expression(0);
			this.state = 195;
			this.match(ClangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ClangParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(ClangParser.T__25);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__19) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0)) {
				{
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 198;
					this.statement();
					}
					}
					this.state = 201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__19) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0));
				}
			}

			this.state = 205;
			this.match(ClangParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postFix(): PostFixContext {
		let _localctx: PostFixContext = new PostFixContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ClangParser.RULE_postFix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 207;
			this.match(ClangParser.IDENTIFIER);
			}
			this.state = 208;
			_la = this._input.LA(1);
			if (!(_la === ClangParser.PLUSPLUS || _la === ClangParser.MINUSMINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ClangParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			_localctx._test = this.expression(0);
			this.state = 211;
			this.match(ClangParser.T__27);
			this.state = 212;
			_localctx._consequent = this.expression(0);
			this.state = 213;
			this.match(ClangParser.T__28);
			this.state = 214;
			_localctx._alternate = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ClangParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.expression(0);
			this.state = 217;
			this.match(ClangParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ClangParser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(ClangParser.T__30);
			this.state = 220;
			this.match(ClangParser.T__2);
			this.state = 221;
			_localctx._test = this.expression(0);
			this.state = 222;
			this.match(ClangParser.T__3);
			this.state = 223;
			_localctx._consequentStatement = this.statement();
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 224;
				this.match(ClangParser.T__31);
				this.state = 225;
				_localctx._alternateStatement = this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ClangParser.RULE_iterationStatement);
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.T__32:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.match(ClangParser.T__32);
				this.state = 229;
				this.match(ClangParser.T__2);
				this.state = 230;
				_localctx._condition = this.expression(0);
				this.state = 231;
				this.match(ClangParser.T__3);
				this.state = 232;
				_localctx._body = this.statementList();
				}
				break;
			case ClangParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(ClangParser.T__33);
				this.state = 235;
				_localctx._body = this.statementList();
				this.state = 236;
				this.match(ClangParser.T__32);
				this.state = 237;
				this.match(ClangParser.T__2);
				this.state = 238;
				_localctx._condition = this.expression(0);
				this.state = 239;
				this.match(ClangParser.T__3);
				this.state = 240;
				this.match(ClangParser.T__29);
				}
				break;
			case ClangParser.T__34:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 242;
				this.match(ClangParser.T__34);
				this.state = 243;
				this.match(ClangParser.T__2);
				this.state = 244;
				this.forCondition();
				this.state = 245;
				this.match(ClangParser.T__3);
				this.state = 246;
				_localctx._body = this.statementList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ClangParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			_localctx._initialise = this.expression(0);
			this.state = 251;
			this.match(ClangParser.T__29);
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__19))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (ClangParser.T__37 - 38)) | (1 << (ClangParser.PRIMITIVETYPE - 38)) | (1 << (ClangParser.IDENTIFIER - 38)) | (1 << (ClangParser.NUMBER - 38)))) !== 0)) {
				{
				this.state = 252;
				_localctx._endCondition = this.expression(0);
				}
			}

			this.state = 255;
			this.match(ClangParser.T__29);
			this.state = 256;
			_localctx._increment = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayIdentifierWithType(): ArrayIdentifierWithTypeContext {
		let _localctx: ArrayIdentifierWithTypeContext = new ArrayIdentifierWithTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ClangParser.RULE_arrayIdentifierWithType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			_localctx._idType = this.match(ClangParser.PRIMITIVETYPE);
			this.state = 259;
			_localctx._id = this.match(ClangParser.IDENTIFIER);
			this.state = 260;
			this.match(ClangParser.T__35);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.NUMBER) {
				{
				this.state = 261;
				_localctx._size = this.match(ClangParser.NUMBER);
				}
			}

			this.state = 264;
			this.match(ClangParser.T__36);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayContent(): ArrayContentContext {
		let _localctx: ArrayContentContext = new ArrayContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ClangParser.RULE_arrayContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(ClangParser.T__25);
			this.state = 269;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.IDENTIFIER:
				{
				this.state = 267;
				this.identifierList();
				}
				break;
			case ClangParser.NUMBER:
				{
				this.state = 268;
				this.numberList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 271;
			this.match(ClangParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitialisation(): ArrayInitialisationContext {
		let _localctx: ArrayInitialisationContext = new ArrayInitialisationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ClangParser.RULE_arrayInitialisation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.arrayIdentifierWithType();
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 274;
				_localctx._operator = this.match(ClangParser.T__22);
				this.state = 275;
				_localctx._array = this.arrayContent();
				}
				break;

			case 2:
				{
				this.state = 276;
				this.stringLiteral();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ClangParser.RULE_pointer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(ClangParser.PRIMITIVETYPE);
			this.state = 280;
			this.match(ClangParser.T__4);
			this.state = 281;
			this.match(ClangParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerDerefernce(): PointerDerefernceContext {
		let _localctx: PointerDerefernceContext = new PointerDerefernceContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ClangParser.RULE_pointerDerefernce);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(ClangParser.T__4);
			this.state = 284;
			this.match(ClangParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerReference(): PointerReferenceContext {
		let _localctx: PointerReferenceContext = new PointerReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ClangParser.RULE_pointerReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(ClangParser.T__19);
			this.state = 287;
			this.match(ClangParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ClangParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			_localctx._funcType = this.match(ClangParser.PRIMITIVETYPE);
			{
			this.state = 290;
			_localctx._funcName = this.match(ClangParser.IDENTIFIER);
			}
			{
			this.state = 291;
			_localctx._params = this.match(ClangParser.T__2);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.PRIMITIVETYPE) {
				{
				this.state = 292;
				this.identifierWithTypeList();
				}
			}

			this.state = 295;
			this.match(ClangParser.T__3);
			}
			this.state = 297;
			_localctx._body = this.statementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ClangParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(ClangParser.IDENTIFIER);
			this.state = 300;
			_localctx._params = this.match(ClangParser.T__2);
			this.state = 301;
			this.functionCallParameters();
			this.state = 302;
			this.match(ClangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallParameters(): FunctionCallParametersContext {
		let _localctx: FunctionCallParametersContext = new FunctionCallParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ClangParser.RULE_functionCallParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.T__0:
				{
				this.state = 304;
				this.stringLiteralList();
				}
				break;
			case ClangParser.NUMBER:
				{
				this.state = 305;
				this.numberList();
				}
				break;
			case ClangParser.IDENTIFIER:
				{
				this.state = 306;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__1 || _la === ClangParser.IDENTIFIER || _la === ClangParser.NUMBER) {
				{
				this.state = 313;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ClangParser.T__1:
					{
					this.state = 309;
					this.match(ClangParser.T__1);
					this.state = 310;
					this.stringLiteralList();
					}
					break;
				case ClangParser.NUMBER:
					{
					this.state = 311;
					this.numberList();
					}
					break;
				case ClangParser.IDENTIFIER:
					{
					this.state = 312;
					this.identifierList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printf(): PrintfContext {
		let _localctx: PrintfContext = new PrintfContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ClangParser.RULE_printf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(ClangParser.T__37);
			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__0 || _la === ClangParser.FORMATSPECIFIERS) {
				{
				this.state = 321;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ClangParser.T__0:
					{
					this.state = 319;
					this.stringLiteral();
					}
					break;
				case ClangParser.FORMATSPECIFIERS:
					{
					this.state = 320;
					this.match(ClangParser.FORMATSPECIFIERS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 326;
			this.match(ClangParser.T__1);
			this.state = 327;
			this.identifierList();
			this.state = 328;
			this.match(ClangParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 8:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 21);

		case 1:
			return this.precpred(this._ctx, 20);

		case 2:
			return this.precpred(this._ctx, 19);

		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);

		case 5:
			return this.precpred(this._ctx, 16);

		case 6:
			return this.precpred(this._ctx, 15);

		case 7:
			return this.precpred(this._ctx, 14);

		case 8:
			return this.precpred(this._ctx, 13);

		case 9:
			return this.precpred(this._ctx, 12);

		case 10:
			return this.precpred(this._ctx, 11);

		case 11:
			return this.precpred(this._ctx, 10);

		case 12:
			return this.precpred(this._ctx, 9);

		case 13:
			return this.precpred(this._ctx, 8);

		case 14:
			return this.precpred(this._ctx, 7);

		case 15:
			return this.precpred(this._ctx, 6);

		case 16:
			return this.precpred(this._ctx, 5);

		case 17:
			return this.precpred(this._ctx, 4);

		case 18:
			return this.precpred(this._ctx, 3);

		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u014D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03" +
		"\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x03\x03\x03\x05\x03A\n\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04H\n\x04\f\x04\x0E\x04" +
		"K\v\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06S\n\x06" +
		"\f\x06\x0E\x06V\v\x06\x03\x07\x03\x07\x03\x07\x07\x07[\n\x07\f\x07\x0E" +
		"\x07^\v\x07\x03\b\x03\b\x03\b\x07\bc\n\b\f\b\x0E\bf\v\b\x03\t\x03\t\x03" +
		"\t\x03\t\x05\tl\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n~\n\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\xBF\n\n\f\n\x0E\n\xC2\v\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x06\f\xCA\n\f\r\f\x0E\f\xCB\x05\f\xCE\n\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE5" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x05\x11\xFB\n\x11\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0100\n\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x05\x13\u0109\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0110" +
		"\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0118\n" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0128\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0136\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u013C\n\x1B\f\x1B\x0E\x1B\u013F\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u0144\n\x1C\f\x1C\x0E\x1C\u0147\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x02\x02\x03\x12\x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02" +
		"\x03\x03\x0201\x02\u016C\x02;\x03\x02\x02\x02\x04>\x03\x02\x02\x02\x06" +
		"D\x03\x02\x02\x02\bL\x03\x02\x02\x02\nO\x03\x02\x02\x02\fW\x03\x02\x02" +
		"\x02\x0E_\x03\x02\x02\x02\x10k\x03\x02\x02\x02\x12}\x03\x02\x02\x02\x14" +
		"\xC3\x03\x02\x02\x02\x16\xC7\x03\x02\x02\x02\x18\xD1\x03\x02\x02\x02\x1A" +
		"\xD4\x03\x02\x02\x02\x1C\xDA\x03\x02\x02\x02\x1E\xDD\x03\x02\x02\x02 " +
		"\xFA\x03\x02\x02\x02\"\xFC\x03\x02\x02\x02$\u0104\x03\x02\x02\x02&\u010C" +
		"\x03\x02\x02\x02(\u0113\x03\x02\x02\x02*\u0119\x03\x02\x02\x02,\u011D" +
		"\x03\x02\x02\x02.\u0120\x03\x02\x02\x020\u0123\x03\x02\x02\x022\u012D" +
		"\x03\x02\x02\x024\u0135\x03\x02\x02\x026\u0140\x03\x02\x02\x028:\x05\x10" +
		"\t\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02" +
		"\x02\x02<\x03\x03\x02\x02\x02=;\x03\x02\x02\x02>@\x07\x03\x02\x02?A\x07" +
		"-\x02\x02@?\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07" +
		"\x03\x02\x02C\x05\x03\x02\x02\x02DI\x05\x04\x03\x02EF\x07\x04\x02\x02" +
		"FH\x05\x04\x03\x02GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02" +
		"IJ\x03\x02\x02\x02J\x07\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07+\x02\x02" +
		"MN\x07-\x02\x02N\t\x03\x02\x02\x02OT\x05\b\x05\x02PQ\x07\x04\x02\x02Q" +
		"S\x05\b\x05\x02RP\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"TU\x03\x02\x02\x02U\v\x03\x02\x02\x02VT\x03\x02\x02\x02W\\\x07-\x02\x02" +
		"XY\x07\x04\x02\x02Y[\x07-\x02\x02ZX\x03\x02\x02\x02[^\x03\x02\x02\x02" +
		"\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\r\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02_d\x07/\x02\x02`a\x07\x04\x02\x02ac\x07/\x02\x02b`\x03\x02\x02\x02" +
		"cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\x0F\x03\x02\x02" +
		"\x02fd\x03\x02\x02\x02gl\x05\x1C\x0F\x02hl\x05\x1E\x10\x02il\x05 \x11" +
		"\x02jl\x050\x19\x02kg\x03\x02\x02\x02kh\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02kj\x03\x02\x02\x02l\x11\x03\x02\x02\x02mn\b\n\x01\x02n~\x05\b\x05" +
		"\x02o~\x07/\x02\x02p~\x05\x04\x03\x02q~\x07-\x02\x02r~\x05\x18\r\x02s" +
		"~\x05(\x15\x02tu\x07\x05\x02\x02uv\x05\x12\n\x02vw\x07\x06\x02\x02w~\x03" +
		"\x02\x02\x02x~\x05*\x16\x02y~\x05,\x17\x02z~\x05.\x18\x02{~\x052\x1A\x02" +
		"|~\x056\x1C\x02}m\x03\x02\x02\x02}o\x03\x02\x02\x02}p\x03\x02\x02\x02" +
		"}q\x03\x02\x02\x02}r\x03\x02\x02\x02}s\x03\x02\x02\x02}t\x03\x02\x02\x02" +
		"}x\x03\x02\x02\x02}y\x03\x02\x02\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02" +
		"}|\x03\x02\x02\x02~\xC0\x03\x02\x02\x02\x7F\x80\f\x17\x02\x02\x80\x81" +
		"\x07\x07\x02\x02\x81\xBF\x05\x12\n\x18\x82\x83\f\x16\x02\x02\x83\x84\x07" +
		"\b\x02\x02\x84\xBF\x05\x12\n\x17\x85\x86\f\x15\x02\x02\x86\x87\x07\t\x02" +
		"\x02\x87\xBF\x05\x12\n\x16\x88\x89\f\x14\x02\x02\x89\x8A\x07\n\x02\x02" +
		"\x8A\xBF\x05\x12\n\x15\x8B\x8C\f\x13\x02\x02\x8C\x8D\x07\v\x02\x02\x8D" +
		"\xBF\x05\x12\n\x14\x8E\x8F\f\x12\x02\x02\x8F\x90\x07\f\x02\x02\x90\xBF" +
		"\x05\x12\n\x13\x91\x92\f\x11\x02\x02\x92\x93\x07\r\x02\x02\x93\xBF\x05" +
		"\x12\n\x12\x94\x95\f\x10\x02\x02\x95\x96\x07\x0E\x02\x02\x96\xBF\x05\x12" +
		"\n\x11\x97\x98\f\x0F\x02\x02\x98\x99\x07\x0F\x02\x02\x99\xBF\x05\x12\n" +
		"\x10\x9A\x9B\f\x0E\x02\x02\x9B\x9C\x07\x10\x02\x02\x9C\xBF\x05\x12\n\x0F" +
		"\x9D\x9E\f\r\x02\x02\x9E\x9F\x07\x11\x02\x02\x9F\xBF\x05\x12\n\x0E\xA0" +
		"\xA1\f\f\x02\x02\xA1\xA2\x07\x12\x02\x02\xA2\xBF\x05\x12\n\r\xA3\xA4\f" +
		"\v\x02\x02\xA4\xA5\x07\x13\x02\x02\xA5\xBF\x05\x12\n\f\xA6\xA7\f\n\x02" +
		"\x02\xA7\xA8\x07\x14\x02\x02\xA8\xBF\x05\x12\n\v\xA9\xAA\f\t\x02\x02\xAA" +
		"\xAB\x07\x15\x02\x02\xAB\xBF\x05\x12\n\n\xAC\xAD\f\b\x02\x02\xAD\xAE\x07" +
		"\x16\x02\x02\xAE\xBF\x05\x12\n\t\xAF\xB0\f\x07\x02\x02\xB0\xB1\x07\x17" +
		"\x02\x02\xB1\xBF\x05\x12\n\b\xB2\xB3\f\x06\x02\x02\xB3\xB4\x07\x18\x02" +
		"\x02\xB4\xBF\x05\x12\n\x07\xB5\xB6\f\x05\x02\x02\xB6\xB7\x07\x19\x02\x02" +
		"\xB7\xBF\x05\x12\n\x06\xB8\xB9\f\x04\x02\x02\xB9\xBA\x07\x1A\x02\x02\xBA" +
		"\xBF\x05\x12\n\x05\xBB\xBC\f\x03\x02\x02\xBC\xBD\x07\x1B\x02\x02\xBD\xBF" +
		"\x05\x12\n\x04\xBE\x7F\x03\x02\x02\x02\xBE\x82\x03\x02\x02\x02\xBE\x85" +
		"\x03\x02\x02\x02\xBE\x88\x03\x02\x02\x02\xBE\x8B\x03\x02\x02\x02\xBE\x8E" +
		"\x03\x02\x02\x02\xBE\x91\x03\x02\x02\x02\xBE\x94\x03\x02\x02\x02\xBE\x97" +
		"\x03\x02\x02\x02\xBE\x9A\x03\x02\x02\x02\xBE\x9D\x03\x02\x02\x02\xBE\xA0" +
		"\x03\x02\x02\x02\xBE\xA3\x03\x02\x02\x02\xBE\xA6\x03\x02\x02\x02\xBE\xA9" +
		"\x03\x02\x02\x02\xBE\xAC\x03\x02\x02\x02\xBE\xAF\x03\x02\x02\x02\xBE\xB2" +
		"\x03\x02\x02\x02\xBE\xB5\x03\x02\x02\x02\xBE\xB8\x03\x02\x02\x02\xBE\xBB" +
		"\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1" +
		"\x03\x02\x02\x02\xC1\x13\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4" +
		"\x07\x05\x02\x02\xC4\xC5\x05\x12\n\x02\xC5\xC6\x07\x06\x02\x02\xC6\x15" +
		"\x03\x02\x02\x02\xC7\xCD\x07\x1C\x02\x02\xC8\xCA\x05\x10\t\x02\xC9\xC8" +
		"\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC" +
		"\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x07\x1D\x02\x02\xD0\x17" +
		"\x03\x02\x02\x02\xD1\xD2\x07-\x02\x02\xD2\xD3\t\x02\x02\x02\xD3\x19\x03" +
		"\x02\x02\x02\xD4\xD5\x05\x12\n\x02\xD5\xD6\x07\x1E\x02\x02\xD6\xD7\x05" +
		"\x12\n\x02\xD7\xD8\x07\x1F\x02\x02\xD8\xD9\x05\x12\n\x02\xD9\x1B\x03\x02" +
		"\x02\x02\xDA\xDB\x05\x12\n\x02\xDB\xDC\x07 \x02\x02\xDC\x1D\x03\x02\x02" +
		"\x02\xDD\xDE\x07!\x02\x02\xDE\xDF\x07\x05\x02\x02\xDF\xE0\x05\x12\n\x02" +
		"\xE0\xE1\x07\x06\x02\x02\xE1\xE4\x05\x10\t\x02\xE2\xE3\x07\"\x02\x02\xE3" +
		"\xE5\x05\x10\t\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\x1F\x03\x02\x02\x02\xE6\xE7\x07#\x02\x02\xE7\xE8\x07\x05\x02\x02\xE8" +
		"\xE9\x05\x12\n\x02\xE9\xEA\x07\x06\x02\x02\xEA\xEB\x05\x16\f\x02\xEB\xFB" +
		"\x03\x02\x02\x02\xEC\xED\x07$\x02\x02\xED\xEE\x05\x16\f\x02\xEE\xEF\x07" +
		"#\x02\x02\xEF\xF0\x07\x05\x02\x02\xF0\xF1\x05\x12\n\x02\xF1\xF2\x07\x06" +
		"\x02\x02\xF2\xF3\x07 \x02\x02\xF3\xFB\x03\x02\x02\x02\xF4\xF5\x07%\x02" +
		"\x02\xF5\xF6\x07\x05\x02\x02\xF6\xF7\x05\"\x12\x02\xF7\xF8\x07\x06\x02" +
		"\x02\xF8\xF9\x05\x16\f\x02\xF9\xFB\x03\x02\x02\x02\xFA\xE6\x03\x02\x02" +
		"\x02\xFA\xEC\x03\x02\x02\x02\xFA\xF4\x03\x02\x02\x02\xFB!\x03\x02\x02" +
		"\x02\xFC\xFD\x05\x12\n\x02\xFD\xFF\x07 \x02\x02\xFE\u0100\x05\x12\n\x02" +
		"\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02" +
		"\x02\x02\u0101\u0102\x07 \x02\x02\u0102\u0103\x05\x12\n\x02\u0103#\x03" +
		"\x02\x02\x02\u0104\u0105\x07+\x02\x02\u0105\u0106\x07-\x02\x02\u0106\u0108" +
		"\x07&\x02\x02\u0107\u0109\x07/\x02\x02\u0108\u0107\x03\x02\x02\x02\u0108" +
		"\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x07\'\x02" +
		"\x02\u010B%\x03\x02\x02\x02\u010C\u010F\x07\x1C\x02\x02\u010D\u0110\x05" +
		"\f\x07\x02\u010E\u0110\x05\x0E\b\x02\u010F\u010D\x03\x02\x02\x02\u010F" +
		"\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x07\x1D" +
		"\x02\x02\u0112\'\x03\x02\x02\x02\u0113\u0117\x05$\x13\x02\u0114\u0115" +
		"\x07\x19\x02\x02\u0115\u0118\x05&\x14\x02\u0116\u0118\x05\x04\x03\x02" +
		"\u0117\u0114\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03" +
		"\x02\x02\x02\u0118)\x03\x02\x02\x02\u0119\u011A\x07+\x02\x02\u011A\u011B" +
		"\x07\x07\x02\x02\u011B\u011C\x07-\x02\x02\u011C+\x03\x02\x02\x02\u011D" +
		"\u011E\x07\x07\x02\x02\u011E\u011F\x07-\x02\x02\u011F-\x03\x02\x02\x02" +
		"\u0120\u0121\x07\x16\x02\x02\u0121\u0122\x07-\x02\x02\u0122/\x03\x02\x02" +
		"\x02\u0123\u0124\x07+\x02\x02\u0124\u0125\x07-\x02\x02\u0125\u0127\x07" +
		"\x05\x02\x02\u0126\u0128\x05\n\x06\x02\u0127\u0126\x03\x02\x02\x02\u0127" +
		"\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x07\x06" +
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x05\x16\f\x02\u012C1" +
		"\x03\x02\x02\x02\u012D\u012E\x07-\x02\x02\u012E\u012F\x07\x05\x02\x02" +
		"\u012F\u0130\x054\x1B\x02\u0130\u0131\x07\x06\x02\x02\u01313\x03\x02\x02" +
		"\x02\u0132\u0136\x05\x06\x04\x02\u0133\u0136\x05\x0E\b\x02\u0134\u0136" +
		"\x05\f\x07\x02\u0135\u0132\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02" +
		"\u0135\u0134\x03\x02\x02\x02\u0136\u013D\x03\x02\x02\x02\u0137\u0138\x07" +
		"\x04\x02\x02\u0138\u013C\x05\x06\x04\x02\u0139\u013C\x05\x0E\b\x02\u013A" +
		"\u013C\x05\f\x07\x02\u013B\u0137\x03\x02\x02\x02\u013B\u0139\x03\x02\x02" +
		"\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B" +
		"\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E5\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u0140\u0145\x07(\x02\x02\u0141\u0144\x05\x04\x03" +
		"\x02\u0142\u0144\x07.\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142" +
		"\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02" +
		"\u0145\u0146\x03\x02\x02\x02\u0146\u0148\x03\x02\x02\x02\u0147\u0145\x03" +
		"\x02\x02\x02\u0148\u0149\x07\x04\x02\x02\u0149\u014A\x05\f\x07\x02\u014A" +
		"\u014B\x07\x06\x02\x02\u014B7\x03\x02\x02\x02\x1A;@IT\\dk}\xBE\xC0\xCB" +
		"\xCD\xE4\xFA\xFF\u0108\u010F\u0117\u0127\u0135\u013B\u013D\u0143\u0145";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ClangParser.__ATN) {
			ClangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ClangParser._serializedATN));
		}

		return ClangParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_start; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralListContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_stringLiteralList; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStringLiteralList) {
			listener.enterStringLiteralList(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStringLiteralList) {
			listener.exitStringLiteralList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStringLiteralList) {
			return visitor.visitStringLiteralList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierWithTypeContext extends ParserRuleContext {
	public _idType!: Token;
	public _id!: Token;
	public PRIMITIVETYPE(): TerminalNode { return this.getToken(ClangParser.PRIMITIVETYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_identifierWithType; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterIdentifierWithType) {
			listener.enterIdentifierWithType(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitIdentifierWithType) {
			listener.exitIdentifierWithType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitIdentifierWithType) {
			return visitor.visitIdentifierWithType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierWithTypeListContext extends ParserRuleContext {
	public identifierWithType(): IdentifierWithTypeContext[];
	public identifierWithType(i: number): IdentifierWithTypeContext;
	public identifierWithType(i?: number): IdentifierWithTypeContext | IdentifierWithTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierWithTypeContext);
		} else {
			return this.getRuleContext(i, IdentifierWithTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_identifierWithTypeList; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterIdentifierWithTypeList) {
			listener.enterIdentifierWithTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitIdentifierWithTypeList) {
			listener.exitIdentifierWithTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitIdentifierWithTypeList) {
			return visitor.visitIdentifierWithTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ClangParser.IDENTIFIER);
		} else {
			return this.getToken(ClangParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberListContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ClangParser.NUMBER);
		} else {
			return this.getToken(ClangParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_numberList; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterNumberList) {
			listener.enterNumberList(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitNumberList) {
			listener.exitNumberList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitNumberList) {
			return visitor.visitNumberList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_statement; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TypedIdentifierExpressionContext extends ExpressionContext {
	public identifierWithType(): IdentifierWithTypeContext {
		return this.getRuleContext(0, IdentifierWithTypeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterTypedIdentifierExpression) {
			listener.enterTypedIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitTypedIdentifierExpression) {
			listener.exitTypedIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitTypedIdentifierExpression) {
			return visitor.visitTypedIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(ClangParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralExpressionContext extends ExpressionContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStringLiteralExpression) {
			listener.enterStringLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStringLiteralExpression) {
			listener.exitStringLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStringLiteralExpression) {
			return visitor.visitStringLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostFixNotationExpressionContext extends ExpressionContext {
	public postFix(): PostFixContext {
		return this.getRuleContext(0, PostFixContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPostFixNotationExpression) {
			listener.enterPostFixNotationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPostFixNotationExpression) {
			listener.exitPostFixNotationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPostFixNotationExpression) {
			return visitor.visitPostFixNotationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayInitialisationExpressionContext extends ExpressionContext {
	public arrayInitialisation(): ArrayInitialisationContext {
		return this.getRuleContext(0, ArrayInitialisationContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterArrayInitialisationExpression) {
			listener.enterArrayInitialisationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitArrayInitialisationExpression) {
			listener.exitArrayInitialisationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitArrayInitialisationExpression) {
			return visitor.visitArrayInitialisationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterParenthesisExpression) {
			listener.enterParenthesisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitParenthesisExpression) {
			listener.exitParenthesisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerExpressionContext extends ExpressionContext {
	public pointer(): PointerContext {
		return this.getRuleContext(0, PointerContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointerExpression) {
			listener.enterPointerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointerExpression) {
			listener.exitPointerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointerExpression) {
			return visitor.visitPointerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerDereferenceExpressionContext extends ExpressionContext {
	public pointerDerefernce(): PointerDerefernceContext {
		return this.getRuleContext(0, PointerDerefernceContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointerDereferenceExpression) {
			listener.enterPointerDereferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointerDereferenceExpression) {
			listener.exitPointerDereferenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointerDereferenceExpression) {
			return visitor.visitPointerDereferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerReferenceExpressionContext extends ExpressionContext {
	public pointerReference(): PointerReferenceContext {
		return this.getRuleContext(0, PointerReferenceContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointerReferenceExpression) {
			listener.enterPointerReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointerReferenceExpression) {
			listener.exitPointerReferenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointerReferenceExpression) {
			return visitor.visitPointerReferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrintfExpressionContext extends ExpressionContext {
	public printf(): PrintfContext {
		return this.getRuleContext(0, PrintfContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPrintfExpression) {
			listener.enterPrintfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPrintfExpression) {
			listener.exitPrintfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPrintfExpression) {
			return visitor.visitPrintfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModulusDivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterModulusDivision) {
			listener.enterModulusDivision(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitModulusDivision) {
			listener.exitModulusDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitModulusDivision) {
			return visitor.visitModulusDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftLeftContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterBitShiftLeft) {
			listener.enterBitShiftLeft(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitBitShiftLeft) {
			listener.exitBitShiftLeft(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitBitShiftLeft) {
			return visitor.visitBitShiftLeft(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftRightContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterBitShiftRight) {
			listener.enterBitShiftRight(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitBitShiftRight) {
			listener.exitBitShiftRight(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitBitShiftRight) {
			return visitor.visitBitShiftRight(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterGreaterThan) {
			listener.enterGreaterThan(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitGreaterThan) {
			listener.exitGreaterThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitGreaterThan) {
			return visitor.visitGreaterThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LesserThanContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterLesserThan) {
			listener.enterLesserThan(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitLesserThan) {
			listener.exitLesserThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitLesserThan) {
			return visitor.visitLesserThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanOrEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterGreaterThanOrEqual) {
			listener.enterGreaterThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitGreaterThanOrEqual) {
			listener.exitGreaterThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitGreaterThanOrEqual) {
			return visitor.visitGreaterThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LesserThanOrEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterLesserThanOrEqual) {
			listener.enterLesserThanOrEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitLesserThanOrEqual) {
			listener.exitLesserThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitLesserThanOrEqual) {
			return visitor.visitLesserThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityCheckingContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterEqualityChecking) {
			listener.enterEqualityChecking(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitEqualityChecking) {
			listener.exitEqualityChecking(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitEqualityChecking) {
			return visitor.visitEqualityChecking(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterNotEqual) {
			listener.enterNotEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitNotEqual) {
			listener.exitNotEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitNotEqual) {
			return visitor.visitNotEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseAndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterBitwiseAnd) {
			listener.enterBitwiseAnd(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitBitwiseAnd) {
			listener.exitBitwiseAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitBitwiseAnd) {
			return visitor.visitBitwiseAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseOrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterBitwiseOr) {
			listener.enterBitwiseOr(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitBitwiseOr) {
			listener.exitBitwiseOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitBitwiseOr) {
			return visitor.visitBitwiseOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterXor) {
			listener.enterXor(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitXor) {
			listener.exitXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitXor) {
			return visitor.visitXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignAndMinusOneContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterAssignAndMinusOne) {
			listener.enterAssignAndMinusOne(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitAssignAndMinusOne) {
			listener.exitAssignAndMinusOne(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitAssignAndMinusOne) {
			return visitor.visitAssignAndMinusOne(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignAndAddOneContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterAssignAndAddOne) {
			listener.enterAssignAndAddOne(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitAssignAndAddOne) {
			listener.exitAssignAndAddOne(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitAssignAndAddOne) {
			return visitor.visitAssignAndAddOne(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesesExpressionContext extends ParserRuleContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_parenthesesExpression; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterParenthesesExpression) {
			listener.enterParenthesesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitParenthesesExpression) {
			listener.exitParenthesesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitParenthesesExpression) {
			return visitor.visitParenthesesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_statementList; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostFixContext extends ParserRuleContext {
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(ClangParser.PLUSPLUS, 0); }
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(ClangParser.MINUSMINUS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_postFix; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPostFix) {
			listener.enterPostFix(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPostFix) {
			listener.exitPostFix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPostFix) {
			return visitor.visitPostFix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public _test!: ExpressionContext;
	public _consequent!: ExpressionContext;
	public _alternate!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public _test!: ExpressionContext;
	public _consequentStatement!: StatementContext;
	public _alternateStatement!: StatementContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _body!: StatementListContext;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	public _initialise!: ExpressionContext;
	public _endCondition!: ExpressionContext;
	public _increment!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_forCondition; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayIdentifierWithTypeContext extends ParserRuleContext {
	public _idType!: Token;
	public _id!: Token;
	public _size!: Token;
	public PRIMITIVETYPE(): TerminalNode { return this.getToken(ClangParser.PRIMITIVETYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_arrayIdentifierWithType; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterArrayIdentifierWithType) {
			listener.enterArrayIdentifierWithType(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitArrayIdentifierWithType) {
			listener.exitArrayIdentifierWithType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitArrayIdentifierWithType) {
			return visitor.visitArrayIdentifierWithType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContentContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public numberList(): NumberListContext | undefined {
		return this.tryGetRuleContext(0, NumberListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_arrayContent; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterArrayContent) {
			listener.enterArrayContent(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitArrayContent) {
			listener.exitArrayContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitArrayContent) {
			return visitor.visitArrayContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitialisationContext extends ParserRuleContext {
	public _operator!: Token;
	public _array!: ArrayContentContext;
	public arrayIdentifierWithType(): ArrayIdentifierWithTypeContext {
		return this.getRuleContext(0, ArrayIdentifierWithTypeContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public arrayContent(): ArrayContentContext | undefined {
		return this.tryGetRuleContext(0, ArrayContentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_arrayInitialisation; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterArrayInitialisation) {
			listener.enterArrayInitialisation(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitArrayInitialisation) {
			listener.exitArrayInitialisation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitArrayInitialisation) {
			return visitor.visitArrayInitialisation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public PRIMITIVETYPE(): TerminalNode { return this.getToken(ClangParser.PRIMITIVETYPE, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_pointer; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerDerefernceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_pointerDerefernce; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointerDerefernce) {
			listener.enterPointerDerefernce(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointerDerefernce) {
			listener.exitPointerDerefernce(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointerDerefernce) {
			return visitor.visitPointerDerefernce(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_pointerReference; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPointerReference) {
			listener.enterPointerReference(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPointerReference) {
			listener.exitPointerReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPointerReference) {
			return visitor.visitPointerReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _funcType!: Token;
	public _funcName!: Token;
	public _params!: Token;
	public _body!: StatementListContext;
	public PRIMITIVETYPE(): TerminalNode { return this.getToken(ClangParser.PRIMITIVETYPE, 0); }
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
	public identifierWithTypeList(): IdentifierWithTypeListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierWithTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_function; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public _params!: Token;
	public IDENTIFIER(): TerminalNode { return this.getToken(ClangParser.IDENTIFIER, 0); }
	public functionCallParameters(): FunctionCallParametersContext {
		return this.getRuleContext(0, FunctionCallParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallParametersContext extends ParserRuleContext {
	public stringLiteralList(): StringLiteralListContext[];
	public stringLiteralList(i: number): StringLiteralListContext;
	public stringLiteralList(i?: number): StringLiteralListContext | StringLiteralListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralListContext);
		} else {
			return this.getRuleContext(i, StringLiteralListContext);
		}
	}
	public numberList(): NumberListContext[];
	public numberList(i: number): NumberListContext;
	public numberList(i?: number): NumberListContext | NumberListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberListContext);
		} else {
			return this.getRuleContext(i, NumberListContext);
		}
	}
	public identifierList(): IdentifierListContext[];
	public identifierList(i: number): IdentifierListContext;
	public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		} else {
			return this.getRuleContext(i, IdentifierListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_functionCallParameters; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterFunctionCallParameters) {
			listener.enterFunctionCallParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitFunctionCallParameters) {
			listener.exitFunctionCallParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitFunctionCallParameters) {
			return visitor.visitFunctionCallParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintfContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext {
		return this.getRuleContext(0, IdentifierListContext);
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public FORMATSPECIFIERS(): TerminalNode[];
	public FORMATSPECIFIERS(i: number): TerminalNode;
	public FORMATSPECIFIERS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ClangParser.FORMATSPECIFIERS);
		} else {
			return this.getToken(ClangParser.FORMATSPECIFIERS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_printf; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPrintf) {
			listener.enterPrintf(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPrintf) {
			listener.exitPrintf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPrintf) {
			return visitor.visitPrintf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


