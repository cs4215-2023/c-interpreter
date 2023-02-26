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
	public static readonly SIMPLEESCAPESEQUENCE = 15;
	public static readonly StringLiteral = 16;
	public static readonly SCharSequence = 17;
	public static readonly SChar = 18;
	public static readonly EscapeSequence = 19;
	public static readonly IDENTIFIER = 20;
	public static readonly RULE_type = 0;
	public static readonly RULE_start = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_parenthesesExpression = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"type", "start", "expression", "parenthesesExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'char'", "'int'", "'float'", "'signed'", "'unsigned'", 
		"'('", "')'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "SIMPLEESCAPESEQUENCE", "StringLiteral", "SCharSequence", "SChar", 
		"EscapeSequence", "IDENTIFIER",
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ClangParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__1) | (1 << ClangParser.T__2) | (1 << ClangParser.T__3) | (1 << ClangParser.T__4) | (1 << ClangParser.T__5))) !== 0))) {
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
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ClangParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ClangParser.T__0) | (1 << ClangParser.T__1) | (1 << ClangParser.T__2) | (1 << ClangParser.T__3) | (1 << ClangParser.T__4) | (1 << ClangParser.T__5) | (1 << ClangParser.T__6) | (1 << ClangParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 10;
				this.expression(0);
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
			this.match(ClangParser.EOF);
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
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, ClangParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ClangParser.T__0:
			case ClangParser.T__1:
			case ClangParser.T__2:
			case ClangParser.T__3:
			case ClangParser.T__4:
			case ClangParser.T__5:
				{
				this.state = 19;
				this.type();
				this.state = 20;
				this.match(ClangParser.IDENTIFIER);
				}
				break;
			case ClangParser.IDENTIFIER:
				{
				this.state = 22;
				this.match(ClangParser.IDENTIFIER);
				}
				break;
			case ClangParser.T__6:
				{
				this.state = 23;
				this.match(ClangParser.T__6);
				this.state = 24;
				_localctx._inner = this.expression(0);
				this.state = 25;
				this.match(ClangParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 29;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 30;
						_localctx._operator = this.match(ClangParser.T__8);
						this.state = 31;
						_localctx._right = this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 32;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 33;
						_localctx._operator = this.match(ClangParser.T__9);
						this.state = 34;
						_localctx._right = this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 35;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 36;
						_localctx._operator = this.match(ClangParser.T__10);
						this.state = 37;
						_localctx._right = this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 38;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 39;
						_localctx._operator = this.match(ClangParser.T__11);
						this.state = 40;
						_localctx._right = this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 41;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 42;
						_localctx._operator = this.match(ClangParser.T__12);
						this.state = 43;
						_localctx._right = this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ClangParser.RULE_expression);
						this.state = 44;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 45;
						_localctx._operator = this.match(ClangParser.T__13);
						this.state = 46;
						_localctx._right = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
		this.enterRule(_localctx, 6, ClangParser.RULE_parenthesesExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(ClangParser.T__6);
			this.state = 53;
			_localctx._inner = this.expression(0);
			this.state = 54;
			this.match(ClangParser.T__7);
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
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16;\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x03" +
		"\x07\x03\x0E\n\x03\f\x03\x0E\x03\x11\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1E" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x042\n\x04\f\x04\x0E\x045\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x02\x02\x03\x06\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03" +
		"\x03\x02\x03\b\x02?\x02\n\x03\x02\x02\x02\x04\x0F\x03\x02\x02\x02\x06" +
		"\x1D\x03\x02\x02\x02\b6\x03\x02\x02\x02\n\v\t\x02\x02\x02\v\x03\x03\x02" +
		"\x02\x02\f\x0E\x05\x06\x04\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02" +
		"\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02" +
		"\x02\x11\x0F\x03\x02\x02\x02\x12\x13\x07\x02\x02\x03\x13\x05\x03\x02\x02" +
		"\x02\x14\x15\b\x04\x01\x02\x15\x16\x05\x02\x02\x02\x16\x17\x07\x16\x02" +
		"\x02\x17\x1E\x03\x02\x02\x02\x18\x1E\x07\x16\x02\x02\x19\x1A\x07\t\x02" +
		"\x02\x1A\x1B\x05\x06\x04\x02\x1B\x1C\x07\n\x02\x02\x1C\x1E\x03\x02\x02" +
		"\x02\x1D\x14\x03\x02\x02\x02\x1D\x18\x03\x02\x02\x02\x1D\x19\x03\x02\x02" +
		"\x02\x1E3\x03\x02\x02\x02\x1F \f\b\x02\x02 !\x07\v\x02\x02!2\x05\x06\x04" +
		"\t\"#\f\x07\x02\x02#$\x07\f\x02\x02$2\x05\x06\x04\b%&\f\x06\x02\x02&\'" +
		"\x07\r\x02\x02\'2\x05\x06\x04\x07()\f\x05\x02\x02)*\x07\x0E\x02\x02*2" +
		"\x05\x06\x04\x06+,\f\x04\x02\x02,-\x07\x0F\x02\x02-2\x05\x06\x04\x05." +
		"/\f\x03\x02\x02/0\x07\x10\x02\x0202\x05\x06\x04\x041\x1F\x03\x02\x02\x02" +
		"1\"\x03\x02\x02\x021%\x03\x02\x02\x021(\x03\x02\x02\x021+\x03\x02\x02" +
		"\x021.\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02" +
		"\x024\x07\x03\x02\x02\x0253\x03\x02\x02\x0267\x07\t\x02\x0278\x05\x06" +
		"\x04\x0289\x07\n\x02\x029\t\x03\x02\x02\x02\x06\x0F\x1D13";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ClangParser.__ATN) {
			ClangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ClangParser._serializedATN));
		}

		return ClangParser.__ATN;
	}

}

export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ClangParser.RULE_type; }
	// @Override
	public enterRule(listener: ClangListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ClangListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ClangVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ClangParser.EOF, 0); }
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


export class ExpressionContext extends ParserRuleContext {
	public _left!: ExpressionContext;
	public _inner!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ClangParser.IDENTIFIER, 0); }
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


