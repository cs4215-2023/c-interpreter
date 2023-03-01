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
  public static readonly T__24 = 25
  public static readonly T__25 = 26
  public static readonly T__26 = 27
  public static readonly T__27 = 28
  public static readonly T__28 = 29
  public static readonly T__29 = 30
  public static readonly T__30 = 31
  public static readonly T__31 = 32
  public static readonly T__32 = 33
  public static readonly T__33 = 34
  public static readonly T__34 = 35
  public static readonly T__35 = 36
  public static readonly WHITESPACE = 37
  public static readonly NEWLINE = 38
  public static readonly PRIMITIVETYPE = 39
  public static readonly SIGN = 40
  public static readonly IDENTIFIER = 41
  public static readonly NUMBER = 42
  public static readonly PLUSPLUS = 43
  public static readonly MINUSMINUS = 44
  public static readonly StringLiteral = 45
  public static readonly RULE_start = 0
  public static readonly RULE_identifierWithType = 1
  public static readonly RULE_identifierWithTypeList = 2
  public static readonly RULE_identifierList = 3
  public static readonly RULE_numberList = 4
  public static readonly RULE_statement = 5
  public static readonly RULE_expression = 6
  public static readonly RULE_parenthesesExpression = 7
  public static readonly RULE_postFixExpression = 8
  public static readonly RULE_conditionalExpression = 9
  public static readonly RULE_expressionStatement = 10
  public static readonly RULE_selectionStatement = 11
  public static readonly RULE_iterationStatement = 12
  public static readonly RULE_forCondition = 13
  public static readonly RULE_arrayIdentifierWithType = 14
  public static readonly RULE_arrayContent = 15
  public static readonly RULE_arrayInitialisation = 16
  public static readonly RULE_pointer = 17
  public static readonly RULE_pointerDerefernce = 18
  public static readonly RULE_pointerReference = 19
  public static readonly RULE_function = 20
  public static readonly RULE_functionCall = 21
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'identifierWithType',
    'identifierWithTypeList',
    'identifierList',
    'numberList',
    'statement',
    'expression',
    'parenthesesExpression',
    'postFixExpression',
    'conditionalExpression',
    'expressionStatement',
    'selectionStatement',
    'iterationStatement',
    'forCondition',
    'arrayIdentifierWithType',
    'arrayContent',
    'arrayInitialisation',
    'pointer',
    'pointerDerefernce',
    'pointerReference',
    'function',
    'functionCall'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "','",
    "'{'",
    "'}'",
    "'('",
    "')'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'<<'",
    "'>>'",
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    "'=='",
    "'!='",
    "'||'",
    "'&&'",
    "'&'",
    "'|'",
    "'^'",
    "'='",
    "'-='",
    "'+='",
    "'?'",
    "':'",
    "';'",
    "'if'",
    "'else'",
    "'while'",
    "'do'",
    "'for'",
    "'['",
    "']'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'++'",
    "'--'"
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
    'WHITESPACE',
    'NEWLINE',
    'PRIMITIVETYPE',
    'SIGN',
    'IDENTIFIER',
    'NUMBER',
    'PLUSPLUS',
    'MINUSMINUS',
    'StringLiteral'
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
        this.state = 47
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.T__3) |
                (1 << ClangParser.T__5) |
                (1 << ClangParser.T__20) |
                (1 << ClangParser.T__29))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.T__31 - 32)) |
                (1 << (ClangParser.T__32 - 32)) |
                (1 << (ClangParser.T__33 - 32)) |
                (1 << (ClangParser.PRIMITIVETYPE - 32)) |
                (1 << (ClangParser.IDENTIFIER - 32)) |
                (1 << (ClangParser.NUMBER - 32)) |
                (1 << (ClangParser.StringLiteral - 32)))) !==
              0)
        ) {
          {
            {
              this.state = 44
              this.statement()
            }
          }
          this.state = 49
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
  public identifierWithType(): IdentifierWithTypeContext {
    const _localctx: IdentifierWithTypeContext = new IdentifierWithTypeContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 2, ClangParser.RULE_identifierWithType)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 50
        _localctx._idType = this.match(ClangParser.PRIMITIVETYPE)
        this.state = 51
        _localctx._id = this.match(ClangParser.IDENTIFIER)
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
  public identifierWithTypeList(): IdentifierWithTypeListContext {
    const _localctx: IdentifierWithTypeListContext = new IdentifierWithTypeListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 4, ClangParser.RULE_identifierWithTypeList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 53
        this.identifierWithType()
        this.state = 58
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__0) {
          {
            {
              this.state = 54
              this.match(ClangParser.T__0)
              this.state = 55
              this.identifierWithType()
            }
          }
          this.state = 60
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
  public identifierList(): IdentifierListContext {
    const _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, ClangParser.RULE_identifierList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 61
        this.match(ClangParser.IDENTIFIER)
        this.state = 66
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__0) {
          {
            {
              this.state = 62
              this.match(ClangParser.T__0)
              this.state = 63
              this.match(ClangParser.IDENTIFIER)
            }
          }
          this.state = 68
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
  public numberList(): NumberListContext {
    const _localctx: NumberListContext = new NumberListContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, ClangParser.RULE_numberList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 69
        this.match(ClangParser.NUMBER)
        this.state = 74
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__0) {
          {
            {
              this.state = 70
              this.match(ClangParser.T__0)
              this.state = 71
              this.match(ClangParser.NUMBER)
            }
          }
          this.state = 76
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
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, ClangParser.RULE_statement)
    let _la: number
    try {
      this.state = 91
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 77
            this.match(ClangParser.T__1)
            this.state = 83
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << ClangParser.T__1) |
                    (1 << ClangParser.T__3) |
                    (1 << ClangParser.T__5) |
                    (1 << ClangParser.T__20) |
                    (1 << ClangParser.T__29))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (ClangParser.T__31 - 32)) |
                    (1 << (ClangParser.T__32 - 32)) |
                    (1 << (ClangParser.T__33 - 32)) |
                    (1 << (ClangParser.PRIMITIVETYPE - 32)) |
                    (1 << (ClangParser.IDENTIFIER - 32)) |
                    (1 << (ClangParser.NUMBER - 32)) |
                    (1 << (ClangParser.StringLiteral - 32)))) !==
                  0)
            ) {
              {
                this.state = 79
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                do {
                  {
                    {
                      this.state = 78
                      this.statement()
                    }
                  }
                  this.state = 81
                  this._errHandler.sync(this)
                  _la = this._input.LA(1)
                } while (
                  ((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                      ((1 << ClangParser.T__1) |
                        (1 << ClangParser.T__3) |
                        (1 << ClangParser.T__5) |
                        (1 << ClangParser.T__20) |
                        (1 << ClangParser.T__29))) !==
                      0) ||
                  (((_la - 32) & ~0x1f) === 0 &&
                    ((1 << (_la - 32)) &
                      ((1 << (ClangParser.T__31 - 32)) |
                        (1 << (ClangParser.T__32 - 32)) |
                        (1 << (ClangParser.T__33 - 32)) |
                        (1 << (ClangParser.PRIMITIVETYPE - 32)) |
                        (1 << (ClangParser.IDENTIFIER - 32)) |
                        (1 << (ClangParser.NUMBER - 32)) |
                        (1 << (ClangParser.StringLiteral - 32)))) !==
                      0)
                )
              }
            }

            this.state = 85
            this.match(ClangParser.T__2)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 86
            this.expressionStatement()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 87
            this.selectionStatement()
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 88
            this.iterationStatement()
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 89
            this.expression(0)
          }
          break

        case 6:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 90
            this.function()
          }
          break
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
    const _startState: number = 12
    this.enterRecursionRule(_localctx, 12, ClangParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 108
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              this.state = 94
              this.identifierWithType()
            }
            break

          case 2:
            {
              this.state = 95
              this.match(ClangParser.NUMBER)
            }
            break

          case 3:
            {
              this.state = 96
              this.match(ClangParser.StringLiteral)
            }
            break

          case 4:
            {
              this.state = 97
              this.match(ClangParser.IDENTIFIER)
            }
            break

          case 5:
            {
              this.state = 98
              this.postFixExpression()
            }
            break

          case 6:
            {
              this.state = 99
              this.arrayInitialisation()
            }
            break

          case 7:
            {
              this.state = 100
              this.match(ClangParser.T__3)
              this.state = 101
              _localctx._inner = this.expression(0)
              this.state = 102
              this.match(ClangParser.T__4)
            }
            break

          case 8:
            {
              this.state = 104
              this.pointer()
            }
            break

          case 9:
            {
              this.state = 105
              this.pointerDerefernce()
            }
            break

          case 10:
            {
              this.state = 106
              this.pointerReference()
            }
            break

          case 11:
            {
              this.state = 107
              this.functionCall()
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 178
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 176
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 110
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 22)')
                    }
                    this.state = 111
                    _localctx._operator = this.match(ClangParser.T__5)
                    this.state = 112
                    _localctx._right = this.expression(23)
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
                    this.state = 113
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 21)')
                    }
                    this.state = 114
                    _localctx._operator = this.match(ClangParser.T__6)
                    this.state = 115
                    _localctx._right = this.expression(22)
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
                    this.state = 116
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 20)')
                    }
                    this.state = 117
                    _localctx._operator = this.match(ClangParser.T__7)
                    this.state = 118
                    _localctx._right = this.expression(21)
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
                    this.state = 119
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 19)')
                    }
                    this.state = 120
                    _localctx._operator = this.match(ClangParser.T__8)
                    this.state = 121
                    _localctx._right = this.expression(20)
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
                    this.state = 122
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 18)')
                    }
                    this.state = 123
                    _localctx._operator = this.match(ClangParser.T__9)
                    this.state = 124
                    _localctx._right = this.expression(19)
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
                    this.state = 125
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)')
                    }
                    this.state = 126
                    _localctx._operator = this.match(ClangParser.T__10)
                    this.state = 127
                    _localctx._right = this.expression(18)
                  }
                  break

                case 7:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 128
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)')
                    }
                    this.state = 129
                    _localctx._operator = this.match(ClangParser.T__11)
                    this.state = 130
                    _localctx._right = this.expression(17)
                  }
                  break

                case 8:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 131
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)')
                    }
                    this.state = 132
                    _localctx._operator = this.match(ClangParser.T__12)
                    this.state = 133
                    _localctx._right = this.expression(16)
                  }
                  break

                case 9:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 134
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 135
                    _localctx._operator = this.match(ClangParser.T__13)
                    this.state = 136
                    _localctx._right = this.expression(15)
                  }
                  break

                case 10:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 137
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 138
                    _localctx._operator = this.match(ClangParser.T__14)
                    this.state = 139
                    _localctx._right = this.expression(14)
                  }
                  break

                case 11:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 140
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 141
                    _localctx._operator = this.match(ClangParser.T__15)
                    this.state = 142
                    _localctx._right = this.expression(13)
                  }
                  break

                case 12:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 143
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 144
                    _localctx._operator = this.match(ClangParser.T__16)
                    this.state = 145
                    _localctx._right = this.expression(12)
                  }
                  break

                case 13:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 146
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 147
                    _localctx._operator = this.match(ClangParser.T__17)
                    this.state = 148
                    _localctx._right = this.expression(11)
                  }
                  break

                case 14:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 149
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 150
                    _localctx._operator = this.match(ClangParser.T__18)
                    this.state = 151
                    _localctx._right = this.expression(10)
                  }
                  break

                case 15:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 152
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 153
                    _localctx._operator = this.match(ClangParser.T__19)
                    this.state = 154
                    _localctx._right = this.expression(9)
                  }
                  break

                case 16:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 155
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 156
                    _localctx._operator = this.match(ClangParser.T__20)
                    this.state = 157
                    _localctx._right = this.expression(8)
                  }
                  break

                case 17:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 158
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 159
                    _localctx._operator = this.match(ClangParser.T__21)
                    this.state = 160
                    _localctx._right = this.expression(7)
                  }
                  break

                case 18:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 161
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 162
                    _localctx._operator = this.match(ClangParser.T__22)
                    this.state = 163
                    _localctx._right = this.expression(6)
                  }
                  break

                case 19:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 164
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 165
                    _localctx._operator = this.match(ClangParser.T__7)
                    this.state = 166
                    _localctx._right = this.expression(5)
                  }
                  break

                case 20:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 167
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 168
                    _localctx._operator = this.match(ClangParser.T__23)
                    this.state = 169
                    _localctx._right = this.expression(4)
                  }
                  break

                case 21:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 170
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 171
                    _localctx._operator = this.match(ClangParser.T__24)
                    this.state = 172
                    _localctx._right = this.expression(3)
                  }
                  break

                case 22:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState)
                    _localctx._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 173
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 174
                    _localctx._operator = this.match(ClangParser.T__25)
                    this.state = 175
                    _localctx._right = this.expression(2)
                  }
                  break
              }
            }
          }
          this.state = 180
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
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
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext = new ParenthesesExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 14, ClangParser.RULE_parenthesesExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 181
        this.match(ClangParser.T__3)
        this.state = 182
        _localctx._inner = this.expression(0)
        this.state = 183
        this.match(ClangParser.T__4)
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
  public postFixExpression(): PostFixExpressionContext {
    const _localctx: PostFixExpressionContext = new PostFixExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, ClangParser.RULE_postFixExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 185
          this.match(ClangParser.IDENTIFIER)
        }
        this.state = 186
        _la = this._input.LA(1)
        if (!(_la === ClangParser.PLUSPLUS || _la === ClangParser.MINUSMINUS)) {
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
  // @RuleVersion(0)
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, ClangParser.RULE_conditionalExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 188
        _localctx._test = this.expression(0)
        this.state = 189
        this.match(ClangParser.T__26)
        this.state = 190
        _localctx._consequent = this.expression(0)
        this.state = 191
        this.match(ClangParser.T__27)
        this.state = 192
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
    this.enterRule(_localctx, 20, ClangParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 194
        this.expression(0)
        this.state = 195
        this.match(ClangParser.T__28)
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
    this.enterRule(_localctx, 22, ClangParser.RULE_selectionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 197
        this.match(ClangParser.T__29)
        this.state = 198
        this.match(ClangParser.T__3)
        this.state = 199
        _localctx._test = this.expression(0)
        this.state = 200
        this.match(ClangParser.T__4)
        this.state = 201
        _localctx._consequentStatement = this.statement()
        this.state = 204
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              this.state = 202
              this.match(ClangParser.T__30)
              this.state = 203
              _localctx._alternateStatement = this.statement()
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
    this.enterRule(_localctx, 24, ClangParser.RULE_iterationStatement)
    try {
      this.state = 226
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__31:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 206
            this.match(ClangParser.T__31)
            this.state = 207
            this.match(ClangParser.T__3)
            this.state = 208
            _localctx._condition = this.expression(0)
            this.state = 209
            this.match(ClangParser.T__4)
            this.state = 210
            _localctx._body = this.statement()
          }
          break
        case ClangParser.T__32:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 212
            this.match(ClangParser.T__32)
            this.state = 213
            _localctx._body = this.statement()
            this.state = 214
            this.match(ClangParser.T__31)
            this.state = 215
            this.match(ClangParser.T__3)
            this.state = 216
            _localctx._condition = this.expression(0)
            this.state = 217
            this.match(ClangParser.T__4)
            this.state = 218
            this.match(ClangParser.T__28)
          }
          break
        case ClangParser.T__33:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 220
            this.match(ClangParser.T__33)
            this.state = 221
            this.match(ClangParser.T__3)
            this.state = 222
            this.forCondition()
            this.state = 223
            this.match(ClangParser.T__4)
            this.state = 224
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
    this.enterRule(_localctx, 26, ClangParser.RULE_forCondition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 228
        _localctx._initialise = this.expression(0)
        this.state = 229
        this.match(ClangParser.T__28)
        this.state = 231
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__3) | (1 << ClangParser.T__5) | (1 << ClangParser.T__20))) !==
              0) ||
          (((_la - 39) & ~0x1f) === 0 &&
            ((1 << (_la - 39)) &
              ((1 << (ClangParser.PRIMITIVETYPE - 39)) |
                (1 << (ClangParser.IDENTIFIER - 39)) |
                (1 << (ClangParser.NUMBER - 39)) |
                (1 << (ClangParser.StringLiteral - 39)))) !==
              0)
        ) {
          {
            this.state = 230
            _localctx._endCondition = this.expression(0)
          }
        }

        this.state = 233
        this.match(ClangParser.T__28)
        this.state = 234
        _localctx._increment = this.expression(0)
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
  public arrayIdentifierWithType(): ArrayIdentifierWithTypeContext {
    const _localctx: ArrayIdentifierWithTypeContext = new ArrayIdentifierWithTypeContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 28, ClangParser.RULE_arrayIdentifierWithType)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 236
        _localctx._idType = this.match(ClangParser.PRIMITIVETYPE)
        this.state = 237
        _localctx._id = this.match(ClangParser.IDENTIFIER)
        this.state = 238
        this.match(ClangParser.T__34)
        this.state = 240
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.NUMBER) {
          {
            this.state = 239
            _localctx._size = this.match(ClangParser.NUMBER)
          }
        }

        this.state = 242
        this.match(ClangParser.T__35)
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
  public arrayContent(): ArrayContentContext {
    const _localctx: ArrayContentContext = new ArrayContentContext(this._ctx, this.state)
    this.enterRule(_localctx, 30, ClangParser.RULE_arrayContent)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 244
        this.match(ClangParser.T__1)
        this.state = 247
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.IDENTIFIER:
            {
              this.state = 245
              this.identifierList()
            }
            break
          case ClangParser.NUMBER:
            {
              this.state = 246
              this.numberList()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 249
        this.match(ClangParser.T__2)
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
  public arrayInitialisation(): ArrayInitialisationContext {
    const _localctx: ArrayInitialisationContext = new ArrayInitialisationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 32, ClangParser.RULE_arrayInitialisation)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 251
        this.arrayIdentifierWithType()
        this.state = 255
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
          case 1:
            {
              this.state = 252
              _localctx._operator = this.match(ClangParser.T__23)
              this.state = 253
              _localctx._array = this.arrayContent()
            }
            break

          case 2:
            {
              this.state = 254
              this.match(ClangParser.StringLiteral)
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
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 34, ClangParser.RULE_pointer)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 257
        this.match(ClangParser.PRIMITIVETYPE)
        this.state = 258
        this.match(ClangParser.T__5)
        this.state = 259
        this.match(ClangParser.IDENTIFIER)
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
  public pointerDerefernce(): PointerDerefernceContext {
    const _localctx: PointerDerefernceContext = new PointerDerefernceContext(this._ctx, this.state)
    this.enterRule(_localctx, 36, ClangParser.RULE_pointerDerefernce)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 261
        this.match(ClangParser.T__5)
        this.state = 262
        this.match(ClangParser.IDENTIFIER)
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
  public pointerReference(): PointerReferenceContext {
    const _localctx: PointerReferenceContext = new PointerReferenceContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, ClangParser.RULE_pointerReference)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 264
        this.match(ClangParser.T__20)
        this.state = 265
        this.match(ClangParser.IDENTIFIER)
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
  public function(): FunctionContext {
    const _localctx: FunctionContext = new FunctionContext(this._ctx, this.state)
    this.enterRule(_localctx, 40, ClangParser.RULE_function)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 267
        _localctx._funcType = this.match(ClangParser.PRIMITIVETYPE)
        {
          this.state = 268
          _localctx._funcName = this.match(ClangParser.IDENTIFIER)
        }
        {
          this.state = 269
          _localctx._params = this.match(ClangParser.T__3)
          this.state = 271
          this._errHandler.sync(this)
          _la = this._input.LA(1)
          if (_la === ClangParser.PRIMITIVETYPE) {
            {
              this.state = 270
              this.identifierWithTypeList()
            }
          }

          this.state = 273
          this.match(ClangParser.T__4)
        }
        this.state = 275
        _localctx._body = this.statement()
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
  public functionCall(): FunctionCallContext {
    const _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, ClangParser.RULE_functionCall)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 277
        this.match(ClangParser.IDENTIFIER)
        this.state = 278
        _localctx._params = this.match(ClangParser.T__3)
        this.state = 280
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.IDENTIFIER) {
          {
            this.state = 279
            this.identifierList()
          }
        }

        this.state = 282
        this.match(ClangParser.T__4)
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
      case 6:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 22)

      case 1:
        return this.precpred(this._ctx, 21)

      case 2:
        return this.precpred(this._ctx, 20)

      case 3:
        return this.precpred(this._ctx, 19)

      case 4:
        return this.precpred(this._ctx, 18)

      case 5:
        return this.precpred(this._ctx, 17)

      case 6:
        return this.precpred(this._ctx, 16)

      case 7:
        return this.precpred(this._ctx, 15)

      case 8:
        return this.precpred(this._ctx, 14)

      case 9:
        return this.precpred(this._ctx, 13)

      case 10:
        return this.precpred(this._ctx, 12)

      case 11:
        return this.precpred(this._ctx, 11)

      case 12:
        return this.precpred(this._ctx, 10)

      case 13:
        return this.precpred(this._ctx, 9)

      case 14:
        return this.precpred(this._ctx, 8)

      case 15:
        return this.precpred(this._ctx, 7)

      case 16:
        return this.precpred(this._ctx, 6)

      case 17:
        return this.precpred(this._ctx, 5)

      case 18:
        return this.precpred(this._ctx, 4)

      case 19:
        return this.precpred(this._ctx, 3)

      case 20:
        return this.precpred(this._ctx, 2)

      case 21:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u011F\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03' +
    '\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x03\x03\x03\x03\x03\x03\x04' +
    '\x03\x04\x03\x04\x07\x04;\n\x04\f\x04\x0E\x04>\v\x04\x03\x05\x03\x05\x03' +
    '\x05\x07\x05C\n\x05\f\x05\x0E\x05F\v\x05\x03\x06\x03\x06\x03\x06\x07\x06' +
    'K\n\x06\f\x06\x0E\x06N\v\x06\x03\x07\x03\x07\x06\x07R\n\x07\r\x07\x0E' +
    '\x07S\x05\x07V\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05' +
    '\x07^\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bo\n\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03' +
    '\b\x03\b\x07\b\xB3\n\b\f\b\x0E\b\xB6\v\b\x03\t\x03\t\x03\t\x03\t\x03\n' +
    '\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\x0E\x03\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05' +
    '\x0E\xE5\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xEA\n\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xF3\n\x10\x03\x10\x03' +
    '\x10\x03\x11\x03\x11\x03\x11\x05\x11\xFA\n\x11\x03\x11\x03\x11\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x05\x12\u0102\n\x12\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03' +
    '\x16\x03\x16\x05\x16\u0112\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17' +
    '\x03\x17\x03\x17\x05\x17\u011B\n\x17\x03\x17\x03\x17\x03\x17\x02\x02\x03' +
    '\x0E\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12' +
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
    '\x02(\x02*\x02,\x02\x02\x03\x03\x02-.\x02\u013D\x021\x03\x02\x02\x02\x04' +
    '4\x03\x02\x02\x02\x067\x03\x02\x02\x02\b?\x03\x02\x02\x02\nG\x03\x02\x02' +
    '\x02\f]\x03\x02\x02\x02\x0En\x03\x02\x02\x02\x10\xB7\x03\x02\x02\x02\x12' +
    '\xBB\x03\x02\x02\x02\x14\xBE\x03\x02\x02\x02\x16\xC4\x03\x02\x02\x02\x18' +
    '\xC7\x03\x02\x02\x02\x1A\xE4\x03\x02\x02\x02\x1C\xE6\x03\x02\x02\x02\x1E' +
    '\xEE\x03\x02\x02\x02 \xF6\x03\x02\x02\x02"\xFD\x03\x02\x02\x02$\u0103' +
    '\x03\x02\x02\x02&\u0107\x03\x02\x02\x02(\u010A\x03\x02\x02\x02*\u010D' +
    '\x03\x02\x02\x02,\u0117\x03\x02\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02' +
    '\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03\x02' +
    '\x02\x0231\x03\x02\x02\x0245\x07)\x02\x0256\x07+\x02\x026\x05\x03\x02' +
    '\x02\x027<\x05\x04\x03\x0289\x07\x03\x02\x029;\x05\x04\x03\x02:8\x03\x02' +
    '\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\x07\x03' +
    '\x02\x02\x02><\x03\x02\x02\x02?D\x07+\x02\x02@A\x07\x03\x02\x02AC\x07' +
    '+\x02\x02B@\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03' +
    '\x02\x02\x02E\t\x03\x02\x02\x02FD\x03\x02\x02\x02GL\x07,\x02\x02HI\x07' +
    '\x03\x02\x02IK\x07,\x02\x02JH\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03' +
    '\x02\x02\x02LM\x03\x02\x02\x02M\v\x03\x02\x02\x02NL\x03\x02\x02\x02OU' +
    '\x07\x04\x02\x02PR\x05\f\x07\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02S' +
    'Q\x03\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02UQ\x03\x02\x02\x02' +
    'UV\x03\x02\x02\x02VW\x03\x02\x02\x02W^\x07\x05\x02\x02X^\x05\x16\f\x02' +
    'Y^\x05\x18\r\x02Z^\x05\x1A\x0E\x02[^\x05\x0E\b\x02\\^\x05*\x16\x02]O\x03' +
    '\x02\x02\x02]X\x03\x02\x02\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02][\x03' +
    '\x02\x02\x02]\\\x03\x02\x02\x02^\r\x03\x02\x02\x02_`\b\b\x01\x02`o\x05' +
    '\x04\x03\x02ao\x07,\x02\x02bo\x07/\x02\x02co\x07+\x02\x02do\x05\x12\n' +
    '\x02eo\x05"\x12\x02fg\x07\x06\x02\x02gh\x05\x0E\b\x02hi\x07\x07\x02\x02' +
    'io\x03\x02\x02\x02jo\x05$\x13\x02ko\x05&\x14\x02lo\x05(\x15\x02mo\x05' +
    ',\x17\x02n_\x03\x02\x02\x02na\x03\x02\x02\x02nb\x03\x02\x02\x02nc\x03' +
    '\x02\x02\x02nd\x03\x02\x02\x02ne\x03\x02\x02\x02nf\x03\x02\x02\x02nj\x03' +
    '\x02\x02\x02nk\x03\x02\x02\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02o\xB4' +
    '\x03\x02\x02\x02pq\f\x18\x02\x02qr\x07\b\x02\x02r\xB3\x05\x0E\b\x19st' +
    '\f\x17\x02\x02tu\x07\t\x02\x02u\xB3\x05\x0E\b\x18vw\f\x16\x02\x02wx\x07' +
    '\n\x02\x02x\xB3\x05\x0E\b\x17yz\f\x15\x02\x02z{\x07\v\x02\x02{\xB3\x05' +
    '\x0E\b\x16|}\f\x14\x02\x02}~\x07\f\x02\x02~\xB3\x05\x0E\b\x15\x7F\x80' +
    '\f\x13\x02\x02\x80\x81\x07\r\x02\x02\x81\xB3\x05\x0E\b\x14\x82\x83\f\x12' +
    '\x02\x02\x83\x84\x07\x0E\x02\x02\x84\xB3\x05\x0E\b\x13\x85\x86\f\x11\x02' +
    '\x02\x86\x87\x07\x0F\x02\x02\x87\xB3\x05\x0E\b\x12\x88\x89\f\x10\x02\x02' +
    '\x89\x8A\x07\x10\x02\x02\x8A\xB3\x05\x0E\b\x11\x8B\x8C\f\x0F\x02\x02\x8C' +
    '\x8D\x07\x11\x02\x02\x8D\xB3\x05\x0E\b\x10\x8E\x8F\f\x0E\x02\x02\x8F\x90' +
    '\x07\x12\x02\x02\x90\xB3\x05\x0E\b\x0F\x91\x92\f\r\x02\x02\x92\x93\x07' +
    '\x13\x02\x02\x93\xB3\x05\x0E\b\x0E\x94\x95\f\f\x02\x02\x95\x96\x07\x14' +
    '\x02\x02\x96\xB3\x05\x0E\b\r\x97\x98\f\v\x02\x02\x98\x99\x07\x15\x02\x02' +
    '\x99\xB3\x05\x0E\b\f\x9A\x9B\f\n\x02\x02\x9B\x9C\x07\x16\x02\x02\x9C\xB3' +
    '\x05\x0E\b\v\x9D\x9E\f\t\x02\x02\x9E\x9F\x07\x17\x02\x02\x9F\xB3\x05\x0E' +
    '\b\n\xA0\xA1\f\b\x02\x02\xA1\xA2\x07\x18\x02\x02\xA2\xB3\x05\x0E\b\t\xA3' +
    '\xA4\f\x07\x02\x02\xA4\xA5\x07\x19\x02\x02\xA5\xB3\x05\x0E\b\b\xA6\xA7' +
    '\f\x06\x02\x02\xA7\xA8\x07\n\x02\x02\xA8\xB3\x05\x0E\b\x07\xA9\xAA\f\x05' +
    '\x02\x02\xAA\xAB\x07\x1A\x02\x02\xAB\xB3\x05\x0E\b\x06\xAC\xAD\f\x04\x02' +
    '\x02\xAD\xAE\x07\x1B\x02\x02\xAE\xB3\x05\x0E\b\x05\xAF\xB0\f\x03\x02\x02' +
    '\xB0\xB1\x07\x1C\x02\x02\xB1\xB3\x05\x0E\b\x04\xB2p\x03\x02\x02\x02\xB2' +
    's\x03\x02\x02\x02\xB2v\x03\x02\x02\x02\xB2y\x03\x02\x02\x02\xB2|\x03\x02' +
    '\x02\x02\xB2\x7F\x03\x02\x02\x02\xB2\x82\x03\x02\x02\x02\xB2\x85\x03\x02' +
    '\x02\x02\xB2\x88\x03\x02\x02\x02\xB2\x8B\x03\x02\x02\x02\xB2\x8E\x03\x02' +
    '\x02\x02\xB2\x91\x03\x02\x02\x02\xB2\x94\x03\x02\x02\x02\xB2\x97\x03\x02' +
    '\x02\x02\xB2\x9A\x03\x02\x02\x02\xB2\x9D\x03\x02\x02\x02\xB2\xA0\x03\x02' +
    '\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA6\x03\x02\x02\x02\xB2\xA9\x03\x02' +
    '\x02\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB3\xB6\x03\x02' +
    '\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x0F\x03\x02' +
    '\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07\x06\x02\x02\xB8\xB9\x05\x0E' +
    '\b\x02\xB9\xBA\x07\x07\x02\x02\xBA\x11\x03\x02\x02\x02\xBB\xBC\x07+\x02' +
    '\x02\xBC\xBD\t\x02\x02\x02\xBD\x13\x03\x02\x02\x02\xBE\xBF\x05\x0E\b\x02' +
    '\xBF\xC0\x07\x1D\x02\x02\xC0\xC1\x05\x0E\b\x02\xC1\xC2\x07\x1E\x02\x02' +
    '\xC2\xC3\x05\x0E\b\x02\xC3\x15\x03\x02\x02\x02\xC4\xC5\x05\x0E\b\x02\xC5' +
    '\xC6\x07\x1F\x02\x02\xC6\x17\x03\x02\x02\x02\xC7\xC8\x07 \x02\x02\xC8' +
    '\xC9\x07\x06\x02\x02\xC9\xCA\x05\x0E\b\x02\xCA\xCB\x07\x07\x02\x02\xCB' +
    '\xCE\x05\f\x07\x02\xCC\xCD\x07!\x02\x02\xCD\xCF\x05\f\x07\x02\xCE\xCC' +
    '\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\x19\x03\x02\x02\x02\xD0\xD1' +
    '\x07"\x02\x02\xD1\xD2\x07\x06\x02\x02\xD2\xD3\x05\x0E\b\x02\xD3\xD4\x07' +
    '\x07\x02\x02\xD4\xD5\x05\f\x07\x02\xD5\xE5\x03\x02\x02\x02\xD6\xD7\x07' +
    '#\x02\x02\xD7\xD8\x05\f\x07\x02\xD8\xD9\x07"\x02\x02\xD9\xDA\x07\x06' +
    '\x02\x02\xDA\xDB\x05\x0E\b\x02\xDB\xDC\x07\x07\x02\x02\xDC\xDD\x07\x1F' +
    '\x02\x02\xDD\xE5\x03\x02\x02\x02\xDE\xDF\x07$\x02\x02\xDF\xE0\x07\x06' +
    '\x02\x02\xE0\xE1\x05\x1C\x0F\x02\xE1\xE2\x07\x07\x02\x02\xE2\xE3\x05\f' +
    '\x07\x02\xE3\xE5\x03\x02\x02\x02\xE4\xD0\x03\x02\x02\x02\xE4\xD6\x03\x02' +
    '\x02\x02\xE4\xDE\x03\x02\x02\x02\xE5\x1B\x03\x02\x02\x02\xE6\xE7\x05\x0E' +
    '\b\x02\xE7\xE9\x07\x1F\x02\x02\xE8\xEA\x05\x0E\b\x02\xE9\xE8\x03\x02\x02' +
    '\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x07\x1F\x02' +
    '\x02\xEC\xED\x05\x0E\b\x02\xED\x1D\x03\x02\x02\x02\xEE\xEF\x07)\x02\x02' +
    '\xEF\xF0\x07+\x02\x02\xF0\xF2\x07%\x02\x02\xF1\xF3\x07,\x02\x02\xF2\xF1' +
    '\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5' +
    '\x07&\x02\x02\xF5\x1F\x03\x02\x02\x02\xF6\xF9\x07\x04\x02\x02\xF7\xFA' +
    '\x05\b\x05\x02\xF8\xFA\x05\n\x06\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03' +
    '\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x07\x05\x02\x02\xFC!\x03' +
    '\x02\x02\x02\xFD\u0101\x05\x1E\x10\x02\xFE\xFF\x07\x1A\x02\x02\xFF\u0102' +
    '\x05 \x11\x02\u0100\u0102\x07/\x02\x02\u0101\xFE\x03\x02\x02\x02\u0101' +
    '\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102#\x03\x02\x02' +
    '\x02\u0103\u0104\x07)\x02\x02\u0104\u0105\x07\b\x02\x02\u0105\u0106\x07' +
    '+\x02\x02\u0106%\x03\x02\x02\x02\u0107\u0108\x07\b\x02\x02\u0108\u0109' +
    "\x07+\x02\x02\u0109'\x03\x02\x02\x02\u010A\u010B\x07\x17\x02\x02\u010B" +
    '\u010C\x07+\x02\x02\u010C)\x03\x02\x02\x02\u010D\u010E\x07)\x02\x02\u010E' +
    '\u010F\x07+\x02\x02\u010F\u0111\x07\x06\x02\x02\u0110\u0112\x05\x06\x04' +
    '\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113' +
    '\x03\x02\x02\x02\u0113\u0114\x07\x07\x02\x02\u0114\u0115\x03\x02\x02\x02' +
    '\u0115\u0116\x05\f\x07\x02\u0116+\x03\x02\x02\x02\u0117\u0118\x07+\x02' +
    '\x02\u0118\u011A\x07\x06\x02\x02\u0119\u011B\x05\b\x05\x02\u011A\u0119' +
    '\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02' +
    '\u011C\u011D\x07\x07\x02\x02\u011D-\x03\x02\x02\x02\x141<DLSU]n\xB2\xB4' +
    '\xCE\xE4\xE9\xF2\xF9\u0101\u0111\u011A'
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
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
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

export class IdentifierWithTypeContext extends ParserRuleContext {
  public _idType!: Token
  public _id!: Token
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_identifierWithType
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterIdentifierWithType) {
      listener.enterIdentifierWithType(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitIdentifierWithType) {
      listener.exitIdentifierWithType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitIdentifierWithType) {
      return visitor.visitIdentifierWithType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierWithTypeListContext extends ParserRuleContext {
  public identifierWithType(): IdentifierWithTypeContext[]
  public identifierWithType(i: number): IdentifierWithTypeContext
  public identifierWithType(i?: number): IdentifierWithTypeContext | IdentifierWithTypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierWithTypeContext)
    } else {
      return this.getRuleContext(i, IdentifierWithTypeContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_identifierWithTypeList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterIdentifierWithTypeList) {
      listener.enterIdentifierWithTypeList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitIdentifierWithTypeList) {
      listener.exitIdentifierWithTypeList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitIdentifierWithTypeList) {
      return visitor.visitIdentifierWithTypeList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierListContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode[]
  public IDENTIFIER(i: number): TerminalNode
  public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.IDENTIFIER)
    } else {
      return this.getToken(ClangParser.IDENTIFIER, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_identifierList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterIdentifierList) {
      listener.enterIdentifierList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitIdentifierList) {
      listener.exitIdentifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitIdentifierList) {
      return visitor.visitIdentifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NumberListContext extends ParserRuleContext {
  public NUMBER(): TerminalNode[]
  public NUMBER(i: number): TerminalNode
  public NUMBER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.NUMBER)
    } else {
      return this.getToken(ClangParser.NUMBER, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_numberList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNumberList) {
      listener.enterNumberList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNumberList) {
      listener.exitNumberList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNumberList) {
      return visitor.visitNumberList(this)
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
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public selectionStatement(): SelectionStatementContext | undefined {
    return this.tryGetRuleContext(0, SelectionStatementContext)
  }
  public iterationStatement(): IterationStatementContext | undefined {
    return this.tryGetRuleContext(0, IterationStatementContext)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public function(): FunctionContext | undefined {
    return this.tryGetRuleContext(0, FunctionContext)
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

export class ExpressionContext extends ParserRuleContext {
  public _left!: ExpressionContext
  public _inner!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public identifierWithType(): IdentifierWithTypeContext | undefined {
    return this.tryGetRuleContext(0, IdentifierWithTypeContext)
  }
  public NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.NUMBER, 0)
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.StringLiteral, 0)
  }
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.IDENTIFIER, 0)
  }
  public postFixExpression(): PostFixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostFixExpressionContext)
  }
  public arrayInitialisation(): ArrayInitialisationContext | undefined {
    return this.tryGetRuleContext(0, ArrayInitialisationContext)
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
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public pointerDerefernce(): PointerDerefernceContext | undefined {
    return this.tryGetRuleContext(0, PointerDerefernceContext)
  }
  public pointerReference(): PointerReferenceContext | undefined {
    return this.tryGetRuleContext(0, PointerReferenceContext)
  }
  public functionCall(): FunctionCallContext | undefined {
    return this.tryGetRuleContext(0, FunctionCallContext)
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

export class PostFixExpressionContext extends ParserRuleContext {
  public PLUSPLUS(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.PLUSPLUS, 0)
  }
  public MINUSMINUS(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.MINUSMINUS, 0)
  }
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_postFixExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPostFixExpression) {
      listener.enterPostFixExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPostFixExpression) {
      listener.exitPostFixExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPostFixExpression) {
      return visitor.visitPostFixExpression(this)
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
  public _consequentStatement!: StatementContext
  public _alternateStatement!: StatementContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
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

export class ArrayIdentifierWithTypeContext extends ParserRuleContext {
  public _idType!: Token
  public _id!: Token
  public _size!: Token
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  public NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.NUMBER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_arrayIdentifierWithType
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterArrayIdentifierWithType) {
      listener.enterArrayIdentifierWithType(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitArrayIdentifierWithType) {
      listener.exitArrayIdentifierWithType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitArrayIdentifierWithType) {
      return visitor.visitArrayIdentifierWithType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArrayContentContext extends ParserRuleContext {
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
  }
  public numberList(): NumberListContext | undefined {
    return this.tryGetRuleContext(0, NumberListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_arrayContent
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterArrayContent) {
      listener.enterArrayContent(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitArrayContent) {
      listener.exitArrayContent(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitArrayContent) {
      return visitor.visitArrayContent(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArrayInitialisationContext extends ParserRuleContext {
  public _operator!: Token
  public _array!: ArrayContentContext
  public arrayIdentifierWithType(): ArrayIdentifierWithTypeContext {
    return this.getRuleContext(0, ArrayIdentifierWithTypeContext)
  }
  public StringLiteral(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.StringLiteral, 0)
  }
  public arrayContent(): ArrayContentContext | undefined {
    return this.tryGetRuleContext(0, ArrayContentContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_arrayInitialisation
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterArrayInitialisation) {
      listener.enterArrayInitialisation(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitArrayInitialisation) {
      listener.exitArrayInitialisation(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitArrayInitialisation) {
      return visitor.visitArrayInitialisation(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_pointer
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointer) {
      listener.enterPointer(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointer) {
      listener.exitPointer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointer) {
      return visitor.visitPointer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerDerefernceContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_pointerDerefernce
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerDerefernce) {
      listener.enterPointerDerefernce(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerDerefernce) {
      listener.exitPointerDerefernce(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerDerefernce) {
      return visitor.visitPointerDerefernce(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerReferenceContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_pointerReference
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerReference) {
      listener.enterPointerReference(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerReference) {
      listener.exitPointerReference(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerReference) {
      return visitor.visitPointerReference(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionContext extends ParserRuleContext {
  public _funcType!: Token
  public _funcName!: Token
  public _params!: Token
  public _body!: StatementContext
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.IDENTIFIER, 0)
  }
  public identifierWithTypeList(): IdentifierWithTypeListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierWithTypeListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_function
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionCallContext extends ParserRuleContext {
  public _params!: Token
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_functionCall
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionCall) {
      listener.enterFunctionCall(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionCall) {
      listener.exitFunctionCall(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionCall) {
      return visitor.visitFunctionCall(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
