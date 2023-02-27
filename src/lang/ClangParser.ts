// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { ClangListener } from './ClangListener'
import { ClangVisitor } from './ClangVisitor'

export class ClangParser extends Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly T__4 = 5
  public static readonly T__5 = 6
  public static readonly T__6 = 7
  public static readonly T__7 = 8
  public static readonly T__8 = 9
  public static readonly T__9 = 10
  public static readonly T__10 = 11
  public static readonly T__11 = 12
  public static readonly T__12 = 13
  public static readonly T__13 = 14
  public static readonly T__14 = 15
  public static readonly T__15 = 16
  public static readonly T__16 = 17
  public static readonly T__17 = 18
  public static readonly T__18 = 19
  public static readonly T__19 = 20
  public static readonly T__20 = 21
  public static readonly T__21 = 22
  public static readonly T__22 = 23
  public static readonly T__23 = 24
  public static readonly SIMPLEESCAPESEQUENCE = 25
  public static readonly StringLiteral = 26
  public static readonly SCharSequence = 27
  public static readonly SChar = 28
  public static readonly EscapeSequence = 29
  public static readonly IDENTIFIER = 30
  public static readonly RULE_start = 0
  public static readonly RULE_type = 1
  public static readonly RULE_expression = 2
  public static readonly RULE_statement = 3
  public static readonly RULE_parenthesesExpression = 4
  public static readonly RULE_conditionalExpression = 5
  public static readonly RULE_expressionStatement = 6
  public static readonly RULE_selectionStatement = 7
  public static readonly RULE_iterationStatement = 8
  public static readonly RULE_forCondition = 9
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'type',
    'expression',
    'statement',
    'parenthesesExpression',
    'conditionalExpression',
    'expressionStatement',
    'selectionStatement',
    'iterationStatement',
    'forCondition'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'void'",
    "'char'",
    "'int'",
    "'float'",
    "'signed'",
    "'unsigned'",
    "'('",
    "')'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'='",
    "'{'",
    "'}'",
    "'?'",
    "':'",
    "';'",
    "'if'",
    "'else'",
    "'while'",
    "'do'",
    "'for'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'SIMPLEESCAPESEQUENCE',
    'StringLiteral',
    'SCharSequence',
    'SChar',
    'EscapeSequence',
    'IDENTIFIER'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    ClangParser._LITERAL_NAMES,
    ClangParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return ClangParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Clang.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return ClangParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return ClangParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(ClangParser._ATN, this)
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, ClangParser.RULE_start)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 23
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ClangParser.T__6) |
              (1 << ClangParser.StringLiteral) |
              (1 << ClangParser.IDENTIFIER))) !==
            0
        ) {
          {
            {
              this.state = 20
              this.expression(0)
            }
          }
          this.state = 25
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    const _localctx: TypeContext = new TypeContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, ClangParser.RULE_type)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 26
        _la = this._input.LA(1)
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__1) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__3) |
                (1 << ClangParser.T__4) |
                (1 << ClangParser.T__5))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 4
    this.enterRecursionRule(_localctx, 4, ClangParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 35
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.IDENTIFIER:
            {
              this.state = 29
              this.match(ClangParser.IDENTIFIER)
            }
            break
          case ClangParser.StringLiteral:
            {
              this.state = 30
              this.match(ClangParser.StringLiteral)
            }
            break
          case ClangParser.T__6:
            {
              this.state = 31
              this.match(ClangParser.T__6)
              this.state = 32
              _localctx._inner = this.expression(0)
              this.state = 33
              this.match(ClangParser.T__7)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 57
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 55
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 37
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 38
                    _localctx._operator = this.match(ClangParser.T__8)
                    this.state = 39
                    _localctx._right = this.expression(7)
                  }
                  break

                case 2:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 40
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 41
                    _localctx._operator = this.match(ClangParser.T__9)
                    this.state = 42
                    _localctx._right = this.expression(6)
                  }
                  break

                case 3:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 43
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 44
                    _localctx._operator = this.match(ClangParser.T__10)
                    this.state = 45
                    _localctx._right = this.expression(5)
                  }
                  break

                case 4:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 46
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 47
                    _localctx._operator = this.match(ClangParser.T__11)
                    this.state = 48
                    _localctx._right = this.expression(4)
                  }
                  break

                case 5:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 49
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 50
                    _localctx._operator = this.match(ClangParser.T__12)
                    this.state = 51
                    _localctx._right = this.expression(3)
                  }
                  break

                case 6:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 52
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 53
                    _localctx._operator = this.match(ClangParser.T__13)
                    this.state = 54
                    _localctx._right = this.expression(2)
                  }
                  break
              }
            }
          }
          this.state = 59
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, ClangParser.RULE_statement)
    let _la: number
    try {
      this.state = 73
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__14:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 60
            this.match(ClangParser.T__14)
            this.state = 67
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              (_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << ClangParser.T__6) |
                  (1 << ClangParser.T__14) |
                  (1 << ClangParser.T__19) |
                  (1 << ClangParser.T__21) |
                  (1 << ClangParser.T__22) |
                  (1 << ClangParser.T__23) |
                  (1 << ClangParser.StringLiteral) |
                  (1 << ClangParser.IDENTIFIER))) !==
                0
            ) {
              {
                this.state = 63
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                  {
                    this.state = 63
                    this._errHandler.sync(this)
                    switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                      case 1:
                        {
                          this.state = 61
                          this.statement()
                        }
                        break

                      case 2:
                        {
                          this.state = 62
                          this.expression(0)
                        }
                        break
                    }
                  }
                  this.state = 65
                  this._errHandler.sync(this)
                  _la = this._input.LA(1)
                } while (
                  (_la & ~0x1f) === 0 &&
                  ((1 << _la) &
                    ((1 << ClangParser.T__6) |
                      (1 << ClangParser.T__14) |
                      (1 << ClangParser.T__19) |
                      (1 << ClangParser.T__21) |
                      (1 << ClangParser.T__22) |
                      (1 << ClangParser.T__23) |
                      (1 << ClangParser.StringLiteral) |
                      (1 << ClangParser.IDENTIFIER))) !==
                    0
                )
              }
            }

            this.state = 69
            this.match(ClangParser.T__15)
          }
          break
        case ClangParser.T__6:
        case ClangParser.StringLiteral:
        case ClangParser.IDENTIFIER:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 70
            this.expressionStatement()
          }
          break
        case ClangParser.T__19:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 71
            this.selectionStatement()
          }
          break
        case ClangParser.T__21:
        case ClangParser.T__22:
        case ClangParser.T__23:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 72
            this.iterationStatement()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext = new ParenthesesExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 8, ClangParser.RULE_parenthesesExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 75
        this.match(ClangParser.T__6)
        this.state = 76
        _localctx._inner = this.expression(0)
        this.state = 77
        this.match(ClangParser.T__7)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 10, ClangParser.RULE_conditionalExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 79
        _localctx._test = this.expression(0)
        this.state = 80
        this.match(ClangParser.T__16)
        this.state = 81
        _localctx._consequent = this.expression(0)
        this.state = 82
        this.match(ClangParser.T__17)
        this.state = 83
        _localctx._alternate = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 12, ClangParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 85
        this.expression(0)
        this.state = 86
        this.match(ClangParser.T__18)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public selectionStatement(): SelectionStatementContext {
    const _localctx: SelectionStatementContext = new SelectionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 14, ClangParser.RULE_selectionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 88
        this.match(ClangParser.T__19)
        this.state = 89
        this.match(ClangParser.T__6)
        this.state = 90
        _localctx._test = this.expression(0)
        this.state = 91
        this.match(ClangParser.T__7)
        this.state = 92
        this.statement()
        this.state = 95
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1:
            {
              this.state = 93
              this.match(ClangParser.T__20)
              this.state = 94
              this.statement()
            }
            break
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public iterationStatement(): IterationStatementContext {
    const _localctx: IterationStatementContext = new IterationStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 16, ClangParser.RULE_iterationStatement)
    try {
      this.state = 117
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__21:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 97
            this.match(ClangParser.T__21)
            this.state = 98
            this.match(ClangParser.T__6)
            this.state = 99
            _localctx._condition = this.expression(0)
            this.state = 100
            this.match(ClangParser.T__7)
            this.state = 101
            _localctx._body = this.statement()
          }
          break
        case ClangParser.T__22:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 103
            this.match(ClangParser.T__22)
            this.state = 104
            _localctx._body = this.statement()
            this.state = 105
            this.match(ClangParser.T__21)
            this.state = 106
            this.match(ClangParser.T__6)
            this.state = 107
            _localctx._condition = this.expression(0)
            this.state = 108
            this.match(ClangParser.T__7)
            this.state = 109
            this.match(ClangParser.T__18)
          }
          break
        case ClangParser.T__23:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 111
            this.match(ClangParser.T__23)
            this.state = 112
            this.match(ClangParser.T__6)
            this.state = 113
            this.forCondition()
            this.state = 114
            this.match(ClangParser.T__7)
            this.state = 115
            _localctx._body = this.statement()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public forCondition(): ForConditionContext {
    const _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, ClangParser.RULE_forCondition)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 119
        _localctx._initialise = this.expression(0)
        this.state = 120
        this.match(ClangParser.T__18)
        this.state = 121
        _localctx._endCondition = this.expression(0)
        this.state = 122
        this.match(ClangParser.T__18)
        this.state = 123
        _localctx._increment = this.expression(0)
        this.state = 124
        this.match(ClangParser.T__18)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 2:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 6)

      case 1:
        return this.precpred(this._ctx, 5)

      case 2:
        return this.precpred(this._ctx, 4)

      case 3:
        return this.precpred(this._ctx, 3)

      case 4:
        return this.precpred(this._ctx, 2)

      case 5:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03 \x81\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02' +
    '\f\x02\x0E\x02\x1B\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x05\x04&\n\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04:\n\x04\f\x04\x0E\x04' +
    '=\v\x04\x03\x05\x03\x05\x03\x05\x06\x05B\n\x05\r\x05\x0E\x05C\x05\x05' +
    'F\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05L\n\x05\x03\x06\x03\x06' +
    '\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b' +
    '\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tb\n\t\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nx\n\n\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x02\x02\x03\x06\f\x02\x02\x04\x02\x06' +
    '\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x03\x03\x02' +
    '\x03\b\x02\x88\x02\x19\x03\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x06%\x03' +
    '\x02\x02\x02\bK\x03\x02\x02\x02\nM\x03\x02\x02\x02\fQ\x03\x02\x02\x02' +
    '\x0EW\x03\x02\x02\x02\x10Z\x03\x02\x02\x02\x12w\x03\x02\x02\x02\x14y\x03' +
    '\x02\x02\x02\x16\x18\x05\x06\x04\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03' +
    '\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x03\x03' +
    '\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\t\x02\x02\x02\x1D\x05\x03' +
    '\x02\x02\x02\x1E\x1F\b\x04\x01\x02\x1F&\x07 \x02\x02 &\x07\x1C\x02\x02' +
    '!"\x07\t\x02\x02"#\x05\x06\x04\x02#$\x07\n\x02\x02$&\x03\x02\x02\x02' +
    '%\x1E\x03\x02\x02\x02% \x03\x02\x02\x02%!\x03\x02\x02\x02&;\x03\x02\x02' +
    "\x02'(\f\b\x02\x02()\x07\v\x02\x02):\x05\x06\x04\t*+\f\x07\x02\x02+," +
    '\x07\f\x02\x02,:\x05\x06\x04\b-.\f\x06\x02\x02./\x07\r\x02\x02/:\x05\x06' +
    '\x04\x0701\f\x05\x02\x0212\x07\x0E\x02\x022:\x05\x06\x04\x0634\f\x04\x02' +
    '\x0245\x07\x0F\x02\x025:\x05\x06\x04\x0567\f\x03\x02\x0278\x07\x10\x02' +
    "\x028:\x05\x06\x04\x049'\x03\x02\x02\x029*\x03\x02\x02\x029-\x03\x02" +
    '\x02\x0290\x03\x02\x02\x0293\x03\x02\x02\x0296\x03\x02\x02\x02:=\x03\x02' +
    '\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<\x07\x03\x02\x02\x02=;\x03' +
    '\x02\x02\x02>E\x07\x11\x02\x02?B\x05\b\x05\x02@B\x05\x06\x04\x02A?\x03' +
    '\x02\x02\x02A@\x03\x02\x02\x02BC\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03' +
    '\x02\x02\x02DF\x03\x02\x02\x02EA\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03' +
    '\x02\x02\x02GL\x07\x12\x02\x02HL\x05\x0E\b\x02IL\x05\x10\t\x02JL\x05\x12' +
    '\n\x02K>\x03\x02\x02\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02' +
    '\x02\x02L\t\x03\x02\x02\x02MN\x07\t\x02\x02NO\x05\x06\x04\x02OP\x07\n' +
    '\x02\x02P\v\x03\x02\x02\x02QR\x05\x06\x04\x02RS\x07\x13\x02\x02ST\x05' +
    '\x06\x04\x02TU\x07\x14\x02\x02UV\x05\x06\x04\x02V\r\x03\x02\x02\x02WX' +
    '\x05\x06\x04\x02XY\x07\x15\x02\x02Y\x0F\x03\x02\x02\x02Z[\x07\x16\x02' +
    '\x02[\\\x07\t\x02\x02\\]\x05\x06\x04\x02]^\x07\n\x02\x02^a\x05\b\x05\x02' +
    '_`\x07\x17\x02\x02`b\x05\b\x05\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02' +
    'b\x11\x03\x02\x02\x02cd\x07\x18\x02\x02de\x07\t\x02\x02ef\x05\x06\x04' +
    '\x02fg\x07\n\x02\x02gh\x05\b\x05\x02hx\x03\x02\x02\x02ij\x07\x19\x02\x02' +
    'jk\x05\b\x05\x02kl\x07\x18\x02\x02lm\x07\t\x02\x02mn\x05\x06\x04\x02n' +
    'o\x07\n\x02\x02op\x07\x15\x02\x02px\x03\x02\x02\x02qr\x07\x1A\x02\x02' +
    'rs\x07\t\x02\x02st\x05\x14\v\x02tu\x07\n\x02\x02uv\x05\b\x05\x02vx\x03' +
    '\x02\x02\x02wc\x03\x02\x02\x02wi\x03\x02\x02\x02wq\x03\x02\x02\x02x\x13' +
    '\x03\x02\x02\x02yz\x05\x06\x04\x02z{\x07\x15\x02\x02{|\x05\x06\x04\x02' +
    '|}\x07\x15\x02\x02}~\x05\x06\x04\x02~\x7F\x07\x15\x02\x02\x7F\x15\x03' +
    '\x02\x02\x02\f\x19%9;ACEKaw'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!ClangParser.__ATN) {
      ClangParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ClangParser._serializedATN)
      )
    }

    return ClangParser.__ATN
  }
}

