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
  public static readonly MUL = 19
  public static readonly DIV = 20
  public static readonly ADD = 21
  public static readonly SUB = 22
  public static readonly MOD = 23
  public static readonly LESSTHAN = 24
  public static readonly LESSTHANOREQUAL = 25
  public static readonly GREATERTHAN = 26
  public static readonly GREATERTHANOREQUAL = 27
  public static readonly EQUAL = 28
  public static readonly EQUALCHECK = 29
  public static readonly NOTEQUALCHECK = 30
  public static readonly XOR = 31
  public static readonly AND = 32
  public static readonly OR = 33
  public static readonly NOT = 34
  public static readonly BITWISEAND = 35
  public static readonly BITWISEOR = 36
  public static readonly MINUSEQUAL = 37
  public static readonly PLUSEQUAL = 38
  public static readonly BITSHIFTRIGHT = 39
  public static readonly BITSHIFTLEFT = 40
  public static readonly WHITESPACE = 41
  public static readonly NEWLINE = 42
  public static readonly PRIMITIVETYPE = 43
  public static readonly SIGNEDTYPE = 44
  public static readonly IDENTIFIER = 45
  public static readonly FORMATSPECIFIERS = 46
  public static readonly NUMBER = 47
  public static readonly CHAR = 48
  public static readonly FLOAT = 49
  public static readonly PLUSPLUS = 50
  public static readonly MINUSMINUS = 51
  public static readonly RULE_start = 0
  public static readonly RULE_stringLiteral = 1
  public static readonly RULE_stringLiteralList = 2
  public static readonly RULE_identifierWithType = 3
  public static readonly RULE_type = 4
  public static readonly RULE_identifierWithTypeList = 5
  public static readonly RULE_identifierList = 6
  public static readonly RULE_expressionList = 7
  public static readonly RULE_numberList = 8
  public static readonly RULE_pointerList = 9
  public static readonly RULE_statement = 10
  public static readonly RULE_expression = 11
  public static readonly RULE_statementBlock = 12
  public static readonly RULE_parenthesesExpression = 13
  public static readonly RULE_postFix = 14
  public static readonly RULE_conditionalExpression = 15
  public static readonly RULE_returnStatement = 16
  public static readonly RULE_expressionStatement = 17
  public static readonly RULE_conditionalStatement = 18
  public static readonly RULE_iterationStatement = 19
  public static readonly RULE_whileLoop = 20
  public static readonly RULE_doWhileLoop = 21
  public static readonly RULE_forLoop = 22
  public static readonly RULE_forCondition = 23
  public static readonly RULE_arrayIdentifierWithType = 24
  public static readonly RULE_arrayContent = 25
  public static readonly RULE_arrayInitialisation = 26
  public static readonly RULE_pointer = 27
  public static readonly RULE_pointerDerefernce = 28
  public static readonly RULE_pointerReference = 29
  public static readonly RULE_functionDeclaration = 30
  public static readonly RULE_function = 31
  public static readonly RULE_functionCall = 32
  public static readonly RULE_functionCallParameters = 33
  public static readonly RULE_printf = 34
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'start',
    'stringLiteral',
    'stringLiteralList',
    'identifierWithType',
    'type',
    'identifierWithTypeList',
    'identifierList',
    'expressionList',
    'numberList',
    'pointerList',
    'statement',
    'expression',
    'statementBlock',
    'parenthesesExpression',
    'postFix',
    'conditionalExpression',
    'returnStatement',
    'expressionStatement',
    'conditionalStatement',
    'iterationStatement',
    'whileLoop',
    'doWhileLoop',
    'forLoop',
    'forCondition',
    'arrayIdentifierWithType',
    'arrayContent',
    'arrayInitialisation',
    'pointer',
    'pointerDerefernce',
    'pointerReference',
    'functionDeclaration',
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
    "'?'",
    "':'",
    "'return'",
    "';'",
    "'if'",
    "'{'",
    "'}'",
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
    'SIGNEDTYPE',
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
        this.state = 73
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__6) |
                (1 << ClangParser.T__8) |
                (1 << ClangParser.T__12) |
                (1 << ClangParser.T__13) |
                (1 << ClangParser.T__14) |
                (1 << ClangParser.T__17) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (ClangParser.NOT - 34)) |
                (1 << (ClangParser.BITWISEAND - 34)) |
                (1 << (ClangParser.PRIMITIVETYPE - 34)) |
                (1 << (ClangParser.SIGNEDTYPE - 34)) |
                (1 << (ClangParser.IDENTIFIER - 34)) |
                (1 << (ClangParser.NUMBER - 34)) |
                (1 << (ClangParser.CHAR - 34)) |
                (1 << (ClangParser.FLOAT - 34)))) !==
              0)
        ) {
          {
            {
              this.state = 70
              this.statement()
            }
          }
          this.state = 75
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
  public stringLiteral(): StringLiteralContext {
    const _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, ClangParser.RULE_stringLiteral)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 76
        this.match(ClangParser.T__0)
        this.state = 78
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.IDENTIFIER) {
          {
            this.state = 77
            this.match(ClangParser.IDENTIFIER)
          }
        }

        this.state = 80
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
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 82
        this.stringLiteral()
        this.state = 87
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 83
              this.match(ClangParser.T__1)
              this.state = 84
              this.stringLiteral()
            }
          }
          this.state = 89
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
    this.enterRule(_localctx, 6, ClangParser.RULE_identifierWithType)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 90
        _localctx._idType = this.type()
        this.state = 91
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
  public type(): TypeContext {
    const _localctx: TypeContext = new TypeContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, ClangParser.RULE_type)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 94
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.SIGNEDTYPE) {
          {
            this.state = 93
            _localctx._signed = this.match(ClangParser.SIGNEDTYPE)
          }
        }

        this.state = 96
        _localctx._primType = this.match(ClangParser.PRIMITIVETYPE)
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
    this.enterRule(_localctx, 10, ClangParser.RULE_identifierWithTypeList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 98
        this.identifierWithType()
        this.state = 103
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 99
              this.match(ClangParser.T__1)
              this.state = 100
              this.identifierWithType()
            }
          }
          this.state = 105
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
    this.enterRule(_localctx, 12, ClangParser.RULE_identifierList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 106
        this.match(ClangParser.IDENTIFIER)
        this.state = 111
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 107
              this.match(ClangParser.T__1)
              this.state = 108
              this.match(ClangParser.IDENTIFIER)
            }
          }
          this.state = 113
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
  public expressionList(): ExpressionListContext {
    const _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, ClangParser.RULE_expressionList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 114
        this.expression(0)
        this.state = 119
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 115
              this.match(ClangParser.T__1)
              this.state = 116
              this.expression(0)
            }
          }
          this.state = 121
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
    this.enterRule(_localctx, 16, ClangParser.RULE_numberList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 122
        this.match(ClangParser.NUMBER)
        this.state = 127
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 123
              this.match(ClangParser.T__1)
              this.state = 124
              this.match(ClangParser.NUMBER)
            }
          }
          this.state = 129
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
  public pointerList(): PointerListContext {
    const _localctx: PointerListContext = new PointerListContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, ClangParser.RULE_pointerList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 130
        this.pointer()
        this.state = 135
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__1) {
          {
            {
              this.state = 131
              this.match(ClangParser.T__1)
              this.state = 132
              this.pointer()
            }
          }
          this.state = 137
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
    this.enterRule(_localctx, 20, ClangParser.RULE_statement)
    try {
      this.state = 143
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 138
            this.expressionStatement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 139
            this.conditionalStatement()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 140
            this.iterationStatement()
          }
          break

        case 4:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 141
            this.returnStatement()
          }
          break

        case 5:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 142
            this.functionDeclaration()
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
    const _startState: number = 22
    this.enterRecursionRule(_localctx, 22, ClangParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 169
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              _localctx = new VariableDeclarationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 146
              this.identifierWithType()
            }
            break

          case 2:
            {
              _localctx = new NumberExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 147
              this.match(ClangParser.NUMBER)
            }
            break

          case 3:
            {
              _localctx = new CharExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 148
              this.match(ClangParser.CHAR)
            }
            break

          case 4:
            {
              _localctx = new FloatExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 149
              this.match(ClangParser.FLOAT)
            }
            break

          case 5:
            {
              _localctx = new StringLiteralExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 150
              this.stringLiteral()
            }
            break

          case 6:
            {
              _localctx = new IdentifierExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 151
              this.match(ClangParser.IDENTIFIER)
            }
            break

          case 7:
            {
              _localctx = new PostFixNotationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 152
              this.postFix()
            }
            break

          case 8:
            {
              _localctx = new ArrayInitialisationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 153
              this.arrayInitialisation()
            }
            break

          case 9:
            {
              _localctx = new ParenthesisExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 154
              this.match(ClangParser.T__2)
              this.state = 155
              ;(_localctx as ParenthesisExpressionContext)._inner = this.expression(0)
              this.state = 156
              this.match(ClangParser.T__3)
            }
            break

          case 10:
            {
              _localctx = new PointerDeclarationExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 158
              this.pointer()
            }
            break

          case 11:
            {
              _localctx = new PointerDereferenceExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 159
              this.pointerDerefernce()
            }
            break

          case 12:
            {
              _localctx = new PointerReferenceExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 160
              this.pointerReference()
            }
            break

          case 13:
            {
              _localctx = new FunctionCallExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 161
              this.functionCall()
            }
            break

          case 14:
            {
              _localctx = new PrintfExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 162
              this.printf()
            }
            break

          case 15:
            {
              _localctx = new NegativeContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 163
              ;(_localctx as NegativeContext)._operators = this.match(ClangParser.SUB)
              this.state = 164
              ;(_localctx as NegativeContext)._argument = this.expression(3)
            }
            break

          case 16:
            {
              _localctx = new PositiveContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 165
              ;(_localctx as PositiveContext)._operators = this.match(ClangParser.ADD)
              this.state = 166
              ;(_localctx as PositiveContext)._argument = this.expression(2)
            }
            break

          case 17:
            {
              _localctx = new NotContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 167
              ;(_localctx as NotContext)._operators = this.match(ClangParser.NOT)
              this.state = 168
              ;(_localctx as NotContext)._argument = this.parenthesesExpression()
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 236
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 234
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
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
                    this.state = 171
                    if (!this.precpred(this._ctx, 24)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 24)')
                    }
                    this.state = 172
                    ;(_localctx as MultiplicationContext)._operator = this.match(ClangParser.MUL)
                    this.state = 173
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
                    this.state = 174
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 23)')
                    }
                    this.state = 175
                    ;(_localctx as DivisionContext)._operator = this.match(ClangParser.DIV)
                    this.state = 176
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
                    this.state = 177
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 22)')
                    }
                    this.state = 178
                    ;(_localctx as ModulusDivisionContext)._operator = this.match(ClangParser.MOD)
                    this.state = 179
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
                    this.state = 180
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 21)')
                    }
                    this.state = 181
                    ;(_localctx as AdditionContext)._operator = this.match(ClangParser.ADD)
                    this.state = 182
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
                    this.state = 183
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 20)')
                    }
                    this.state = 184
                    ;(_localctx as SubtractionContext)._operator = this.match(ClangParser.SUB)
                    this.state = 185
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
                    this.state = 186
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 19)')
                    }
                    this.state = 187
                    ;(_localctx as BitShiftLeftContext)._operator = this.match(
                      ClangParser.BITSHIFTLEFT
                    )
                    this.state = 188
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
                    this.state = 189
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 18)')
                    }
                    this.state = 190
                    ;(_localctx as BitShiftRightContext)._operator = this.match(
                      ClangParser.BITSHIFTRIGHT
                    )
                    this.state = 191
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
                    this.state = 192
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)')
                    }
                    this.state = 193
                    ;(_localctx as GreaterThanContext)._operator = this.match(
                      ClangParser.GREATERTHAN
                    )
                    this.state = 194
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
                    this.state = 195
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)')
                    }
                    this.state = 196
                    ;(_localctx as LesserThanContext)._operator = this.match(ClangParser.LESSTHAN)
                    this.state = 197
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
                    this.state = 198
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)')
                    }
                    this.state = 199
                    ;(_localctx as GreaterThanOrEqualContext)._operator = this.match(
                      ClangParser.GREATERTHANOREQUAL
                    )
                    this.state = 200
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
                    this.state = 201
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 202
                    ;(_localctx as LesserThanOrEqualContext)._operator = this.match(
                      ClangParser.LESSTHANOREQUAL
                    )
                    this.state = 203
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
                    this.state = 204
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 205
                    ;(_localctx as EqualityCheckingContext)._operator = this.match(
                      ClangParser.EQUALCHECK
                    )
                    this.state = 206
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
                    this.state = 207
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 208
                    ;(_localctx as NotEqualContext)._operator = this.match(
                      ClangParser.NOTEQUALCHECK
                    )
                    this.state = 209
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
                    this.state = 210
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 211
                    ;(_localctx as OrContext)._operator = this.match(ClangParser.OR)
                    this.state = 212
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
                    this.state = 213
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 214
                    ;(_localctx as AndContext)._operator = this.match(ClangParser.AND)
                    this.state = 215
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
                    this.state = 216
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 217
                    ;(_localctx as BitwiseAndContext)._operator = this.match(ClangParser.BITWISEAND)
                    this.state = 218
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
                    this.state = 219
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 220
                    ;(_localctx as BitwiseOrContext)._operator = this.match(ClangParser.BITWISEOR)
                    this.state = 221
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
                    this.state = 222
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 223
                    ;(_localctx as XorContext)._operator = this.match(ClangParser.XOR)
                    this.state = 224
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
                    this.state = 225
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 226
                    ;(_localctx as AssignmentContext)._operator = this.match(ClangParser.EQUAL)
                    this.state = 227
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
                    this.state = 228
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 229
                    ;(_localctx as AssignAndMinusOneContext)._operator = this.match(
                      ClangParser.MINUSEQUAL
                    )
                    this.state = 230
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
                    this.state = 231
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 232
                    ;(_localctx as AssignAndAddOneContext)._operator = this.match(
                      ClangParser.PLUSEQUAL
                    )
                    this.state = 233
                    ;(_localctx as AssignAndAddOneContext)._right = this.expression(5)
                  }
                  break
              }
            }
          }
          this.state = 238
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx)
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
  public statementBlock(): StatementBlockContext {
    const _localctx: StatementBlockContext = new StatementBlockContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, ClangParser.RULE_statementBlock)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 242
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__6) |
                (1 << ClangParser.T__8) |
                (1 << ClangParser.T__12) |
                (1 << ClangParser.T__13) |
                (1 << ClangParser.T__14) |
                (1 << ClangParser.T__17) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (ClangParser.NOT - 34)) |
                (1 << (ClangParser.BITWISEAND - 34)) |
                (1 << (ClangParser.PRIMITIVETYPE - 34)) |
                (1 << (ClangParser.SIGNEDTYPE - 34)) |
                (1 << (ClangParser.IDENTIFIER - 34)) |
                (1 << (ClangParser.NUMBER - 34)) |
                (1 << (ClangParser.CHAR - 34)) |
                (1 << (ClangParser.FLOAT - 34)))) !==
              0)
        ) {
          {
            {
              this.state = 239
              this.statement()
            }
          }
          this.state = 244
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
  public parenthesesExpression(): ParenthesesExpressionContext {
    const _localctx: ParenthesesExpressionContext = new ParenthesesExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 26, ClangParser.RULE_parenthesesExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 245
        this.match(ClangParser.T__2)
        this.state = 246
        _localctx._inner = this.expression(0)
        this.state = 247
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
  public postFix(): PostFixContext {
    const _localctx: PostFixContext = new PostFixContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, ClangParser.RULE_postFix)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 249
        _localctx._argument = this.match(ClangParser.IDENTIFIER)
        this.state = 250
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
    this.enterRule(_localctx, 30, ClangParser.RULE_conditionalExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 252
        _localctx._test = this.expression(0)
        this.state = 253
        this.match(ClangParser.T__4)
        this.state = 254
        _localctx._consequent = this.expression(0)
        this.state = 255
        this.match(ClangParser.T__5)
        this.state = 256
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
  public returnStatement(): ReturnStatementContext {
    const _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 32, ClangParser.RULE_returnStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 258
        this.match(ClangParser.T__6)
        this.state = 260
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__17) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (ClangParser.NOT - 34)) |
                (1 << (ClangParser.BITWISEAND - 34)) |
                (1 << (ClangParser.PRIMITIVETYPE - 34)) |
                (1 << (ClangParser.SIGNEDTYPE - 34)) |
                (1 << (ClangParser.IDENTIFIER - 34)) |
                (1 << (ClangParser.NUMBER - 34)) |
                (1 << (ClangParser.CHAR - 34)) |
                (1 << (ClangParser.FLOAT - 34)))) !==
              0)
        ) {
          {
            this.state = 259
            _localctx._argument = this.expression(0)
          }
        }

        this.state = 262
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
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 34, ClangParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 264
        this.expression(0)
        this.state = 265
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
  public conditionalStatement(): ConditionalStatementContext {
    const _localctx: ConditionalStatementContext = new ConditionalStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 36, ClangParser.RULE_conditionalStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 267
        this.match(ClangParser.T__8)
        this.state = 268
        this.match(ClangParser.T__2)
        this.state = 269
        _localctx._test = this.expression(0)
        this.state = 270
        this.match(ClangParser.T__3)
        this.state = 271
        this.match(ClangParser.T__9)
        this.state = 272
        _localctx._consequentStatement = this.statementBlock()
        this.state = 273
        this.match(ClangParser.T__10)
        this.state = 282
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.T__11) {
          {
            this.state = 274
            this.match(ClangParser.T__11)
            this.state = 280
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.T__9:
                {
                  this.state = 275
                  this.match(ClangParser.T__9)
                  this.state = 276
                  _localctx._alternateStatementBlock = this.statementBlock()
                  this.state = 277
                  this.match(ClangParser.T__10)
                }
                break
              case ClangParser.T__8:
                {
                  this.state = 279
                  _localctx._elseIfStatement = this.conditionalStatement()
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
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
    this.enterRule(_localctx, 38, ClangParser.RULE_iterationStatement)
    try {
      this.state = 287
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__12:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 284
            this.whileLoop()
          }
          break
        case ClangParser.T__13:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 285
            this.doWhileLoop()
          }
          break
        case ClangParser.T__14:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 286
            this.forLoop()
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
  public whileLoop(): WhileLoopContext {
    const _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state)
    this.enterRule(_localctx, 40, ClangParser.RULE_whileLoop)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 289
        this.match(ClangParser.T__12)
        this.state = 290
        this.match(ClangParser.T__2)
        this.state = 291
        _localctx._condition = this.expression(0)
        this.state = 292
        this.match(ClangParser.T__3)
        this.state = 293
        this.match(ClangParser.T__9)
        this.state = 294
        _localctx._body = this.statementBlock()
        this.state = 295
        this.match(ClangParser.T__10)
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
  public doWhileLoop(): DoWhileLoopContext {
    const _localctx: DoWhileLoopContext = new DoWhileLoopContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, ClangParser.RULE_doWhileLoop)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 297
        this.match(ClangParser.T__13)
        this.state = 298
        this.match(ClangParser.T__9)
        this.state = 299
        _localctx._body = this.statementBlock()
        this.state = 300
        this.match(ClangParser.T__10)
        this.state = 301
        this.match(ClangParser.T__12)
        this.state = 302
        this.match(ClangParser.T__2)
        this.state = 303
        _localctx._condition = this.expression(0)
        this.state = 304
        this.match(ClangParser.T__3)
        this.state = 305
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
  public forLoop(): ForLoopContext {
    const _localctx: ForLoopContext = new ForLoopContext(this._ctx, this.state)
    this.enterRule(_localctx, 44, ClangParser.RULE_forLoop)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 307
        this.match(ClangParser.T__14)
        this.state = 308
        this.match(ClangParser.T__2)
        this.state = 309
        _localctx._innerForCondition = this.forCondition()
        this.state = 310
        this.match(ClangParser.T__3)
        this.state = 311
        this.match(ClangParser.T__9)
        this.state = 312
        _localctx._body = this.statementBlock()
        this.state = 313
        this.match(ClangParser.T__10)
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
    this.enterRule(_localctx, 46, ClangParser.RULE_forCondition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 315
        _localctx._initialise = this.expression(0)
        this.state = 316
        this.match(ClangParser.T__7)
        this.state = 318
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__2) |
                (1 << ClangParser.T__17) |
                (1 << ClangParser.MUL) |
                (1 << ClangParser.ADD) |
                (1 << ClangParser.SUB))) !==
              0) ||
          (((_la - 34) & ~0x1f) === 0 &&
            ((1 << (_la - 34)) &
              ((1 << (ClangParser.NOT - 34)) |
                (1 << (ClangParser.BITWISEAND - 34)) |
                (1 << (ClangParser.PRIMITIVETYPE - 34)) |
                (1 << (ClangParser.SIGNEDTYPE - 34)) |
                (1 << (ClangParser.IDENTIFIER - 34)) |
                (1 << (ClangParser.NUMBER - 34)) |
                (1 << (ClangParser.CHAR - 34)) |
                (1 << (ClangParser.FLOAT - 34)))) !==
              0)
        ) {
          {
            this.state = 317
            _localctx._test = this.expression(0)
          }
        }

        this.state = 320
        this.match(ClangParser.T__7)
        this.state = 321
        _localctx._update = this.expression(0)
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
    this.enterRule(_localctx, 48, ClangParser.RULE_arrayIdentifierWithType)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 323
        _localctx._idType = this.type()
        this.state = 324
        _localctx._id = this.match(ClangParser.IDENTIFIER)
        this.state = 325
        this.match(ClangParser.T__15)
        this.state = 327
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.NUMBER) {
          {
            this.state = 326
            _localctx._size = this.match(ClangParser.NUMBER)
          }
        }

        this.state = 329
        this.match(ClangParser.T__16)
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
    this.enterRule(_localctx, 50, ClangParser.RULE_arrayContent)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 331
        this.match(ClangParser.T__9)
        this.state = 335
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.PRIMITIVETYPE:
          case ClangParser.SIGNEDTYPE:
            {
              this.state = 332
              this.pointerList()
            }
            break
          case ClangParser.NUMBER:
            {
              this.state = 333
              this.numberList()
            }
            break
          case ClangParser.IDENTIFIER:
            {
              this.state = 334
              this.identifierList()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 337
        this.match(ClangParser.T__10)
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
    this.enterRule(_localctx, 52, ClangParser.RULE_arrayInitialisation)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 339
        this.arrayIdentifierWithType()
        this.state = 343
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
          case 1:
            {
              this.state = 340
              _localctx._operator = this.match(ClangParser.EQUAL)
              this.state = 341
              _localctx._array = this.arrayContent()
            }
            break

          case 2:
            {
              this.state = 342
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
    this.enterRule(_localctx, 54, ClangParser.RULE_pointer)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 345
        _localctx._idType = this.type()
        this.state = 346
        this.match(ClangParser.MUL)
        this.state = 347
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
  public pointerDerefernce(): PointerDerefernceContext {
    const _localctx: PointerDerefernceContext = new PointerDerefernceContext(this._ctx, this.state)
    this.enterRule(_localctx, 56, ClangParser.RULE_pointerDerefernce)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 349
        _localctx._operator = this.match(ClangParser.MUL)
        this.state = 350
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
    this.enterRule(_localctx, 58, ClangParser.RULE_pointerReference)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 352
        _localctx._operator = this.match(ClangParser.BITWISEAND)
        this.state = 353
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
  public functionDeclaration(): FunctionDeclarationContext {
    const _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 60, ClangParser.RULE_functionDeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 355
        this.function()
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
    this.enterRule(_localctx, 62, ClangParser.RULE_function)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 357
        _localctx._idType = this.type()
        this.state = 358
        _localctx._id = this.match(ClangParser.IDENTIFIER)
        {
          this.state = 359
          this.match(ClangParser.T__2)
          this.state = 360
          _localctx._params = this.identifierWithTypeList()
          this.state = 361
          this.match(ClangParser.T__3)
        }
        this.state = 363
        this.match(ClangParser.T__9)
        this.state = 364
        _localctx._body = this.statementBlock()
        this.state = 365
        this.match(ClangParser.T__10)
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
    this.enterRule(_localctx, 64, ClangParser.RULE_functionCall)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 367
        _localctx._func = this.match(ClangParser.IDENTIFIER)
        this.state = 368
        this.match(ClangParser.T__2)
        this.state = 369
        _localctx._args = this.functionCallParameters()
        this.state = 370
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
    this.enterRule(_localctx, 66, ClangParser.RULE_functionCallParameters)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 372
        this.expressionList()
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
    this.enterRule(_localctx, 68, ClangParser.RULE_printf)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 374
        this.match(ClangParser.T__17)
        this.state = 379
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.T__0 || _la === ClangParser.FORMATSPECIFIERS) {
          {
            this.state = 377
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.T__0:
                {
                  this.state = 375
                  this.stringLiteral()
                }
                break
              case ClangParser.FORMATSPECIFIERS:
                {
                  this.state = 376
                  this.match(ClangParser.FORMATSPECIFIERS)
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 381
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 382
        this.match(ClangParser.T__1)
        this.state = 383
        this.identifierList()
        this.state = 384
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
      case 11:
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\u0185\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    '\t#\x04$\t$\x03\x02\x07\x02J\n\x02\f\x02\x0E\x02M\v\x02\x03\x03\x03\x03' +
    '\x05\x03Q\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04X\n\x04' +
    '\f\x04\x0E\x04[\v\x04\x03\x05\x03\x05\x03\x05\x03\x06\x05\x06a\n\x06\x03' +
    '\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07h\n\x07\f\x07\x0E\x07k\v\x07' +
    '\x03\b\x03\b\x03\b\x07\bp\n\b\f\b\x0E\bs\v\b\x03\t\x03\t\x03\t\x07\tx' +
    '\n\t\f\t\x0E\t{\v\t\x03\n\x03\n\x03\n\x07\n\x80\n\n\f\n\x0E\n\x83\v\n' +
    '\x03\v\x03\v\x03\v\x07\v\x88\n\v\f\v\x0E\v\x8B\v\v\x03\f\x03\f\x03\f\x03' +
    '\f\x03\f\x05\f\x92\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r' +
    '\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x05\r\xAC\n\r\x03\r\x03\r\x03\r\x03\r\x03\r' +
    '\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xED' +
    '\n\r\f\r\x0E\r\xF0\v\r\x03\x0E\x07\x0E\xF3\n\x0E\f\x0E\x0E\x0E\xF6\v\x0E' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0107\n\x12\x03' +
    '\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05' +
    '\x14\u011B\n\x14\x05\x14\u011D\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0122' +
    '\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16' +
    '\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17' +
    '\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18' +
    '\x03\x19\x03\x19\x03\x19\x05\x19\u0141\n\x19\x03\x19\x03\x19\x03\x19\x03' +
    '\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u014A\n\x1A\x03\x1A\x03\x1A\x03\x1B' +
    '\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0152\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03' +
    '\x1C\x03\x1C\x03\x1C\x05\x1C\u015A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03' +
    '!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03"\x03"\x03"\x03"\x03"\x03' +
    '#\x03#\x03$\x03$\x03$\x07$\u017C\n$\f$\x0E$\u017F\v$\x03$\x03$\x03$\x03' +
    '$\x03$\x02\x02\x03\x18%\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 ' +
    '\x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
    '<\x02>\x02@\x02B\x02D\x02F\x02\x02\x03\x03\x0245\x02\u01A1\x02K\x03\x02' +
    '\x02\x02\x04N\x03\x02\x02\x02\x06T\x03\x02\x02\x02\b\\\x03\x02\x02\x02' +
    '\n`\x03\x02\x02\x02\fd\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10t\x03\x02' +
    '\x02\x02\x12|\x03\x02\x02\x02\x14\x84\x03\x02\x02\x02\x16\x91\x03\x02' +
    '\x02\x02\x18\xAB\x03\x02\x02\x02\x1A\xF4\x03\x02\x02\x02\x1C\xF7\x03\x02' +
    '\x02\x02\x1E\xFB\x03\x02\x02\x02 \xFE\x03\x02\x02\x02"\u0104\x03\x02' +
    '\x02\x02$\u010A\x03\x02\x02\x02&\u010D\x03\x02\x02\x02(\u0121\x03\x02' +
    '\x02\x02*\u0123\x03\x02\x02\x02,\u012B\x03\x02\x02\x02.\u0135\x03\x02' +
    '\x02\x020\u013D\x03\x02\x02\x022\u0145\x03\x02\x02\x024\u014D\x03\x02' +
    '\x02\x026\u0155\x03\x02\x02\x028\u015B\x03\x02\x02\x02:\u015F\x03\x02' +
    '\x02\x02<\u0162\x03\x02\x02\x02>\u0165\x03\x02\x02\x02@\u0167\x03\x02' +
    '\x02\x02B\u0171\x03\x02\x02\x02D\u0176\x03\x02\x02\x02F\u0178\x03\x02' +
    '\x02\x02HJ\x05\x16\f\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02' +
    '\x02\x02KL\x03\x02\x02\x02L\x03\x03\x02\x02\x02MK\x03\x02\x02\x02NP\x07' +
    '\x03\x02\x02OQ\x07/\x02\x02PO\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x03' +
    '\x02\x02\x02RS\x07\x03\x02\x02S\x05\x03\x02\x02\x02TY\x05\x04\x03\x02' +
    'UV\x07\x04\x02\x02VX\x05\x04\x03\x02WU\x03\x02\x02\x02X[\x03\x02\x02\x02' +
    'YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x07\x03\x02\x02\x02[Y\x03\x02\x02' +
    '\x02\\]\x05\n\x06\x02]^\x07/\x02\x02^\t\x03\x02\x02\x02_a\x07.\x02\x02' +
    '`_\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x07-\x02\x02' +
    'c\v\x03\x02\x02\x02di\x05\b\x05\x02ef\x07\x04\x02\x02fh\x05\b\x05\x02' +
    'ge\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02' +
    'j\r\x03\x02\x02\x02ki\x03\x02\x02\x02lq\x07/\x02\x02mn\x07\x04\x02\x02' +
    'np\x07/\x02\x02om\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02' +
    'qr\x03\x02\x02\x02r\x0F\x03\x02\x02\x02sq\x03\x02\x02\x02ty\x05\x18\r' +
    '\x02uv\x07\x04\x02\x02vx\x05\x18\r\x02wu\x03\x02\x02\x02x{\x03\x02\x02' +
    '\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x11\x03\x02\x02\x02{y\x03\x02' +
    '\x02\x02|\x81\x071\x02\x02}~\x07\x04\x02\x02~\x80\x071\x02\x02\x7F}\x03' +
    '\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03' +
    '\x02\x02\x02\x82\x13\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x89\x05' +
    '8\x1D\x02\x85\x86\x07\x04\x02\x02\x86\x88\x058\x1D\x02\x87\x85\x03\x02' +
    '\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02' +
    '\x02\x02\x8A\x15\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x92\x05$' +
    '\x13\x02\x8D\x92\x05&\x14\x02\x8E\x92\x05(\x15\x02\x8F\x92\x05"\x12\x02' +
    '\x90\x92\x05> \x02\x91\x8C\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x91' +
    '\x8E\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92' +
    '\x17\x03\x02\x02\x02\x93\x94\b\r\x01\x02\x94\xAC\x05\b\x05\x02\x95\xAC' +
    '\x071\x02\x02\x96\xAC\x072\x02\x02\x97\xAC\x073\x02\x02\x98\xAC\x05\x04' +
    '\x03\x02\x99\xAC\x07/\x02\x02\x9A\xAC\x05\x1E\x10\x02\x9B\xAC\x056\x1C' +
    '\x02\x9C\x9D\x07\x05\x02\x02\x9D\x9E\x05\x18\r\x02\x9E\x9F\x07\x06\x02' +
    '\x02\x9F\xAC\x03\x02\x02\x02\xA0\xAC\x058\x1D\x02\xA1\xAC\x05:\x1E\x02' +
    '\xA2\xAC\x05<\x1F\x02\xA3\xAC\x05B"\x02\xA4\xAC\x05F$\x02\xA5\xA6\x07' +
    '\x18\x02\x02\xA6\xAC\x05\x18\r\x05\xA7\xA8\x07\x17\x02\x02\xA8\xAC\x05' +
    '\x18\r\x04\xA9\xAA\x07$\x02\x02\xAA\xAC\x05\x1C\x0F\x02\xAB\x93\x03\x02' +
    '\x02\x02\xAB\x95\x03\x02\x02\x02\xAB\x96\x03\x02\x02\x02\xAB\x97\x03\x02' +
    '\x02\x02\xAB\x98\x03\x02\x02\x02\xAB\x99\x03\x02\x02\x02\xAB\x9A\x03\x02' +
    '\x02\x02\xAB\x9B\x03\x02\x02\x02\xAB\x9C\x03\x02\x02\x02\xAB\xA0\x03\x02' +
    '\x02\x02\xAB\xA1\x03\x02\x02\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA3\x03\x02' +
    '\x02\x02\xAB\xA4\x03\x02\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xA7\x03\x02' +
    '\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xEE\x03\x02\x02\x02\xAD\xAE\f\x1A' +
    '\x02\x02\xAE\xAF\x07\x15\x02\x02\xAF\xED\x05\x18\r\x1B\xB0\xB1\f\x19\x02' +
    '\x02\xB1\xB2\x07\x16\x02\x02\xB2\xED\x05\x18\r\x1A\xB3\xB4\f\x18\x02\x02' +
    '\xB4\xB5\x07\x19\x02\x02\xB5\xED\x05\x18\r\x19\xB6\xB7\f\x17\x02\x02\xB7' +
    '\xB8\x07\x17\x02\x02\xB8\xED\x05\x18\r\x18\xB9\xBA\f\x16\x02\x02\xBA\xBB' +
    '\x07\x18\x02\x02\xBB\xED\x05\x18\r\x17\xBC\xBD\f\x15\x02\x02\xBD\xBE\x07' +
    '*\x02\x02\xBE\xED\x05\x18\r\x16\xBF\xC0\f\x14\x02\x02\xC0\xC1\x07)\x02' +
    '\x02\xC1\xED\x05\x18\r\x15\xC2\xC3\f\x13\x02\x02\xC3\xC4\x07\x1C\x02\x02' +
    '\xC4\xED\x05\x18\r\x14\xC5\xC6\f\x12\x02\x02\xC6\xC7\x07\x1A\x02\x02\xC7' +
    '\xED\x05\x18\r\x13\xC8\xC9\f\x11\x02\x02\xC9\xCA\x07\x1D\x02\x02\xCA\xED' +
    '\x05\x18\r\x12\xCB\xCC\f\x10\x02\x02\xCC\xCD\x07\x1B\x02\x02\xCD\xED\x05' +
    '\x18\r\x11\xCE\xCF\f\x0F\x02\x02\xCF\xD0\x07\x1F\x02\x02\xD0\xED\x05\x18' +
    '\r\x10\xD1\xD2\f\x0E\x02\x02\xD2\xD3\x07 \x02\x02\xD3\xED\x05\x18\r\x0F' +
    '\xD4\xD5\f\r\x02\x02\xD5\xD6\x07#\x02\x02\xD6\xED\x05\x18\r\x0E\xD7\xD8' +
    '\f\f\x02\x02\xD8\xD9\x07"\x02\x02\xD9\xED\x05\x18\r\r\xDA\xDB\f\v\x02' +
    '\x02\xDB\xDC\x07%\x02\x02\xDC\xED\x05\x18\r\f\xDD\xDE\f\n\x02\x02\xDE' +
    '\xDF\x07&\x02\x02\xDF\xED\x05\x18\r\v\xE0\xE1\f\t\x02\x02\xE1\xE2\x07' +
    '!\x02\x02\xE2\xED\x05\x18\r\n\xE3\xE4\f\b\x02\x02\xE4\xE5\x07\x1E\x02' +
    "\x02\xE5\xED\x05\x18\r\t\xE6\xE7\f\x07\x02\x02\xE7\xE8\x07'\x02\x02\xE8" +
    '\xED\x05\x18\r\b\xE9\xEA\f\x06\x02\x02\xEA\xEB\x07(\x02\x02\xEB\xED\x05' +
    '\x18\r\x07\xEC\xAD\x03\x02\x02\x02\xEC\xB0\x03\x02\x02\x02\xEC\xB3\x03' +
    '\x02\x02\x02\xEC\xB6\x03\x02\x02\x02\xEC\xB9\x03\x02\x02\x02\xEC\xBC\x03' +
    '\x02\x02\x02\xEC\xBF\x03\x02\x02\x02\xEC\xC2\x03\x02\x02\x02\xEC\xC5\x03' +
    '\x02\x02\x02\xEC\xC8\x03\x02\x02\x02\xEC\xCB\x03\x02\x02\x02\xEC\xCE\x03' +
    '\x02\x02\x02\xEC\xD1\x03\x02\x02\x02\xEC\xD4\x03\x02\x02\x02\xEC\xD7\x03' +
    '\x02\x02\x02\xEC\xDA\x03\x02\x02\x02\xEC\xDD\x03\x02\x02\x02\xEC\xE0\x03' +
    '\x02\x02\x02\xEC\xE3\x03\x02\x02\x02\xEC\xE6\x03\x02\x02\x02\xEC\xE9\x03' +
    '\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03' +
    '\x02\x02\x02\xEF\x19\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF3\x05' +
    '\x16\f\x02\xF2\xF1\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03' +
    '\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x1B\x03\x02\x02\x02\xF6\xF4\x03' +
    '\x02\x02\x02\xF7\xF8\x07\x05\x02\x02\xF8\xF9\x05\x18\r\x02\xF9\xFA\x07' +
    '\x06\x02\x02\xFA\x1D\x03\x02\x02\x02\xFB\xFC\x07/\x02\x02\xFC\xFD\t\x02' +
    '\x02\x02\xFD\x1F\x03\x02\x02\x02\xFE\xFF\x05\x18\r\x02\xFF\u0100\x07\x07' +
    '\x02\x02\u0100\u0101\x05\x18\r\x02\u0101\u0102\x07\b\x02\x02\u0102\u0103' +
    '\x05\x18\r\x02\u0103!\x03\x02\x02\x02\u0104\u0106\x07\t\x02\x02\u0105' +
    '\u0107\x05\x18\r\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02' +
    '\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07\n\x02\x02\u0109#\x03' +
    '\x02\x02\x02\u010A\u010B\x05\x18\r\x02\u010B\u010C\x07\n\x02\x02\u010C' +
    '%\x03\x02\x02\x02\u010D\u010E\x07\v\x02\x02\u010E\u010F\x07\x05\x02\x02' +
    '\u010F\u0110\x05\x18\r\x02\u0110\u0111\x07\x06\x02\x02\u0111\u0112\x07' +
    '\f\x02\x02\u0112\u0113\x05\x1A\x0E\x02\u0113\u011C\x07\r\x02\x02\u0114' +
    '\u011A\x07\x0E\x02\x02\u0115\u0116\x07\f\x02\x02\u0116\u0117\x05\x1A\x0E' +
    '\x02\u0117\u0118\x07\r\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u011B' +
    '\x05&\x14\x02\u011A\u0115\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02' +
    '\u011B\u011D\x03\x02\x02\x02\u011C\u0114\x03\x02\x02\x02\u011C\u011D\x03' +
    "\x02\x02\x02\u011D'\x03\x02\x02\x02\u011E\u0122\x05*\x16\x02\u011F\u0122" +
    '\x05,\x17\x02\u0120\u0122\x05.\x18\x02\u0121\u011E\x03\x02\x02\x02\u0121' +
    '\u011F\x03\x02\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122)\x03\x02\x02' +
    '\x02\u0123\u0124\x07\x0F\x02\x02\u0124\u0125\x07\x05\x02\x02\u0125\u0126' +
    '\x05\x18\r\x02\u0126\u0127\x07\x06\x02\x02\u0127\u0128\x07\f\x02\x02\u0128' +
    '\u0129\x05\x1A\x0E\x02\u0129\u012A\x07\r\x02\x02\u012A+\x03\x02\x02\x02' +
    '\u012B\u012C\x07\x10\x02\x02\u012C\u012D\x07\f\x02\x02\u012D\u012E\x05' +
    '\x1A\x0E\x02\u012E\u012F\x07\r\x02\x02\u012F\u0130\x07\x0F\x02\x02\u0130' +
    '\u0131\x07\x05\x02\x02\u0131\u0132\x05\x18\r\x02\u0132\u0133\x07\x06\x02' +
    '\x02\u0133\u0134\x07\n\x02\x02\u0134-\x03\x02\x02\x02\u0135\u0136\x07' +
    '\x11\x02\x02\u0136\u0137\x07\x05\x02\x02\u0137\u0138\x050\x19\x02\u0138' +
    '\u0139\x07\x06\x02\x02\u0139\u013A\x07\f\x02\x02\u013A\u013B\x05\x1A\x0E' +
    '\x02\u013B\u013C\x07\r\x02\x02\u013C/\x03\x02\x02\x02\u013D\u013E\x05' +
    '\x18\r\x02\u013E\u0140\x07\n\x02\x02\u013F\u0141\x05\x18\r\x02\u0140\u013F' +
    '\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02' +
    '\u0142\u0143\x07\n\x02\x02\u0143\u0144\x05\x18\r\x02\u01441\x03\x02\x02' +
    '\x02\u0145\u0146\x05\n\x06\x02\u0146\u0147\x07/\x02\x02\u0147\u0149\x07' +
    '\x12\x02\x02\u0148\u014A\x071\x02\x02\u0149\u0148\x03\x02\x02\x02\u0149' +
    '\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x07\x13' +
    '\x02\x02\u014C3\x03\x02\x02\x02\u014D\u0151\x07\f\x02\x02\u014E\u0152' +
    '\x05\x14\v\x02\u014F\u0152\x05\x12\n\x02\u0150\u0152\x05\x0E\b\x02\u0151' +
    '\u014E\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0150\x03\x02' +
    '\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x07\r\x02\x02\u01545' +
    '\x03\x02\x02\x02\u0155\u0159\x052\x1A\x02\u0156\u0157\x07\x1E\x02\x02' +
    '\u0157\u015A\x054\x1B\x02\u0158\u015A\x05\x04\x03\x02\u0159\u0156\x03' +
    '\x02\x02\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A' +
    '7\x03\x02\x02\x02\u015B\u015C\x05\n\x06\x02\u015C\u015D\x07\x15\x02\x02' +
    '\u015D\u015E\x07/\x02\x02\u015E9\x03\x02\x02\x02\u015F\u0160\x07\x15\x02' +
    '\x02\u0160\u0161\x07/\x02\x02\u0161;\x03\x02\x02\x02\u0162\u0163\x07%' +
    '\x02\x02\u0163\u0164\x07/\x02\x02\u0164=\x03\x02\x02\x02\u0165\u0166\x05' +
    '@!\x02\u0166?\x03\x02\x02\x02\u0167\u0168\x05\n\x06\x02\u0168\u0169\x07' +
    '/\x02\x02\u0169\u016A\x07\x05\x02\x02\u016A\u016B\x05\f\x07\x02\u016B' +
    '\u016C\x07\x06\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\f\x02' +
    '\x02\u016E\u016F\x05\x1A\x0E\x02\u016F\u0170\x07\r\x02\x02\u0170A\x03' +
    '\x02\x02\x02\u0171\u0172\x07/\x02\x02\u0172\u0173\x07\x05\x02\x02\u0173' +
    '\u0174\x05D#\x02\u0174\u0175\x07\x06\x02\x02\u0175C\x03\x02\x02\x02\u0176' +
    '\u0177\x05\x10\t\x02\u0177E\x03\x02\x02\x02\u0178\u017D\x07\x14\x02\x02' +
    '\u0179\u017C\x05\x04\x03\x02\u017A\u017C\x070\x02\x02\u017B\u0179\x03' +
    '\x02\x02\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D' +
    '\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02' +
    '\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181\x07\x04\x02\x02\u0181' +
    '\u0182\x05\x0E\b\x02\u0182\u0183\x07\x06\x02\x02\u0183G\x03\x02\x02\x02' +
    '\x1AKPY`iqy\x81\x89\x91\xAB\xEC\xEE\xF4\u0106\u011A\u011C\u0121\u0140' +
    '\u0149\u0151\u0159\u017B\u017D'
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
  public _idType!: TypeContext
  public _id!: Token
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
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

export class TypeContext extends ParserRuleContext {
  public _signed!: Token
  public _primType!: Token
  public PRIMITIVETYPE(): TerminalNode {
    return this.getToken(ClangParser.PRIMITIVETYPE, 0)
  }
  public SIGNEDTYPE(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.SIGNEDTYPE, 0)
  }
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

export class ExpressionListContext extends ParserRuleContext {
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
    return ClangParser.RULE_expressionList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this)
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

export class PointerListContext extends ParserRuleContext {
  public pointer(): PointerContext[]
  public pointer(i: number): PointerContext
  public pointer(i?: number): PointerContext | PointerContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PointerContext)
    } else {
      return this.getRuleContext(i, PointerContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_pointerList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerList) {
      listener.enterPointerList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerList) {
      listener.exitPointerList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerList) {
      return visitor.visitPointerList(this)
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
  public returnStatement(): ReturnStatementContext | undefined {
    return this.tryGetRuleContext(0, ReturnStatementContext)
  }
  public functionDeclaration(): FunctionDeclarationContext | undefined {
    return this.tryGetRuleContext(0, FunctionDeclarationContext)
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
export class VariableDeclarationExpressionContext extends ExpressionContext {
  public identifierWithType(): IdentifierWithTypeContext {
    return this.getRuleContext(0, IdentifierWithTypeContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterVariableDeclarationExpression) {
      listener.enterVariableDeclarationExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitVariableDeclarationExpression) {
      listener.exitVariableDeclarationExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitVariableDeclarationExpression) {
      return visitor.visitVariableDeclarationExpression(this)
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
export class CharExpressionContext extends ExpressionContext {
  public CHAR(): TerminalNode {
    return this.getToken(ClangParser.CHAR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterCharExpression) {
      listener.enterCharExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitCharExpression) {
      listener.exitCharExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitCharExpression) {
      return visitor.visitCharExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FloatExpressionContext extends ExpressionContext {
  public FLOAT(): TerminalNode {
    return this.getToken(ClangParser.FLOAT, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFloatExpression) {
      listener.enterFloatExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFloatExpression) {
      listener.exitFloatExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFloatExpression) {
      return visitor.visitFloatExpression(this)
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
export class PointerDeclarationExpressionContext extends ExpressionContext {
  public pointer(): PointerContext {
    return this.getRuleContext(0, PointerContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPointerDeclarationExpression) {
      listener.enterPointerDeclarationExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPointerDeclarationExpression) {
      listener.exitPointerDeclarationExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPointerDeclarationExpression) {
      return visitor.visitPointerDeclarationExpression(this)
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
  public _argument!: ParenthesesExpressionContext
  public NOT(): TerminalNode {
    return this.getToken(ClangParser.NOT, 0)
  }
  public parenthesesExpression(): ParenthesesExpressionContext {
    return this.getRuleContext(0, ParenthesesExpressionContext)
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

export class StatementBlockContext extends ParserRuleContext {
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
    return ClangParser.RULE_statementBlock
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStatementBlock) {
      listener.enterStatementBlock(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStatementBlock) {
      listener.exitStatementBlock(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStatementBlock) {
      return visitor.visitStatementBlock(this)
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

export class ReturnStatementContext extends ParserRuleContext {
  public _argument!: ExpressionContext
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_returnStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterReturnStatement) {
      listener.enterReturnStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitReturnStatement) {
      listener.exitReturnStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitReturnStatement) {
      return visitor.visitReturnStatement(this)
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
  public _consequentStatement!: StatementBlockContext
  public _alternateStatementBlock!: StatementBlockContext
  public _elseIfStatement!: ConditionalStatementContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statementBlock(): StatementBlockContext[]
  public statementBlock(i: number): StatementBlockContext
  public statementBlock(i?: number): StatementBlockContext | StatementBlockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementBlockContext)
    } else {
      return this.getRuleContext(i, StatementBlockContext)
    }
  }
  public conditionalStatement(): ConditionalStatementContext | undefined {
    return this.tryGetRuleContext(0, ConditionalStatementContext)
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
  public whileLoop(): WhileLoopContext | undefined {
    return this.tryGetRuleContext(0, WhileLoopContext)
  }
  public doWhileLoop(): DoWhileLoopContext | undefined {
    return this.tryGetRuleContext(0, DoWhileLoopContext)
  }
  public forLoop(): ForLoopContext | undefined {
    return this.tryGetRuleContext(0, ForLoopContext)
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

export class WhileLoopContext extends ParserRuleContext {
  public _condition!: ExpressionContext
  public _body!: StatementBlockContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_whileLoop
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterWhileLoop) {
      listener.enterWhileLoop(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitWhileLoop) {
      listener.exitWhileLoop(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitWhileLoop) {
      return visitor.visitWhileLoop(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DoWhileLoopContext extends ParserRuleContext {
  public _body!: StatementBlockContext
  public _condition!: ExpressionContext
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_doWhileLoop
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDoWhileLoop) {
      listener.enterDoWhileLoop(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDoWhileLoop) {
      listener.exitDoWhileLoop(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDoWhileLoop) {
      return visitor.visitDoWhileLoop(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForLoopContext extends ParserRuleContext {
  public _innerForCondition!: ForConditionContext
  public _body!: StatementBlockContext
  public forCondition(): ForConditionContext {
    return this.getRuleContext(0, ForConditionContext)
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_forLoop
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterForLoop) {
      listener.enterForLoop(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitForLoop) {
      listener.exitForLoop(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitForLoop) {
      return visitor.visitForLoop(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForConditionContext extends ParserRuleContext {
  public _initialise!: ExpressionContext
  public _test!: ExpressionContext
  public _update!: ExpressionContext
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
  public _idType!: TypeContext
  public _id!: Token
  public _size!: Token
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
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
  public pointerList(): PointerListContext | undefined {
    return this.tryGetRuleContext(0, PointerListContext)
  }
  public numberList(): NumberListContext | undefined {
    return this.tryGetRuleContext(0, NumberListContext)
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
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
  public _idType!: TypeContext
  public _id!: Token
  public MUL(): TerminalNode {
    return this.getToken(ClangParser.MUL, 0)
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
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

export class FunctionDeclarationContext extends ParserRuleContext {
  public function(): FunctionContext {
    return this.getRuleContext(0, FunctionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_functionDeclaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionDeclaration) {
      return visitor.visitFunctionDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionContext extends ParserRuleContext {
  public _idType!: TypeContext
  public _id!: Token
  public _params!: IdentifierWithTypeListContext
  public _body!: StatementBlockContext
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
  }
  public IDENTIFIER(): TerminalNode {
    return this.getToken(ClangParser.IDENTIFIER, 0)
  }
  public statementBlock(): StatementBlockContext {
    return this.getRuleContext(0, StatementBlockContext)
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
  public _func!: Token
  public _args!: FunctionCallParametersContext
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
  public expressionList(): ExpressionListContext {
    return this.getRuleContext(0, ExpressionListContext)
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
