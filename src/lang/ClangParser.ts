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
  public static readonly Break = 3
  public static readonly Char = 4
  public static readonly Continue = 5
  public static readonly Const = 6
  public static readonly Do = 7
  public static readonly Else = 8
  public static readonly Float = 9
  public static readonly For = 10
  public static readonly If = 11
  public static readonly Int = 12
  public static readonly Long = 13
  public static readonly Return = 14
  public static readonly Signed = 15
  public static readonly Struct = 16
  public static readonly Unsigned = 17
  public static readonly Void = 18
  public static readonly While = 19
  public static readonly LeftParen = 20
  public static readonly RightParen = 21
  public static readonly LeftBracket = 22
  public static readonly RightBracket = 23
  public static readonly LeftBrace = 24
  public static readonly RightBrace = 25
  public static readonly Less = 26
  public static readonly LessEqual = 27
  public static readonly Greater = 28
  public static readonly GreaterEqual = 29
  public static readonly LeftShift = 30
  public static readonly RightShift = 31
  public static readonly Plus = 32
  public static readonly PlusPlus = 33
  public static readonly Minus = 34
  public static readonly MinusMinus = 35
  public static readonly Star = 36
  public static readonly Div = 37
  public static readonly Mod = 38
  public static readonly And = 39
  public static readonly Or = 40
  public static readonly AndAnd = 41
  public static readonly OrOr = 42
  public static readonly Caret = 43
  public static readonly Not = 44
  public static readonly Tilde = 45
  public static readonly Question = 46
  public static readonly Colon = 47
  public static readonly Semi = 48
  public static readonly Comma = 49
  public static readonly Assign = 50
  public static readonly StarAssign = 51
  public static readonly DivAssign = 52
  public static readonly ModAssign = 53
  public static readonly PlusAssign = 54
  public static readonly MinusAssign = 55
  public static readonly LeftShiftAssign = 56
  public static readonly RightShiftAssign = 57
  public static readonly AndAssign = 58
  public static readonly XorAssign = 59
  public static readonly OrAssign = 60
  public static readonly Equal = 61
  public static readonly NotEqual = 62
  public static readonly Arrow = 63
  public static readonly Dot = 64
  public static readonly Identifier = 65
  public static readonly Constant = 66
  public static readonly DigitSequence = 67
  public static readonly StringLiteral = 68
  public static readonly Whitespace = 69
  public static readonly Newline = 70
  public static readonly BlockComment = 71
  public static readonly LineComment = 72
  public static readonly RULE_primaryExpression = 0
  public static readonly RULE_postfixExpression = 1
  public static readonly RULE_argumentExpressionList = 2
  public static readonly RULE_unaryExpression = 3
  public static readonly RULE_unaryOperator = 4
  public static readonly RULE_castExpression = 5
  public static readonly RULE_multiplicativeExpression = 6
  public static readonly RULE_additiveExpression = 7
  public static readonly RULE_shiftExpression = 8
  public static readonly RULE_relationalExpression = 9
  public static readonly RULE_equalityExpression = 10
  public static readonly RULE_andExpression = 11
  public static readonly RULE_exclusiveOrExpression = 12
  public static readonly RULE_inclusiveOrExpression = 13
  public static readonly RULE_logicalAndExpression = 14
  public static readonly RULE_logicalOrExpression = 15
  public static readonly RULE_conditionalExpression = 16
  public static readonly RULE_assignmentExpression = 17
  public static readonly RULE_assignmentOperator = 18
  public static readonly RULE_expression = 19
  public static readonly RULE_constantExpression = 20
  public static readonly RULE_declaration = 21
  public static readonly RULE_declarationSpecifiers = 22
  public static readonly RULE_declarationSpecifiers2 = 23
  public static readonly RULE_declarationSpecifier = 24
  public static readonly RULE_initDeclaratorList = 25
  public static readonly RULE_initDeclarator = 26
  public static readonly RULE_typeSpecifier = 27
  public static readonly RULE_structSpecifier = 28
  public static readonly RULE_structDeclarationList = 29
  public static readonly RULE_structDeclaration = 30
  public static readonly RULE_specifierQualifierList = 31
  public static readonly RULE_structDeclaratorList = 32
  public static readonly RULE_structDeclarator = 33
  public static readonly RULE_typeQualifier = 34
  public static readonly RULE_functionSpecifier = 35
  public static readonly RULE_declarator = 36
  public static readonly RULE_directDeclarator = 37
  public static readonly RULE_nestedParenthesesBlock = 38
  public static readonly RULE_pointer = 39
  public static readonly RULE_typeQualifierList = 40
  public static readonly RULE_parameterTypeList = 41
  public static readonly RULE_parameterList = 42
  public static readonly RULE_parameterDeclaration = 43
  public static readonly RULE_identifierList = 44
  public static readonly RULE_typeName = 45
  public static readonly RULE_abstractDeclarator = 46
  public static readonly RULE_directAbstractDeclarator = 47
  public static readonly RULE_typedefName = 48
  public static readonly RULE_initializer = 49
  public static readonly RULE_initializerList = 50
  public static readonly RULE_designation = 51
  public static readonly RULE_designatorList = 52
  public static readonly RULE_designator = 53
  public static readonly RULE_statement = 54
  public static readonly RULE_compoundStatement = 55
  public static readonly RULE_blockItemList = 56
  public static readonly RULE_blockItem = 57
  public static readonly RULE_expressionStatement = 58
  public static readonly RULE_selectionStatement = 59
  public static readonly RULE_iterationStatement = 60
  public static readonly RULE_forCondition = 61
  public static readonly RULE_forDeclaration = 62
  public static readonly RULE_forExpression = 63
  public static readonly RULE_compilationUnit = 64
  public static readonly RULE_translationUnit = 65
  public static readonly RULE_externalDeclaration = 66
  public static readonly RULE_functionDefinition = 67
  public static readonly RULE_declarationList = 68
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'primaryExpression',
    'postfixExpression',
    'argumentExpressionList',
    'unaryExpression',
    'unaryOperator',
    'castExpression',
    'multiplicativeExpression',
    'additiveExpression',
    'shiftExpression',
    'relationalExpression',
    'equalityExpression',
    'andExpression',
    'exclusiveOrExpression',
    'inclusiveOrExpression',
    'logicalAndExpression',
    'logicalOrExpression',
    'conditionalExpression',
    'assignmentExpression',
    'assignmentOperator',
    'expression',
    'constantExpression',
    'declaration',
    'declarationSpecifiers',
    'declarationSpecifiers2',
    'declarationSpecifier',
    'initDeclaratorList',
    'initDeclarator',
    'typeSpecifier',
    'structSpecifier',
    'structDeclarationList',
    'structDeclaration',
    'specifierQualifierList',
    'structDeclaratorList',
    'structDeclarator',
    'typeQualifier',
    'functionSpecifier',
    'declarator',
    'directDeclarator',
    'nestedParenthesesBlock',
    'pointer',
    'typeQualifierList',
    'parameterTypeList',
    'parameterList',
    'parameterDeclaration',
    'identifierList',
    'typeName',
    'abstractDeclarator',
    'directAbstractDeclarator',
    'typedefName',
    'initializer',
    'initializerList',
    'designation',
    'designatorList',
    'designator',
    'statement',
    'compoundStatement',
    'blockItemList',
    'blockItem',
    'expressionStatement',
    'selectionStatement',
    'iterationStatement',
    'forCondition',
    'forDeclaration',
    'forExpression',
    'compilationUnit',
    'translationUnit',
    'externalDeclaration',
    'functionDefinition',
    'declarationList'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'__extension__'",
    "'inline'",
    "'break'",
    "'char'",
    "'continue'",
    "'const'",
    "'do'",
    "'else'",
    "'float'",
    "'for'",
    "'if'",
    "'int'",
    "'long'",
    "'return'",
    "'signed'",
    "'struct'",
    "'unsigned'",
    "'void'",
    "'while'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'<<'",
    "'>>'",
    "'+'",
    "'++'",
    "'-'",
    "'--'",
    "'*'",
    "'/'",
    "'%'",
    "'&'",
    "'|'",
    "'&&'",
    "'||'",
    "'^'",
    "'!'",
    "'~'",
    "'?'",
    "':'",
    "';'",
    "','",
    "'='",
    "'*='",
    "'/='",
    "'%='",
    "'+='",
    "'-='",
    "'<<='",
    "'>>='",
    "'&='",
    "'^='",
    "'|='",
    "'=='",
    "'!='",
    "'->'",
    "'.'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    'Break',
    'Char',
    'Continue',
    'Const',
    'Do',
    'Else',
    'Float',
    'For',
    'If',
    'Int',
    'Long',
    'Return',
    'Signed',
    'Struct',
    'Unsigned',
    'Void',
    'While',
    'LeftParen',
    'RightParen',
    'LeftBracket',
    'RightBracket',
    'LeftBrace',
    'RightBrace',
    'Less',
    'LessEqual',
    'Greater',
    'GreaterEqual',
    'LeftShift',
    'RightShift',
    'Plus',
    'PlusPlus',
    'Minus',
    'MinusMinus',
    'Star',
    'Div',
    'Mod',
    'And',
    'Or',
    'AndAnd',
    'OrOr',
    'Caret',
    'Not',
    'Tilde',
    'Question',
    'Colon',
    'Semi',
    'Comma',
    'Assign',
    'StarAssign',
    'DivAssign',
    'ModAssign',
    'PlusAssign',
    'MinusAssign',
    'LeftShiftAssign',
    'RightShiftAssign',
    'AndAssign',
    'XorAssign',
    'OrAssign',
    'Equal',
    'NotEqual',
    'Arrow',
    'Dot',
    'Identifier',
    'Constant',
    'DigitSequence',
    'StringLiteral',
    'Whitespace',
    'Newline',
    'BlockComment',
    'LineComment'
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
  public primaryExpression(): PrimaryExpressionContext {
    const _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, ClangParser.RULE_primaryExpression)
    let _la: number
    try {
      this.state = 149
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 138
            this.match(ClangParser.Identifier)
          }
          break
        case ClangParser.Constant:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 139
            this.match(ClangParser.Constant)
          }
          break
        case ClangParser.StringLiteral:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 141
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
              {
                {
                  this.state = 140
                  this.match(ClangParser.StringLiteral)
                }
              }
              this.state = 143
              this._errHandler.sync(this)
              _la = this._input.LA(1)
            } while (_la === ClangParser.StringLiteral)
          }
          break
        case ClangParser.LeftParen:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 145
            this.match(ClangParser.LeftParen)
            this.state = 146
            _localctx._inner = this.expression()
            this.state = 147
            this.match(ClangParser.RightParen)
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
  public postfixExpression(): PostfixExpressionContext {
    const _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, ClangParser.RULE_postfixExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 151
          this.primaryExpression()
        }
        this.state = 166
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === ClangParser.LeftParen ||
          _la === ClangParser.LeftBracket ||
          (((_la - 33) & ~0x1f) === 0 &&
            ((1 << (_la - 33)) &
              ((1 << (ClangParser.PlusPlus - 33)) |
                (1 << (ClangParser.MinusMinus - 33)) |
                (1 << (ClangParser.Arrow - 33)) |
                (1 << (ClangParser.Dot - 33)))) !==
              0)
        ) {
          {
            this.state = 164
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.LeftBracket:
                {
                  this.state = 152
                  this.match(ClangParser.LeftBracket)
                  this.state = 153
                  _localctx._inner = this.expression()
                  this.state = 154
                  this.match(ClangParser.RightBracket)
                }
                break
              case ClangParser.LeftParen:
                {
                  this.state = 156
                  this.match(ClangParser.LeftParen)
                  this.state = 158
                  this._errHandler.sync(this)
                  _la = this._input.LA(1)
                  if (
                    _la === ClangParser.T__0 ||
                    _la === ClangParser.LeftParen ||
                    (((_la - 32) & ~0x1f) === 0 &&
                      ((1 << (_la - 32)) &
                        ((1 << (ClangParser.Plus - 32)) |
                          (1 << (ClangParser.PlusPlus - 32)) |
                          (1 << (ClangParser.Minus - 32)) |
                          (1 << (ClangParser.MinusMinus - 32)) |
                          (1 << (ClangParser.Star - 32)) |
                          (1 << (ClangParser.And - 32)) |
                          (1 << (ClangParser.Not - 32)))) !==
                        0) ||
                    (((_la - 65) & ~0x1f) === 0 &&
                      ((1 << (_la - 65)) &
                        ((1 << (ClangParser.Identifier - 65)) |
                          (1 << (ClangParser.Constant - 65)) |
                          (1 << (ClangParser.DigitSequence - 65)) |
                          (1 << (ClangParser.StringLiteral - 65)))) !==
                        0)
                  ) {
                    {
                      this.state = 157
                      this.argumentExpressionList()
                    }
                  }

                  this.state = 160
                  this.match(ClangParser.RightParen)
                }
                break
              case ClangParser.Arrow:
              case ClangParser.Dot:
                {
                  this.state = 161
                  _la = this._input.LA(1)
                  if (!(_la === ClangParser.Arrow || _la === ClangParser.Dot)) {
                    this._errHandler.recoverInline(this)
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true
                    }

                    this._errHandler.reportMatch(this)
                    this.consume()
                  }
                  this.state = 162
                  this.match(ClangParser.Identifier)
                }
                break
              case ClangParser.PlusPlus:
              case ClangParser.MinusMinus:
                {
                  this.state = 163
                  _la = this._input.LA(1)
                  if (!(_la === ClangParser.PlusPlus || _la === ClangParser.MinusMinus)) {
                    this._errHandler.recoverInline(this)
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true
                    }

                    this._errHandler.reportMatch(this)
                    this.consume()
                  }
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 168
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
  public argumentExpressionList(): ArgumentExpressionListContext {
    const _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 4, ClangParser.RULE_argumentExpressionList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 169
        this.assignmentExpression()
        this.state = 174
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 170
              this.match(ClangParser.Comma)
              this.state = 171
              this.assignmentExpression()
            }
          }
          this.state = 176
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
  public unaryExpression(): UnaryExpressionContext {
    const _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, ClangParser.RULE_unaryExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 180
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.PlusPlus || _la === ClangParser.MinusMinus) {
          {
            {
              this.state = 177
              _la = this._input.LA(1)
              if (!(_la === ClangParser.PlusPlus || _la === ClangParser.MinusMinus)) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
            }
          }
          this.state = 182
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 187
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.LeftParen:
          case ClangParser.Identifier:
          case ClangParser.Constant:
          case ClangParser.StringLiteral:
            {
              this.state = 183
              this.postfixExpression()
            }
            break
          case ClangParser.Plus:
          case ClangParser.Minus:
          case ClangParser.Star:
          case ClangParser.And:
          case ClangParser.Not:
            {
              this.state = 184
              this.unaryOperator()
              this.state = 185
              this.castExpression()
            }
            break
          default:
            throw new NoViableAltException(this)
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
  public unaryOperator(): UnaryOperatorContext {
    const _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, ClangParser.RULE_unaryOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 189
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)))) !==
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
  // @RuleVersion(0)
  public castExpression(): CastExpressionContext {
    const _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, ClangParser.RULE_castExpression)
    let _la: number
    try {
      this.state = 201
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 192
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ClangParser.T__0) {
              {
                this.state = 191
                this.match(ClangParser.T__0)
              }
            }

            this.state = 194
            this.match(ClangParser.LeftParen)
            this.state = 195
            this.typeName()
            this.state = 196
            this.match(ClangParser.RightParen)
            this.state = 197
            this.castExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 199
            this.unaryExpression()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 200
            this.match(ClangParser.DigitSequence)
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
  // @RuleVersion(0)
  public multiplicativeExpression(): MultiplicativeExpressionContext {
    const _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 12, ClangParser.RULE_multiplicativeExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 203
        _localctx._left = this.castExpression()
        this.state = 212
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 36) & ~0x1f) === 0 &&
          ((1 << (_la - 36)) &
            ((1 << (ClangParser.Star - 36)) |
              (1 << (ClangParser.Div - 36)) |
              (1 << (ClangParser.Mod - 36)))) !==
            0
        ) {
          {
            {
              this.state = 207
              this._errHandler.sync(this)
              switch (this._input.LA(1)) {
                case ClangParser.Star:
                  {
                    this.state = 204
                    _localctx._operator = this.match(ClangParser.Star)
                  }
                  break
                case ClangParser.Div:
                  {
                    this.state = 205
                    _localctx._operator = this.match(ClangParser.Div)
                  }
                  break
                case ClangParser.Mod:
                  {
                    this.state = 206
                    _localctx._operator = this.match(ClangParser.Mod)
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 209
              this.castExpression()
            }
          }
          this.state = 214
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
  public additiveExpression(): AdditiveExpressionContext {
    const _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 14, ClangParser.RULE_additiveExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 215
        this.multiplicativeExpression()
        this.state = 223
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Plus || _la === ClangParser.Minus) {
          {
            {
              this.state = 218
              this._errHandler.sync(this)
              switch (this._input.LA(1)) {
                case ClangParser.Plus:
                  {
                    this.state = 216
                    _localctx._operator = this.match(ClangParser.Plus)
                  }
                  break
                case ClangParser.Minus:
                  {
                    this.state = 217
                    _localctx._operator = this.match(ClangParser.Minus)
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 220
              this.multiplicativeExpression()
            }
          }
          this.state = 225
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
  public shiftExpression(): ShiftExpressionContext {
    const _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, ClangParser.RULE_shiftExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 226
        this.additiveExpression()
        this.state = 234
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.LeftShift || _la === ClangParser.RightShift) {
          {
            {
              this.state = 229
              this._errHandler.sync(this)
              switch (this._input.LA(1)) {
                case ClangParser.LeftShift:
                  {
                    this.state = 227
                    _localctx._operator = this.match(ClangParser.LeftShift)
                  }
                  break
                case ClangParser.RightShift:
                  {
                    this.state = 228
                    _localctx._operator = this.match(ClangParser.RightShift)
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 231
              this.additiveExpression()
            }
          }
          this.state = 236
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
  public relationalExpression(): RelationalExpressionContext {
    const _localctx: RelationalExpressionContext = new RelationalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, ClangParser.RULE_relationalExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 237
        this.shiftExpression()
        this.state = 247
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << ClangParser.Less) |
              (1 << ClangParser.LessEqual) |
              (1 << ClangParser.Greater) |
              (1 << ClangParser.GreaterEqual))) !==
            0
        ) {
          {
            {
              this.state = 242
              this._errHandler.sync(this)
              switch (this._input.LA(1)) {
                case ClangParser.Less:
                  {
                    this.state = 238
                    _localctx._operator = this.match(ClangParser.Less)
                  }
                  break
                case ClangParser.Greater:
                  {
                    this.state = 239
                    _localctx._operator = this.match(ClangParser.Greater)
                  }
                  break
                case ClangParser.LessEqual:
                  {
                    this.state = 240
                    _localctx._operator = this.match(ClangParser.LessEqual)
                  }
                  break
                case ClangParser.GreaterEqual:
                  {
                    this.state = 241
                    _localctx._operator = this.match(ClangParser.GreaterEqual)
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 244
              this.shiftExpression()
            }
          }
          this.state = 249
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
  public equalityExpression(): EqualityExpressionContext {
    const _localctx: EqualityExpressionContext = new EqualityExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 20, ClangParser.RULE_equalityExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 250
        this.relationalExpression()
        this.state = 258
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Equal || _la === ClangParser.NotEqual) {
          {
            {
              this.state = 253
              this._errHandler.sync(this)
              switch (this._input.LA(1)) {
                case ClangParser.Equal:
                  {
                    this.state = 251
                    _localctx._operator = this.match(ClangParser.Equal)
                  }
                  break
                case ClangParser.NotEqual:
                  {
                    this.state = 252
                    _localctx._operator = this.match(ClangParser.NotEqual)
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 255
              this.relationalExpression()
            }
          }
          this.state = 260
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
  public andExpression(): AndExpressionContext {
    const _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, ClangParser.RULE_andExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 261
        this.equalityExpression()
        this.state = 266
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.And) {
          {
            {
              this.state = 262
              _localctx._operator = this.match(ClangParser.And)
              this.state = 263
              this.equalityExpression()
            }
          }
          this.state = 268
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
  public exclusiveOrExpression(): ExclusiveOrExpressionContext {
    const _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 24, ClangParser.RULE_exclusiveOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 269
        this.andExpression()
        this.state = 274
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Caret) {
          {
            {
              this.state = 270
              _localctx._operator = this.match(ClangParser.Caret)
              this.state = 271
              this.andExpression()
            }
          }
          this.state = 276
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
  public inclusiveOrExpression(): InclusiveOrExpressionContext {
    const _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 26, ClangParser.RULE_inclusiveOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 277
        this.exclusiveOrExpression()
        this.state = 282
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Or) {
          {
            {
              this.state = 278
              _localctx._operator = this.match(ClangParser.Or)
              this.state = 279
              this.exclusiveOrExpression()
            }
          }
          this.state = 284
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
  public logicalAndExpression(): LogicalAndExpressionContext {
    const _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 28, ClangParser.RULE_logicalAndExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 285
        this.inclusiveOrExpression()
        this.state = 290
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.AndAnd) {
          {
            {
              this.state = 286
              _localctx._operator = this.match(ClangParser.AndAnd)
              this.state = 287
              this.inclusiveOrExpression()
            }
          }
          this.state = 292
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
  public logicalOrExpression(): LogicalOrExpressionContext {
    const _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 30, ClangParser.RULE_logicalOrExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 293
        this.logicalAndExpression()
        this.state = 298
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.OrOr) {
          {
            {
              this.state = 294
              _localctx._operator = this.match(ClangParser.OrOr)
              this.state = 295
              this.logicalAndExpression()
            }
          }
          this.state = 300
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
  public conditionalExpression(): ConditionalExpressionContext {
    const _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 32, ClangParser.RULE_conditionalExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 301
        _localctx._test = this.logicalOrExpression()
        this.state = 307
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.Question) {
          {
            this.state = 302
            this.match(ClangParser.Question)
            this.state = 303
            _localctx._consequent = this.expression()
            this.state = 304
            this.match(ClangParser.Colon)
            this.state = 305
            _localctx._alternate = this.conditionalExpression()
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
  public assignmentExpression(): AssignmentExpressionContext {
    const _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 34, ClangParser.RULE_assignmentExpression)
    try {
      this.state = 315
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 309
            this.conditionalExpression()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 310
            this.unaryExpression()
            this.state = 311
            this.assignmentOperator()
            this.state = 312
            this.assignmentExpression()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 314
            this.match(ClangParser.DigitSequence)
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
  // @RuleVersion(0)
  public assignmentOperator(): AssignmentOperatorContext {
    const _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 36, ClangParser.RULE_assignmentOperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 317
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 50) & ~0x1f) === 0 &&
            ((1 << (_la - 50)) &
              ((1 << (ClangParser.Assign - 50)) |
                (1 << (ClangParser.StarAssign - 50)) |
                (1 << (ClangParser.DivAssign - 50)) |
                (1 << (ClangParser.ModAssign - 50)) |
                (1 << (ClangParser.PlusAssign - 50)) |
                (1 << (ClangParser.MinusAssign - 50)) |
                (1 << (ClangParser.LeftShiftAssign - 50)) |
                (1 << (ClangParser.RightShiftAssign - 50)) |
                (1 << (ClangParser.AndAssign - 50)) |
                (1 << (ClangParser.XorAssign - 50)) |
                (1 << (ClangParser.OrAssign - 50)))) !==
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
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    const _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 38, ClangParser.RULE_expression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 319
        this.assignmentExpression()
        this.state = 324
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 320
              this.match(ClangParser.Comma)
              this.state = 321
              this.assignmentExpression()
            }
          }
          this.state = 326
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
  public constantExpression(): ConstantExpressionContext {
    const _localctx: ConstantExpressionContext = new ConstantExpressionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 40, ClangParser.RULE_constantExpression)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 327
        this.conditionalExpression()
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
  public declaration(): DeclarationContext {
    const _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 42, ClangParser.RULE_declaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 329
        this.declarationSpecifiers()
        this.state = 331
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === ClangParser.LeftParen ||
          (((_la - 36) & ~0x1f) === 0 &&
            ((1 << (_la - 36)) &
              ((1 << (ClangParser.Star - 36)) |
                (1 << (ClangParser.Caret - 36)) |
                (1 << (ClangParser.Identifier - 36)))) !==
              0)
        ) {
          {
            this.state = 330
            this.initDeclaratorList()
          }
        }

        this.state = 333
        this.match(ClangParser.Semi)
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
  public declarationSpecifiers(): DeclarationSpecifiersContext {
    const _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 44, ClangParser.RULE_declarationSpecifiers)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 336
        this._errHandler.sync(this)
        _alt = 1
        do {
          switch (_alt) {
            case 1:
              {
                {
                  this.state = 335
                  this.declarationSpecifier()
                }
              }
              break
            default:
              throw new NoViableAltException(this)
          }
          this.state = 338
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx)
        } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
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
  public declarationSpecifiers2(): DeclarationSpecifiers2Context {
    const _localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 46, ClangParser.RULE_declarationSpecifiers2)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 341
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 340
              this.declarationSpecifier()
            }
          }
          this.state = 343
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void))) !==
              0) ||
          _la === ClangParser.Identifier
        )
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
  public declarationSpecifier(): DeclarationSpecifierContext {
    const _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 48, ClangParser.RULE_declarationSpecifier)
    try {
      this.state = 348
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.Char:
        case ClangParser.Float:
        case ClangParser.Int:
        case ClangParser.Signed:
        case ClangParser.Struct:
        case ClangParser.Unsigned:
        case ClangParser.Void:
        case ClangParser.Identifier:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 345
            this.typeSpecifier()
          }
          break
        case ClangParser.Const:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 346
            this.typeQualifier()
          }
          break
        case ClangParser.T__1:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 347
            this.functionSpecifier()
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
  public initDeclaratorList(): InitDeclaratorListContext {
    const _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 50, ClangParser.RULE_initDeclaratorList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 350
        this.initDeclarator()
        this.state = 355
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 351
              this.match(ClangParser.Comma)
              this.state = 352
              this.initDeclarator()
            }
          }
          this.state = 357
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
  public initDeclarator(): InitDeclaratorContext {
    const _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 52, ClangParser.RULE_initDeclarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 358
        _localctx._left = this.declarator()
        this.state = 361
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.Assign) {
          {
            this.state = 359
            _localctx._operator = this.match(ClangParser.Assign)
            this.state = 360
            _localctx._right = this.initializer()
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
  public typeSpecifier(): TypeSpecifierContext {
    const _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 54, ClangParser.RULE_typeSpecifier)
    let _la: number
    try {
      this.state = 366
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.Char:
        case ClangParser.Float:
        case ClangParser.Int:
        case ClangParser.Signed:
        case ClangParser.Unsigned:
        case ClangParser.Void:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 363
            _la = this._input.LA(1)
            if (
              !(
                (_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << ClangParser.Char) |
                    (1 << ClangParser.Float) |
                    (1 << ClangParser.Int) |
                    (1 << ClangParser.Signed) |
                    (1 << ClangParser.Unsigned) |
                    (1 << ClangParser.Void))) !==
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
          break
        case ClangParser.Struct:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 364
            this.structSpecifier()
          }
          break
        case ClangParser.Identifier:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 365
            this.typedefName()
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
  public structSpecifier(): StructSpecifierContext {
    const _localctx: StructSpecifierContext = new StructSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 56, ClangParser.RULE_structSpecifier)
    let _la: number
    try {
      this.state = 378
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 368
            this.match(ClangParser.Struct)
            this.state = 370
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ClangParser.Identifier) {
              {
                this.state = 369
                this.match(ClangParser.Identifier)
              }
            }

            this.state = 372
            this.match(ClangParser.LeftBrace)
            this.state = 373
            this.structDeclarationList()
            this.state = 374
            this.match(ClangParser.RightBrace)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 376
            this.match(ClangParser.Struct)
            this.state = 377
            this.match(ClangParser.Identifier)
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
  // @RuleVersion(0)
  public structDeclarationList(): StructDeclarationListContext {
    const _localctx: StructDeclarationListContext = new StructDeclarationListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 58, ClangParser.RULE_structDeclarationList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 381
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 380
              this.structDeclaration()
            }
          }
          this.state = 383
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void))) !==
              0) ||
          _la === ClangParser.Identifier
        )
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
  public structDeclaration(): StructDeclarationContext {
    const _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 60, ClangParser.RULE_structDeclaration)
    try {
      this.state = 392
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 385
            this.specifierQualifierList()
            this.state = 386
            this.structDeclaratorList()
            this.state = 387
            this.match(ClangParser.Semi)
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 389
            this.specifierQualifierList()
            this.state = 390
            this.match(ClangParser.Semi)
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
  // @RuleVersion(0)
  public specifierQualifierList(): SpecifierQualifierListContext {
    const _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 62, ClangParser.RULE_specifierQualifierList)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 396
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case ClangParser.Char:
          case ClangParser.Float:
          case ClangParser.Int:
          case ClangParser.Signed:
          case ClangParser.Struct:
          case ClangParser.Unsigned:
          case ClangParser.Void:
          case ClangParser.Identifier:
            {
              this.state = 394
              this.typeSpecifier()
            }
            break
          case ClangParser.Const:
            {
              this.state = 395
              this.typeQualifier()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this.state = 399
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
          case 1:
            {
              this.state = 398
              this.specifierQualifierList()
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
  public structDeclaratorList(): StructDeclaratorListContext {
    const _localctx: StructDeclaratorListContext = new StructDeclaratorListContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 64, ClangParser.RULE_structDeclaratorList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 401
        this.structDeclarator()
        this.state = 406
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 402
              this.match(ClangParser.Comma)
              this.state = 403
              this.structDeclarator()
            }
          }
          this.state = 408
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
  public structDeclarator(): StructDeclaratorContext {
    const _localctx: StructDeclaratorContext = new StructDeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 66, ClangParser.RULE_structDeclarator)
    let _la: number
    try {
      this.state = 415
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 409
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 411
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              _la === ClangParser.LeftParen ||
              (((_la - 36) & ~0x1f) === 0 &&
                ((1 << (_la - 36)) &
                  ((1 << (ClangParser.Star - 36)) |
                    (1 << (ClangParser.Caret - 36)) |
                    (1 << (ClangParser.Identifier - 36)))) !==
                  0)
            ) {
              {
                this.state = 410
                this.declarator()
              }
            }

            this.state = 413
            this.match(ClangParser.Colon)
            this.state = 414
            this.constantExpression()
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
  // @RuleVersion(0)
  public typeQualifier(): TypeQualifierContext {
    const _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 68, ClangParser.RULE_typeQualifier)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 417
        this.match(ClangParser.Const)
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
  public functionSpecifier(): FunctionSpecifierContext {
    const _localctx: FunctionSpecifierContext = new FunctionSpecifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 70, ClangParser.RULE_functionSpecifier)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        {
          this.state = 419
          this.match(ClangParser.T__1)
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
  public declarator(): DeclaratorContext {
    const _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state)
    this.enterRule(_localctx, 72, ClangParser.RULE_declarator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 422
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.Star || _la === ClangParser.Caret) {
          {
            this.state = 421
            this.pointer()
          }
        }

        this.state = 424
        this.directDeclarator(0)
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

  public directDeclarator(): DirectDeclaratorContext
  public directDeclarator(_p: number): DirectDeclaratorContext
  // @RuleVersion(0)
  public directDeclarator(_p?: number): DirectDeclaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState)
    let _prevctx: DirectDeclaratorContext = _localctx
    const _startState: number = 74
    this.enterRecursionRule(_localctx, 74, ClangParser.RULE_directDeclarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 435
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
          case 1:
            {
              this.state = 427
              this.match(ClangParser.Identifier)
            }
            break

          case 2:
            {
              this.state = 428
              this.match(ClangParser.LeftParen)
              this.state = 429
              this.declarator()
              this.state = 430
              this.match(ClangParser.RightParen)
            }
            break

          case 3:
            {
              this.state = 432
              this.match(ClangParser.Identifier)
              this.state = 433
              this.match(ClangParser.Colon)
              this.state = 434
              this.match(ClangParser.DigitSequence)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 466
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 464
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directDeclarator
                    )
                    this.state = 437
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 438
                    this.match(ClangParser.LeftBracket)
                    this.state = 440
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ClangParser.Const) {
                      {
                        this.state = 439
                        this.typeQualifierList()
                      }
                    }

                    this.state = 443
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      _la === ClangParser.T__0 ||
                      _la === ClangParser.LeftParen ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (ClangParser.Plus - 32)) |
                            (1 << (ClangParser.PlusPlus - 32)) |
                            (1 << (ClangParser.Minus - 32)) |
                            (1 << (ClangParser.MinusMinus - 32)) |
                            (1 << (ClangParser.Star - 32)) |
                            (1 << (ClangParser.And - 32)) |
                            (1 << (ClangParser.Not - 32)))) !==
                          0) ||
                      (((_la - 65) & ~0x1f) === 0 &&
                        ((1 << (_la - 65)) &
                          ((1 << (ClangParser.Identifier - 65)) |
                            (1 << (ClangParser.Constant - 65)) |
                            (1 << (ClangParser.DigitSequence - 65)) |
                            (1 << (ClangParser.StringLiteral - 65)))) !==
                          0)
                    ) {
                      {
                        this.state = 442
                        this.assignmentExpression()
                      }
                    }

                    this.state = 445
                    this.match(ClangParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directDeclarator
                    )
                    this.state = 446
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 447
                    this.match(ClangParser.LeftBracket)
                    this.state = 449
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ClangParser.Const) {
                      {
                        this.state = 448
                        this.typeQualifierList()
                      }
                    }

                    this.state = 451
                    this.match(ClangParser.Star)
                    this.state = 452
                    this.match(ClangParser.RightBracket)
                  }
                  break

                case 3:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directDeclarator
                    )
                    this.state = 453
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 454
                    this.match(ClangParser.LeftParen)
                    this.state = 455
                    this.parameterTypeList()
                    this.state = 456
                    this.match(ClangParser.RightParen)
                  }
                  break

                case 4:
                  {
                    _localctx = new DirectDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directDeclarator
                    )
                    this.state = 458
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 459
                    this.match(ClangParser.LeftParen)
                    this.state = 461
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ClangParser.Identifier) {
                      {
                        this.state = 460
                        this.identifierList()
                      }
                    }

                    this.state = 463
                    this.match(ClangParser.RightParen)
                  }
                  break
              }
            }
          }
          this.state = 468
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx)
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
  public nestedParenthesesBlock(): NestedParenthesesBlockContext {
    const _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 76, ClangParser.RULE_nestedParenthesesBlock)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 476
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__1) |
                (1 << ClangParser.Break) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Continue) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Do) |
                (1 << ClangParser.Else) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.For) |
                (1 << ClangParser.If) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Long) |
                (1 << ClangParser.Return) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void) |
                (1 << ClangParser.While) |
                (1 << ClangParser.LeftParen) |
                (1 << ClangParser.LeftBracket) |
                (1 << ClangParser.RightBracket) |
                (1 << ClangParser.LeftBrace) |
                (1 << ClangParser.RightBrace) |
                (1 << ClangParser.Less) |
                (1 << ClangParser.LessEqual) |
                (1 << ClangParser.Greater) |
                (1 << ClangParser.GreaterEqual) |
                (1 << ClangParser.LeftShift) |
                (1 << ClangParser.RightShift))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.Div - 32)) |
                (1 << (ClangParser.Mod - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Or - 32)) |
                (1 << (ClangParser.AndAnd - 32)) |
                (1 << (ClangParser.OrOr - 32)) |
                (1 << (ClangParser.Caret - 32)) |
                (1 << (ClangParser.Not - 32)) |
                (1 << (ClangParser.Tilde - 32)) |
                (1 << (ClangParser.Question - 32)) |
                (1 << (ClangParser.Colon - 32)) |
                (1 << (ClangParser.Semi - 32)) |
                (1 << (ClangParser.Comma - 32)) |
                (1 << (ClangParser.Assign - 32)) |
                (1 << (ClangParser.StarAssign - 32)) |
                (1 << (ClangParser.DivAssign - 32)) |
                (1 << (ClangParser.ModAssign - 32)) |
                (1 << (ClangParser.PlusAssign - 32)) |
                (1 << (ClangParser.MinusAssign - 32)) |
                (1 << (ClangParser.LeftShiftAssign - 32)) |
                (1 << (ClangParser.RightShiftAssign - 32)) |
                (1 << (ClangParser.AndAssign - 32)) |
                (1 << (ClangParser.XorAssign - 32)) |
                (1 << (ClangParser.OrAssign - 32)) |
                (1 << (ClangParser.Equal - 32)) |
                (1 << (ClangParser.NotEqual - 32)) |
                (1 << (ClangParser.Arrow - 32)))) !==
              0) ||
          (((_la - 64) & ~0x1f) === 0 &&
            ((1 << (_la - 64)) &
              ((1 << (ClangParser.Dot - 64)) |
                (1 << (ClangParser.Identifier - 64)) |
                (1 << (ClangParser.Constant - 64)) |
                (1 << (ClangParser.DigitSequence - 64)) |
                (1 << (ClangParser.StringLiteral - 64)) |
                (1 << (ClangParser.Whitespace - 64)) |
                (1 << (ClangParser.Newline - 64)) |
                (1 << (ClangParser.BlockComment - 64)) |
                (1 << (ClangParser.LineComment - 64)))) !==
              0)
        ) {
          {
            this.state = 474
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
              case ClangParser.T__0:
              case ClangParser.T__1:
              case ClangParser.Break:
              case ClangParser.Char:
              case ClangParser.Continue:
              case ClangParser.Const:
              case ClangParser.Do:
              case ClangParser.Else:
              case ClangParser.Float:
              case ClangParser.For:
              case ClangParser.If:
              case ClangParser.Int:
              case ClangParser.Long:
              case ClangParser.Return:
              case ClangParser.Signed:
              case ClangParser.Struct:
              case ClangParser.Unsigned:
              case ClangParser.Void:
              case ClangParser.While:
              case ClangParser.LeftBracket:
              case ClangParser.RightBracket:
              case ClangParser.LeftBrace:
              case ClangParser.RightBrace:
              case ClangParser.Less:
              case ClangParser.LessEqual:
              case ClangParser.Greater:
              case ClangParser.GreaterEqual:
              case ClangParser.LeftShift:
              case ClangParser.RightShift:
              case ClangParser.Plus:
              case ClangParser.PlusPlus:
              case ClangParser.Minus:
              case ClangParser.MinusMinus:
              case ClangParser.Star:
              case ClangParser.Div:
              case ClangParser.Mod:
              case ClangParser.And:
              case ClangParser.Or:
              case ClangParser.AndAnd:
              case ClangParser.OrOr:
              case ClangParser.Caret:
              case ClangParser.Not:
              case ClangParser.Tilde:
              case ClangParser.Question:
              case ClangParser.Colon:
              case ClangParser.Semi:
              case ClangParser.Comma:
              case ClangParser.Assign:
              case ClangParser.StarAssign:
              case ClangParser.DivAssign:
              case ClangParser.ModAssign:
              case ClangParser.PlusAssign:
              case ClangParser.MinusAssign:
              case ClangParser.LeftShiftAssign:
              case ClangParser.RightShiftAssign:
              case ClangParser.AndAssign:
              case ClangParser.XorAssign:
              case ClangParser.OrAssign:
              case ClangParser.Equal:
              case ClangParser.NotEqual:
              case ClangParser.Arrow:
              case ClangParser.Dot:
              case ClangParser.Identifier:
              case ClangParser.Constant:
              case ClangParser.DigitSequence:
              case ClangParser.StringLiteral:
              case ClangParser.Whitespace:
              case ClangParser.Newline:
              case ClangParser.BlockComment:
              case ClangParser.LineComment:
                {
                  this.state = 469
                  _la = this._input.LA(1)
                  if (_la <= 0 || _la === ClangParser.LeftParen || _la === ClangParser.RightParen) {
                    this._errHandler.recoverInline(this)
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true
                    }

                    this._errHandler.reportMatch(this)
                    this.consume()
                  }
                }
                break
              case ClangParser.LeftParen:
                {
                  this.state = 470
                  this.match(ClangParser.LeftParen)
                  this.state = 471
                  _localctx._inner = this.nestedParenthesesBlock()
                  this.state = 472
                  this.match(ClangParser.RightParen)
                }
                break
              default:
                throw new NoViableAltException(this)
            }
          }
          this.state = 478
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
  public pointer(): PointerContext {
    const _localctx: PointerContext = new PointerContext(this._ctx, this.state)
    this.enterRule(_localctx, 78, ClangParser.RULE_pointer)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 483
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 479
              _la = this._input.LA(1)
              if (!(_la === ClangParser.Star || _la === ClangParser.Caret)) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
              this.state = 481
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (_la === ClangParser.Const) {
                {
                  this.state = 480
                  this.typeQualifierList()
                }
              }
            }
          }
          this.state = 485
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === ClangParser.Star || _la === ClangParser.Caret)
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
  public typeQualifierList(): TypeQualifierListContext {
    const _localctx: TypeQualifierListContext = new TypeQualifierListContext(this._ctx, this.state)
    this.enterRule(_localctx, 80, ClangParser.RULE_typeQualifierList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 488
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 487
              this.typeQualifier()
            }
          }
          this.state = 490
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === ClangParser.Const)
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
  public parameterTypeList(): ParameterTypeListContext {
    const _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state)
    this.enterRule(_localctx, 82, ClangParser.RULE_parameterTypeList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 492
        this.parameterList()
        this.state = 494
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.Comma) {
          {
            this.state = 493
            this.match(ClangParser.Comma)
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
  public parameterList(): ParameterListContext {
    const _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state)
    this.enterRule(_localctx, 84, ClangParser.RULE_parameterList)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 496
        this.parameterDeclaration()
        this.state = 501
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 497
                this.match(ClangParser.Comma)
                this.state = 498
                this.parameterDeclaration()
              }
            }
          }
          this.state = 503
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx)
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
  public parameterDeclaration(): ParameterDeclarationContext {
    const _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 86, ClangParser.RULE_parameterDeclaration)
    let _la: number
    try {
      this.state = 511
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 504
            this.declarationSpecifiers()
            this.state = 505
            this.declarator()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 507
            this.declarationSpecifiers2()
            this.state = 509
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (
              ((_la - 20) & ~0x1f) === 0 &&
              ((1 << (_la - 20)) &
                ((1 << (ClangParser.LeftParen - 20)) |
                  (1 << (ClangParser.LeftBracket - 20)) |
                  (1 << (ClangParser.Star - 20)) |
                  (1 << (ClangParser.Caret - 20)))) !==
                0
            ) {
              {
                this.state = 508
                this.abstractDeclarator()
              }
            }
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
  // @RuleVersion(0)
  public identifierList(): IdentifierListContext {
    const _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state)
    this.enterRule(_localctx, 88, ClangParser.RULE_identifierList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 513
        this.match(ClangParser.Identifier)
        this.state = 518
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 514
              this.match(ClangParser.Comma)
              this.state = 515
              this.match(ClangParser.Identifier)
            }
          }
          this.state = 520
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
  public typeName(): TypeNameContext {
    const _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state)
    this.enterRule(_localctx, 90, ClangParser.RULE_typeName)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 521
        this.specifierQualifierList()
        this.state = 523
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la - 20) & ~0x1f) === 0 &&
          ((1 << (_la - 20)) &
            ((1 << (ClangParser.LeftParen - 20)) |
              (1 << (ClangParser.LeftBracket - 20)) |
              (1 << (ClangParser.Star - 20)) |
              (1 << (ClangParser.Caret - 20)))) !==
            0
        ) {
          {
            this.state = 522
            this.abstractDeclarator()
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
  public abstractDeclarator(): AbstractDeclaratorContext {
    const _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 92, ClangParser.RULE_abstractDeclarator)
    let _la: number
    try {
      this.state = 530
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 525
            this.pointer()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 527
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ClangParser.Star || _la === ClangParser.Caret) {
              {
                this.state = 526
                this.pointer()
              }
            }

            this.state = 529
            this.directAbstractDeclarator(0)
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

  public directAbstractDeclarator(): DirectAbstractDeclaratorContext
  public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext
  // @RuleVersion(0)
  public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(
      this._ctx,
      _parentState
    )
    let _prevctx: DirectAbstractDeclaratorContext = _localctx
    const _startState: number = 94
    this.enterRecursionRule(_localctx, 94, ClangParser.RULE_directAbstractDeclarator, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 553
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
          case 1:
            {
              this.state = 533
              this.match(ClangParser.LeftParen)
              this.state = 534
              _localctx._inner = this.abstractDeclarator()
              this.state = 535
              this.match(ClangParser.RightParen)
            }
            break

          case 2:
            {
              this.state = 537
              this.match(ClangParser.LeftBracket)
              this.state = 539
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (_la === ClangParser.Const) {
                {
                  this.state = 538
                  this.typeQualifierList()
                }
              }

              this.state = 542
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                _la === ClangParser.T__0 ||
                _la === ClangParser.LeftParen ||
                (((_la - 32) & ~0x1f) === 0 &&
                  ((1 << (_la - 32)) &
                    ((1 << (ClangParser.Plus - 32)) |
                      (1 << (ClangParser.PlusPlus - 32)) |
                      (1 << (ClangParser.Minus - 32)) |
                      (1 << (ClangParser.MinusMinus - 32)) |
                      (1 << (ClangParser.Star - 32)) |
                      (1 << (ClangParser.And - 32)) |
                      (1 << (ClangParser.Not - 32)))) !==
                    0) ||
                (((_la - 65) & ~0x1f) === 0 &&
                  ((1 << (_la - 65)) &
                    ((1 << (ClangParser.Identifier - 65)) |
                      (1 << (ClangParser.Constant - 65)) |
                      (1 << (ClangParser.DigitSequence - 65)) |
                      (1 << (ClangParser.StringLiteral - 65)))) !==
                    0)
              ) {
                {
                  this.state = 541
                  this.assignmentExpression()
                }
              }

              this.state = 544
              this.match(ClangParser.RightBracket)
            }
            break

          case 3:
            {
              this.state = 545
              this.match(ClangParser.LeftBracket)
              this.state = 546
              this.match(ClangParser.Star)
              this.state = 547
              this.match(ClangParser.RightBracket)
            }
            break

          case 4:
            {
              this.state = 548
              this.match(ClangParser.LeftParen)
              this.state = 550
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                ((_la & ~0x1f) === 0 &&
                  ((1 << _la) &
                    ((1 << ClangParser.T__1) |
                      (1 << ClangParser.Char) |
                      (1 << ClangParser.Const) |
                      (1 << ClangParser.Float) |
                      (1 << ClangParser.Int) |
                      (1 << ClangParser.Signed) |
                      (1 << ClangParser.Struct) |
                      (1 << ClangParser.Unsigned) |
                      (1 << ClangParser.Void))) !==
                    0) ||
                _la === ClangParser.Identifier
              ) {
                {
                  this.state = 549
                  this.parameterTypeList()
                }
              }

              this.state = 552
              this.match(ClangParser.RightParen)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 576
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 574
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                  {
                    _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directAbstractDeclarator
                    )
                    this.state = 555
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 556
                    this.match(ClangParser.LeftBracket)
                    this.state = 558
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (_la === ClangParser.Const) {
                      {
                        this.state = 557
                        this.typeQualifierList()
                      }
                    }

                    this.state = 561
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      _la === ClangParser.T__0 ||
                      _la === ClangParser.LeftParen ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (ClangParser.Plus - 32)) |
                            (1 << (ClangParser.PlusPlus - 32)) |
                            (1 << (ClangParser.Minus - 32)) |
                            (1 << (ClangParser.MinusMinus - 32)) |
                            (1 << (ClangParser.Star - 32)) |
                            (1 << (ClangParser.And - 32)) |
                            (1 << (ClangParser.Not - 32)))) !==
                          0) ||
                      (((_la - 65) & ~0x1f) === 0 &&
                        ((1 << (_la - 65)) &
                          ((1 << (ClangParser.Identifier - 65)) |
                            (1 << (ClangParser.Constant - 65)) |
                            (1 << (ClangParser.DigitSequence - 65)) |
                            (1 << (ClangParser.StringLiteral - 65)))) !==
                          0)
                    ) {
                      {
                        this.state = 560
                        this.assignmentExpression()
                      }
                    }

                    this.state = 563
                    this.match(ClangParser.RightBracket)
                  }
                  break

                case 2:
                  {
                    _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directAbstractDeclarator
                    )
                    this.state = 564
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 565
                    this.match(ClangParser.LeftBracket)
                    this.state = 566
                    this.match(ClangParser.Star)
                    this.state = 567
                    this.match(ClangParser.RightBracket)
                  }
                  break

                case 3:
                  {
                    _localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState)
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      ClangParser.RULE_directAbstractDeclarator
                    )
                    this.state = 568
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 569
                    this.match(ClangParser.LeftParen)
                    this.state = 571
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << ClangParser.T__1) |
                            (1 << ClangParser.Char) |
                            (1 << ClangParser.Const) |
                            (1 << ClangParser.Float) |
                            (1 << ClangParser.Int) |
                            (1 << ClangParser.Signed) |
                            (1 << ClangParser.Struct) |
                            (1 << ClangParser.Unsigned) |
                            (1 << ClangParser.Void))) !==
                          0) ||
                      _la === ClangParser.Identifier
                    ) {
                      {
                        this.state = 570
                        this.parameterTypeList()
                      }
                    }

                    this.state = 573
                    this.match(ClangParser.RightParen)
                  }
                  break
              }
            }
          }
          this.state = 578
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx)
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
  public typedefName(): TypedefNameContext {
    const _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state)
    this.enterRule(_localctx, 96, ClangParser.RULE_typedefName)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 579
        this.match(ClangParser.Identifier)
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
  public initializer(): InitializerContext {
    const _localctx: InitializerContext = new InitializerContext(this._ctx, this.state)
    this.enterRule(_localctx, 98, ClangParser.RULE_initializer)
    let _la: number
    try {
      this.state = 589
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.T__0:
        case ClangParser.LeftParen:
        case ClangParser.Plus:
        case ClangParser.PlusPlus:
        case ClangParser.Minus:
        case ClangParser.MinusMinus:
        case ClangParser.Star:
        case ClangParser.And:
        case ClangParser.Not:
        case ClangParser.Identifier:
        case ClangParser.Constant:
        case ClangParser.DigitSequence:
        case ClangParser.StringLiteral:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 581
            this.assignmentExpression()
          }
          break
        case ClangParser.LeftBrace:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 582
            this.match(ClangParser.LeftBrace)
            this.state = 583
            this.initializerList()
            this.state = 585
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            if (_la === ClangParser.Comma) {
              {
                this.state = 584
                this.match(ClangParser.Comma)
              }
            }

            this.state = 587
            this.match(ClangParser.RightBrace)
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
  public initializerList(): InitializerListContext {
    const _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state)
    this.enterRule(_localctx, 100, ClangParser.RULE_initializerList)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 592
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (_la === ClangParser.LeftBracket || _la === ClangParser.Dot) {
          {
            this.state = 591
            this.designation()
          }
        }

        this.state = 594
        this.initializer()
        this.state = 602
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 595
                this.match(ClangParser.Comma)
                this.state = 597
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === ClangParser.LeftBracket || _la === ClangParser.Dot) {
                  {
                    this.state = 596
                    this.designation()
                  }
                }

                this.state = 599
                this.initializer()
              }
            }
          }
          this.state = 604
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx)
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
  public designation(): DesignationContext {
    const _localctx: DesignationContext = new DesignationContext(this._ctx, this.state)
    this.enterRule(_localctx, 102, ClangParser.RULE_designation)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 605
        this.designatorList()
        this.state = 606
        this.match(ClangParser.Assign)
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
  public designatorList(): DesignatorListContext {
    const _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, this.state)
    this.enterRule(_localctx, 104, ClangParser.RULE_designatorList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 609
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 608
              this.designator()
            }
          }
          this.state = 611
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (_la === ClangParser.LeftBracket || _la === ClangParser.Dot)
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
  public designator(): DesignatorContext {
    const _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state)
    this.enterRule(_localctx, 106, ClangParser.RULE_designator)
    try {
      this.state = 619
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.LeftBracket:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 613
            this.match(ClangParser.LeftBracket)
            this.state = 614
            _localctx._inner = this.constantExpression()
            this.state = 615
            this.match(ClangParser.RightBracket)
          }
          break
        case ClangParser.Dot:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 617
            this.match(ClangParser.Dot)
            this.state = 618
            this.match(ClangParser.Identifier)
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
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 108, ClangParser.RULE_statement)
    try {
      this.state = 625
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.LeftBrace:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 621
            this.compoundStatement()
          }
          break
        case ClangParser.T__0:
        case ClangParser.LeftParen:
        case ClangParser.Plus:
        case ClangParser.PlusPlus:
        case ClangParser.Minus:
        case ClangParser.MinusMinus:
        case ClangParser.Star:
        case ClangParser.And:
        case ClangParser.Not:
        case ClangParser.Semi:
        case ClangParser.Identifier:
        case ClangParser.Constant:
        case ClangParser.DigitSequence:
        case ClangParser.StringLiteral:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 622
            this.expressionStatement()
          }
          break
        case ClangParser.If:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 623
            this.selectionStatement()
          }
          break
        case ClangParser.Do:
        case ClangParser.For:
        case ClangParser.While:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 624
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
  public compoundStatement(): CompoundStatementContext {
    const _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 110, ClangParser.RULE_compoundStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 627
        this.match(ClangParser.LeftBrace)
        this.state = 629
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Do) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.For) |
                (1 << ClangParser.If) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void) |
                (1 << ClangParser.While) |
                (1 << ClangParser.LeftParen) |
                (1 << ClangParser.LeftBrace))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)) |
                (1 << (ClangParser.Semi - 32)))) !==
              0) ||
          (((_la - 65) & ~0x1f) === 0 &&
            ((1 << (_la - 65)) &
              ((1 << (ClangParser.Identifier - 65)) |
                (1 << (ClangParser.Constant - 65)) |
                (1 << (ClangParser.DigitSequence - 65)) |
                (1 << (ClangParser.StringLiteral - 65)))) !==
              0)
        ) {
          {
            this.state = 628
            this.blockItemList()
          }
        }

        this.state = 631
        this.match(ClangParser.RightBrace)
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
  public blockItemList(): BlockItemListContext {
    const _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state)
    this.enterRule(_localctx, 112, ClangParser.RULE_blockItemList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 634
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 633
              this.blockItem()
            }
          }
          this.state = 636
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__0) |
                (1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Do) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.For) |
                (1 << ClangParser.If) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void) |
                (1 << ClangParser.While) |
                (1 << ClangParser.LeftParen) |
                (1 << ClangParser.LeftBrace))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)) |
                (1 << (ClangParser.Semi - 32)))) !==
              0) ||
          (((_la - 65) & ~0x1f) === 0 &&
            ((1 << (_la - 65)) &
              ((1 << (ClangParser.Identifier - 65)) |
                (1 << (ClangParser.Constant - 65)) |
                (1 << (ClangParser.DigitSequence - 65)) |
                (1 << (ClangParser.StringLiteral - 65)))) !==
              0)
        )
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
  public blockItem(): BlockItemContext {
    const _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state)
    this.enterRule(_localctx, 114, ClangParser.RULE_blockItem)
    try {
      this.state = 640
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 84, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 638
            this.statement()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 639
            this.declaration()
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
  // @RuleVersion(0)
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 116, ClangParser.RULE_expressionStatement)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 643
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === ClangParser.T__0 ||
          _la === ClangParser.LeftParen ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)))) !==
              0) ||
          (((_la - 65) & ~0x1f) === 0 &&
            ((1 << (_la - 65)) &
              ((1 << (ClangParser.Identifier - 65)) |
                (1 << (ClangParser.Constant - 65)) |
                (1 << (ClangParser.DigitSequence - 65)) |
                (1 << (ClangParser.StringLiteral - 65)))) !==
              0)
        ) {
          {
            this.state = 642
            this.expression()
          }
        }

        this.state = 645
        this.match(ClangParser.Semi)
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
    this.enterRule(_localctx, 118, ClangParser.RULE_selectionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 647
        this.match(ClangParser.If)
        this.state = 648
        this.match(ClangParser.LeftParen)
        this.state = 649
        _localctx._test = this.expression()
        this.state = 650
        this.match(ClangParser.RightParen)
        this.state = 651
        _localctx._consequent = this.statement()
        this.state = 654
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
          case 1:
            {
              this.state = 652
              this.match(ClangParser.Else)
              this.state = 653
              _localctx._alternate = this.statement()
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
    this.enterRule(_localctx, 120, ClangParser.RULE_iterationStatement)
    try {
      this.state = 676
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case ClangParser.While:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 656
            this.match(ClangParser.While)
            this.state = 657
            this.match(ClangParser.LeftParen)
            this.state = 658
            _localctx._test = this.expression()
            this.state = 659
            this.match(ClangParser.RightParen)
            this.state = 660
            _localctx._consequent = this.statement()
          }
          break
        case ClangParser.Do:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 662
            this.match(ClangParser.Do)
            this.state = 663
            _localctx._consequent = this.statement()
            this.state = 664
            this.match(ClangParser.While)
            this.state = 665
            this.match(ClangParser.LeftParen)
            this.state = 666
            _localctx._test = this.expression()
            this.state = 667
            this.match(ClangParser.RightParen)
            this.state = 668
            this.match(ClangParser.Semi)
          }
          break
        case ClangParser.For:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 670
            this.match(ClangParser.For)
            this.state = 671
            this.match(ClangParser.LeftParen)
            this.state = 672
            this.forCondition()
            this.state = 673
            this.match(ClangParser.RightParen)
            this.state = 674
            this.statement()
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
    this.enterRule(_localctx, 122, ClangParser.RULE_forCondition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 682
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 678
              this.forDeclaration()
            }
            break

          case 2:
            {
              this.state = 680
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                _la === ClangParser.T__0 ||
                _la === ClangParser.LeftParen ||
                (((_la - 32) & ~0x1f) === 0 &&
                  ((1 << (_la - 32)) &
                    ((1 << (ClangParser.Plus - 32)) |
                      (1 << (ClangParser.PlusPlus - 32)) |
                      (1 << (ClangParser.Minus - 32)) |
                      (1 << (ClangParser.MinusMinus - 32)) |
                      (1 << (ClangParser.Star - 32)) |
                      (1 << (ClangParser.And - 32)) |
                      (1 << (ClangParser.Not - 32)))) !==
                    0) ||
                (((_la - 65) & ~0x1f) === 0 &&
                  ((1 << (_la - 65)) &
                    ((1 << (ClangParser.Identifier - 65)) |
                      (1 << (ClangParser.Constant - 65)) |
                      (1 << (ClangParser.DigitSequence - 65)) |
                      (1 << (ClangParser.StringLiteral - 65)))) !==
                    0)
              ) {
                {
                  this.state = 679
                  this.expression()
                }
              }
            }
            break
        }
        this.state = 684
        this.match(ClangParser.Semi)
        this.state = 686
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === ClangParser.T__0 ||
          _la === ClangParser.LeftParen ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)))) !==
              0) ||
          (((_la - 65) & ~0x1f) === 0 &&
            ((1 << (_la - 65)) &
              ((1 << (ClangParser.Identifier - 65)) |
                (1 << (ClangParser.Constant - 65)) |
                (1 << (ClangParser.DigitSequence - 65)) |
                (1 << (ClangParser.StringLiteral - 65)))) !==
              0)
        ) {
          {
            this.state = 685
            this.forExpression()
          }
        }

        this.state = 688
        this.match(ClangParser.Semi)
        this.state = 690
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === ClangParser.T__0 ||
          _la === ClangParser.LeftParen ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (ClangParser.Plus - 32)) |
                (1 << (ClangParser.PlusPlus - 32)) |
                (1 << (ClangParser.Minus - 32)) |
                (1 << (ClangParser.MinusMinus - 32)) |
                (1 << (ClangParser.Star - 32)) |
                (1 << (ClangParser.And - 32)) |
                (1 << (ClangParser.Not - 32)))) !==
              0) ||
          (((_la - 65) & ~0x1f) === 0 &&
            ((1 << (_la - 65)) &
              ((1 << (ClangParser.Identifier - 65)) |
                (1 << (ClangParser.Constant - 65)) |
                (1 << (ClangParser.DigitSequence - 65)) |
                (1 << (ClangParser.StringLiteral - 65)))) !==
              0)
        ) {
          {
            this.state = 689
            this.forExpression()
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
  public forDeclaration(): ForDeclarationContext {
    const _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 124, ClangParser.RULE_forDeclaration)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 692
        this.declarationSpecifiers()
        this.state = 694
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          _la === ClangParser.LeftParen ||
          (((_la - 36) & ~0x1f) === 0 &&
            ((1 << (_la - 36)) &
              ((1 << (ClangParser.Star - 36)) |
                (1 << (ClangParser.Caret - 36)) |
                (1 << (ClangParser.Identifier - 36)))) !==
              0)
        ) {
          {
            this.state = 693
            this.initDeclaratorList()
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
  public forExpression(): ForExpressionContext {
    const _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 126, ClangParser.RULE_forExpression)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 696
        this.assignmentExpression()
        this.state = 701
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === ClangParser.Comma) {
          {
            {
              this.state = 697
              this.match(ClangParser.Comma)
              this.state = 698
              this.assignmentExpression()
            }
          }
          this.state = 703
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
  public compilationUnit(): CompilationUnitContext {
    const _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state)
    this.enterRule(_localctx, 128, ClangParser.RULE_compilationUnit)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 705
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void) |
                (1 << ClangParser.LeftParen))) !==
              0) ||
          (((_la - 36) & ~0x1f) === 0 &&
            ((1 << (_la - 36)) &
              ((1 << (ClangParser.Star - 36)) |
                (1 << (ClangParser.Caret - 36)) |
                (1 << (ClangParser.Semi - 36)) |
                (1 << (ClangParser.Identifier - 36)))) !==
              0)
        ) {
          {
            this.state = 704
            this.translationUnit()
          }
        }

        this.state = 707
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
  public translationUnit(): TranslationUnitContext {
    const _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state)
    this.enterRule(_localctx, 130, ClangParser.RULE_translationUnit)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 710
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 709
              this.externalDeclaration()
            }
          }
          this.state = 712
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void) |
                (1 << ClangParser.LeftParen))) !==
              0) ||
          (((_la - 36) & ~0x1f) === 0 &&
            ((1 << (_la - 36)) &
              ((1 << (ClangParser.Star - 36)) |
                (1 << (ClangParser.Caret - 36)) |
                (1 << (ClangParser.Semi - 36)) |
                (1 << (ClangParser.Identifier - 36)))) !==
              0)
        )
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
  public externalDeclaration(): ExternalDeclarationContext {
    const _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 132, ClangParser.RULE_externalDeclaration)
    try {
      this.state = 717
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 714
            this.functionDefinition()
          }
          break

        case 2:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 715
            this.declaration()
          }
          break

        case 3:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 716
            this.match(ClangParser.Semi)
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
  // @RuleVersion(0)
  public functionDefinition(): FunctionDefinitionContext {
    const _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 134, ClangParser.RULE_functionDefinition)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 720
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
          case 1:
            {
              this.state = 719
              this.declarationSpecifiers()
            }
            break
        }
        this.state = 722
        this.declarator()
        this.state = 724
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void))) !==
              0) ||
          _la === ClangParser.Identifier
        ) {
          {
            this.state = 723
            this.declarationList()
          }
        }

        this.state = 726
        this.compoundStatement()
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
  public declarationList(): DeclarationListContext {
    const _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state)
    this.enterRule(_localctx, 136, ClangParser.RULE_declarationList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 729
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        do {
          {
            {
              this.state = 728
              this.declaration()
            }
          }
          this.state = 731
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << ClangParser.T__1) |
                (1 << ClangParser.Char) |
                (1 << ClangParser.Const) |
                (1 << ClangParser.Float) |
                (1 << ClangParser.Int) |
                (1 << ClangParser.Signed) |
                (1 << ClangParser.Struct) |
                (1 << ClangParser.Unsigned) |
                (1 << ClangParser.Void))) !==
              0) ||
          _la === ClangParser.Identifier
        )
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
      case 37:
        return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex)

      case 47:
        return this.directAbstractDeclarator_sempred(
          _localctx as DirectAbstractDeclaratorContext,
          predIndex
        )
    }
    return true
  }
  private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 5)

      case 1:
        return this.precpred(this._ctx, 4)

      case 2:
        return this.precpred(this._ctx, 3)

      case 3:
        return this.precpred(this._ctx, 2)
    }
    return true
  }
  private directAbstractDeclarator_sempred(
    _localctx: DirectAbstractDeclaratorContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 4:
        return this.precpred(this._ctx, 3)

      case 5:
        return this.precpred(this._ctx, 2)

      case 6:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  private static readonly _serializedATNSegments: number = 2
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03J\u02E0\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
    '\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044' +
    '\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x03\x02\x03\x02\x03\x02\x06\x02\x90\n\x02\r\x02\x0E\x02\x91\x03\x02' +
    '\x03\x02\x03\x02\x03\x02\x05\x02\x98\n\x02\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA1\n\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x07\x03\xA7\n\x03\f\x03\x0E\x03\xAA\v\x03\x03\x04\x03\x04\x03' +
    '\x04\x07\x04\xAF\n\x04\f\x04\x0E\x04\xB2\v\x04\x03\x05\x07\x05\xB5\n\x05' +
    '\f\x05\x0E\x05\xB8\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBE\n' +
    '\x05\x03\x06\x03\x06\x03\x07\x05\x07\xC3\n\x07\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xCC\n\x07\x03\b\x03\b\x03\b\x03' +
    '\b\x05\b\xD2\n\b\x03\b\x07\b\xD5\n\b\f\b\x0E\b\xD8\v\b\x03\t\x03\t\x03' +
    '\t\x05\t\xDD\n\t\x03\t\x07\t\xE0\n\t\f\t\x0E\t\xE3\v\t\x03\n\x03\n\x03' +
    '\n\x05\n\xE8\n\n\x03\n\x07\n\xEB\n\n\f\n\x0E\n\xEE\v\n\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x05\v\xF5\n\v\x03\v\x07\v\xF8\n\v\f\v\x0E\v\xFB\v\v\x03' +
    '\f\x03\f\x03\f\x05\f\u0100\n\f\x03\f\x07\f\u0103\n\f\f\f\x0E\f\u0106\v' +
    '\f\x03\r\x03\r\x03\r\x07\r\u010B\n\r\f\r\x0E\r\u010E\v\r\x03\x0E\x03\x0E' +
    '\x03\x0E\x07\x0E\u0113\n\x0E\f\x0E\x0E\x0E\u0116\v\x0E\x03\x0F\x03\x0F' +
    '\x03\x0F\x07\x0F\u011B\n\x0F\f\x0F\x0E\x0F\u011E\v\x0F\x03\x10\x03\x10' +
    '\x03\x10\x07\x10\u0123\n\x10\f\x10\x0E\x10\u0126\v\x10\x03\x11\x03\x11' +
    '\x03\x11\x07\x11\u012B\n\x11\f\x11\x0E\x11\u012E\v\x11\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0136\n\x12\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x05\x13\u013E\n\x13\x03\x14\x03\x14\x03\x15' +
    '\x03\x15\x03\x15\x07\x15\u0145\n\x15\f\x15\x0E\x15\u0148\v\x15\x03\x16' +
    '\x03\x16\x03\x17\x03\x17\x05\x17\u014E\n\x17\x03\x17\x03\x17\x03\x18\x06' +
    '\x18\u0153\n\x18\r\x18\x0E\x18\u0154\x03\x19\x06\x19\u0158\n\x19\r\x19' +
    '\x0E\x19\u0159\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u015F\n\x1A\x03\x1B\x03' +
    '\x1B\x03\x1B\x07\x1B\u0164\n\x1B\f\x1B\x0E\x1B\u0167\v\x1B\x03\x1C\x03' +
    '\x1C\x03\x1C\x05\x1C\u016C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0171' +
    '\n\x1D\x03\x1E\x03\x1E\x05\x1E\u0175\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
    '\x1E\x03\x1E\x03\x1E\x05\x1E\u017D\n\x1E\x03\x1F\x06\x1F\u0180\n\x1F\r' +
    '\x1F\x0E\x1F\u0181\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u018B\n \x03' +
    '!\x03!\x05!\u018F\n!\x03!\x05!\u0192\n!\x03"\x03"\x03"\x07"\u0197' +
    '\n"\f"\x0E"\u019A\v"\x03#\x03#\x05#\u019E\n#\x03#\x03#\x05#\u01A2' +
    "\n#\x03$\x03$\x03%\x03%\x03&\x05&\u01A9\n&\x03&\x03&\x03'\x03'\x03'" +
    "\x03'\x03'\x03'\x03'\x03'\x03'\x05'\u01B6\n'\x03'\x03'\x03'" +
    "\x05'\u01BB\n'\x03'\x05'\u01BE\n'\x03'\x03'\x03'\x03'\x05'\u01C4" +
    "\n'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x03'\x05'" +
    "\u01D0\n'\x03'\x07'\u01D3\n'\f'\x0E'\u01D6\v'\x03(\x03(\x03(\x03" +
    '(\x03(\x07(\u01DD\n(\f(\x0E(\u01E0\v(\x03)\x03)\x05)\u01E4\n)\x06)\u01E6' +
    '\n)\r)\x0E)\u01E7\x03*\x06*\u01EB\n*\r*\x0E*\u01EC\x03+\x03+\x05+\u01F1' +
    '\n+\x03,\x03,\x03,\x07,\u01F6\n,\f,\x0E,\u01F9\v,\x03-\x03-\x03-\x03-' +
    '\x03-\x05-\u0200\n-\x05-\u0202\n-\x03.\x03.\x03.\x07.\u0207\n.\f.\x0E' +
    '.\u020A\v.\x03/\x03/\x05/\u020E\n/\x030\x030\x050\u0212\n0\x030\x050\u0215' +
    '\n0\x031\x031\x031\x031\x031\x031\x031\x051\u021E\n1\x031\x051\u0221\n' +
    '1\x031\x031\x031\x031\x031\x031\x051\u0229\n1\x031\x051\u022C\n1\x031' +
    '\x031\x031\x051\u0231\n1\x031\x051\u0234\n1\x031\x031\x031\x031\x031\x03' +
    '1\x031\x031\x051\u023E\n1\x031\x071\u0241\n1\f1\x0E1\u0244\v1\x032\x03' +
    '2\x033\x033\x033\x033\x053\u024C\n3\x033\x033\x053\u0250\n3\x034\x054' +
    '\u0253\n4\x034\x034\x034\x054\u0258\n4\x034\x074\u025B\n4\f4\x0E4\u025E' +
    '\v4\x035\x035\x035\x036\x066\u0264\n6\r6\x0E6\u0265\x037\x037\x037\x03' +
    '7\x037\x037\x057\u026E\n7\x038\x038\x038\x038\x058\u0274\n8\x039\x039' +
    '\x059\u0278\n9\x039\x039\x03:\x06:\u027D\n:\r:\x0E:\u027E\x03;\x03;\x05' +
    ';\u0283\n;\x03<\x05<\u0286\n<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=' +
    '\x03=\x05=\u0291\n=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>' +
    '\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u02A7\n>\x03?' +
    '\x03?\x05?\u02AB\n?\x05?\u02AD\n?\x03?\x03?\x05?\u02B1\n?\x03?\x03?\x05' +
    '?\u02B5\n?\x03@\x03@\x05@\u02B9\n@\x03A\x03A\x03A\x07A\u02BE\nA\fA\x0E' +
    'A\u02C1\vA\x03B\x05B\u02C4\nB\x03B\x03B\x03C\x06C\u02C9\nC\rC\x0EC\u02CA' +
    '\x03D\x03D\x03D\x05D\u02D0\nD\x03E\x05E\u02D3\nE\x03E\x03E\x05E\u02D7' +
    '\nE\x03E\x03E\x03F\x06F\u02DC\nF\rF\x0EF\u02DD\x03F\x02\x02\x04L`G\x02' +
    '\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02' +
    '\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02' +
    ',\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02' +
    'H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02' +
    'd\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02' +
    '\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x02\t\x03\x02AB\x04\x02' +
    '##%%\x07\x02""$$&&))..\x03\x024>\x07\x02\x06\x06\v\v\x0E\x0E\x11\x11' +
    '\x13\x14\x03\x02\x16\x17\x04\x02&&--\x02\u0313\x02\x97\x03\x02\x02\x02' +
    '\x04\x99\x03\x02\x02\x02\x06\xAB\x03\x02\x02\x02\b\xB6\x03\x02\x02\x02' +
    '\n\xBF\x03\x02\x02\x02\f\xCB\x03\x02\x02\x02\x0E\xCD\x03\x02\x02\x02\x10' +
    '\xD9\x03\x02\x02\x02\x12\xE4\x03\x02\x02\x02\x14\xEF\x03\x02\x02\x02\x16' +
    '\xFC\x03\x02\x02\x02\x18\u0107\x03\x02\x02\x02\x1A\u010F\x03\x02\x02\x02' +
    '\x1C\u0117\x03\x02\x02\x02\x1E\u011F\x03\x02\x02\x02 \u0127\x03\x02\x02' +
    '\x02"\u012F\x03\x02\x02\x02$\u013D\x03\x02\x02\x02&\u013F\x03\x02\x02' +
    '\x02(\u0141\x03\x02\x02\x02*\u0149\x03\x02\x02\x02,\u014B\x03\x02\x02' +
    '\x02.\u0152\x03\x02\x02\x020\u0157\x03\x02\x02\x022\u015E\x03\x02\x02' +
    '\x024\u0160\x03\x02\x02\x026\u0168\x03\x02\x02\x028\u0170\x03\x02\x02' +
    '\x02:\u017C\x03\x02\x02\x02<\u017F\x03\x02\x02\x02>\u018A\x03\x02\x02' +
    '\x02@\u018E\x03\x02\x02\x02B\u0193\x03\x02\x02\x02D\u01A1\x03\x02\x02' +
    '\x02F\u01A3\x03\x02\x02\x02H\u01A5\x03\x02\x02\x02J\u01A8\x03\x02\x02' +
    '\x02L\u01B5\x03\x02\x02\x02N\u01DE\x03\x02\x02\x02P\u01E5\x03\x02\x02' +
    '\x02R\u01EA\x03\x02\x02\x02T\u01EE\x03\x02\x02\x02V\u01F2\x03\x02\x02' +
    '\x02X\u0201\x03\x02\x02\x02Z\u0203\x03\x02\x02\x02\\\u020B\x03\x02\x02' +
    '\x02^\u0214\x03\x02\x02\x02`\u022B\x03\x02\x02\x02b\u0245\x03\x02\x02' +
    '\x02d\u024F\x03\x02\x02\x02f\u0252\x03\x02\x02\x02h\u025F\x03\x02\x02' +
    '\x02j\u0263\x03\x02\x02\x02l\u026D\x03\x02\x02\x02n\u0273\x03\x02\x02' +
    '\x02p\u0275\x03\x02\x02\x02r\u027C\x03\x02\x02\x02t\u0282\x03\x02\x02' +
    '\x02v\u0285\x03\x02\x02\x02x\u0289\x03\x02\x02\x02z\u02A6\x03\x02\x02' +
    '\x02|\u02AC\x03\x02\x02\x02~\u02B6\x03\x02\x02\x02\x80\u02BA\x03\x02\x02' +
    '\x02\x82\u02C3\x03\x02\x02\x02\x84\u02C8\x03\x02\x02\x02\x86\u02CF\x03' +
    '\x02\x02\x02\x88\u02D2\x03\x02\x02\x02\x8A\u02DB\x03\x02\x02\x02\x8C\x98' +
    '\x07C\x02\x02\x8D\x98\x07D\x02\x02\x8E\x90\x07F\x02\x02\x8F\x8E\x03\x02' +
    '\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02' +
    '\x02\x02\x92\x98\x03\x02\x02\x02\x93\x94\x07\x16\x02\x02\x94\x95\x05(' +
    '\x15\x02\x95\x96\x07\x17\x02\x02\x96\x98\x03\x02\x02\x02\x97\x8C\x03\x02' +
    '\x02\x02\x97\x8D\x03\x02\x02\x02\x97\x8F\x03\x02\x02\x02\x97\x93\x03\x02' +
    '\x02\x02\x98\x03\x03\x02\x02\x02\x99\xA8\x05\x02\x02\x02\x9A\x9B\x07\x18' +
    '\x02\x02\x9B\x9C\x05(\x15\x02\x9C\x9D\x07\x19\x02\x02\x9D\xA7\x03\x02' +
    '\x02\x02\x9E\xA0\x07\x16\x02\x02\x9F\xA1\x05\x06\x04\x02\xA0\x9F\x03\x02' +
    '\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA7\x07\x17' +
    '\x02\x02\xA3\xA4\t\x02\x02\x02\xA4\xA7\x07C\x02\x02\xA5\xA7\t\x03\x02' +
    '\x02\xA6\x9A\x03\x02\x02\x02\xA6\x9E\x03\x02\x02\x02\xA6\xA3\x03\x02\x02' +
    '\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02' +
    '\x02\xA8\xA9\x03\x02\x02\x02\xA9\x05\x03\x02\x02\x02\xAA\xA8\x03\x02\x02' +
    '\x02\xAB\xB0\x05$\x13\x02\xAC\xAD\x073\x02\x02\xAD\xAF\x05$\x13\x02\xAE' +
    '\xAC\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0' +
    '\xB1\x03\x02\x02\x02\xB1\x07\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3' +
    '\xB5\t\x03\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6' +
    '\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBD\x03\x02\x02\x02\xB8' +
    '\xB6\x03\x02\x02\x02\xB9\xBE\x05\x04\x03\x02\xBA\xBB\x05\n\x06\x02\xBB' +
    '\xBC\x05\f\x07\x02\xBC\xBE\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02\xBD' +
    '\xBA\x03\x02\x02\x02\xBE\t\x03\x02\x02\x02\xBF\xC0\t\x04\x02\x02\xC0\v' +
    '\x03\x02\x02\x02\xC1\xC3\x07\x03\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3' +
    '\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07\x16\x02\x02\xC5\xC6' +
    '\x05\\/\x02\xC6\xC7\x07\x17\x02\x02\xC7\xC8\x05\f\x07\x02\xC8\xCC\x03' +
    '\x02\x02\x02\xC9\xCC\x05\b\x05\x02\xCA\xCC\x07E\x02\x02\xCB\xC2\x03\x02' +
    '\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\r\x03\x02' +
    "\x02\x02\xCD\xD6\x05\f\x07\x02\xCE\xD2\x07&\x02\x02\xCF\xD2\x07'\x02" +
    '\x02\xD0\xD2\x07(\x02\x02\xD1\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02' +
    '\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x05\f\x07' +
    '\x02\xD4\xD1\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03\x02\x02' +
    '\x02\xD6\xD7\x03\x02\x02\x02\xD7\x0F\x03\x02\x02\x02\xD8\xD6\x03\x02\x02' +
    '\x02\xD9\xE1\x05\x0E\b\x02\xDA\xDD\x07"\x02\x02\xDB\xDD\x07$\x02\x02' +
    '\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02' +
    '\xDE\xE0\x05\x0E\b\x02\xDF\xDC\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02' +
    '\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\x11\x03\x02\x02\x02' +
    '\xE3\xE1\x03\x02\x02\x02\xE4\xEC\x05\x10\t\x02\xE5\xE8\x07 \x02\x02\xE6' +
    '\xE8\x07!\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8' +
    '\xE9\x03\x02\x02\x02\xE9\xEB\x05\x10\t\x02\xEA\xE7\x03\x02\x02\x02\xEB' +
    '\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED' +
    '\x13\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF9\x05\x12\n\x02\xF0' +
    '\xF5\x07\x1C\x02\x02\xF1\xF5\x07\x1E\x02\x02\xF2\xF5\x07\x1D\x02\x02\xF3' +
    '\xF5\x07\x1F\x02\x02\xF4\xF0\x03\x02\x02\x02\xF4\xF1\x03\x02\x02\x02\xF4' +
    '\xF2\x03\x02\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6' +
    '\xF8\x05\x12\n\x02\xF7\xF4\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9' +
    '\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\x15\x03\x02\x02\x02\xFB' +
    '\xF9\x03\x02\x02\x02\xFC\u0104\x05\x14\v\x02\xFD\u0100\x07?\x02\x02\xFE' +
    '\u0100\x07@\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100' +
    '\u0101\x03\x02\x02\x02\u0101\u0103\x05\x14\v\x02\u0102\xFF\x03\x02\x02' +
    '\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105' +
    '\x03\x02\x02\x02\u0105\x17\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02' +
    '\u0107\u010C\x05\x16\f\x02\u0108\u0109\x07)\x02\x02\u0109\u010B\x05\x16' +
    '\f\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A' +
    '\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\x19\x03\x02\x02\x02' +
    '\u010E\u010C\x03\x02\x02\x02\u010F\u0114\x05\x18\r\x02\u0110\u0111\x07' +
    '-\x02\x02\u0111\u0113\x05\x18\r\x02\u0112\u0110\x03\x02\x02\x02\u0113' +
    '\u0116\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02' +
    '\x02\x02\u0115\x1B\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u011C' +
    '\x05\x1A\x0E\x02\u0118\u0119\x07*\x02\x02\u0119\u011B\x05\x1A\x0E\x02' +
    '\u011A\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03' +
    '\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\x1D\x03\x02\x02\x02\u011E' +
    '\u011C\x03\x02\x02\x02\u011F\u0124\x05\x1C\x0F\x02\u0120\u0121\x07+\x02' +
    '\x02\u0121\u0123\x05\x1C\x0F\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0126' +
    '\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02' +
    '\u0125\x1F\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u012C\x05' +
    '\x1E\x10\x02\u0128\u0129\x07,\x02\x02\u0129\u012B\x05\x1E\x10\x02\u012A' +
    '\u0128\x03\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02' +
    '\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D!\x03\x02\x02\x02\u012E\u012C' +
    '\x03\x02\x02\x02\u012F\u0135\x05 \x11\x02\u0130\u0131\x070\x02\x02\u0131' +
    '\u0132\x05(\x15\x02\u0132\u0133\x071\x02\x02\u0133\u0134\x05"\x12\x02' +
    '\u0134\u0136\x03\x02\x02\x02\u0135\u0130\x03\x02\x02\x02\u0135\u0136\x03' +
    '\x02\x02\x02\u0136#\x03\x02\x02\x02\u0137\u013E\x05"\x12\x02\u0138\u0139' +
    '\x05\b\x05\x02\u0139\u013A\x05&\x14\x02\u013A\u013B\x05$\x13\x02\u013B' +
    '\u013E\x03\x02\x02\x02\u013C\u013E\x07E\x02\x02\u013D\u0137\x03\x02\x02' +
    '\x02\u013D\u0138\x03\x02\x02\x02\u013D\u013C\x03\x02\x02\x02\u013E%\x03' +
    "\x02\x02\x02\u013F\u0140\t\x05\x02\x02\u0140'\x03\x02\x02\x02\u0141\u0146" +
    '\x05$\x13\x02\u0142\u0143\x073\x02\x02\u0143\u0145\x05$\x13\x02\u0144' +
    '\u0142\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02' +
    '\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147)\x03\x02\x02\x02\u0148\u0146' +
    '\x03\x02\x02\x02\u0149\u014A\x05"\x12\x02\u014A+\x03\x02\x02\x02\u014B' +
    '\u014D\x05.\x18\x02\u014C\u014E\x054\x1B\x02\u014D\u014C\x03\x02\x02\x02' +
    '\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07' +
    '2\x02\x02\u0150-\x03\x02\x02\x02\u0151\u0153\x052\x1A\x02\u0152\u0151' +
    '\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02' +
    '\u0154\u0155\x03\x02\x02\x02\u0155/\x03\x02\x02\x02\u0156\u0158\x052\x1A' +
    '\x02\u0157\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0157' +
    '\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A1\x03\x02\x02\x02\u015B' +
    '\u015F\x058\x1D\x02\u015C\u015F\x05F$\x02\u015D\u015F\x05H%\x02\u015E' +
    '\u015B\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02' +
    '\x02\x02\u015F3\x03\x02\x02\x02\u0160\u0165\x056\x1C\x02\u0161\u0162\x07' +
    '3\x02\x02\u0162\u0164\x056\x1C\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0167' +
    '\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02' +
    '\u01665\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u016B\x05J&' +
    '\x02\u0169\u016A\x074\x02\x02\u016A\u016C\x05d3\x02\u016B\u0169\x03\x02' +
    '\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C7\x03\x02\x02\x02\u016D\u0171' +
    '\t\x06\x02\x02\u016E\u0171\x05:\x1E\x02\u016F\u0171\x05b2\x02\u0170\u016D' +
    '\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02' +
    '\u01719\x03\x02\x02\x02\u0172\u0174\x07\x12\x02\x02\u0173\u0175\x07C\x02' +
    '\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176' +
    '\x03\x02\x02\x02\u0176\u0177\x07\x1A\x02\x02\u0177\u0178\x05<\x1F\x02' +
    '\u0178\u0179\x07\x1B\x02\x02\u0179\u017D\x03\x02\x02\x02\u017A\u017B\x07' +
    '\x12\x02\x02\u017B\u017D\x07C\x02\x02\u017C\u0172\x03\x02\x02\x02\u017C' +
    '\u017A\x03\x02\x02\x02\u017D;\x03\x02\x02\x02\u017E\u0180\x05> \x02\u017F' +
    '\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u017F\x03\x02' +
    '\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182=\x03\x02\x02\x02\u0183\u0184' +
    '\x05@!\x02\u0184\u0185\x05B"\x02\u0185\u0186\x072\x02\x02\u0186\u018B' +
    '\x03\x02\x02\x02\u0187\u0188\x05@!\x02\u0188\u0189\x072\x02\x02\u0189' +
    '\u018B\x03\x02\x02\x02\u018A\u0183\x03\x02\x02\x02\u018A\u0187\x03\x02' +
    '\x02\x02\u018B?\x03\x02\x02\x02\u018C\u018F\x058\x1D\x02\u018D\u018F\x05' +
    'F$\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F\u0191' +
    '\x03\x02\x02\x02\u0190\u0192\x05@!\x02\u0191\u0190\x03\x02\x02\x02\u0191' +
    '\u0192\x03\x02\x02\x02\u0192A\x03\x02\x02\x02\u0193\u0198\x05D#\x02\u0194' +
    '\u0195\x073\x02\x02\u0195\u0197\x05D#\x02\u0196\u0194\x03\x02\x02\x02' +
    '\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03' +
    '\x02\x02\x02\u0199C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B' +
    '\u01A2\x05J&\x02\u019C\u019E\x05J&\x02\u019D\u019C\x03\x02\x02\x02\u019D' +
    '\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x071\x02' +
    '\x02\u01A0\u01A2\x05*\x16\x02\u01A1\u019B\x03\x02\x02\x02\u01A1\u019D' +
    '\x03\x02\x02\x02\u01A2E\x03\x02\x02\x02\u01A3\u01A4\x07\b\x02\x02\u01A4' +
    'G\x03\x02\x02\x02\u01A5\u01A6\x07\x04\x02\x02\u01A6I\x03\x02\x02\x02\u01A7' +
    '\u01A9\x05P)\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02' +
    "\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x05L'\x02\u01ABK\x03\x02\x02" +
    "\x02\u01AC\u01AD\b'\x01\x02\u01AD\u01B6\x07C\x02\x02\u01AE\u01AF\x07" +
    '\x16\x02\x02\u01AF\u01B0\x05J&\x02\u01B0\u01B1\x07\x17\x02\x02\u01B1\u01B6' +
    '\x03\x02\x02\x02\u01B2\u01B3\x07C\x02\x02\u01B3\u01B4\x071\x02\x02\u01B4' +
    '\u01B6\x07E\x02\x02\u01B5\u01AC\x03\x02\x02\x02\u01B5\u01AE\x03\x02\x02' +
    '\x02\u01B5\u01B2\x03\x02\x02\x02\u01B6\u01D4\x03\x02\x02\x02\u01B7\u01B8' +
    '\f\x07\x02\x02\u01B8\u01BA\x07\x18\x02\x02\u01B9\u01BB\x05R*\x02\u01BA' +
    '\u01B9\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03\x02' +
    '\x02\x02\u01BC\u01BE\x05$\x13\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE' +
    '\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01D3\x07\x19\x02\x02' +
    '\u01C0\u01C1\f\x06\x02\x02\u01C1\u01C3\x07\x18\x02\x02\u01C2\u01C4\x05' +
    'R*\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5' +
    '\x03\x02\x02\x02\u01C5\u01C6\x07&\x02\x02\u01C6\u01D3\x07\x19\x02\x02' +
    '\u01C7\u01C8\f\x05\x02\x02\u01C8\u01C9\x07\x16\x02\x02\u01C9\u01CA\x05' +
    'T+\x02\u01CA\u01CB\x07\x17\x02\x02\u01CB\u01D3\x03\x02\x02\x02\u01CC\u01CD' +
    '\f\x04\x02\x02\u01CD\u01CF\x07\x16\x02\x02\u01CE\u01D0\x05Z.\x02\u01CF' +
    '\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02' +
    '\x02\x02\u01D1\u01D3\x07\x17\x02\x02\u01D2\u01B7\x03\x02\x02\x02\u01D2' +
    '\u01C0\x03\x02\x02\x02\u01D2\u01C7\x03\x02\x02\x02\u01D2\u01CC\x03\x02' +
    '\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4' +
    '\u01D5\x03\x02\x02\x02\u01D5M\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02' +
    '\x02\u01D7\u01DD\n\x07\x02\x02\u01D8\u01D9\x07\x16\x02\x02\u01D9\u01DA' +
    '\x05N(\x02\u01DA\u01DB\x07\x17\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC' +
    '\u01D7\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD\u01E0\x03\x02' +
    '\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF' +
    'O\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E3\t\b\x02\x02' +
    '\u01E2\u01E4\x05R*\x02\u01E3\u01E2\x03\x02\x02\x02\u01E3\u01E4\x03\x02' +
    '\x02\x02\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02\u01E6' +
    '\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02' +
    '\x02\x02\u01E8Q\x03\x02\x02\x02\u01E9\u01EB\x05F$\x02\u01EA\u01E9\x03' +
    '\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC' +
    '\u01ED\x03\x02\x02\x02\u01EDS\x03\x02\x02\x02\u01EE\u01F0\x05V,\x02\u01EF' +
    '\u01F1\x073\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02' +
    '\x02\u01F1U\x03\x02\x02\x02\u01F2\u01F7\x05X-\x02\u01F3\u01F4\x073\x02' +
    '\x02\u01F4\u01F6\x05X-\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03' +
    '\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8' +
    'W\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA\u01FB\x05.\x18\x02' +
    '\u01FB\u01FC\x05J&\x02\u01FC\u0202\x03\x02\x02\x02\u01FD\u01FF\x050\x19' +
    '\x02\u01FE\u0200\x05^0\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03' +
    '\x02\x02\x02\u0200\u0202\x03\x02\x02\x02\u0201\u01FA\x03\x02\x02\x02\u0201' +
    '\u01FD\x03\x02\x02\x02\u0202Y\x03\x02\x02\x02\u0203\u0208\x07C\x02\x02' +
    '\u0204\u0205\x073\x02\x02\u0205\u0207\x07C\x02\x02\u0206\u0204\x03\x02' +
    '\x02\x02\u0207\u020A\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208' +
    '\u0209\x03\x02\x02\x02\u0209[\x03\x02\x02\x02\u020A\u0208\x03\x02\x02' +
    '\x02\u020B\u020D\x05@!\x02\u020C\u020E\x05^0\x02\u020D\u020C\x03\x02\x02' +
    '\x02\u020D\u020E\x03\x02\x02\x02\u020E]\x03'
  private static readonly _serializedATNSegment1: string =
    '\x02\x02\x02\u020F\u0215\x05P)\x02\u0210\u0212\x05P)\x02\u0211\u0210\x03' +
    '\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213' +
    '\u0215\x05`1\x02\u0214\u020F\x03\x02\x02\x02\u0214\u0211\x03\x02\x02\x02' +
    '\u0215_\x03\x02\x02\x02\u0216\u0217\b1\x01\x02\u0217\u0218\x07\x16\x02' +
    '\x02\u0218\u0219\x05^0\x02\u0219\u021A\x07\x17\x02\x02\u021A\u022C\x03' +
    '\x02\x02\x02\u021B\u021D\x07\x18\x02\x02\u021C\u021E\x05R*\x02\u021D\u021C' +
    '\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220\x03\x02\x02\x02' +
    '\u021F\u0221\x05$\x13\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03' +
    '\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u022C\x07\x19\x02\x02\u0223' +
    '\u0224\x07\x18\x02\x02\u0224\u0225\x07&\x02\x02\u0225\u022C\x07\x19\x02' +
    '\x02\u0226\u0228\x07\x16\x02\x02\u0227\u0229\x05T+\x02\u0228\u0227\x03' +
    '\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A' +
    '\u022C\x07\x17\x02\x02\u022B\u0216\x03\x02\x02\x02\u022B\u021B\x03\x02' +
    '\x02\x02\u022B\u0223\x03\x02\x02\x02\u022B\u0226\x03\x02\x02\x02\u022C' +
    '\u0242\x03\x02\x02\x02\u022D\u022E\f\x05\x02\x02\u022E\u0230\x07\x18\x02' +
    '\x02\u022F\u0231\x05R*\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231\x03' +
    '\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0234\x05$\x13\x02\u0233' +
    '\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02' +
    '\x02\x02\u0235\u0241\x07\x19\x02\x02\u0236\u0237\f\x04\x02\x02\u0237\u0238' +
    '\x07\x18\x02\x02\u0238\u0239\x07&\x02\x02\u0239\u0241\x07\x19\x02\x02' +
    '\u023A\u023B\f\x03\x02\x02\u023B\u023D\x07\x16\x02\x02\u023C\u023E\x05' +
    'T+\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F' +
    '\x03\x02\x02\x02\u023F\u0241\x07\x17\x02\x02\u0240\u022D\x03\x02\x02\x02' +
    '\u0240\u0236\x03\x02\x02\x02\u0240\u023A\x03\x02\x02\x02\u0241\u0244\x03' +
    '\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243' +
    'a\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07C\x02\x02' +
    '\u0246c\x03\x02\x02\x02\u0247\u0250\x05$\x13\x02\u0248\u0249\x07\x1A\x02' +
    '\x02\u0249\u024B\x05f4\x02\u024A\u024C\x073\x02\x02\u024B\u024A\x03\x02' +
    '\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D' +
    '\u024E\x07\x1B\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0247\x03\x02' +
    '\x02\x02\u024F\u0248\x03\x02\x02\x02\u0250e\x03\x02\x02\x02\u0251\u0253' +
    '\x05h5\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253' +
    '\u0254\x03\x02\x02\x02\u0254\u025C\x05d3\x02\u0255\u0257\x073\x02\x02' +
    '\u0256\u0258\x05h5\x02\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02' +
    '\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025B\x05d3\x02\u025A\u0255' +
    '\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02' +
    '\u025C\u025D\x03\x02\x02\x02\u025Dg\x03\x02\x02\x02\u025E\u025C\x03\x02' +
    '\x02\x02\u025F\u0260\x05j6\x02\u0260\u0261\x074\x02\x02\u0261i\x03\x02' +
    '\x02\x02\u0262\u0264\x05l7\x02\u0263\u0262\x03\x02\x02\x02\u0264\u0265' +
    '\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02' +
    '\u0266k\x03\x02\x02\x02\u0267\u0268\x07\x18\x02\x02\u0268\u0269\x05*\x16' +
    '\x02\u0269\u026A\x07\x19\x02\x02\u026A\u026E\x03\x02\x02\x02\u026B\u026C' +
    '\x07B\x02\x02\u026C\u026E\x07C\x02\x02\u026D\u0267\x03\x02\x02\x02\u026D' +
    '\u026B\x03\x02\x02\x02\u026Em\x03\x02\x02\x02\u026F\u0274\x05p9\x02\u0270' +
    '\u0274\x05v<\x02\u0271\u0274\x05x=\x02\u0272\u0274\x05z>\x02\u0273\u026F' +
    '\x03\x02\x02\x02\u0273\u0270\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02' +
    '\u0273\u0272\x03\x02\x02\x02\u0274o\x03\x02\x02\x02\u0275\u0277\x07\x1A' +
    '\x02\x02\u0276\u0278\x05r:\x02\u0277\u0276\x03\x02\x02\x02\u0277\u0278' +
    '\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027A\x07\x1B\x02\x02' +
    '\u027Aq\x03\x02\x02\x02\u027B\u027D\x05t;\x02\u027C\u027B\x03\x02\x02' +
    '\x02\u027D\u027E\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F' +
    '\x03\x02\x02\x02\u027Fs\x03\x02\x02\x02\u0280\u0283\x05n8\x02\u0281\u0283' +
    '\x05,\x17\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0281\x03\x02\x02\x02' +
    '\u0283u\x03\x02\x02\x02\u0284\u0286\x05(\x15\x02\u0285\u0284\x03\x02\x02' +
    '\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0288' +
    '\x072\x02\x02\u0288w\x03\x02\x02\x02\u0289\u028A\x07\r\x02\x02\u028A\u028B' +
    '\x07\x16\x02\x02\u028B\u028C\x05(\x15\x02\u028C\u028D\x07\x17\x02\x02' +
    '\u028D\u0290\x05n8\x02\u028E\u028F\x07\n\x02\x02\u028F\u0291\x05n8\x02' +
    '\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291y\x03\x02' +
    '\x02\x02\u0292\u0293\x07\x15\x02\x02\u0293\u0294\x07\x16\x02\x02\u0294' +
    '\u0295\x05(\x15\x02\u0295\u0296\x07\x17\x02\x02\u0296\u0297\x05n8\x02' +
    '\u0297\u02A7\x03\x02\x02\x02\u0298\u0299\x07\t\x02\x02\u0299\u029A\x05' +
    'n8\x02\u029A\u029B\x07\x15\x02\x02\u029B\u029C\x07\x16\x02\x02\u029C\u029D' +
    '\x05(\x15\x02\u029D\u029E\x07\x17\x02\x02\u029E\u029F\x072\x02\x02\u029F' +
    '\u02A7\x03\x02\x02\x02\u02A0\u02A1\x07\f\x02\x02\u02A1\u02A2\x07\x16\x02' +
    '\x02\u02A2\u02A3\x05|?\x02\u02A3\u02A4\x07\x17\x02\x02\u02A4\u02A5\x05' +
    'n8\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u0292\x03\x02\x02\x02\u02A6\u0298' +
    '\x03\x02\x02\x02\u02A6\u02A0\x03\x02\x02\x02\u02A7{\x03\x02\x02\x02\u02A8' +
    '\u02AD\x05~@\x02\u02A9\u02AB\x05(\x15\x02\u02AA\u02A9\x03\x02\x02\x02' +
    '\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02A8\x03' +
    '\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE' +
    '\u02B0\x072\x02\x02\u02AF\u02B1\x05\x80A\x02\u02B0\u02AF\x03\x02\x02\x02' +
    '\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B4\x07' +
    '2\x02\x02\u02B3\u02B5\x05\x80A\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5' +
    '\x03\x02\x02\x02\u02B5}\x03\x02\x02\x02\u02B6\u02B8\x05.\x18\x02\u02B7' +
    '\u02B9\x054\x1B\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02' +
    '\x02\u02B9\x7F\x03\x02\x02\x02\u02BA\u02BF\x05$\x13\x02\u02BB\u02BC\x07' +
    '3\x02\x02\u02BC\u02BE\x05$\x13\x02\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02C1' +
    '\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02' +
    '\u02C0\x81\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C4\x05' +
    '\x84C\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4' +
    '\u02C5\x03\x02\x02\x02\u02C5\u02C6\x07\x02\x02\x03\u02C6\x83\x03\x02\x02' +
    '\x02\u02C7\u02C9\x05\x86D\x02\u02C8\u02C7\x03\x02\x02\x02\u02C9\u02CA' +
    '\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02' +
    '\u02CB\x85\x03\x02\x02\x02\u02CC\u02D0\x05\x88E\x02\u02CD\u02D0\x05,\x17' +
    '\x02\u02CE\u02D0\x072\x02\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF\u02CD' +
    '\x03\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\x87\x03\x02\x02\x02' +
    '\u02D1\u02D3\x05.\x18\x02\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03' +
    '\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D6\x05J&\x02\u02D5\u02D7' +
    '\x05\x8AF\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02' +
    '\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x05p9\x02\u02D9\x89\x03\x02\x02' +
    '\x02\u02DA\u02DC\x05,\x17\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DD' +
    '\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02' +
    '\u02DE\x8B\x03\x02\x02\x02f\x91\x97\xA0\xA6\xA8\xB0\xB6\xBD\xC2\xCB\xD1' +
    '\xD6\xDC\xE1\xE7\xEC\xF4\xF9\xFF\u0104\u010C\u0114\u011C\u0124\u012C\u0135' +
    '\u013D\u0146\u014D\u0154\u0159\u015E\u0165\u016B\u0170\u0174\u017C\u0181' +
    '\u018A\u018E\u0191\u0198\u019D\u01A1\u01A8\u01B5\u01BA\u01BD\u01C3\u01CF' +
    '\u01D2\u01D4\u01DC\u01DE\u01E3\u01E7\u01EC\u01F0\u01F7\u01FF\u0201\u0208' +
    '\u020D\u0211\u0214\u021D\u0220\u0228\u022B\u0230\u0233\u023D\u0240\u0242' +
    '\u024B\u024F\u0252\u0257\u025C\u0265\u026D\u0273\u0277\u027E\u0282\u0285' +
    '\u0290\u02A6\u02AA\u02AC\u02B0\u02B4\u02B8\u02BF\u02C3\u02CA\u02CF\u02D2' +
    '\u02D6\u02DD'
  public static readonly _serializedATN: string = Utils.join(
    [ClangParser._serializedATNSegment0, ClangParser._serializedATNSegment1],
    ''
  )
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

export class PrimaryExpressionContext extends ParserRuleContext {
  public _inner!: ExpressionContext
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Identifier, 0)
  }
  public Constant(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Constant, 0)
  }
  public StringLiteral(): TerminalNode[]
  public StringLiteral(i: number): TerminalNode
  public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.StringLiteral)
    } else {
      return this.getToken(ClangParser.StringLiteral, i)
    }
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_primaryExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PostfixExpressionContext extends ParserRuleContext {
  public _inner!: ExpressionContext
  public primaryExpression(): PrimaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, PrimaryExpressionContext)
  }
  public LeftBracket(): TerminalNode[]
  public LeftBracket(i: number): TerminalNode
  public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.LeftBracket)
    } else {
      return this.getToken(ClangParser.LeftBracket, i)
    }
  }
  public RightBracket(): TerminalNode[]
  public RightBracket(i: number): TerminalNode
  public RightBracket(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.RightBracket)
    } else {
      return this.getToken(ClangParser.RightBracket, i)
    }
  }
  public LeftParen(): TerminalNode[]
  public LeftParen(i: number): TerminalNode
  public LeftParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.LeftParen)
    } else {
      return this.getToken(ClangParser.LeftParen, i)
    }
  }
  public RightParen(): TerminalNode[]
  public RightParen(i: number): TerminalNode
  public RightParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.RightParen)
    } else {
      return this.getToken(ClangParser.RightParen, i)
    }
  }
  public Identifier(): TerminalNode[]
  public Identifier(i: number): TerminalNode
  public Identifier(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Identifier)
    } else {
      return this.getToken(ClangParser.Identifier, i)
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
  public Dot(): TerminalNode[]
  public Dot(i: number): TerminalNode
  public Dot(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Dot)
    } else {
      return this.getToken(ClangParser.Dot, i)
    }
  }
  public Arrow(): TerminalNode[]
  public Arrow(i: number): TerminalNode
  public Arrow(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Arrow)
    } else {
      return this.getToken(ClangParser.Arrow, i)
    }
  }
  public PlusPlus(): TerminalNode[]
  public PlusPlus(i: number): TerminalNode
  public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.PlusPlus)
    } else {
      return this.getToken(ClangParser.PlusPlus, i)
    }
  }
  public MinusMinus(): TerminalNode[]
  public MinusMinus(i: number): TerminalNode
  public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.MinusMinus)
    } else {
      return this.getToken(ClangParser.MinusMinus, i)
    }
  }
  public argumentExpressionList(): ArgumentExpressionListContext[]
  public argumentExpressionList(i: number): ArgumentExpressionListContext
  public argumentExpressionList(
    i?: number
  ): ArgumentExpressionListContext | ArgumentExpressionListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ArgumentExpressionListContext)
    } else {
      return this.getRuleContext(i, ArgumentExpressionListContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_postfixExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterPostfixExpression) {
      listener.enterPostfixExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitPostfixExpression) {
      listener.exitPostfixExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitPostfixExpression) {
      return visitor.visitPostfixExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ArgumentExpressionListContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext[]
  public assignmentExpression(i: number): AssignmentExpressionContext
  public assignmentExpression(
    i?: number
  ): AssignmentExpressionContext | AssignmentExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AssignmentExpressionContext)
    } else {
      return this.getRuleContext(i, AssignmentExpressionContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_argumentExpressionList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterArgumentExpressionList) {
      listener.enterArgumentExpressionList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitArgumentExpressionList) {
      listener.exitArgumentExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitArgumentExpressionList) {
      return visitor.visitArgumentExpressionList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public postfixExpression(): PostfixExpressionContext | undefined {
    return this.tryGetRuleContext(0, PostfixExpressionContext)
  }
  public unaryOperator(): UnaryOperatorContext | undefined {
    return this.tryGetRuleContext(0, UnaryOperatorContext)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  public PlusPlus(): TerminalNode[]
  public PlusPlus(i: number): TerminalNode
  public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.PlusPlus)
    } else {
      return this.getToken(ClangParser.PlusPlus, i)
    }
  }
  public MinusMinus(): TerminalNode[]
  public MinusMinus(i: number): TerminalNode
  public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.MinusMinus)
    } else {
      return this.getToken(ClangParser.MinusMinus, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_unaryExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class UnaryOperatorContext extends ParserRuleContext {
  public And(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.And, 0)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Star, 0)
  }
  public Plus(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Plus, 0)
  }
  public Minus(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Minus, 0)
  }
  public Not(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Not, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_unaryOperator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterUnaryOperator) {
      listener.enterUnaryOperator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitUnaryOperator) {
      listener.exitUnaryOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitUnaryOperator) {
      return visitor.visitUnaryOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CastExpressionContext extends ParserRuleContext {
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftParen, 0)
  }
  public typeName(): TypeNameContext | undefined {
    return this.tryGetRuleContext(0, TypeNameContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightParen, 0)
  }
  public castExpression(): CastExpressionContext | undefined {
    return this.tryGetRuleContext(0, CastExpressionContext)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public DigitSequence(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.DigitSequence, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_castExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterCastExpression) {
      listener.enterCastExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitCastExpression) {
      listener.exitCastExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitCastExpression) {
      return visitor.visitCastExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
  public _left!: CastExpressionContext
  public _operator!: Token
  public castExpression(): CastExpressionContext[]
  public castExpression(i: number): CastExpressionContext
  public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CastExpressionContext)
    } else {
      return this.getRuleContext(i, CastExpressionContext)
    }
  }
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Star)
    } else {
      return this.getToken(ClangParser.Star, i)
    }
  }
  public Div(): TerminalNode[]
  public Div(i: number): TerminalNode
  public Div(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Div)
    } else {
      return this.getToken(ClangParser.Div, i)
    }
  }
  public Mod(): TerminalNode[]
  public Mod(i: number): TerminalNode
  public Mod(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Mod)
    } else {
      return this.getToken(ClangParser.Mod, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_multiplicativeExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitMultiplicativeExpression) {
      return visitor.visitMultiplicativeExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AdditiveExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public multiplicativeExpression(): MultiplicativeExpressionContext[]
  public multiplicativeExpression(i: number): MultiplicativeExpressionContext
  public multiplicativeExpression(
    i?: number
  ): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MultiplicativeExpressionContext)
    } else {
      return this.getRuleContext(i, MultiplicativeExpressionContext)
    }
  }
  public Plus(): TerminalNode[]
  public Plus(i: number): TerminalNode
  public Plus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Plus)
    } else {
      return this.getToken(ClangParser.Plus, i)
    }
  }
  public Minus(): TerminalNode[]
  public Minus(i: number): TerminalNode
  public Minus(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Minus)
    } else {
      return this.getToken(ClangParser.Minus, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_additiveExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAdditiveExpression) {
      return visitor.visitAdditiveExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ShiftExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public additiveExpression(): AdditiveExpressionContext[]
  public additiveExpression(i: number): AdditiveExpressionContext
  public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AdditiveExpressionContext)
    } else {
      return this.getRuleContext(i, AdditiveExpressionContext)
    }
  }
  public LeftShift(): TerminalNode[]
  public LeftShift(i: number): TerminalNode
  public LeftShift(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.LeftShift)
    } else {
      return this.getToken(ClangParser.LeftShift, i)
    }
  }
  public RightShift(): TerminalNode[]
  public RightShift(i: number): TerminalNode
  public RightShift(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.RightShift)
    } else {
      return this.getToken(ClangParser.RightShift, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_shiftExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterShiftExpression) {
      listener.enterShiftExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitShiftExpression) {
      listener.exitShiftExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitShiftExpression) {
      return visitor.visitShiftExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class RelationalExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public shiftExpression(): ShiftExpressionContext[]
  public shiftExpression(i: number): ShiftExpressionContext
  public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ShiftExpressionContext)
    } else {
      return this.getRuleContext(i, ShiftExpressionContext)
    }
  }
  public Less(): TerminalNode[]
  public Less(i: number): TerminalNode
  public Less(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Less)
    } else {
      return this.getToken(ClangParser.Less, i)
    }
  }
  public Greater(): TerminalNode[]
  public Greater(i: number): TerminalNode
  public Greater(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Greater)
    } else {
      return this.getToken(ClangParser.Greater, i)
    }
  }
  public LessEqual(): TerminalNode[]
  public LessEqual(i: number): TerminalNode
  public LessEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.LessEqual)
    } else {
      return this.getToken(ClangParser.LessEqual, i)
    }
  }
  public GreaterEqual(): TerminalNode[]
  public GreaterEqual(i: number): TerminalNode
  public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.GreaterEqual)
    } else {
      return this.getToken(ClangParser.GreaterEqual, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_relationalExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitRelationalExpression) {
      return visitor.visitRelationalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EqualityExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public relationalExpression(): RelationalExpressionContext[]
  public relationalExpression(i: number): RelationalExpressionContext
  public relationalExpression(
    i?: number
  ): RelationalExpressionContext | RelationalExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(RelationalExpressionContext)
    } else {
      return this.getRuleContext(i, RelationalExpressionContext)
    }
  }
  public Equal(): TerminalNode[]
  public Equal(i: number): TerminalNode
  public Equal(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Equal)
    } else {
      return this.getToken(ClangParser.Equal, i)
    }
  }
  public NotEqual(): TerminalNode[]
  public NotEqual(i: number): TerminalNode
  public NotEqual(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.NotEqual)
    } else {
      return this.getToken(ClangParser.NotEqual, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_equalityExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterEqualityExpression) {
      listener.enterEqualityExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitEqualityExpression) {
      listener.exitEqualityExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitEqualityExpression) {
      return visitor.visitEqualityExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AndExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public equalityExpression(): EqualityExpressionContext[]
  public equalityExpression(i: number): EqualityExpressionContext
  public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(EqualityExpressionContext)
    } else {
      return this.getRuleContext(i, EqualityExpressionContext)
    }
  }
  public And(): TerminalNode[]
  public And(i: number): TerminalNode
  public And(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.And)
    } else {
      return this.getToken(ClangParser.And, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_andExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAndExpression) {
      listener.enterAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAndExpression) {
      listener.exitAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAndExpression) {
      return visitor.visitAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExclusiveOrExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public andExpression(): AndExpressionContext[]
  public andExpression(i: number): AndExpressionContext
  public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AndExpressionContext)
    } else {
      return this.getRuleContext(i, AndExpressionContext)
    }
  }
  public Caret(): TerminalNode[]
  public Caret(i: number): TerminalNode
  public Caret(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Caret)
    } else {
      return this.getToken(ClangParser.Caret, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_exclusiveOrExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterExclusiveOrExpression) {
      listener.enterExclusiveOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitExclusiveOrExpression) {
      listener.exitExclusiveOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitExclusiveOrExpression) {
      return visitor.visitExclusiveOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InclusiveOrExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public exclusiveOrExpression(): ExclusiveOrExpressionContext[]
  public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext
  public exclusiveOrExpression(
    i?: number
  ): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExclusiveOrExpressionContext)
    } else {
      return this.getRuleContext(i, ExclusiveOrExpressionContext)
    }
  }
  public Or(): TerminalNode[]
  public Or(i: number): TerminalNode
  public Or(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Or)
    } else {
      return this.getToken(ClangParser.Or, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_inclusiveOrExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterInclusiveOrExpression) {
      listener.enterInclusiveOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitInclusiveOrExpression) {
      listener.exitInclusiveOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitInclusiveOrExpression) {
      return visitor.visitInclusiveOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalAndExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public inclusiveOrExpression(): InclusiveOrExpressionContext[]
  public inclusiveOrExpression(i: number): InclusiveOrExpressionContext
  public inclusiveOrExpression(
    i?: number
  ): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InclusiveOrExpressionContext)
    } else {
      return this.getRuleContext(i, InclusiveOrExpressionContext)
    }
  }
  public AndAnd(): TerminalNode[]
  public AndAnd(i: number): TerminalNode
  public AndAnd(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.AndAnd)
    } else {
      return this.getToken(ClangParser.AndAnd, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_logicalAndExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterLogicalAndExpression) {
      listener.enterLogicalAndExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitLogicalAndExpression) {
      listener.exitLogicalAndExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitLogicalAndExpression) {
      return visitor.visitLogicalAndExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LogicalOrExpressionContext extends ParserRuleContext {
  public _operator!: Token
  public logicalAndExpression(): LogicalAndExpressionContext[]
  public logicalAndExpression(i: number): LogicalAndExpressionContext
  public logicalAndExpression(
    i?: number
  ): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(LogicalAndExpressionContext)
    } else {
      return this.getRuleContext(i, LogicalAndExpressionContext)
    }
  }
  public OrOr(): TerminalNode[]
  public OrOr(i: number): TerminalNode
  public OrOr(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.OrOr)
    } else {
      return this.getToken(ClangParser.OrOr, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_logicalOrExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterLogicalOrExpression) {
      listener.enterLogicalOrExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitLogicalOrExpression) {
      listener.exitLogicalOrExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitLogicalOrExpression) {
      return visitor.visitLogicalOrExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public _test!: LogicalOrExpressionContext
  public _consequent!: ExpressionContext
  public _alternate!: ConditionalExpressionContext
  public logicalOrExpression(): LogicalOrExpressionContext {
    return this.getRuleContext(0, LogicalOrExpressionContext)
  }
  public Question(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Question, 0)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Colon, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
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

export class AssignmentExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConditionalExpressionContext)
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext)
  }
  public assignmentOperator(): AssignmentOperatorContext | undefined {
    return this.tryGetRuleContext(0, AssignmentOperatorContext)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public DigitSequence(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.DigitSequence, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_assignmentExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAssignmentExpression) {
      listener.enterAssignmentExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAssignmentExpression) {
      listener.exitAssignmentExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAssignmentExpression) {
      return visitor.visitAssignmentExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AssignmentOperatorContext extends ParserRuleContext {
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Assign, 0)
  }
  public StarAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.StarAssign, 0)
  }
  public DivAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.DivAssign, 0)
  }
  public ModAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.ModAssign, 0)
  }
  public PlusAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.PlusAssign, 0)
  }
  public MinusAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.MinusAssign, 0)
  }
  public LeftShiftAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftShiftAssign, 0)
  }
  public RightShiftAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightShiftAssign, 0)
  }
  public AndAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.AndAssign, 0)
  }
  public XorAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.XorAssign, 0)
  }
  public OrAssign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.OrAssign, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_assignmentOperator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAssignmentOperator) {
      listener.enterAssignmentOperator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAssignmentOperator) {
      listener.exitAssignmentOperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAssignmentOperator) {
      return visitor.visitAssignmentOperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext[]
  public assignmentExpression(i: number): AssignmentExpressionContext
  public assignmentExpression(
    i?: number
  ): AssignmentExpressionContext | AssignmentExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AssignmentExpressionContext)
    } else {
      return this.getRuleContext(i, AssignmentExpressionContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
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

export class ConstantExpressionContext extends ParserRuleContext {
  public conditionalExpression(): ConditionalExpressionContext {
    return this.getRuleContext(0, ConditionalExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_constantExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterConstantExpression) {
      listener.enterConstantExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitConstantExpression) {
      listener.exitConstantExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitConstantExpression) {
      return visitor.visitConstantExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext {
    return this.getRuleContext(0, DeclarationSpecifiersContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(ClangParser.Semi, 0)
  }
  public initDeclaratorList(): InitDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifiersContext extends ParserRuleContext {
  public declarationSpecifier(): DeclarationSpecifierContext[]
  public declarationSpecifier(i: number): DeclarationSpecifierContext
  public declarationSpecifier(
    i?: number
  ): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationSpecifierContext)
    } else {
      return this.getRuleContext(i, DeclarationSpecifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declarationSpecifiers
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclarationSpecifiers) {
      listener.enterDeclarationSpecifiers(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclarationSpecifiers) {
      listener.exitDeclarationSpecifiers(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifiers) {
      return visitor.visitDeclarationSpecifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifiers2Context extends ParserRuleContext {
  public declarationSpecifier(): DeclarationSpecifierContext[]
  public declarationSpecifier(i: number): DeclarationSpecifierContext
  public declarationSpecifier(
    i?: number
  ): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationSpecifierContext)
    } else {
      return this.getRuleContext(i, DeclarationSpecifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declarationSpecifiers2
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclarationSpecifiers2) {
      listener.enterDeclarationSpecifiers2(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclarationSpecifiers2) {
      listener.exitDeclarationSpecifiers2(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifiers2) {
      return visitor.visitDeclarationSpecifiers2(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationSpecifierContext extends ParserRuleContext {
  public typeSpecifier(): TypeSpecifierContext | undefined {
    return this.tryGetRuleContext(0, TypeSpecifierContext)
  }
  public typeQualifier(): TypeQualifierContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierContext)
  }
  public functionSpecifier(): FunctionSpecifierContext | undefined {
    return this.tryGetRuleContext(0, FunctionSpecifierContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declarationSpecifier
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclarationSpecifier) {
      listener.enterDeclarationSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclarationSpecifier) {
      listener.exitDeclarationSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclarationSpecifier) {
      return visitor.visitDeclarationSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitDeclaratorListContext extends ParserRuleContext {
  public initDeclarator(): InitDeclaratorContext[]
  public initDeclarator(i: number): InitDeclaratorContext
  public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InitDeclaratorContext)
    } else {
      return this.getRuleContext(i, InitDeclaratorContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_initDeclaratorList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterInitDeclaratorList) {
      listener.enterInitDeclaratorList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitInitDeclaratorList) {
      listener.exitInitDeclaratorList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitInitDeclaratorList) {
      return visitor.visitInitDeclaratorList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitDeclaratorContext extends ParserRuleContext {
  public _left!: DeclaratorContext
  public _operator!: Token
  public _right!: InitializerContext
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public Assign(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Assign, 0)
  }
  public initializer(): InitializerContext | undefined {
    return this.tryGetRuleContext(0, InitializerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_initDeclarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterInitDeclarator) {
      listener.enterInitDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitInitDeclarator) {
      listener.exitInitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitInitDeclarator) {
      return visitor.visitInitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeSpecifierContext extends ParserRuleContext {
  public Void(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Void, 0)
  }
  public Char(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Char, 0)
  }
  public Int(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Int, 0)
  }
  public Float(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Float, 0)
  }
  public Signed(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Signed, 0)
  }
  public Unsigned(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Unsigned, 0)
  }
  public structSpecifier(): StructSpecifierContext | undefined {
    return this.tryGetRuleContext(0, StructSpecifierContext)
  }
  public typedefName(): TypedefNameContext | undefined {
    return this.tryGetRuleContext(0, TypedefNameContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_typeSpecifier
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypeSpecifier) {
      listener.enterTypeSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypeSpecifier) {
      listener.exitTypeSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypeSpecifier) {
      return visitor.visitTypeSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructSpecifierContext extends ParserRuleContext {
  public Struct(): TerminalNode {
    return this.getToken(ClangParser.Struct, 0)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftBrace, 0)
  }
  public structDeclarationList(): StructDeclarationListContext | undefined {
    return this.tryGetRuleContext(0, StructDeclarationListContext)
  }
  public RightBrace(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightBrace, 0)
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Identifier, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_structSpecifier
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStructSpecifier) {
      listener.enterStructSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStructSpecifier) {
      listener.exitStructSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStructSpecifier) {
      return visitor.visitStructSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructDeclarationListContext extends ParserRuleContext {
  public structDeclaration(): StructDeclarationContext[]
  public structDeclaration(i: number): StructDeclarationContext
  public structDeclaration(i?: number): StructDeclarationContext | StructDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructDeclarationContext)
    } else {
      return this.getRuleContext(i, StructDeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_structDeclarationList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStructDeclarationList) {
      listener.enterStructDeclarationList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStructDeclarationList) {
      listener.exitStructDeclarationList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStructDeclarationList) {
      return visitor.visitStructDeclarationList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructDeclarationContext extends ParserRuleContext {
  public specifierQualifierList(): SpecifierQualifierListContext {
    return this.getRuleContext(0, SpecifierQualifierListContext)
  }
  public structDeclaratorList(): StructDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, StructDeclaratorListContext)
  }
  public Semi(): TerminalNode {
    return this.getToken(ClangParser.Semi, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_structDeclaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStructDeclaration) {
      listener.enterStructDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStructDeclaration) {
      listener.exitStructDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStructDeclaration) {
      return visitor.visitStructDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class SpecifierQualifierListContext extends ParserRuleContext {
  public typeSpecifier(): TypeSpecifierContext | undefined {
    return this.tryGetRuleContext(0, TypeSpecifierContext)
  }
  public typeQualifier(): TypeQualifierContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierContext)
  }
  public specifierQualifierList(): SpecifierQualifierListContext | undefined {
    return this.tryGetRuleContext(0, SpecifierQualifierListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_specifierQualifierList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterSpecifierQualifierList) {
      listener.enterSpecifierQualifierList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitSpecifierQualifierList) {
      listener.exitSpecifierQualifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitSpecifierQualifierList) {
      return visitor.visitSpecifierQualifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructDeclaratorListContext extends ParserRuleContext {
  public structDeclarator(): StructDeclaratorContext[]
  public structDeclarator(i: number): StructDeclaratorContext
  public structDeclarator(i?: number): StructDeclaratorContext | StructDeclaratorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructDeclaratorContext)
    } else {
      return this.getRuleContext(i, StructDeclaratorContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_structDeclaratorList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStructDeclaratorList) {
      listener.enterStructDeclaratorList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStructDeclaratorList) {
      listener.exitStructDeclaratorList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStructDeclaratorList) {
      return visitor.visitStructDeclaratorList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StructDeclaratorContext extends ParserRuleContext {
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Colon, 0)
  }
  public constantExpression(): ConstantExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConstantExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_structDeclarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterStructDeclarator) {
      listener.enterStructDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitStructDeclarator) {
      listener.exitStructDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitStructDeclarator) {
      return visitor.visitStructDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeQualifierContext extends ParserRuleContext {
  public Const(): TerminalNode {
    return this.getToken(ClangParser.Const, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_typeQualifier
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypeQualifier) {
      listener.enterTypeQualifier(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypeQualifier) {
      listener.exitTypeQualifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypeQualifier) {
      return visitor.visitTypeQualifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionSpecifierContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_functionSpecifier
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionSpecifier) {
      listener.enterFunctionSpecifier(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionSpecifier) {
      listener.exitFunctionSpecifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionSpecifier) {
      return visitor.visitFunctionSpecifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclaratorContext extends ParserRuleContext {
  public directDeclarator(): DirectDeclaratorContext {
    return this.getRuleContext(0, DirectDeclaratorContext)
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclarator) {
      listener.enterDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclarator) {
      listener.exitDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclarator) {
      return visitor.visitDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DirectDeclaratorContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Identifier, 0)
  }
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftParen, 0)
  }
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightParen, 0)
  }
  public directDeclarator(): DirectDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectDeclaratorContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightBracket, 0)
  }
  public typeQualifierList(): TypeQualifierListContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierListContext)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Star, 0)
  }
  public parameterTypeList(): ParameterTypeListContext | undefined {
    return this.tryGetRuleContext(0, ParameterTypeListContext)
  }
  public identifierList(): IdentifierListContext | undefined {
    return this.tryGetRuleContext(0, IdentifierListContext)
  }
  public Colon(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Colon, 0)
  }
  public DigitSequence(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.DigitSequence, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_directDeclarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDirectDeclarator) {
      listener.enterDirectDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDirectDeclarator) {
      listener.exitDirectDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDirectDeclarator) {
      return visitor.visitDirectDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class NestedParenthesesBlockContext extends ParserRuleContext {
  public _inner!: NestedParenthesesBlockContext
  public LeftParen(): TerminalNode[]
  public LeftParen(i: number): TerminalNode
  public LeftParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.LeftParen)
    } else {
      return this.getToken(ClangParser.LeftParen, i)
    }
  }
  public RightParen(): TerminalNode[]
  public RightParen(i: number): TerminalNode
  public RightParen(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.RightParen)
    } else {
      return this.getToken(ClangParser.RightParen, i)
    }
  }
  public nestedParenthesesBlock(): NestedParenthesesBlockContext[]
  public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext
  public nestedParenthesesBlock(
    i?: number
  ): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(NestedParenthesesBlockContext)
    } else {
      return this.getRuleContext(i, NestedParenthesesBlockContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_nestedParenthesesBlock
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterNestedParenthesesBlock) {
      listener.enterNestedParenthesesBlock(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitNestedParenthesesBlock) {
      listener.exitNestedParenthesesBlock(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitNestedParenthesesBlock) {
      return visitor.visitNestedParenthesesBlock(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public Star(): TerminalNode[]
  public Star(i: number): TerminalNode
  public Star(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Star)
    } else {
      return this.getToken(ClangParser.Star, i)
    }
  }
  public Caret(): TerminalNode[]
  public Caret(i: number): TerminalNode
  public Caret(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Caret)
    } else {
      return this.getToken(ClangParser.Caret, i)
    }
  }
  public typeQualifierList(): TypeQualifierListContext[]
  public typeQualifierList(i: number): TypeQualifierListContext
  public typeQualifierList(i?: number): TypeQualifierListContext | TypeQualifierListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeQualifierListContext)
    } else {
      return this.getRuleContext(i, TypeQualifierListContext)
    }
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

export class TypeQualifierListContext extends ParserRuleContext {
  public typeQualifier(): TypeQualifierContext[]
  public typeQualifier(i: number): TypeQualifierContext
  public typeQualifier(i?: number): TypeQualifierContext | TypeQualifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypeQualifierContext)
    } else {
      return this.getRuleContext(i, TypeQualifierContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_typeQualifierList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypeQualifierList) {
      listener.enterTypeQualifierList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypeQualifierList) {
      listener.exitTypeQualifierList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypeQualifierList) {
      return visitor.visitTypeQualifierList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterTypeListContext extends ParserRuleContext {
  public parameterList(): ParameterListContext {
    return this.getRuleContext(0, ParameterListContext)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_parameterTypeList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterParameterTypeList) {
      listener.enterParameterTypeList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitParameterTypeList) {
      listener.exitParameterTypeList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitParameterTypeList) {
      return visitor.visitParameterTypeList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterListContext extends ParserRuleContext {
  public parameterDeclaration(): ParameterDeclarationContext[]
  public parameterDeclaration(i: number): ParameterDeclarationContext
  public parameterDeclaration(
    i?: number
  ): ParameterDeclarationContext | ParameterDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ParameterDeclarationContext)
    } else {
      return this.getRuleContext(i, ParameterDeclarationContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_parameterList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterParameterList) {
      listener.enterParameterList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitParameterList) {
      listener.exitParameterList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitParameterList) {
      return visitor.visitParameterList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParameterDeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiersContext)
  }
  public declarator(): DeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DeclaratorContext)
  }
  public declarationSpecifiers2(): DeclarationSpecifiers2Context | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiers2Context)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_parameterDeclaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterParameterDeclaration) {
      listener.enterParameterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitParameterDeclaration) {
      listener.exitParameterDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitParameterDeclaration) {
      return visitor.visitParameterDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierListContext extends ParserRuleContext {
  public Identifier(): TerminalNode[]
  public Identifier(i: number): TerminalNode
  public Identifier(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Identifier)
    } else {
      return this.getToken(ClangParser.Identifier, i)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
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

export class TypeNameContext extends ParserRuleContext {
  public specifierQualifierList(): SpecifierQualifierListContext {
    return this.getRuleContext(0, SpecifierQualifierListContext)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_typeName
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypeName) {
      listener.enterTypeName(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypeName) {
      listener.exitTypeName(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypeName) {
      return visitor.visitTypeName(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class AbstractDeclaratorContext extends ParserRuleContext {
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext)
  }
  public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_abstractDeclarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterAbstractDeclarator) {
      listener.enterAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitAbstractDeclarator) {
      listener.exitAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitAbstractDeclarator) {
      return visitor.visitAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DirectAbstractDeclaratorContext extends ParserRuleContext {
  public _inner!: AbstractDeclaratorContext
  public LeftParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightParen, 0)
  }
  public abstractDeclarator(): AbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, AbstractDeclaratorContext)
  }
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightBracket, 0)
  }
  public typeQualifierList(): TypeQualifierListContext | undefined {
    return this.tryGetRuleContext(0, TypeQualifierListContext)
  }
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public Star(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Star, 0)
  }
  public parameterTypeList(): ParameterTypeListContext | undefined {
    return this.tryGetRuleContext(0, ParameterTypeListContext)
  }
  public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
    return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_directAbstractDeclarator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDirectAbstractDeclarator) {
      listener.enterDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDirectAbstractDeclarator) {
      listener.exitDirectAbstractDeclarator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDirectAbstractDeclarator) {
      return visitor.visitDirectAbstractDeclarator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypedefNameContext extends ParserRuleContext {
  public Identifier(): TerminalNode {
    return this.getToken(ClangParser.Identifier, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_typedefName
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTypedefName) {
      listener.enterTypedefName(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTypedefName) {
      listener.exitTypedefName(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTypedefName) {
      return visitor.visitTypedefName(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext | undefined {
    return this.tryGetRuleContext(0, AssignmentExpressionContext)
  }
  public LeftBrace(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftBrace, 0)
  }
  public initializerList(): InitializerListContext | undefined {
    return this.tryGetRuleContext(0, InitializerListContext)
  }
  public RightBrace(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightBrace, 0)
  }
  public Comma(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Comma, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_initializer
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterInitializer) {
      listener.enterInitializer(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitInitializer) {
      listener.exitInitializer(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitInitializer) {
      return visitor.visitInitializer(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class InitializerListContext extends ParserRuleContext {
  public initializer(): InitializerContext[]
  public initializer(i: number): InitializerContext
  public initializer(i?: number): InitializerContext | InitializerContext[] {
    if (i === undefined) {
      return this.getRuleContexts(InitializerContext)
    } else {
      return this.getRuleContext(i, InitializerContext)
    }
  }
  public designation(): DesignationContext[]
  public designation(i: number): DesignationContext
  public designation(i?: number): DesignationContext | DesignationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DesignationContext)
    } else {
      return this.getRuleContext(i, DesignationContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_initializerList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterInitializerList) {
      listener.enterInitializerList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitInitializerList) {
      listener.exitInitializerList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitInitializerList) {
      return visitor.visitInitializerList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DesignationContext extends ParserRuleContext {
  public designatorList(): DesignatorListContext {
    return this.getRuleContext(0, DesignatorListContext)
  }
  public Assign(): TerminalNode {
    return this.getToken(ClangParser.Assign, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_designation
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDesignation) {
      listener.enterDesignation(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDesignation) {
      listener.exitDesignation(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDesignation) {
      return visitor.visitDesignation(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DesignatorListContext extends ParserRuleContext {
  public designator(): DesignatorContext[]
  public designator(i: number): DesignatorContext
  public designator(i?: number): DesignatorContext | DesignatorContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DesignatorContext)
    } else {
      return this.getRuleContext(i, DesignatorContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_designatorList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDesignatorList) {
      listener.enterDesignatorList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDesignatorList) {
      listener.exitDesignatorList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDesignatorList) {
      return visitor.visitDesignatorList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DesignatorContext extends ParserRuleContext {
  public _inner!: ConstantExpressionContext
  public LeftBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.LeftBracket, 0)
  }
  public RightBracket(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.RightBracket, 0)
  }
  public constantExpression(): ConstantExpressionContext | undefined {
    return this.tryGetRuleContext(0, ConstantExpressionContext)
  }
  public Dot(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Dot, 0)
  }
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Identifier, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_designator
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDesignator) {
      listener.enterDesignator(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDesignator) {
      listener.exitDesignator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDesignator) {
      return visitor.visitDesignator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public compoundStatement(): CompoundStatementContext | undefined {
    return this.tryGetRuleContext(0, CompoundStatementContext)
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

export class CompoundStatementContext extends ParserRuleContext {
  public LeftBrace(): TerminalNode {
    return this.getToken(ClangParser.LeftBrace, 0)
  }
  public RightBrace(): TerminalNode {
    return this.getToken(ClangParser.RightBrace, 0)
  }
  public blockItemList(): BlockItemListContext | undefined {
    return this.tryGetRuleContext(0, BlockItemListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_compoundStatement
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterCompoundStatement) {
      listener.enterCompoundStatement(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitCompoundStatement) {
      listener.exitCompoundStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitCompoundStatement) {
      return visitor.visitCompoundStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockItemListContext extends ParserRuleContext {
  public blockItem(): BlockItemContext[]
  public blockItem(i: number): BlockItemContext
  public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockItemContext)
    } else {
      return this.getRuleContext(i, BlockItemContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_blockItemList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBlockItemList) {
      listener.enterBlockItemList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBlockItemList) {
      listener.exitBlockItemList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBlockItemList) {
      return visitor.visitBlockItemList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockItemContext extends ParserRuleContext {
  public statement(): StatementContext | undefined {
    return this.tryGetRuleContext(0, StatementContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_blockItem
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterBlockItem) {
      listener.enterBlockItem(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitBlockItem) {
      listener.exitBlockItem(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitBlockItem) {
      return visitor.visitBlockItem(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public Semi(): TerminalNode {
    return this.getToken(ClangParser.Semi, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
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
  public _consequent!: StatementContext
  public _alternate!: StatementContext
  public If(): TerminalNode {
    return this.getToken(ClangParser.If, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(ClangParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(ClangParser.RightParen, 0)
  }
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
  public Else(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Else, 0)
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
  public _test!: ExpressionContext
  public _consequent!: StatementContext
  public While(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.While, 0)
  }
  public LeftParen(): TerminalNode {
    return this.getToken(ClangParser.LeftParen, 0)
  }
  public RightParen(): TerminalNode {
    return this.getToken(ClangParser.RightParen, 0)
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  public Do(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Do, 0)
  }
  public Semi(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Semi, 0)
  }
  public For(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.For, 0)
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
  public Semi(): TerminalNode[]
  public Semi(i: number): TerminalNode
  public Semi(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Semi)
    } else {
      return this.getToken(ClangParser.Semi, i)
    }
  }
  public forDeclaration(): ForDeclarationContext | undefined {
    return this.tryGetRuleContext(0, ForDeclarationContext)
  }
  public forExpression(): ForExpressionContext[]
  public forExpression(i: number): ForExpressionContext
  public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ForExpressionContext)
    } else {
      return this.getRuleContext(i, ForExpressionContext)
    }
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext)
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

export class ForDeclarationContext extends ParserRuleContext {
  public declarationSpecifiers(): DeclarationSpecifiersContext {
    return this.getRuleContext(0, DeclarationSpecifiersContext)
  }
  public initDeclaratorList(): InitDeclaratorListContext | undefined {
    return this.tryGetRuleContext(0, InitDeclaratorListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_forDeclaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterForDeclaration) {
      listener.enterForDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitForDeclaration) {
      listener.exitForDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitForDeclaration) {
      return visitor.visitForDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ForExpressionContext extends ParserRuleContext {
  public assignmentExpression(): AssignmentExpressionContext[]
  public assignmentExpression(i: number): AssignmentExpressionContext
  public assignmentExpression(
    i?: number
  ): AssignmentExpressionContext | AssignmentExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AssignmentExpressionContext)
    } else {
      return this.getRuleContext(i, AssignmentExpressionContext)
    }
  }
  public Comma(): TerminalNode[]
  public Comma(i: number): TerminalNode
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(ClangParser.Comma)
    } else {
      return this.getToken(ClangParser.Comma, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_forExpression
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterForExpression) {
      listener.enterForExpression(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitForExpression) {
      listener.exitForExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitForExpression) {
      return visitor.visitForExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class CompilationUnitContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(ClangParser.EOF, 0)
  }
  public translationUnit(): TranslationUnitContext | undefined {
    return this.tryGetRuleContext(0, TranslationUnitContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_compilationUnit
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterCompilationUnit) {
      listener.enterCompilationUnit(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitCompilationUnit) {
      listener.exitCompilationUnit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitCompilationUnit) {
      return visitor.visitCompilationUnit(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TranslationUnitContext extends ParserRuleContext {
  public externalDeclaration(): ExternalDeclarationContext[]
  public externalDeclaration(i: number): ExternalDeclarationContext
  public externalDeclaration(
    i?: number
  ): ExternalDeclarationContext | ExternalDeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExternalDeclarationContext)
    } else {
      return this.getRuleContext(i, ExternalDeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_translationUnit
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterTranslationUnit) {
      listener.enterTranslationUnit(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitTranslationUnit) {
      listener.exitTranslationUnit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitTranslationUnit) {
      return visitor.visitTranslationUnit(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExternalDeclarationContext extends ParserRuleContext {
  public functionDefinition(): FunctionDefinitionContext | undefined {
    return this.tryGetRuleContext(0, FunctionDefinitionContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  public Semi(): TerminalNode | undefined {
    return this.tryGetToken(ClangParser.Semi, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_externalDeclaration
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterExternalDeclaration) {
      listener.enterExternalDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitExternalDeclaration) {
      listener.exitExternalDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitExternalDeclaration) {
      return visitor.visitExternalDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionDefinitionContext extends ParserRuleContext {
  public declarator(): DeclaratorContext {
    return this.getRuleContext(0, DeclaratorContext)
  }
  public compoundStatement(): CompoundStatementContext {
    return this.getRuleContext(0, CompoundStatementContext)
  }
  public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
    return this.tryGetRuleContext(0, DeclarationSpecifiersContext)
  }
  public declarationList(): DeclarationListContext | undefined {
    return this.tryGetRuleContext(0, DeclarationListContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_functionDefinition
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterFunctionDefinition) {
      listener.enterFunctionDefinition(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitFunctionDefinition) {
      listener.exitFunctionDefinition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitFunctionDefinition) {
      return visitor.visitFunctionDefinition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationListContext extends ParserRuleContext {
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return ClangParser.RULE_declarationList
  }
  // @Override
  public enterRule(listener: ClangListener): void {
    if (listener.enterDeclarationList) {
      listener.enterDeclarationList(this)
    }
  }
  // @Override
  public exitRule(listener: ClangListener): void {
    if (listener.exitDeclarationList) {
      listener.exitDeclarationList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: ClangVisitor<Result>): Result {
    if (visitor.visitDeclarationList) {
      return visitor.visitDeclarationList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
