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
	public static readonly RULE_postFixExpression = 10;
	public static readonly RULE_conditionalExpression = 11;
	public static readonly RULE_expressionStatement = 12;
	public static readonly RULE_selectionStatement = 13;
	public static readonly RULE_iterationStatement = 14;
	public static readonly RULE_forCondition = 15;
	public static readonly RULE_arrayIdentifierWithType = 16;
	public static readonly RULE_arrayContent = 17;
	public static readonly RULE_arrayInitialisation = 18;
	public static readonly RULE_pointer = 19;
	public static readonly RULE_pointerDerefernce = 20;
	public static readonly RULE_pointerReference = 21;
	public static readonly RULE_function = 22;
	public static readonly RULE_functionCall = 23;
	public static readonly RULE_functionCallParameters = 24;
	public static readonly RULE_printf = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "stringLiteral", "stringLiteralList", "identifierWithType", "identifierWithTypeList", 
		"identifierList", "numberList", "statement", "expression", "parenthesesExpression", 
		"postFixExpression", "conditionalExpression", "expressionStatement", "selectionStatement", 
		"iterationStatement", "forCondition", "arrayIdentifierWithType", "arrayContent", 
		"arrayInitialisation", "pointer", "pointerDerefernce", "pointerReference", 
		"function", "functionCall", "functionCallParameters", "printf",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\"'", "','", "'{'", "'}'", "'('", "')'", "'*'", "'/'", "'%'", 
		"'+'", "'-'", "'<<'", "'>>'", "'>'", "'<'", "'>='", "'<='", "'=='", "'!='", 
		"'||'", "'&&'", "'&'", "'|'", "'^'", "'='", "'-='", "'+='", "'?'", "':'", 
		"';'", "'if'", "'else'", "'while'", "'do'", "'for'", "'['", "']'", "'printf('", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'++'", "'--'",
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
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__6) | (1 << ClangParser.T__21) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0)) {
				{
				{
				this.state = 52;
				this.statement();
				}
				}
				this.state = 57;
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
			this.state = 58;
			this.match(ClangParser.T__0);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.IDENTIFIER) {
				{
				this.state = 59;
				this.match(ClangParser.IDENTIFIER);
				}
			}

			this.state = 62;
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
			this.state = 64;
			this.stringLiteral();
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 65;
					this.match(ClangParser.T__1);
					this.state = 66;
					this.stringLiteral();
					}
					}
				}
				this.state = 71;
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
			this.state = 72;
			_localctx._idType = this.match(ClangParser.PRIMITIVETYPE);
			this.state = 73;
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
			this.state = 75;
			this.identifierWithType();
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__1) {
				{
				{
				this.state = 76;
				this.match(ClangParser.T__1);
				this.state = 77;
				this.identifierWithType();
				}
				}
				this.state = 82;
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
			this.state = 83;
			this.match(ClangParser.IDENTIFIER);
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 84;
					this.match(ClangParser.T__1);
					this.state = 85;
					this.match(ClangParser.IDENTIFIER);
					}
					}
				}
				this.state = 90;
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
			this.state = 91;
			this.match(ClangParser.NUMBER);
			this.state = 96;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 92;
					this.match(ClangParser.T__1);
					this.state = 93;
					this.match(ClangParser.NUMBER);
					}
					}
				}
				this.state = 98;
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
		let _la: number;
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.match(ClangParser.T__2);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__6) | (1 << ClangParser.T__21) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0)) {
					{
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 100;
						this.statement();
						}
						}
						this.state = 103;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__2) | (1 << ClangParser.T__4) | (1 << ClangParser.T__6) | (1 << ClangParser.T__21) | (1 << ClangParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (ClangParser.T__32 - 33)) | (1 << (ClangParser.T__33 - 33)) | (1 << (ClangParser.T__34 - 33)) | (1 << (ClangParser.T__37 - 33)) | (1 << (ClangParser.PRIMITIVETYPE - 33)) | (1 << (ClangParser.IDENTIFIER - 33)) | (1 << (ClangParser.NUMBER - 33)))) !== 0));
					}
				}

				this.state = 107;
				this.match(ClangParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.expressionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
				this.selectionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.iterationStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 111;
				this.expression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
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
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				this.identifierWithType();
				}
				break;

			case 2:
				{
				this.state = 117;
				this.match(ClangParser.NUMBER);
				}
				break;

			case 3:
				{
				this.state = 118;
				this.stringLiteral();
				}
				break;

			case 4:
				{
				this.state = 119;
				this.match(ClangParser.IDENTIFIER);
				}
				break;

			case 5:
				{
				this.state = 120;
				this.postFixExpression();
				}
				break;

			case 6:
				{
				this.state = 121;
				this.arrayInitialisation();
				}
				break;

			case 7:
				{
				this.state = 122;
				this.match(ClangParser.T__4);
				this.state = 123;
				_localctx._inner = this.expression(0);
				this.state = 124;
				this.match(ClangParser.T__5);
				}
				break;

			case 8:
				{
				this.state = 126;
				this.pointer();
				}
				break;

			case 9:
				{
				this.state = 127;
				this.pointerDerefernce();
				}
				break;

			case 10:
				{
				this.state = 128;
				this.pointerReference();
				}
				break;

			case 11:
				{
				this.state = 129;
				this.functionCall();
				}
				break;

			case 12:
				{
				this.state = 130;
				this.printf();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 199;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 133;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 134;
						_localctx._operator = this.match(ClangParser.T__6);
						this.state = 135;
						_localctx._right = this.expression(23);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 136;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 137;
						_localctx._operator = this.match(ClangParser.T__7);
						this.state = 138;
						_localctx._right = this.expression(22);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 139;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 140;
						_localctx._operator = this.match(ClangParser.T__8);
						this.state = 141;
						_localctx._right = this.expression(21);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 142;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 143;
						_localctx._operator = this.match(ClangParser.T__9);
						this.state = 144;
						_localctx._right = this.expression(20);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 145;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 146;
						_localctx._operator = this.match(ClangParser.T__10);
						this.state = 147;
						_localctx._right = this.expression(19);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 148;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 149;
						_localctx._operator = this.match(ClangParser.T__11);
						this.state = 150;
						_localctx._right = this.expression(18);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 151;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 152;
						_localctx._operator = this.match(ClangParser.T__12);
						this.state = 153;
						_localctx._right = this.expression(17);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 155;
						_localctx._operator = this.match(ClangParser.T__13);
						this.state = 156;
						_localctx._right = this.expression(16);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 157;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 158;
						_localctx._operator = this.match(ClangParser.T__14);
						this.state = 159;
						_localctx._right = this.expression(15);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 161;
						_localctx._operator = this.match(ClangParser.T__15);
						this.state = 162;
						_localctx._right = this.expression(14);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 164;
						_localctx._operator = this.match(ClangParser.T__16);
						this.state = 165;
						_localctx._right = this.expression(13);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 167;
						_localctx._operator = this.match(ClangParser.T__17);
						this.state = 168;
						_localctx._right = this.expression(12);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 170;
						_localctx._operator = this.match(ClangParser.T__18);
						this.state = 171;
						_localctx._right = this.expression(11);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 173;
						_localctx._operator = this.match(ClangParser.T__19);
						this.state = 174;
						_localctx._right = this.expression(10);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 175;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 176;
						_localctx._operator = this.match(ClangParser.T__20);
						this.state = 177;
						_localctx._right = this.expression(9);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 179;
						_localctx._operator = this.match(ClangParser.T__21);
						this.state = 180;
						_localctx._right = this.expression(8);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 181;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 182;
						_localctx._operator = this.match(ClangParser.T__22);
						this.state = 183;
						_localctx._right = this.expression(7);
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 184;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 185;
						_localctx._operator = this.match(ClangParser.T__23);
						this.state = 186;
						_localctx._right = this.expression(6);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 187;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 188;
						_localctx._operator = this.match(ClangParser.T__8);
						this.state = 189;
						_localctx._right = this.expression(5);
						}
						break;

					case 20:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 190;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 191;
						_localctx._operator = this.match(ClangParser.T__24);
						this.state = 192;
						_localctx._right = this.expression(4);
						}
						break;

					case 21:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 193;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 194;
						_localctx._operator = this.match(ClangParser.T__25);
						this.state = 195;
						_localctx._right = this.expression(3);
						}
						break;

					case 22:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 196;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 197;
						_localctx._operator = this.match(ClangParser.T__26);
						this.state = 198;
						_localctx._right = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
			this.state = 204;
			this.match(ClangParser.T__4);
			this.state = 205;
			_localctx._inner = this.expression(0);
			this.state = 206;
			this.match(ClangParser.T__5);
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
	public postFixExpression(): PostFixExpressionContext {
		let _localctx: PostFixExpressionContext = new PostFixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ClangParser.RULE_postFixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 208;
			this.match(ClangParser.IDENTIFIER);
			}
			this.state = 209;
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
		this.enterRule(_localctx, 22, ClangParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			_localctx._test = this.expression(0);
			this.state = 212;
			this.match(ClangParser.T__27);
			this.state = 213;
			_localctx._consequent = this.expression(0);
			this.state = 214;
			this.match(ClangParser.T__28);
			this.state = 215;
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
		this.enterRule(_localctx, 24, ClangParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.expression(0);
			this.state = 218;
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
		this.enterRule(_localctx, 26, ClangParser.RULE_selectionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(ClangParser.T__30);
			this.state = 221;
			this.match(ClangParser.T__4);
			this.state = 222;
			_localctx._test = this.expression(0);
			this.state = 223;
			this.match(ClangParser.T__5);
			this.state = 224;
			_localctx._consequentStatement = this.statement();
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 225;
				this.match(ClangParser.T__31);
				this.state = 226;
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
		this.enterRule(_localctx, 28, ClangParser.RULE_iterationStatement);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.T__32:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.match(ClangParser.T__32);
				this.state = 230;
				this.match(ClangParser.T__4);
				this.state = 231;
				_localctx._condition = this.expression(0);
				this.state = 232;
				this.match(ClangParser.T__5);
				this.state = 233;
				_localctx._body = this.statement();
				}
				break;
			case ClangParser.T__33:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.match(ClangParser.T__33);
				this.state = 236;
				_localctx._body = this.statement();
				this.state = 237;
				this.match(ClangParser.T__32);
				this.state = 238;
				this.match(ClangParser.T__4);
				this.state = 239;
				_localctx._condition = this.expression(0);
				this.state = 240;
				this.match(ClangParser.T__5);
				this.state = 241;
				this.match(ClangParser.T__29);
				}
				break;
			case ClangParser.T__34:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 243;
				this.match(ClangParser.T__34);
				this.state = 244;
				this.match(ClangParser.T__4);
				this.state = 245;
				this.forCondition();
				this.state = 246;
				this.match(ClangParser.T__5);
				this.state = 247;
				_localctx._body = this.statement();
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
		this.enterRule(_localctx, 30, ClangParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			_localctx._initialise = this.expression(0);
			this.state = 252;
			this.match(ClangParser.T__29);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__4) | (1 << ClangParser.T__6) | (1 << ClangParser.T__21))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (ClangParser.T__37 - 38)) | (1 << (ClangParser.PRIMITIVETYPE - 38)) | (1 << (ClangParser.IDENTIFIER - 38)) | (1 << (ClangParser.NUMBER - 38)))) !== 0)) {
				{
				this.state = 253;
				_localctx._endCondition = this.expression(0);
				}
			}

			this.state = 256;
			this.match(ClangParser.T__29);
			this.state = 257;
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
		this.enterRule(_localctx, 32, ClangParser.RULE_arrayIdentifierWithType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_localctx._idType = this.match(ClangParser.PRIMITIVETYPE);
			this.state = 260;
			_localctx._id = this.match(ClangParser.IDENTIFIER);
			this.state = 261;
			this.match(ClangParser.T__35);
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.NUMBER) {
				{
				this.state = 262;
				_localctx._size = this.match(ClangParser.NUMBER);
				}
			}

			this.state = 265;
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
		this.enterRule(_localctx, 34, ClangParser.RULE_arrayContent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(ClangParser.T__2);
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.IDENTIFIER:
				{
				this.state = 268;
				this.identifierList();
				}
				break;
			case ClangParser.NUMBER:
				{
				this.state = 269;
				this.numberList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 272;
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
	public arrayInitialisation(): ArrayInitialisationContext {
		let _localctx: ArrayInitialisationContext = new ArrayInitialisationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ClangParser.RULE_arrayInitialisation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.arrayIdentifierWithType();
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 275;
				_localctx._operator = this.match(ClangParser.T__24);
				this.state = 276;
				_localctx._array = this.arrayContent();
				}
				break;

			case 2:
				{
				this.state = 277;
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
		this.enterRule(_localctx, 38, ClangParser.RULE_pointer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(ClangParser.PRIMITIVETYPE);
			this.state = 281;
			this.match(ClangParser.T__6);
			this.state = 282;
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
		this.enterRule(_localctx, 40, ClangParser.RULE_pointerDerefernce);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(ClangParser.T__6);
			this.state = 285;
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
		this.enterRule(_localctx, 42, ClangParser.RULE_pointerReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(ClangParser.T__21);
			this.state = 288;
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
		this.enterRule(_localctx, 44, ClangParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			_localctx._funcType = this.match(ClangParser.PRIMITIVETYPE);
			{
			this.state = 291;
			_localctx._funcName = this.match(ClangParser.IDENTIFIER);
			}
			{
			this.state = 292;
			_localctx._params = this.match(ClangParser.T__4);
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ClangParser.PRIMITIVETYPE) {
				{
				this.state = 293;
				this.identifierWithTypeList();
				}
			}

			this.state = 296;
			this.match(ClangParser.T__5);
			}
			this.state = 298;
			_localctx._body = this.statement();
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
		this.enterRule(_localctx, 46, ClangParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(ClangParser.IDENTIFIER);
			this.state = 301;
			_localctx._params = this.match(ClangParser.T__4);
			this.state = 302;
			this.functionCallParameters();
			this.state = 303;
			this.match(ClangParser.T__5);
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
		this.enterRule(_localctx, 48, ClangParser.RULE_functionCallParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.T__0:
				{
				this.state = 305;
				this.stringLiteralList();
				}
				break;
			case ClangParser.NUMBER:
				{
				this.state = 306;
				this.numberList();
				}
				break;
			case ClangParser.IDENTIFIER:
				{
				this.state = 307;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__1 || _la === ClangParser.IDENTIFIER || _la === ClangParser.NUMBER) {
				{
				this.state = 314;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ClangParser.T__1:
					{
					this.state = 310;
					this.match(ClangParser.T__1);
					this.state = 311;
					this.stringLiteralList();
					}
					break;
				case ClangParser.NUMBER:
					{
					this.state = 312;
					this.numberList();
					}
					break;
				case ClangParser.IDENTIFIER:
					{
					this.state = 313;
					this.identifierList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 318;
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
		this.enterRule(_localctx, 50, ClangParser.RULE_printf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(ClangParser.T__37);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ClangParser.T__0 || _la === ClangParser.FORMATSPECIFIERS) {
				{
				this.state = 322;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ClangParser.T__0:
					{
					this.state = 320;
					this.stringLiteral();
					}
					break;
				case ClangParser.FORMATSPECIFIERS:
					{
					this.state = 321;
					this.match(ClangParser.FORMATSPECIFIERS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 327;
			this.match(ClangParser.T__1);
			this.state = 328;
			this.identifierList();
			this.state = 329;
			this.match(ClangParser.T__5);
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
			return this.precpred(this._ctx, 22);

		case 1:
			return this.precpred(this._ctx, 21);

		case 2:
			return this.precpred(this._ctx, 20);

		case 3:
			return this.precpred(this._ctx, 19);

		case 4:
			return this.precpred(this._ctx, 18);

		case 5:
			return this.precpred(this._ctx, 17);

		case 6:
			return this.precpred(this._ctx, 16);

		case 7:
			return this.precpred(this._ctx, 15);

		case 8:
			return this.precpred(this._ctx, 14);

		case 9:
			return this.precpred(this._ctx, 13);

		case 10:
			return this.precpred(this._ctx, 12);

		case 11:
			return this.precpred(this._ctx, 11);

		case 12:
			return this.precpred(this._ctx, 10);

		case 13:
			return this.precpred(this._ctx, 9);

		case 14:
			return this.precpred(this._ctx, 8);

		case 15:
			return this.precpred(this._ctx, 7);

		case 16:
			return this.precpred(this._ctx, 6);

		case 17:
			return this.precpred(this._ctx, 5);

		case 18:
			return this.precpred(this._ctx, 4);

		case 19:
			return this.precpred(this._ctx, 3);

		case 20:
			return this.precpred(this._ctx, 2);

		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u014E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x07\x028" +
		"\n\x02\f\x02\x0E\x02;\v\x02\x03\x03\x03\x03\x05\x03?\n\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06Q\n\x06\f\x06\x0E\x06" +
		"T\v\x06\x03\x07\x03\x07\x03\x07\x07\x07Y\n\x07\f\x07\x0E\x07\\\v\x07\x03" +
		"\b\x03\b\x03\b\x07\ba\n\b\f\b\x0E\bd\v\b\x03\t\x03\t\x06\th\n\t\r\t\x0E" +
		"\ti\x05\tl\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tt\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x86\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\n\xCA\n\n\f\n\x0E\n\xCD\v\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE6\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\xFC\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0101\n\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u010A" +
		"\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0111\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0119\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0129\n\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u0137\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u013D" +
		"\n\x1A\f\x1A\x0E\x1A\u0140\v\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0145" +
		"\n\x1B\f\x1B\x0E\x1B\u0148\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x02\x02\x03\x12\x1C\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02\x02\x03\x03\x0201" +
		"\x02\u0171\x029\x03\x02\x02\x02\x04<\x03\x02\x02\x02\x06B\x03\x02\x02" +
		"\x02\bJ\x03\x02\x02\x02\nM\x03\x02\x02\x02\fU\x03\x02\x02\x02\x0E]\x03" +
		"\x02\x02\x02\x10s\x03\x02\x02\x02\x12\x85\x03\x02\x02\x02\x14\xCE\x03" +
		"\x02\x02\x02\x16\xD2\x03\x02\x02\x02\x18\xD5\x03\x02\x02\x02\x1A\xDB\x03" +
		"\x02\x02\x02\x1C\xDE\x03\x02\x02\x02\x1E\xFB\x03\x02\x02\x02 \xFD\x03" +
		"\x02\x02\x02\"\u0105\x03\x02\x02\x02$\u010D\x03\x02\x02\x02&\u0114\x03" +
		"\x02\x02\x02(\u011A\x03\x02\x02\x02*\u011E\x03\x02\x02\x02,\u0121\x03" +
		"\x02\x02\x02.\u0124\x03\x02\x02\x020\u012E\x03\x02\x02\x022\u0136\x03" +
		"\x02\x02\x024\u0141\x03\x02\x02\x0268\x05\x10\t\x0276\x03\x02\x02\x02" +
		"8;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\x03\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02<>\x07\x03\x02\x02=?\x07-\x02\x02>=\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x07\x03\x02\x02A\x05\x03\x02" +
		"\x02\x02BG\x05\x04\x03\x02CD\x07\x04\x02\x02DF\x05\x04\x03\x02EC\x03\x02" +
		"\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\x07\x03" +
		"\x02\x02\x02IG\x03\x02\x02\x02JK\x07+\x02\x02KL\x07-\x02\x02L\t\x03\x02" +
		"\x02\x02MR\x05\b\x05\x02NO\x07\x04\x02\x02OQ\x05\b\x05\x02PN\x03\x02\x02" +
		"\x02QT\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\v\x03\x02" +
		"\x02\x02TR\x03\x02\x02\x02UZ\x07-\x02\x02VW\x07\x04\x02\x02WY\x07-\x02" +
		"\x02XV\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02" +
		"\x02\x02[\r\x03\x02\x02\x02\\Z\x03\x02\x02\x02]b\x07/\x02\x02^_\x07\x04" +
		"\x02\x02_a\x07/\x02\x02`^\x03\x02\x02\x02ad\x03\x02\x02\x02b`\x03\x02" +
		"\x02\x02bc\x03\x02\x02\x02c\x0F\x03\x02\x02\x02db\x03\x02\x02\x02ek\x07" +
		"\x05\x02\x02fh\x05\x10\t\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02kg\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mt\x07\x06\x02\x02nt\x05\x1A\x0E\x02ot\x05" +
		"\x1C\x0F\x02pt\x05\x1E\x10\x02qt\x05\x12\n\x02rt\x05.\x18\x02se\x03\x02" +
		"\x02\x02sn\x03\x02\x02\x02so\x03\x02\x02\x02sp\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02sr\x03\x02\x02\x02t\x11\x03\x02\x02\x02uv\b\n\x01\x02v\x86\x05" +
		"\b\x05\x02w\x86\x07/\x02\x02x\x86\x05\x04\x03\x02y\x86\x07-\x02\x02z\x86" +
		"\x05\x16\f\x02{\x86\x05&\x14\x02|}\x07\x07\x02\x02}~\x05\x12\n\x02~\x7F" +
		"\x07\b\x02\x02\x7F\x86\x03\x02\x02\x02\x80\x86\x05(\x15\x02\x81\x86\x05" +
		"*\x16\x02\x82\x86\x05,\x17\x02\x83\x86\x050\x19\x02\x84\x86\x054\x1B\x02" +
		"\x85u\x03\x02\x02\x02\x85w\x03\x02\x02\x02\x85x\x03\x02\x02\x02\x85y\x03" +
		"\x02\x02\x02\x85z\x03\x02\x02\x02\x85{\x03\x02\x02\x02\x85|\x03\x02\x02" +
		"\x02\x85\x80\x03\x02\x02\x02\x85\x81\x03\x02\x02\x02\x85\x82\x03\x02\x02" +
		"\x02\x85\x83\x03\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\xCB\x03\x02\x02" +
		"\x02\x87\x88\f\x18\x02\x02\x88\x89\x07\t\x02\x02\x89\xCA\x05\x12\n\x19" +
		"\x8A\x8B\f\x17\x02\x02\x8B\x8C\x07\n\x02\x02\x8C\xCA\x05\x12\n\x18\x8D" +
		"\x8E\f\x16\x02\x02\x8E\x8F\x07\v\x02\x02\x8F\xCA\x05\x12\n\x17\x90\x91" +
		"\f\x15\x02\x02\x91\x92\x07\f\x02\x02\x92\xCA\x05\x12\n\x16\x93\x94\f\x14" +
		"\x02\x02\x94\x95\x07\r\x02\x02\x95\xCA\x05\x12\n\x15\x96\x97\f\x13\x02" +
		"\x02\x97\x98\x07\x0E\x02\x02\x98\xCA\x05\x12\n\x14\x99\x9A\f\x12\x02\x02" +
		"\x9A\x9B\x07\x0F\x02\x02\x9B\xCA\x05\x12\n\x13\x9C\x9D\f\x11\x02\x02\x9D" +
		"\x9E\x07\x10\x02\x02\x9E\xCA\x05\x12\n\x12\x9F\xA0\f\x10\x02\x02\xA0\xA1" +
		"\x07\x11\x02\x02\xA1\xCA\x05\x12\n\x11\xA2\xA3\f\x0F\x02\x02\xA3\xA4\x07" +
		"\x12\x02\x02\xA4\xCA\x05\x12\n\x10\xA5\xA6\f\x0E\x02\x02\xA6\xA7\x07\x13" +
		"\x02\x02\xA7\xCA\x05\x12\n\x0F\xA8\xA9\f\r\x02\x02\xA9\xAA\x07\x14\x02" +
		"\x02\xAA\xCA\x05\x12\n\x0E\xAB\xAC\f\f\x02\x02\xAC\xAD\x07\x15\x02\x02" +
		"\xAD\xCA\x05\x12\n\r\xAE\xAF\f\v\x02\x02\xAF\xB0\x07\x16\x02\x02\xB0\xCA" +
		"\x05\x12\n\f\xB1\xB2\f\n\x02\x02\xB2\xB3\x07\x17\x02\x02\xB3\xCA\x05\x12" +
		"\n\v\xB4\xB5\f\t\x02\x02\xB5\xB6\x07\x18\x02\x02\xB6\xCA\x05\x12\n\n\xB7" +
		"\xB8\f\b\x02\x02\xB8\xB9\x07\x19\x02\x02\xB9\xCA\x05\x12\n\t\xBA\xBB\f" +
		"\x07\x02\x02\xBB\xBC\x07\x1A\x02\x02\xBC\xCA\x05\x12\n\b\xBD\xBE\f\x06" +
		"\x02\x02\xBE\xBF\x07\v\x02\x02\xBF\xCA\x05\x12\n\x07\xC0\xC1\f\x05\x02" +
		"\x02\xC1\xC2\x07\x1B\x02\x02\xC2\xCA\x05\x12\n\x06\xC3\xC4\f\x04\x02\x02" +
		"\xC4\xC5\x07\x1C\x02\x02\xC5\xCA\x05\x12\n\x05\xC6\xC7\f\x03\x02\x02\xC7" +
		"\xC8\x07\x1D\x02\x02\xC8\xCA\x05\x12\n\x04\xC9\x87\x03\x02\x02\x02\xC9" +
		"\x8A\x03\x02\x02\x02\xC9\x8D\x03\x02\x02\x02\xC9\x90\x03\x02\x02\x02\xC9" +
		"\x93\x03\x02\x02\x02\xC9\x96\x03\x02\x02\x02\xC9\x99\x03\x02\x02\x02\xC9" +
		"\x9C\x03\x02\x02\x02\xC9\x9F\x03\x02\x02\x02\xC9\xA2\x03\x02\x02\x02\xC9" +
		"\xA5\x03\x02\x02\x02\xC9\xA8\x03\x02\x02\x02\xC9\xAB\x03\x02\x02\x02\xC9" +
		"\xAE\x03\x02\x02\x02\xC9\xB1\x03\x02\x02\x02\xC9\xB4\x03\x02\x02\x02\xC9" +
		"\xB7\x03\x02\x02\x02\xC9\xBA\x03\x02\x02\x02\xC9\xBD\x03\x02\x02\x02\xC9" +
		"\xC0\x03\x02\x02\x02\xC9\xC3\x03\x02\x02\x02\xC9\xC6\x03\x02\x02\x02\xCA" +
		"\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC" +
		"\x13\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xCF\x07\x07\x02\x02\xCF" +
		"\xD0\x05\x12\n\x02\xD0\xD1\x07\b\x02\x02\xD1\x15\x03\x02\x02\x02\xD2\xD3" +
		"\x07-\x02\x02\xD3\xD4\t\x02\x02\x02\xD4\x17\x03\x02\x02\x02\xD5\xD6\x05" +
		"\x12\n\x02\xD6\xD7\x07\x1E\x02\x02\xD7\xD8\x05\x12\n\x02\xD8\xD9\x07\x1F" +
		"\x02\x02\xD9\xDA\x05\x12\n\x02\xDA\x19\x03\x02\x02\x02\xDB\xDC\x05\x12" +
		"\n\x02\xDC\xDD\x07 \x02\x02\xDD\x1B\x03\x02\x02\x02\xDE\xDF\x07!\x02\x02" +
		"\xDF\xE0\x07\x07\x02\x02\xE0\xE1\x05\x12\n\x02\xE1\xE2\x07\b\x02\x02\xE2" +
		"\xE5\x05\x10\t\x02\xE3\xE4\x07\"\x02\x02\xE4\xE6\x05\x10\t\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xE8" +
		"\x07#\x02\x02\xE8\xE9\x07\x07\x02\x02\xE9\xEA\x05\x12\n\x02\xEA\xEB\x07" +
		"\b\x02\x02\xEB\xEC\x05\x10\t\x02\xEC\xFC\x03\x02\x02\x02\xED\xEE\x07$" +
		"\x02\x02\xEE\xEF\x05\x10\t\x02\xEF\xF0\x07#\x02\x02\xF0\xF1\x07\x07\x02" +
		"\x02\xF1\xF2\x05\x12\n\x02\xF2\xF3\x07\b\x02\x02\xF3\xF4\x07 \x02\x02" +
		"\xF4\xFC\x03\x02\x02\x02\xF5\xF6\x07%\x02\x02\xF6\xF7\x07\x07\x02\x02" +
		"\xF7\xF8\x05 \x11\x02\xF8\xF9\x07\b\x02\x02\xF9\xFA\x05\x10\t\x02\xFA" +
		"\xFC\x03\x02\x02\x02\xFB\xE7\x03\x02\x02\x02\xFB\xED\x03\x02\x02\x02\xFB" +
		"\xF5\x03\x02\x02\x02\xFC\x1F\x03\x02\x02\x02\xFD\xFE\x05\x12\n\x02\xFE" +
		"\u0100\x07 \x02\x02\xFF\u0101\x05\x12\n\x02\u0100\xFF\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x07" +
		" \x02\x02\u0103\u0104\x05\x12\n\x02\u0104!\x03\x02\x02\x02\u0105\u0106" +
		"\x07+\x02\x02\u0106\u0107\x07-\x02\x02\u0107\u0109\x07&\x02\x02\u0108" +
		"\u010A\x07/\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02" +
		"\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C\x07\'\x02\x02\u010C#\x03" +
		"\x02\x02\x02\u010D\u0110\x07\x05\x02\x02\u010E\u0111\x05\f\x07\x02\u010F" +
		"\u0111\x05\x0E\b\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x07\x06\x02\x02\u0113%\x03" +
		"\x02\x02\x02\u0114\u0118\x05\"\x12\x02\u0115\u0116\x07\x1B\x02\x02\u0116" +
		"\u0119\x05$\x13\x02\u0117\u0119\x05\x04\x03\x02\u0118\u0115\x03\x02\x02" +
		"\x02\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\'\x03" +
		"\x02\x02\x02\u011A\u011B\x07+\x02\x02\u011B\u011C\x07\t\x02\x02\u011C" +
		"\u011D\x07-\x02\x02\u011D)\x03\x02\x02\x02\u011E\u011F\x07\t\x02\x02\u011F" +
		"\u0120\x07-\x02\x02\u0120+\x03\x02\x02\x02\u0121\u0122\x07\x18\x02\x02" +
		"\u0122\u0123\x07-\x02\x02\u0123-\x03\x02\x02\x02\u0124\u0125\x07+\x02" +
		"\x02\u0125\u0126\x07-\x02\x02\u0126\u0128\x07\x07\x02\x02\u0127\u0129" +
		"\x05\n\x06\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02" +
		"\u0129\u012A\x03\x02\x02\x02\u012A\u012B\x07\b\x02\x02\u012B\u012C\x03" +
		"\x02\x02\x02\u012C\u012D\x05\x10\t\x02\u012D/\x03\x02\x02\x02\u012E\u012F" +
		"\x07-\x02\x02\u012F\u0130\x07\x07\x02\x02\u0130\u0131\x052\x1A\x02\u0131" +
		"\u0132\x07\b\x02\x02\u01321\x03\x02\x02\x02\u0133\u0137\x05\x06\x04\x02" +
		"\u0134\u0137\x05\x0E\b\x02\u0135\u0137\x05\f\x07\x02\u0136\u0133\x03\x02" +
		"\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137" +
		"\u013E\x03\x02\x02\x02\u0138\u0139\x07\x04\x02\x02\u0139\u013D\x05\x06" +
		"\x04\x02\u013A\u013D\x05\x0E\b\x02\u013B\u013D\x05\f\x07\x02\u013C\u0138" +
		"\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013B\x03\x02\x02\x02" +
		"\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F3\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141" +
		"\u0146\x07(\x02\x02\u0142\u0145\x05\x04\x03\x02\u0143\u0145\x07.\x02\x02" +
		"\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145\u0148\x03" +
		"\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147" +
		"\u0149\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014A\x07\x04" +
		"\x02\x02\u014A\u014B\x05\f\x07\x02\u014B\u014C\x07\b\x02\x02\u014C5\x03" +
		"\x02\x02\x02\x1A9>GRZbiks\x85\xC9\xCB\xE5\xFB\u0100\u0109\u0110\u0118" +
		"\u0128\u0136\u013C\u013E\u0144\u0146";
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public _left!: ExpressionContext;
	public _inner!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public identifierWithType(): IdentifierWithTypeContext | undefined {
		return this.tryGetRuleContext(0, IdentifierWithTypeContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.NUMBER, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
	public postFixExpression(): PostFixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostFixExpressionContext);
	}
	public arrayInitialisation(): ArrayInitialisationContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitialisationContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public pointerDerefernce(): PointerDerefernceContext | undefined {
		return this.tryGetRuleContext(0, PointerDerefernceContext);
	}
	public pointerReference(): PointerReferenceContext | undefined {
		return this.tryGetRuleContext(0, PointerReferenceContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public printf(): PrintfContext | undefined {
		return this.tryGetRuleContext(0, PrintfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_expression; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
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


export class PostFixExpressionContext extends ParserRuleContext {
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(ClangParser.PLUSPLUS, 0); }
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(ClangParser.MINUSMINUS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_postFixExpression; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterPostFixExpression) {
			listener.enterPostFixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitPostFixExpression) {
			listener.exitPostFixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitPostFixExpression) {
			return visitor.visitPostFixExpression(this);
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
	public _body!: StatementContext;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public _body!: StatementContext;
	public PRIMITIVETYPE(): TerminalNode { return this.getToken(ClangParser.PRIMITIVETYPE, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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