export class StartContext extends ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_start
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_type
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterType) {
      listener.enterType(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitType) {
      listener.exitType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public _left!: ExpressionContext
  public _inner!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.IDENTIFIER, 0)
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.StringLiteral, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_expression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public selectionStatement(): SelectionStatementContext | undefined {
    return this.tryGetRuleContext(0, SelectionStatementContext)
  }
  public iterationStatement(): IterationStatementContext | undefined {
    return this.tryGetRuleContext(0, IterationStatementContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_statement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParenthesesExpressionContext extends ParserRuleContext {
  public _inner!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_parenthesesExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterParenthesesExpression) {
      listener.enterParenthesesExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitParenthesesExpression) {
      listener.exitParenthesesExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitParenthesesExpression) {
      return visitor.visitParenthesesExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public _test!: ExpressionContext
  public _consequent!: ExpressionContext
  public _alternate!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_conditionalExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_expressionStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SelectionStatementContext extends ParserRuleContext {
  public _test!: ExpressionContext
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_selectionStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterSelectionStatement) {
      listener.enterSelectionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitSelectionStatement) {
      listener.exitSelectionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitSelectionStatement) {
      return visitor.visitSelectionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IterationStatementContext extends ParserRuleContext {
  public _condition!: ExpressionContext
  public _body!: StatementContext
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public forCondition(): ForConditionContext | undefined {
    return this.tryGetRuleContext(0, ForConditionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_iterationStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterIterationStatement) {
      listener.enterIterationStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitIterationStatement) {
      listener.exitIterationStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitIterationStatement) {
      return visitor.visitIterationStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForConditionContext extends ParserRuleContext {
  public _initialise!: ExpressionContext
  public _endCondition!: ExpressionContext
  public _increment!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_forCondition
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterForCondition) {
      listener.enterForCondition(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitForCondition) {
      listener.exitForCondition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitForCondition) {
      return visitor.visitForCondition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
