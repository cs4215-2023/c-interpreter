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
  public static readonly MUL = 18
  public static readonly DIV = 19
  public static readonly ADD = 20
  public static readonly SUB = 21
  public static readonly MOD = 22
  public static readonly LESSTHAN = 23
  public static readonly LESSTHANOREQUAL = 24
  public static readonly GREATERTHAN = 25
  public static readonly GREATERTHANOREQUAL = 26
  public static readonly EQUAL = 27
  public static readonly EQUALCHECK = 28
  public static readonly NOTEQUALCHECK = 29
  public static readonly XOR = 30
  public static readonly AND = 31
  public static readonly OR = 32
  public static readonly NOT = 33
  public static readonly BITWISEAND = 34
  public static readonly BITWISEOR = 35
  public static readonly MINUSEQUAL = 36
  public static readonly PLUSEQUAL = 37
  public static readonly BITSHIFTRIGHT = 38
  public static readonly BITSHIFTLEFT = 39
  public static readonly WHITESPACE = 40
  public static readonly NEWLINE = 41
  public static readonly PRIMITIVETYPE = 42
  public static readonly IDENTIFIER = 43
  public static readonly FORMATSPECIFIERS = 44
  public static readonly NUMBER = 45
  public static readonly CHAR = 46
  public static readonly FLOAT = 47
  public static readonly PLUSPLUS = 48
  public static readonly MINUSMINUS = 49
  public static readonly RULE_start = 0
  public static readonly RULE_stringLiteral = 1
  public static readonly RULE_stringLiteralList = 2
  public static readonly RULE_identifierWithType = 3
  public static readonly RULE_identifierWithTypeList = 4
  public static readonly RULE_identifierList = 5
  public static readonly RULE_numberList = 6
  public static readonly RULE_statement = 7
  public static readonly RULE_expression = 8
  public static readonly RULE_parenthesesExpression = 9
  public static readonly RULE_statementList = 10
  public static readonly RULE_postFix = 11
  public static readonly RULE_conditionalExpression = 12
  public static readonly RULE_expressionStatement = 13
  public static readonly RULE_conditionalStatement = 14
  public static readonly RULE_iterationStatement = 15
  public static readonly RULE_forCondition = 16
  public static readonly RULE_arrayIdentifierWithType = 17
  public static readonly RULE_arrayContent = 18
  public static readonly RULE_arrayInitialisation = 19
  public static readonly RULE_pointer = 20
  public static readonly RULE_pointerDerefernce = 21
  public static readonly RULE_pointerReference = 22
  public static readonly RULE_function = 23
  public static readonly RULE_functionCall = 24
  public static readonly RULE_functionCallParameters = 25
  public static readonly RULE_printf = 26
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'stringLiteral',
    'stringLiteralList',
    'identifierWithType',
    'identifierWithTypeList',
    'identifierList',
    'numberList',
    'statement',
    'expression',
    'parenthesesExpression',
    'statementList',
    'postFix',
    'conditionalExpression',
    'expressionStatement',
    'conditionalStatement',
    'iterationStatement',
    'forCondition',
    'arrayIdentifierWithType',
    'arrayContent',
    'arrayInitialisation',
    'pointer',
    'pointerDerefernce',
    'pointerReference',
    'function',
    'functionCall',
    'functionCallParameters',
    'printf'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'\"'",
    "','",
    "'('",
    "')'",
    "'{'",
    "'}'",
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
    "'printf('",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'%'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'='",
    "'=='",
    "'!='",
    "'^'",
    "'&&'",
    "'||'",
    "'!'",
    "'&'",
    "'|'",
    "'-='",
    "'+='",
    "'>>'",
    "'<<'",
    undefined,
    undefined,
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
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'MOD',
    'LESSTHAN',
    'LESSTHANOREQUAL',
    'GREATERTHAN',
    'GREATERTHANOREQUAL',
    'EQUAL',
    'EQUALCHECK',
    'NOTEQUALCHECK',
    'XOR',
    'AND',
    'OR',
    'NOT',
    'BITWISEAND',
    'BITWISEOR',
    'MINUSEQUAL',
    'PLUSEQUAL',
    'BITSHIFTRIGHT',
    'BITSHIFTLEFT',
    'WHITESPACE',
    'NEWLINE',
    'PRIMITIVETYPE',
    'IDENTIFIER',
    'FORMATSPECIFIERS',
    'NUMBER',
    'CHAR',
    'FLOAT',
    'PLUSPLUS',
    'MINUSMINUS'
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
        this.state = 57
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__9) |
                (1 << ClangParser.T__11) |
                (1 << ClangParser.T__12) |
                (1 << ClangParser.T__13) |
                (1 << ClangParser.T__16) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (ClangParser.NOT - 33)) |
                (1 << (ClangParser.BITWISEAND - 33)) |
                (1 << (ClangParser.PRIMITIVETYPE - 33)) |
                (1 << (ClangParser.IDENTIFIER - 33)) |
                (1 << (ClangParser.NUMBER - 33)))) !==
              0)
        ) {
          {
            {
              this.state = 54
              this.statement()
            }
          }
          this.state = 59
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 60
        this.match(ClangParser.EOF)
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
  public stringLiteral(): StringLiteralContext {
    const _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, ClangParser.RULE_stringLiteral)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 62
        this.match(ClangParser.T__0)
        this.state = 64
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.IDENTIFIER) {
          {
            this.state = 63
            this.match(ClangParser.IDENTIFIER)
          }
        }

        this.state = 66
        this.match(ClangParser.T__0)
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
  public stringLiteralList(): StringLiteralListContext {
    const _localctx: StringLiteralListContext = new StringLiteralListContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, ClangParser.RULE_stringLiteralList)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 68
        this.stringLiteral()
        this.state = 73
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 69
                this.match(ClangParser.T__1)
                this.state = 70
                this.stringLiteral()
              }
            }
          }
          this.state = 75
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
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
    this.enterRule(_localctx, 6, ClangParser.RULE_identifierWithType)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 76
        _localctx._idType = this.match(ClangParser.PRIMITIVETYPE)
        this.state = 77
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
    this.enterRule(_localctx, 8, ClangParser.RULE_identifierWithTypeList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 79
        this.identifierWithType()
        this.state = 84
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 80
              this.match(ClangParser.T__1)
              this.state = 81
              this.identifierWithType()
            }
          }
          this.state = 86
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
    this.enterRule(_localctx, 10, ClangParser.RULE_identifierList)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 87
        this.match(ClangParser.IDENTIFIER)
        this.state = 92
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 88
                this.match(ClangParser.T__1)
                this.state = 89
                this.match(ClangParser.IDENTIFIER)
              }
            }
          }
          this.state = 94
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx)
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
    this.enterRule(_localctx, 12, ClangParser.RULE_numberList)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 95
        this.match(ClangParser.NUMBER)
        this.state = 100
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 96
                this.match(ClangParser.T__1)
                this.state = 97
                this.match(ClangParser.NUMBER)
              }
            }
          }
          this.state = 102
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx)
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
    this.enterRule(_localctx, 14, ClangParser.RULE_statement)
    try {
      this.state = 107
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 103
            this.expressionStatement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 104
            this.conditionalStatement()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 105
            this.iterationStatement()
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 106
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
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, ClangParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 131
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
          case 1:
            {
              _localctx = new TypedIdentifierExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 110
              this.identifierWithType()
            }
            break

          case 2:
            {
              _localctx = new NumberExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 111
              this.match(ClangParser.NUMBER)
            }
            break

          case 3:
            {
              _localctx = new StringLiteralExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 112
              this.stringLiteral()
            }
            break

          case 4:
            {
              _localctx = new IdentifierExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 113
              this.match(ClangParser.IDENTIFIER)
            }
            break

          case 5:
            {
              _localctx = new PostFixNotationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 114
              this.postFix()
            }
            break

          case 6:
            {
              _localctx = new ArrayInitialisationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 115
              this.arrayInitialisation()
            }
            break

          case 7:
            {
              _localctx = new ParenthesisExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 116
              this.match(ClangParser.T__2)
              this.state = 117
              ;(_localctx as ParenthesisExpressionContext)._inner = this.expression(0)
              this.state = 118
              this.match(ClangParser.T__3)
            }
            break

          case 8:
            {
              _localctx = new PointerExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 120
              this.pointer()
            }
            break

          case 9:
            {
              _localctx = new PointerDereferenceExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 121
              this.pointerDerefernce()
            }
            break

          case 10:
            {
              _localctx = new PointerReferenceExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 122
              this.pointerReference()
            }
            break

          case 11:
            {
              _localctx = new FunctionCallExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 123
              this.functionCall()
            }
            break

          case 12:
            {
              _localctx = new PrintfExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 124
              this.printf()
            }
            break

          case 13:
            {
              _localctx = new NegativeContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 125
              ;(_localctx as NegativeContext)._operators = this.match(ClangParser.SUB)
              this.state = 126
              ;(_localctx as NegativeContext)._argument = this.expression(3)
            }
            break

          case 14:
            {
              _localctx = new PositiveContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 127
              ;(_localctx as PositiveContext)._operators = this.match(ClangParser.ADD)
              this.state = 128
              ;(_localctx as PositiveContext)._argument = this.expression(2)
            }
            break

          case 15:
            {
              _localctx = new NotContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 129
              ;(_localctx as NotContext)._operators = this.match(ClangParser.NOT)
              this.state = 130
              ;(_localctx as NotContext)._argument = this.expression(1)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 198
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 196
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as MultiplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 133
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 24)')
                    }
                    this.state = 134
                    ;(_localctx as MultiplicationContext)._operator = this.match(ClangParser.MUL)
                    this.state = 135
                    ;(_localctx as MultiplicationContext)._right = this.expression(25)
                  }
                  break

                case 2:
                  {
                    _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as DivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 136
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 23)')
                    }
                    this.state = 137
                    ;(_localctx as DivisionContext)._operator = this.match(ClangParser.DIV)
                    this.state = 138
                    ;(_localctx as DivisionContext)._right = this.expression(24)
                  }
                  break

                case 3:
                  {
                    _localctx = new ModulusDivisionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as ModulusDivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 139
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 22)')
                    }
                    this.state = 140
                    ;(_localctx as ModulusDivisionContext)._operator = this.match(ClangParser.MOD)
                    this.state = 141
                    ;(_localctx as ModulusDivisionContext)._right = this.expression(23)
                  }
                  break

                case 4:
                  {
                    _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AdditionContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 142
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 21)')
                    }
                    this.state = 143
                    ;(_localctx as AdditionContext)._operator = this.match(ClangParser.ADD)
                    this.state = 144
                    ;(_localctx as AdditionContext)._right = this.expression(22)
                  }
                  break

                case 5:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as SubtractionContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 145
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 20)')
                    }
                    this.state = 146
                    ;(_localctx as SubtractionContext)._operator = this.match(ClangParser.SUB)
                    this.state = 147
                    ;(_localctx as SubtractionContext)._right = this.expression(21)
                  }
                  break

                case 6:
                  {
                    _localctx = new BitShiftLeftContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as BitShiftLeftContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 148
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 19)')
                    }
                    this.state = 149
                    ;(_localctx as BitShiftLeftContext)._operator = this.match(
                      ClangParser.BITSHIFTLEFT
                    )
                    this.state = 150
                    ;(_localctx as BitShiftLeftContext)._right = this.expression(20)
                  }
                  break

                case 7:
                  {
                    _localctx = new BitShiftRightContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as BitShiftRightContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 151
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 18)')
                    }
                    this.state = 152
                    ;(_localctx as BitShiftRightContext)._operator = this.match(
                      ClangParser.BITSHIFTRIGHT
                    )
                    this.state = 153
                    ;(_localctx as BitShiftRightContext)._right = this.expression(19)
                  }
                  break

                case 8:
                  {
                    _localctx = new GreaterThanContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterThanContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 154
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)')
                    }
                    this.state = 155
                    ;(_localctx as GreaterThanContext)._operator = this.match(
                      ClangParser.GREATERTHAN
                    )
                    this.state = 156
                    ;(_localctx as GreaterThanContext)._right = this.expression(18)
                  }
                  break

                case 9:
                  {
                    _localctx = new LesserThanContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserThanContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 157
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)')
                    }
                    this.state = 158
                    ;(_localctx as LesserThanContext)._operator = this.match(ClangParser.LESSTHAN)
                    this.state = 159
                    ;(_localctx as LesserThanContext)._right = this.expression(17)
                  }
                  break

                case 10:
                  {
                    _localctx = new GreaterThanOrEqualContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterThanOrEqualContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 160
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)')
                    }
                    this.state = 161
                    ;(_localctx as GreaterThanOrEqualContext)._operator = this.match(
                      ClangParser.GREATERTHANOREQUAL
                    )
                    this.state = 162
                    ;(_localctx as GreaterThanOrEqualContext)._right = this.expression(16)
                  }
                  break

                case 11:
                  {
                    _localctx = new LesserThanOrEqualContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserThanOrEqualContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 163
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 164
                    ;(_localctx as LesserThanOrEqualContext)._operator = this.match(
                      ClangParser.LESSTHANOREQUAL
                    )
                    this.state = 165
                    ;(_localctx as LesserThanOrEqualContext)._right = this.expression(15)
                  }
                  break

                case 12:
                  {
                    _localctx = new EqualityCheckingContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as EqualityCheckingContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 166
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 167
                    ;(_localctx as EqualityCheckingContext)._operator = this.match(
                      ClangParser.EQUALCHECK
                    )
                    this.state = 168
                    ;(_localctx as EqualityCheckingContext)._right = this.expression(14)
                  }
                  break

                case 13:
                  {
                    _localctx = new NotEqualContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as NotEqualContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 169
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 170
                    ;(_localctx as NotEqualContext)._operator = this.match(
                      ClangParser.NOTEQUALCHECK
                    )
                    this.state = 171
                    ;(_localctx as NotEqualContext)._right = this.expression(13)
                  }
                  break

                case 14:
                  {
                    _localctx = new OrContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as OrContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 172
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 173
                    ;(_localctx as OrContext)._operator = this.match(ClangParser.OR)
                    this.state = 174
                    ;(_localctx as OrContext)._right = this.expression(12)
                  }
                  break

                case 15:
                  {
                    _localctx = new AndContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AndContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 175
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 176
                    ;(_localctx as AndContext)._operator = this.match(ClangParser.AND)
                    this.state = 177
                    ;(_localctx as AndContext)._right = this.expression(11)
                  }
                  break

                case 16:
                  {
                    _localctx = new BitwiseAndContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as BitwiseAndContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 178
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 179
                    ;(_localctx as BitwiseAndContext)._operator = this.match(ClangParser.BITWISEAND)
                    this.state = 180
                    ;(_localctx as BitwiseAndContext)._right = this.expression(10)
                  }
                  break

                case 17:
                  {
                    _localctx = new BitwiseOrContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as BitwiseOrContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 181
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 182
                    ;(_localctx as BitwiseOrContext)._operator = this.match(ClangParser.BITWISEOR)
                    this.state = 183
                    ;(_localctx as BitwiseOrContext)._right = this.expression(9)
                  }
                  break

                case 18:
                  {
                    _localctx = new XorContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as XorContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 184
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 185
                    ;(_localctx as XorContext)._operator = this.match(ClangParser.XOR)
                    this.state = 186
                    ;(_localctx as XorContext)._right = this.expression(8)
                  }
                  break

                case 19:
                  {
                    _localctx = new AssignmentContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AssignmentContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 187
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 188
                    ;(_localctx as AssignmentContext)._operator = this.match(ClangParser.EQUAL)
                    this.state = 189
                    ;(_localctx as AssignmentContext)._right = this.expression(7)
                  }
                  break

                case 20:
                  {
                    _localctx = new AssignAndMinusOneContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AssignAndMinusOneContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 190
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 191
                    ;(_localctx as AssignAndMinusOneContext)._operator = this.match(
                      ClangParser.MINUSEQUAL
                    )
                    this.state = 192
                    ;(_localctx as AssignAndMinusOneContext)._right = this.expression(6)
                  }
                  break

                case 21:
                  {
                    _localctx = new AssignAndAddOneContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AssignAndAddOneContext)._left = _prevctx
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_expression
                    )
                    this.state = 193
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 194
                    ;(_localctx as AssignAndAddOneContext)._operator = this.match(
                      ClangParser.PLUSEQUAL
                    )
                    this.state = 195
                    ;(_localctx as AssignAndAddOneContext)._right = this.expression(5)
                  }
                  break
              }
            }
          }
          this.state = 200
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
    this.enterRule(_localctx, 18, ClangParser.RULE_parenthesesExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 201
        this.match(ClangParser.T__2)
        this.state = 202
        _localctx._inner = this.expression(0)
        this.state = 203
        this.match(ClangParser.T__3)
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
  public statementList(): StatementListContext {
    const _localctx: StatementListContext = new StatementListContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, ClangParser.RULE_statementList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 205
        this.match(ClangParser.T__4)
        this.state = 211
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__9) |
                (1 << ClangParser.T__11) |
                (1 << ClangParser.T__12) |
                (1 << ClangParser.T__13) |
                (1 << ClangParser.T__16) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (ClangParser.NOT - 33)) |
                (1 << (ClangParser.BITWISEAND - 33)) |
                (1 << (ClangParser.PRIMITIVETYPE - 33)) |
                (1 << (ClangParser.IDENTIFIER - 33)) |
                (1 << (ClangParser.NUMBER - 33)))) !==
              0)
        ) {
          {
            this.state = 207
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 206
                  this.statement()
                }
              }
              this.state = 209
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << ClangParser.T__0) |
                    (1 << ClangParser.T__2) |
                    (1 << ClangParser.T__9) |
                    (1 << ClangParser.T__11) |
                    (1 << ClangParser.T__12) |
                    (1 << ClangParser.T__13) |
                    (1 << ClangParser.T__16) |
                    (1 << ClangParser.MUL) |
                    (1 << ClangParser.ADD) |
                    (1 << ClangParser.SUB))) !==
                  0) ||
              (((_la - 33) & ~0x1f) === 0 &&
                ((1 << (_la - 33)) &
                  ((1 << (ClangParser.NOT - 33)) |
                    (1 << (ClangParser.BITWISEAND - 33)) |
                    (1 << (ClangParser.PRIMITIVETYPE - 33)) |
                    (1 << (ClangParser.IDENTIFIER - 33)) |
                    (1 << (ClangParser.NUMBER - 33)))) !==
                  0)
            )
          }
        }

        this.state = 213
        this.match(ClangParser.T__5)
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
  public postFix(): PostFixContext {
    const _localctx: PostFixContext = new PostFixContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, ClangParser.RULE_postFix)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 215
        _localctx._argument = this.match(ClangParser.IDENTIFIER)
        this.state = 216
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
    this.enterRule(_localctx, 24, ClangParser.RULE_conditionalExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 218
        _localctx._test = this.expression(0)
        this.state = 219
        this.match(ClangParser.T__6)
        this.state = 220
        _localctx._consequent = this.expression(0)
        this.state = 221
        this.match(ClangParser.T__7)
        this.state = 222
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
    this.enterRule(_localctx, 26, ClangParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 224
        this.expression(0)
        this.state = 225
        this.match(ClangParser.T__8)
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
  public conditionalStatement(): ConditionalStatementContext {
    const _localctx: ConditionalStatementContext = new ConditionalStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 28, ClangParser.RULE_conditionalStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 227
        this.match(ClangParser.T__9)
        this.state = 228
        this.match(ClangParser.T__2)
        this.state = 229
        _localctx._test = this.expression(0)
        this.state = 230
        this.match(ClangParser.T__3)
        this.state = 231
        _localctx._consequentStatement = this.statement()
        this.state = 234
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
          case 1:
            {
              this.state = 232
              this.match(ClangParser.T__10)
              this.state = 233
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
    this.enterRule(_localctx, 30, ClangParser.RULE_iterationStatement)
    try {
      this.state = 256
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__11:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 236
            this.match(ClangParser.T__11)
            this.state = 237
            this.match(ClangParser.T__2)
            this.state = 238
            _localctx._condition = this.expression(0)
            this.state = 239
            this.match(ClangParser.T__3)
            this.state = 240
            _localctx._body = this.statementList()
          }
          break
        case ClangParser.T__12:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 242
            this.match(ClangParser.T__12)
            this.state = 243
            _localctx._body = this.statementList()
            this.state = 244
            this.match(ClangParser.T__11)
            this.state = 245
            this.match(ClangParser.T__2)
            this.state = 246
            _localctx._condition = this.expression(0)
            this.state = 247
            this.match(ClangParser.T__3)
            this.state = 248
            this.match(ClangParser.T__8)
          }
          break
        case ClangParser.T__13:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 250
            this.match(ClangParser.T__13)
            this.state = 251
            this.match(ClangParser.T__2)
            this.state = 252
            this.forCondition()
            this.state = 253
            this.match(ClangParser.T__3)
            this.state = 254
            _localctx._body = this.statementList()
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
    this.enterRule(_localctx, 32, ClangParser.RULE_forCondition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 258
        _localctx._initialise = this.expression(0)
        this.state = 259
        this.match(ClangParser.T__8)
        this.state = 261
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__16) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (ClangParser.NOT - 33)) |
                (1 << (ClangParser.BITWISEAND - 33)) |
                (1 << (ClangParser.PRIMITIVETYPE - 33)) |
                (1 << (ClangParser.IDENTIFIER - 33)) |
                (1 << (ClangParser.NUMBER - 33)))) !==
              0)
        ) {
          {
            this.state = 260
            _localctx._endCondition = this.expression(0)
          }
        }

        this.state = 263
        this.match(ClangParser.T__8)
        this.state = 264
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
    this.enterRule(_localctx, 34, ClangParser.RULE_arrayIdentifierWithType)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 266
        _localctx._idType = this.match(ClangParser.PRIMITIVETYPE)
        this.state = 267
        _localctx._id = this.match(ClangParser.IDENTIFIER)
        this.state = 268
        this.match(ClangParser.T__14)
        this.state = 270
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.NUMBER) {
          {
            this.state = 269
            _localctx._size = this.match(ClangParser.NUMBER)
          }
        }

        this.state = 272
        this.match(ClangParser.T__15)
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
    this.enterRule(_localctx, 36, ClangParser.RULE_arrayContent)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 274
        this.match(ClangParser.T__4)
        this.state = 277
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.IDENTIFIER:
            {
              this.state = 275
              this.identifierList()
            }
            break
          case ClangParser.NUMBER:
            {
              this.state = 276
              this.numberList()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 279
        this.match(ClangParser.T__5)
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
    this.enterRule(_localctx, 38, ClangParser.RULE_arrayInitialisation)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 281
        this.arrayIdentifierWithType()
        this.state = 285
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
          case 1:
            {
              this.state = 282
              _localctx._operator = this.match(ClangParser.EQUAL)
              this.state = 283
              _localctx._array = this.arrayContent()
            }
            break

          case 2:
            {
              this.state = 284
              this.stringLiteral()
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
    this.enterRule(_localctx, 40, ClangParser.RULE_pointer)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 287
        this.match(ClangParser.PRIMITIVETYPE)
        this.state = 288
        this.match(ClangParser.MUL)
        this.state = 289
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
    this.enterRule(_localctx, 42, ClangParser.RULE_pointerDerefernce)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 291
        _localctx._operator = this.match(ClangParser.MUL)
        this.state = 292
        _localctx._argument = this.match(ClangParser.IDENTIFIER)
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
    this.enterRule(_localctx, 44, ClangParser.RULE_pointerReference)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 294
        _localctx._operator = this.match(ClangParser.BITWISEAND)
        this.state = 295
        _localctx._argument = this.match(ClangParser.IDENTIFIER)
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
    this.enterRule(_localctx, 46, ClangParser.RULE_function)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 297
        _localctx._funcType = this.match(ClangParser.PRIMITIVETYPE)
        {
          this.state = 298
          _localctx._funcName = this.match(ClangParser.IDENTIFIER)
        }
        {
          this.state = 299
          _localctx._params = this.match(ClangParser.T__2)
          this.state = 301
          this._errHandler.sync(this)
          _la = this._input.LA(1)
          if (_la === ClangParser.PRIMITIVETYPE) {
            {
              this.state = 300
              this.identifierWithTypeList()
            }
          }

          this.state = 303
          this.match(ClangParser.T__3)
        }
        this.state = 305
        _localctx._body = this.statementList()
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
    this.enterRule(_localctx, 48, ClangParser.RULE_functionCall)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 307
        this.match(ClangParser.IDENTIFIER)
        this.state = 308
        _localctx._params = this.match(ClangParser.T__2)
        this.state = 309
        this.functionCallParameters()
        this.state = 310
        this.match(ClangParser.T__3)
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
  public functionCallParameters(): FunctionCallParametersContext {
    const _localctx: FunctionCallParametersContext = new FunctionCallParametersContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 50, ClangParser.RULE_functionCallParameters)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 315
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.T__0:
            {
              this.state = 312
              this.stringLiteralList()
            }
            break
          case ClangParser.NUMBER:
            {
              this.state = 313
              this.numberList()
            }
            break
          case ClangParser.IDENTIFIER:
            {
              this.state = 314
              this.identifierList()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 323
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === ClangParser.T__1 ||
          _la === ClangParser.IDENTIFIER ||
          _la === ClangParser.NUMBER
        ) {
          {
            this.state = 321
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.T__1:
                {
                  this.state = 317
                  this.match(ClangParser.T__1)
                  this.state = 318
                  this.stringLiteralList()
                }
                break
              case ClangParser.NUMBER:
                {
                  this.state = 319
                  this.numberList()
                }
                break
              case ClangParser.IDENTIFIER:
                {
                  this.state = 320
                  this.identifierList()
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 325
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
  public printf(): PrintfContext {
    const _localctx: PrintfContext = new PrintfContext(this._ctx, this.state)
    this.enterRule(_localctx, 52, ClangParser.RULE_printf)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 326
        this.match(ClangParser.T__16)
        this.state = 331
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__0 || _la === ClangParser.FORMATSPECIFIERS) {
          {
            this.state = 329
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.T__0:
                {
                  this.state = 327
                  this.stringLiteral()
                }
                break
              case ClangParser.FORMATSPECIFIERS:
                {
                  this.state = 328
                  this.match(ClangParser.FORMATSPECIFIERS)
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 333
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 334
        this.match(ClangParser.T__1)
        this.state = 335
        this.identifierList()
        this.state = 336
        this.match(ClangParser.T__3)
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
      case 8:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 24)

      case 1:
        return this.precpred(this._ctx, 23)

      case 2:
        return this.precpred(this._ctx, 22)

      case 3:
        return this.precpred(this._ctx, 21)

      case 4:
        return this.precpred(this._ctx, 20)

      case 5:
        return this.precpred(this._ctx, 19)

      case 6:
        return this.precpred(this._ctx, 18)

      case 7:
        return this.precpred(this._ctx, 17)

      case 8:
        return this.precpred(this._ctx, 16)

      case 9:
        return this.precpred(this._ctx, 15)

      case 10:
        return this.precpred(this._ctx, 14)

      case 11:
        return this.precpred(this._ctx, 13)

      case 12:
        return this.precpred(this._ctx, 12)

      case 13:
        return this.precpred(this._ctx, 11)

      case 14:
        return this.precpred(this._ctx, 10)

      case 15:
        return this.precpred(this._ctx, 9)

      case 16:
        return this.precpred(this._ctx, 8)

      case 17:
        return this.precpred(this._ctx, 7)

      case 18:
        return this.precpred(this._ctx, 6)

      case 19:
        return this.precpred(this._ctx, 5)

      case 20:
        return this.precpred(this._ctx, 4)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x033\u0155\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x03' +
    '\x02\x07\x02:\n\x02\f\x02\x0E\x02=\v\x02\x03\x02\x03\x02\x03\x03\x03\x03' +
    '\x05\x03C\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04J\n\x04' +
    '\f\x04\x0E\x04M\v\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06' +
    '\x07\x06U\n\x06\f\x06\x0E\x06X\v\x06\x03\x07\x03\x07\x03\x07\x07\x07]' +
    '\n\x07\f\x07\x0E\x07`\v\x07\x03\b\x03\b\x03\b\x07\be\n\b\f\b\x0E\bh\v' +
    '\b\x03\t\x03\t\x03\t\x03\t\x05\tn\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x05\n\x86\n\n\x03\n\x03\n\x03\n\x03\n\x03\n' +
    '\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xC7' +
    '\n\n\f\n\x0E\n\xCA\v\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x06\f\xD2\n' +
    '\f\r\f\x0E\f\xD3\x05\f\xD6\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03' +
    '\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xED\n\x10\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11' +
    '\x03\x11\x05\x11\u0103\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0108\n\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0111' +
    '\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0118\n\x14\x03' +
    '\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0120\n\x15\x03\x16' +
    '\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18' +
    '\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0130\n\x19\x03\x19\x03\x19\x03' +
    '\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03' +
    '\x1B\x05\x1B\u013E\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0144' +
    '\n\x1B\f\x1B\x0E\x1B\u0147\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u014C' +
    '\n\x1C\f\x1C\x0E\x1C\u014F\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C' +
    '\x02\x02\x03\x12\x1D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02' +
    '\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02' +
    '"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02\x02\x03\x03\x02' +
    '23\x02\u0177\x02;\x03\x02\x02\x02\x04@\x03\x02\x02\x02\x06F\x03\x02\x02' +
    '\x02\bN\x03\x02\x02\x02\nQ\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0Ea\x03' +
    '\x02\x02\x02\x10m\x03\x02\x02\x02\x12\x85\x03\x02\x02\x02\x14\xCB\x03' +
    '\x02\x02\x02\x16\xCF\x03\x02\x02\x02\x18\xD9\x03\x02\x02\x02\x1A\xDC\x03' +
    '\x02\x02\x02\x1C\xE2\x03\x02\x02\x02\x1E\xE5\x03\x02\x02\x02 \u0102\x03' +
    '\x02\x02\x02"\u0104\x03\x02\x02\x02$\u010C\x03\x02\x02\x02&\u0114\x03' +
    '\x02\x02\x02(\u011B\x03\x02\x02\x02*\u0121\x03\x02\x02\x02,\u0125\x03' +
    '\x02\x02\x02.\u0128\x03\x02\x02\x020\u012B\x03\x02\x02\x022\u0135\x03' +
    '\x02\x02\x024\u013D\x03\x02\x02\x026\u0148\x03\x02\x02\x028:\x05\x10\t' +
    '\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02' +
    '\x02<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\x02\x02\x03?\x03\x03\x02' +
    '\x02\x02@B\x07\x03\x02\x02AC\x07-\x02\x02BA\x03\x02\x02\x02BC\x03\x02' +
    '\x02\x02CD\x03\x02\x02\x02DE\x07\x03\x02\x02E\x05\x03\x02\x02\x02FK\x05' +
    '\x04\x03\x02GH\x07\x04\x02\x02HJ\x05\x04\x03\x02IG\x03\x02\x02\x02JM\x03' +
    '\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\x07\x03\x02\x02\x02' +
    'MK\x03\x02\x02\x02NO\x07,\x02\x02OP\x07-\x02\x02P\t\x03\x02\x02\x02QV' +
    '\x05\b\x05\x02RS\x07\x04\x02\x02SU\x05\b\x05\x02TR\x03\x02\x02\x02UX\x03' +
    '\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\v\x03\x02\x02\x02XV' +
    '\x03\x02\x02\x02Y^\x07-\x02\x02Z[\x07\x04\x02\x02[]\x07-\x02\x02\\Z\x03' +
    '\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\r' +
    '\x03\x02\x02\x02`^\x03\x02\x02\x02af\x07/\x02\x02bc\x07\x04\x02\x02ce' +
    '\x07/\x02\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg' +
    '\x03\x02\x02\x02g\x0F\x03\x02\x02\x02hf\x03\x02\x02\x02in\x05\x1C\x0F' +
    '\x02jn\x05\x1E\x10\x02kn\x05 \x11\x02ln\x050\x19\x02mi\x03\x02\x02\x02' +
    'mj\x03\x02\x02\x02mk\x03\x02\x02\x02ml\x03\x02\x02\x02n\x11\x03\x02\x02' +
    '\x02op\b\n\x01\x02p\x86\x05\b\x05\x02q\x86\x07/\x02\x02r\x86\x05\x04\x03' +
    '\x02s\x86\x07-\x02\x02t\x86\x05\x18\r\x02u\x86\x05(\x15\x02vw\x07\x05' +
    '\x02\x02wx\x05\x12\n\x02xy\x07\x06\x02\x02y\x86\x03\x02\x02\x02z\x86\x05' +
    '*\x16\x02{\x86\x05,\x17\x02|\x86\x05.\x18\x02}\x86\x052\x1A\x02~\x86\x05' +
    '6\x1C\x02\x7F\x80\x07\x17\x02\x02\x80\x86\x05\x12\n\x05\x81\x82\x07\x16' +
    '\x02\x02\x82\x86\x05\x12\n\x04\x83\x84\x07#\x02\x02\x84\x86\x05\x12\n' +
    '\x03\x85o\x03\x02\x02\x02\x85q\x03\x02\x02\x02\x85r\x03\x02\x02\x02\x85' +
    's\x03\x02\x02\x02\x85t\x03\x02\x02\x02\x85u\x03\x02\x02\x02\x85v\x03\x02' +
    '\x02\x02\x85z\x03\x02\x02\x02\x85{\x03\x02\x02\x02\x85|\x03\x02\x02\x02' +
    '\x85}\x03\x02\x02\x02\x85~\x03\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85' +
    '\x81\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\xC8\x03\x02\x02\x02\x87' +
    '\x88\f\x1A\x02\x02\x88\x89\x07\x14\x02\x02\x89\xC7\x05\x12\n\x1B\x8A\x8B' +
    '\f\x19\x02\x02\x8B\x8C\x07\x15\x02\x02\x8C\xC7\x05\x12\n\x1A\x8D\x8E\f' +
    '\x18\x02\x02\x8E\x8F\x07\x18\x02\x02\x8F\xC7\x05\x12\n\x19\x90\x91\f\x17' +
    '\x02\x02\x91\x92\x07\x16\x02\x02\x92\xC7\x05\x12\n\x18\x93\x94\f\x16\x02' +
    '\x02\x94\x95\x07\x17\x02\x02\x95\xC7\x05\x12\n\x17\x96\x97\f\x15\x02\x02' +
    '\x97\x98\x07)\x02\x02\x98\xC7\x05\x12\n\x16\x99\x9A\f\x14\x02\x02\x9A' +
    '\x9B\x07(\x02\x02\x9B\xC7\x05\x12\n\x15\x9C\x9D\f\x13\x02\x02\x9D\x9E' +
    '\x07\x1B\x02\x02\x9E\xC7\x05\x12\n\x14\x9F\xA0\f\x12\x02\x02\xA0\xA1\x07' +
    '\x19\x02\x02\xA1\xC7\x05\x12\n\x13\xA2\xA3\f\x11\x02\x02\xA3\xA4\x07\x1C' +
    '\x02\x02\xA4\xC7\x05\x12\n\x12\xA5\xA6\f\x10\x02\x02\xA6\xA7\x07\x1A\x02' +
    '\x02\xA7\xC7\x05\x12\n\x11\xA8\xA9\f\x0F\x02\x02\xA9\xAA\x07\x1E\x02\x02' +
    '\xAA\xC7\x05\x12\n\x10\xAB\xAC\f\x0E\x02\x02\xAC\xAD\x07\x1F\x02\x02\xAD' +
    '\xC7\x05\x12\n\x0F\xAE\xAF\f\r\x02\x02\xAF\xB0\x07"\x02\x02\xB0\xC7\x05' +
    '\x12\n\x0E\xB1\xB2\f\f\x02\x02\xB2\xB3\x07!\x02\x02\xB3\xC7\x05\x12\n' +
    '\r\xB4\xB5\f\v\x02\x02\xB5\xB6\x07$\x02\x02\xB6\xC7\x05\x12\n\f\xB7\xB8' +
    '\f\n\x02\x02\xB8\xB9\x07%\x02\x02\xB9\xC7\x05\x12\n\v\xBA\xBB\f\t\x02' +
    '\x02\xBB\xBC\x07 \x02\x02\xBC\xC7\x05\x12\n\n\xBD\xBE\f\b\x02\x02\xBE' +
    '\xBF\x07\x1D\x02\x02\xBF\xC7\x05\x12\n\t\xC0\xC1\f\x07\x02\x02\xC1\xC2' +
    "\x07&\x02\x02\xC2\xC7\x05\x12\n\b\xC3\xC4\f\x06\x02\x02\xC4\xC5\x07'" +
    '\x02\x02\xC5\xC7\x05\x12\n\x07\xC6\x87\x03\x02\x02\x02\xC6\x8A\x03\x02' +
    '\x02\x02\xC6\x8D\x03\x02\x02\x02\xC6\x90\x03\x02\x02\x02\xC6\x93\x03\x02' +
    '\x02\x02\xC6\x96\x03\x02\x02\x02\xC6\x99\x03\x02\x02\x02\xC6\x9C\x03\x02' +
    '\x02\x02\xC6\x9F\x03\x02\x02\x02\xC6\xA2\x03\x02\x02\x02\xC6\xA5\x03\x02' +
    '\x02\x02\xC6\xA8\x03\x02\x02\x02\xC6\xAB\x03\x02\x02\x02\xC6\xAE\x03\x02' +
    '\x02\x02\xC6\xB1\x03\x02\x02\x02\xC6\xB4\x03\x02\x02\x02\xC6\xB7\x03\x02' +
    '\x02\x02\xC6\xBA\x03\x02\x02\x02\xC6\xBD\x03\x02\x02\x02\xC6\xC0\x03\x02' +
    '\x02\x02\xC6\xC3\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02' +
    '\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\x13\x03\x02\x02\x02\xCA\xC8\x03\x02' +
    '\x02\x02\xCB\xCC\x07\x05\x02\x02\xCC\xCD\x05\x12\n\x02\xCD\xCE\x07\x06' +
    '\x02\x02\xCE\x15\x03\x02\x02\x02\xCF\xD5\x07\x07\x02\x02\xD0\xD2\x05\x10' +
    '\t\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02' +
    '\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD1\x03\x02' +
    '\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x07\b' +
    '\x02\x02\xD8\x17\x03\x02\x02\x02\xD9\xDA\x07-\x02\x02\xDA\xDB\t\x02\x02' +
    '\x02\xDB\x19\x03\x02\x02\x02\xDC\xDD\x05\x12\n\x02\xDD\xDE\x07\t\x02\x02' +
    '\xDE\xDF\x05\x12\n\x02\xDF\xE0\x07\n\x02\x02\xE0\xE1\x05\x12\n\x02\xE1' +
    '\x1B\x03\x02\x02\x02\xE2\xE3\x05\x12\n\x02\xE3\xE4\x07\v\x02\x02\xE4\x1D' +
    '\x03\x02\x02\x02\xE5\xE6\x07\f\x02\x02\xE6\xE7\x07\x05\x02\x02\xE7\xE8' +
    '\x05\x12\n\x02\xE8\xE9\x07\x06\x02\x02\xE9\xEC\x05\x10\t\x02\xEA\xEB\x07' +
    '\r\x02\x02\xEB\xED\x05\x10\t\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02' +
    '\x02\x02\xED\x1F\x03\x02\x02\x02\xEE\xEF\x07\x0E\x02\x02\xEF\xF0\x07\x05' +
    '\x02\x02\xF0\xF1\x05\x12\n\x02\xF1\xF2\x07\x06\x02\x02\xF2\xF3\x05\x16' +
    '\f\x02\xF3\u0103\x03\x02\x02\x02\xF4\xF5\x07\x0F\x02\x02\xF5\xF6\x05\x16' +
    '\f\x02\xF6\xF7\x07\x0E\x02\x02\xF7\xF8\x07\x05\x02\x02\xF8\xF9\x05\x12' +
    '\n\x02\xF9\xFA\x07\x06\x02\x02\xFA\xFB\x07\v\x02\x02\xFB\u0103\x03\x02' +
    '\x02\x02\xFC\xFD\x07\x10\x02\x02\xFD\xFE\x07\x05\x02\x02\xFE\xFF\x05"' +
    '\x12\x02\xFF\u0100\x07\x06\x02\x02\u0100\u0101\x05\x16\f\x02\u0101\u0103' +
    '\x03\x02\x02\x02\u0102\xEE\x03\x02\x02\x02\u0102\xF4\x03\x02\x02\x02\u0102' +
    '\xFC\x03\x02\x02\x02\u0103!\x03\x02\x02\x02\u0104\u0105\x05\x12\n\x02' +
    '\u0105\u0107\x07\v\x02\x02\u0106\u0108\x05\x12\n\x02\u0107\u0106\x03\x02' +
    '\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109' +
    '\u010A\x07\v\x02\x02\u010A\u010B\x05\x12\n\x02\u010B#\x03\x02\x02\x02' +
    '\u010C\u010D\x07,\x02\x02\u010D\u010E\x07-\x02\x02\u010E\u0110\x07\x11' +
    '\x02\x02\u010F\u0111\x07/\x02\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111' +
    '\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x07\x12\x02\x02' +
    '\u0113%\x03\x02\x02\x02\u0114\u0117\x07\x07\x02\x02\u0115\u0118\x05\f' +
    '\x07\x02\u0116\u0118\x05\x0E\b\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116' +
    '\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x07\b\x02\x02' +
    "\u011A'\x03\x02\x02\x02\u011B\u011F\x05$\x13\x02\u011C\u011D\x07\x1D" +
    '\x02\x02\u011D\u0120\x05&\x14\x02\u011E\u0120\x05\x04\x03\x02\u011F\u011C' +
    '\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02' +
    '\u0120)\x03\x02\x02\x02\u0121\u0122\x07,\x02\x02\u0122\u0123\x07\x14\x02' +
    '\x02\u0123\u0124\x07-\x02\x02\u0124+\x03\x02\x02\x02\u0125\u0126\x07\x14' +
    '\x02\x02\u0126\u0127\x07-\x02\x02\u0127-\x03\x02\x02\x02\u0128\u0129\x07' +
    '$\x02\x02\u0129\u012A\x07-\x02\x02\u012A/\x03\x02\x02\x02\u012B\u012C' +
    '\x07,\x02\x02\u012C\u012D\x07-\x02\x02\u012D\u012F\x07\x05\x02\x02\u012E' +
    '\u0130\x05\n\x06\x02\u012F\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02' +
    '\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x07\x06\x02\x02\u0132\u0133' +
    '\x03\x02\x02\x02\u0133\u0134\x05\x16\f\x02\u01341\x03\x02\x02\x02\u0135' +
    '\u0136\x07-\x02\x02\u0136\u0137\x07\x05\x02\x02\u0137\u0138\x054\x1B\x02' +
    '\u0138\u0139\x07\x06\x02\x02\u01393\x03\x02\x02\x02\u013A\u013E\x05\x06' +
    '\x04\x02\u013B\u013E\x05\x0E\b\x02\u013C\u013E\x05\f\x07\x02\u013D\u013A' +
    '\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013C\x03\x02\x02\x02' +
    '\u013E\u0145\x03\x02\x02\x02\u013F\u0140\x07\x04\x02\x02\u0140\u0144\x05' +
    '\x06\x04\x02\u0141\u0144\x05\x0E\b\x02\u0142\u0144\x05\f\x07\x02\u0143' +
    '\u013F\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0142\x03\x02' +
    '\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145' +
    '\u0146\x03\x02\x02\x02\u01465\x03\x02\x02\x02\u0147\u0145\x03\x02\x02' +
    '\x02\u0148\u014D\x07\x13\x02\x02\u0149\u014C\x05\x04\x03\x02\u014A\u014C' +
    '\x07.\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02' +
    '\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03' +
    '\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150' +
    '\u0151\x07\x04\x02\x02\u0151\u0152\x05\f\x07\x02\u0152\u0153\x07\x06\x02' +
    '\x02\u01537\x03\x02\x02\x02\x1A;BKV^fm\x85\xC6\xC8\xD3\xD5\xEC\u0102\u0107' +
    '\u0110\u0117\u011F\u012F\u013D\u0143\u0145\u014B\u014D'
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
  public EOF(): TerminalNode {
    return this.getToken(ClangParser.EOF, 0)
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

export class StringLiteralContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_stringLiteral
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStringLiteral) {
      listener.enterStringLiteral(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStringLiteral) {
      listener.exitStringLiteral(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStringLiteral) {
      return visitor.visitStringLiteral(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StringLiteralListContext extends ParserRuleContext {
  public stringLiteral(): StringLiteralContext[]
  public stringLiteral(i: number): StringLiteralContext
  public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StringLiteralContext)
    } else {
      return this.getRuleContext(i, StringLiteralContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_stringLiteralList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStringLiteralList) {
      listener.enterStringLiteralList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStringLiteralList) {
      listener.exitStringLiteralList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStringLiteralList) {
      return visitor.visitStringLiteralList(this)
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
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public conditionalStatement(): ConditionalStatementContext | undefined {
    return this.tryGetRuleContext(0, ConditionalStatementContext)
  }
  public iterationStatement(): IterationStatementContext | undefined {
    return this.tryGetRuleContext(0, IterationStatementContext)
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class TypedIdentifierExpressionContext extends ExpressionContext {
  public identifierWithType(): IdentifierWithTypeContext {
    return this.getRuleContext(0, IdentifierWithTypeContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypedIdentifierExpression) {
      listener.enterTypedIdentifierExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypedIdentifierExpression) {
      listener.exitTypedIdentifierExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypedIdentifierExpression) {
      return visitor.visitTypedIdentifierExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NumberExpressionContext extends ExpressionContext {
  public NUMBER(): TerminalNode {
    return this.getToken(ClangParser.NUMBER, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNumberExpression) {
      listener.enterNumberExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNumberExpression) {
      listener.exitNumberExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNumberExpression) {
      return visitor.visitNumberExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StringLiteralExpressionContext extends ExpressionContext {
  public stringLiteral(): StringLiteralContext {
    return this.getRuleContext(0, StringLiteralContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStringLiteralExpression) {
      listener.enterStringLiteralExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStringLiteralExpression) {
      listener.exitStringLiteralExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStringLiteralExpression) {
      return visitor.visitStringLiteralExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdentifierExpressionContext extends ExpressionContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitIdentifierExpression) {
      return visitor.visitIdentifierExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PostFixNotationExpressionContext extends ExpressionContext {
  public postFix(): PostFixContext {
    return this.getRuleContext(0, PostFixContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPostFixNotationExpression) {
      listener.enterPostFixNotationExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPostFixNotationExpression) {
      listener.exitPostFixNotationExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPostFixNotationExpression) {
      return visitor.visitPostFixNotationExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ArrayInitialisationExpressionContext extends ExpressionContext {
  public arrayInitialisation(): ArrayInitialisationContext {
    return this.getRuleContext(0, ArrayInitialisationContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterArrayInitialisationExpression) {
      listener.enterArrayInitialisationExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitArrayInitialisationExpression) {
      listener.exitArrayInitialisationExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitArrayInitialisationExpression) {
      return visitor.visitArrayInitialisationExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenthesisExpressionContext extends ExpressionContext {
  public _inner!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterParenthesisExpression) {
      listener.enterParenthesisExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitParenthesisExpression) {
      listener.exitParenthesisExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitParenthesisExpression) {
      return visitor.visitParenthesisExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PointerExpressionContext extends ExpressionContext {
  public pointer(): PointerContext {
    return this.getRuleContext(0, PointerContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerExpression) {
      listener.enterPointerExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerExpression) {
      listener.exitPointerExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerExpression) {
      return visitor.visitPointerExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PointerDereferenceExpressionContext extends ExpressionContext {
  public pointerDerefernce(): PointerDerefernceContext {
    return this.getRuleContext(0, PointerDerefernceContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerDereferenceExpression) {
      listener.enterPointerDereferenceExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerDereferenceExpression) {
      listener.exitPointerDereferenceExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerDereferenceExpression) {
      return visitor.visitPointerDereferenceExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PointerReferenceExpressionContext extends ExpressionContext {
  public pointerReference(): PointerReferenceContext {
    return this.getRuleContext(0, PointerReferenceContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerReferenceExpression) {
      listener.enterPointerReferenceExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerReferenceExpression) {
      listener.exitPointerReferenceExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerReferenceExpression) {
      return visitor.visitPointerReferenceExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionCallExpressionContext extends ExpressionContext {
  public functionCall(): FunctionCallContext {
    return this.getRuleContext(0, FunctionCallContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionCallExpression) {
      listener.enterFunctionCallExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionCallExpression) {
      listener.exitFunctionCallExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionCallExpression) {
      return visitor.visitFunctionCallExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PrintfExpressionContext extends ExpressionContext {
  public printf(): PrintfContext {
    return this.getRuleContext(0, PrintfContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPrintfExpression) {
      listener.enterPrintfExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPrintfExpression) {
      listener.exitPrintfExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPrintfExpression) {
      return visitor.visitPrintfExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultiplicationContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MUL(): TerminalNode {
    return this.getToken(ClangParser.MUL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterMultiplication) {
      listener.enterMultiplication(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitMultiplication) {
      listener.exitMultiplication(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitMultiplication) {
      return visitor.visitMultiplication(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DivisionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public DIV(): TerminalNode {
    return this.getToken(ClangParser.DIV, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDivision) {
      listener.enterDivision(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDivision) {
      listener.exitDivision(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDivision) {
      return visitor.visitDivision(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ModulusDivisionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MOD(): TerminalNode {
    return this.getToken(ClangParser.MOD, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterModulusDivision) {
      listener.enterModulusDivision(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitModulusDivision) {
      listener.exitModulusDivision(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitModulusDivision) {
      return visitor.visitModulusDivision(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AdditionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public ADD(): TerminalNode {
    return this.getToken(ClangParser.ADD, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAddition) {
      listener.enterAddition(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAddition) {
      listener.exitAddition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAddition) {
      return visitor.visitAddition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class SubtractionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public SUB(): TerminalNode {
    return this.getToken(ClangParser.SUB, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterSubtraction) {
      listener.enterSubtraction(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitSubtraction) {
      listener.exitSubtraction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitSubtraction) {
      return visitor.visitSubtraction(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BitShiftLeftContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public BITSHIFTLEFT(): TerminalNode {
    return this.getToken(ClangParser.BITSHIFTLEFT, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBitShiftLeft) {
      listener.enterBitShiftLeft(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBitShiftLeft) {
      listener.exitBitShiftLeft(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBitShiftLeft) {
      return visitor.visitBitShiftLeft(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BitShiftRightContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public BITSHIFTRIGHT(): TerminalNode {
    return this.getToken(ClangParser.BITSHIFTRIGHT, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBitShiftRight) {
      listener.enterBitShiftRight(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBitShiftRight) {
      listener.exitBitShiftRight(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBitShiftRight) {
      return visitor.visitBitShiftRight(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class GreaterThanContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public GREATERTHAN(): TerminalNode {
    return this.getToken(ClangParser.GREATERTHAN, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterGreaterThan) {
      listener.enterGreaterThan(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitGreaterThan) {
      listener.exitGreaterThan(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitGreaterThan) {
      return visitor.visitGreaterThan(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LesserThanContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public LESSTHAN(): TerminalNode {
    return this.getToken(ClangParser.LESSTHAN, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterLesserThan) {
      listener.enterLesserThan(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitLesserThan) {
      listener.exitLesserThan(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitLesserThan) {
      return visitor.visitLesserThan(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class GreaterThanOrEqualContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public GREATERTHANOREQUAL(): TerminalNode {
    return this.getToken(ClangParser.GREATERTHANOREQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterGreaterThanOrEqual) {
      listener.enterGreaterThanOrEqual(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitGreaterThanOrEqual) {
      listener.exitGreaterThanOrEqual(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitGreaterThanOrEqual) {
      return visitor.visitGreaterThanOrEqual(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LesserThanOrEqualContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public LESSTHANOREQUAL(): TerminalNode {
    return this.getToken(ClangParser.LESSTHANOREQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterLesserThanOrEqual) {
      listener.enterLesserThanOrEqual(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitLesserThanOrEqual) {
      listener.exitLesserThanOrEqual(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitLesserThanOrEqual) {
      return visitor.visitLesserThanOrEqual(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EqualityCheckingContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public EQUALCHECK(): TerminalNode {
    return this.getToken(ClangParser.EQUALCHECK, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterEqualityChecking) {
      listener.enterEqualityChecking(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitEqualityChecking) {
      listener.exitEqualityChecking(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitEqualityChecking) {
      return visitor.visitEqualityChecking(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NotEqualContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public NOTEQUALCHECK(): TerminalNode {
    return this.getToken(ClangParser.NOTEQUALCHECK, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNotEqual) {
      listener.enterNotEqual(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNotEqual) {
      listener.exitNotEqual(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNotEqual) {
      return visitor.visitNotEqual(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class OrContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public OR(): TerminalNode {
    return this.getToken(ClangParser.OR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterOr) {
      listener.enterOr(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitOr) {
      listener.exitOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitOr) {
      return visitor.visitOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AndContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public AND(): TerminalNode {
    return this.getToken(ClangParser.AND, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAnd) {
      listener.enterAnd(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAnd) {
      listener.exitAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAnd) {
      return visitor.visitAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BitwiseAndContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public BITWISEAND(): TerminalNode {
    return this.getToken(ClangParser.BITWISEAND, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBitwiseAnd) {
      listener.enterBitwiseAnd(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBitwiseAnd) {
      listener.exitBitwiseAnd(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBitwiseAnd) {
      return visitor.visitBitwiseAnd(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BitwiseOrContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public BITWISEOR(): TerminalNode {
    return this.getToken(ClangParser.BITWISEOR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBitwiseOr) {
      listener.enterBitwiseOr(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBitwiseOr) {
      listener.exitBitwiseOr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBitwiseOr) {
      return visitor.visitBitwiseOr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class XorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public XOR(): TerminalNode {
    return this.getToken(ClangParser.XOR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterXor) {
      listener.enterXor(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitXor) {
      listener.exitXor(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitXor) {
      return visitor.visitXor(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssignmentContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public EQUAL(): TerminalNode {
    return this.getToken(ClangParser.EQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAssignment) {
      listener.enterAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAssignment) {
      listener.exitAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAssignment) {
      return visitor.visitAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssignAndMinusOneContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MINUSEQUAL(): TerminalNode {
    return this.getToken(ClangParser.MINUSEQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAssignAndMinusOne) {
      listener.enterAssignAndMinusOne(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAssignAndMinusOne) {
      listener.exitAssignAndMinusOne(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAssignAndMinusOne) {
      return visitor.visitAssignAndMinusOne(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssignAndAddOneContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public PLUSEQUAL(): TerminalNode {
    return this.getToken(ClangParser.PLUSEQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAssignAndAddOne) {
      listener.enterAssignAndAddOne(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAssignAndAddOne) {
      listener.exitAssignAndAddOne(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAssignAndAddOne) {
      return visitor.visitAssignAndAddOne(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NegativeContext extends ExpressionContext {
  public _operators!: Token
  public _argument!: ExpressionContext
  public SUB(): TerminalNode {
    return this.getToken(ClangParser.SUB, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNegative) {
      listener.enterNegative(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNegative) {
      listener.exitNegative(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNegative) {
      return visitor.visitNegative(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PositiveContext extends ExpressionContext {
  public _operators!: Token
  public _argument!: ExpressionContext
  public ADD(): TerminalNode {
    return this.getToken(ClangParser.ADD, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPositive) {
      listener.enterPositive(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPositive) {
      listener.exitPositive(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPositive) {
      return visitor.visitPositive(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NotContext extends ExpressionContext {
  public _operators!: Token
  public _argument!: ExpressionContext
  public NOT(): TerminalNode {
    return this.getToken(ClangParser.NOT, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNot) {
      listener.enterNot(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNot) {
      listener.exitNot(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNot) {
      return visitor.visitNot(this)
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

export class StatementListContext extends ParserRuleContext {
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
    return ClangParser.RULE_statementList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStatementList) {
      listener.enterStatementList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStatementList) {
      listener.exitStatementList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStatementList) {
      return visitor.visitStatementList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PostFixContext extends ParserRuleContext {
  public _argument!: Token
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  public PLUSPLUS(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.PLUSPLUS, 0)
  }
  public MINUSMINUS(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.MINUSMINUS, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_postFix
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPostFix) {
      listener.enterPostFix(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPostFix) {
      listener.exitPostFix(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPostFix) {
      return visitor.visitPostFix(this)
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

export class ConditionalStatementContext extends ParserRuleContext {
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
    return ClangParser.RULE_conditionalStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterConditionalStatement) {
      listener.enterConditionalStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitConditionalStatement) {
      listener.exitConditionalStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitConditionalStatement) {
      return visitor.visitConditionalStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IterationStatementContext extends ParserRuleContext {
  public _condition!: ExpressionContext
  public _body!: StatementListContext
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public statementList(): StatementListContext {
    return this.getRuleContext(0, StatementListContext)
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
  public stringLiteral(): StringLiteralContext | undefined {
    return this.tryGetRuleContext(0, StringLiteralContext)
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.EQUAL, 0)
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
  public MUL(): TerminalNode {
    return this.getToken(ClangParser.MUL, 0)
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
  public _operator!: Token
  public _argument!: Token
  public MUL(): TerminalNode {
    return this.getToken(ClangParser.MUL, 0)
  }
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
  public _operator!: Token
  public _argument!: Token
  public BITWISEAND(): TerminalNode {
    return this.getToken(ClangParser.BITWISEAND, 0)
  }
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
  public _body!: StatementListContext
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public statementList(): StatementListContext {
    return this.getRuleContext(0, StatementListContext)
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
  public functionCallParameters(): FunctionCallParametersContext {
    return this.getRuleContext(0, FunctionCallParametersContext)
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

export class FunctionCallParametersContext extends ParserRuleContext {
  public stringLiteralList(): StringLiteralListContext[]
  public stringLiteralList(i: number): StringLiteralListContext
  public stringLiteralList(i?: number): StringLiteralListContext | StringLiteralListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StringLiteralListContext)
    } else {
      return this.getRuleContext(i, StringLiteralListContext)
    }
  }
  public numberList(): NumberListContext[]
  public numberList(i: number): NumberListContext
  public numberList(i?: number): NumberListContext | NumberListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NumberListContext)
    } else {
      return this.getRuleContext(i, NumberListContext)
    }
  }
  public identifierList(): IdentifierListContext[]
  public identifierList(i: number): IdentifierListContext
  public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierListContext)
    } else {
      return this.getRuleContext(i, IdentifierListContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_functionCallParameters
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionCallParameters) {
      listener.enterFunctionCallParameters(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionCallParameters) {
      listener.exitFunctionCallParameters(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionCallParameters) {
      return visitor.visitFunctionCallParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PrintfContext extends ParserRuleContext {
  public identifierList(): IdentifierListContext {
    return this.getRuleContext(0, IdentifierListContext)
  }
  public stringLiteral(): StringLiteralContext[]
  public stringLiteral(i: number): StringLiteralContext
  public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StringLiteralContext)
    } else {
      return this.getRuleContext(i, StringLiteralContext)
    }
  }
  public FORMATSPECIFIERS(): TerminalNode[]
  public FORMATSPECIFIERS(i: number): TerminalNode
  public FORMATSPECIFIERS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.FORMATSPECIFIERS)
    } else {
      return this.getToken(ClangParser.FORMATSPECIFIERS, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_printf
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPrintf) {
      listener.enterPrintf(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPrintf) {
      listener.exitPrintf(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPrintf) {
      return visitor.visitPrintf(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
