// Generated from ./src/lang/Clang.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class ClangLexer extends Lexer {
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
  public static readonly MUL = 17
  public static readonly DIV = 18
  public static readonly ADD = 19
  public static readonly SUB = 20
  public static readonly MOD = 21
  public static readonly LESSTHAN = 22
  public static readonly LESSTHANOREQUAL = 23
  public static readonly GREATERTHAN = 24
  public static readonly GREATERTHANOREQUAL = 25
  public static readonly EQUAL = 26
  public static readonly EQUALCHECK = 27
  public static readonly NOTEQUALCHECK = 28
  public static readonly XOR = 29
  public static readonly AND = 30
  public static readonly OR = 31
  public static readonly NOT = 32
  public static readonly BITWISEAND = 33
  public static readonly BITWISEOR = 34
  public static readonly MINUSEQUAL = 35
  public static readonly PLUSEQUAL = 36
  public static readonly BITSHIFTRIGHT = 37
  public static readonly BITSHIFTLEFT = 38
  public static readonly WHITESPACE = 39
  public static readonly NEWLINE = 40
  public static readonly PRIMITIVETYPE = 41
  public static readonly SIGNEDTYPE = 42
  public static readonly IDENTIFIER = 43
  public static readonly FORMATSPECIFIERS = 44
  public static readonly NUMBER = 45
  public static readonly CHAR = 46
  public static readonly FLOAT = 47
  public static readonly PLUSPLUS = 48
  public static readonly MINUSMINUS = 49
  public static readonly StringLiteral = 50

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'T__8',
    'T__9',
    'T__10',
    'T__11',
    'T__12',
    'T__13',
    'T__14',
    'T__15',
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
    'MINUSMINUS',
    'StringLiteral',
    'CChar',
    'EscapeSequence',
    'SimpleEscapeSequence',
    'SCharSequence',
    'SChar'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
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
    'MINUSMINUS',
    'StringLiteral'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    ClangLexer._LITERAL_NAMES,
    ClangLexer._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return ClangLexer.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(ClangLexer._ATN, this)
  }

  // @Override
  public get grammarFileName(): string {
    return 'Clang.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return ClangLexer.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return ClangLexer._serializedATN
  }

  // @Override
  public get channelNames(): string[] {
    return ClangLexer.channelNames
  }

  // @Override
  public get modeNames(): string[] {
    return ClangLexer.modeNames
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x024\u0156\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x03\x02\x03\x03\x03\x03\x03' +
    '\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03' +
    '\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n' +
    '\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03' +
    '\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10' +
    '\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14' +
    '\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18' +
    '\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C' +
    '\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F' +
    '\x03 \x03 \x03 \x03!\x03!\x03"\x03"\x03#\x03#\x03$\x03$\x03$\x03%\x03' +
    "%\x03%\x03&\x03&\x03&\x03'\x03'\x03'\x03(\x06(\xD9\n(\r(\x0E(\xDA\x03" +
    '(\x03(\x03)\x03)\x05)\xE1\n)\x03)\x05)\xE4\n)\x03)\x03)\x03*\x03*\x03' +
    '*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05' +
    '*\xF8\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03' +
    '+\x03+\x05+\u0108\n+\x03,\x03,\x07,\u010C\n,\f,\x0E,\u010F\v,\x03-\x03' +
    '-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u011D\n-\x03' +
    '.\x06.\u0120\n.\r.\x0E.\u0121\x03/\x03/\x03/\x03/\x030\x060\u0129\n0\r' +
    '0\x0E0\u012A\x030\x030\x070\u012F\n0\f0\x0E0\u0132\v0\x031\x031\x031\x03' +
    '2\x032\x032\x033\x033\x053\u013C\n3\x033\x033\x034\x034\x054\u0142\n4' +
    '\x035\x035\x036\x036\x036\x037\x067\u014A\n7\r7\x0E7\u014B\x038\x038\x03' +
    '8\x038\x038\x038\x038\x058\u0155\n8\x02\x02\x029\x03\x02\x03\x05\x02\x04' +
    '\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v' +
    '\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!' +
    "\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
    '1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02' +
    '"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-' +
    'Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x02\x02i\x02\x02k\x02\x02' +
    'm\x02\x02o\x02\x02\x03\x02\n\x04\x02\v\v""\x05\x02C\\aac|\x06\x022;' +
    'C\\aac|\x04\x022;aa\x04\x02++__\x06\x02\f\f\x0F\x0F))^^\f\x02$$))AA^^' +
    'cdhhppttvvxx\x06\x02\f\f\x0F\x0F$$^^\x02\u0166\x02\x03\x03\x02\x02\x02' +
    '\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02' +
    '\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02' +
    '\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02' +
    '\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02' +
    '\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02' +
    "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03" +
    '\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02' +
    '\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02' +
    '7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02' +
    '\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02' +
    '\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03' +
    '\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02' +
    '\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02' +
    'Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02' +
    '\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02' +
    '\x03q\x03\x02\x02\x02\x05s\x03\x02\x02\x02\x07u\x03\x02\x02\x02\tw\x03' +
    '\x02\x02\x02\vy\x03\x02\x02\x02\r{\x03\x02\x02\x02\x0F\x82\x03\x02\x02' +
    '\x02\x11\x84\x03\x02\x02\x02\x13\x87\x03\x02\x02\x02\x15\x89\x03\x02\x02' +
    '\x02\x17\x8B\x03\x02\x02\x02\x19\x90\x03\x02\x02\x02\x1B\x96\x03\x02\x02' +
    '\x02\x1D\x99\x03\x02\x02\x02\x1F\x9D\x03\x02\x02\x02!\x9F\x03\x02\x02' +
    "\x02#\xA1\x03\x02\x02\x02%\xA3\x03\x02\x02\x02'\xA5\x03\x02\x02\x02)" +
    '\xA7\x03\x02\x02\x02+\xA9\x03\x02\x02\x02-\xAB\x03\x02\x02\x02/\xAD\x03' +
    '\x02\x02\x021\xB0\x03\x02\x02\x023\xB2\x03\x02\x02\x025\xB5\x03\x02\x02' +
    '\x027\xB7\x03\x02\x02\x029\xBA\x03\x02\x02\x02;\xBD\x03\x02\x02\x02=\xBF' +
    '\x03\x02\x02\x02?\xC2\x03\x02\x02\x02A\xC5\x03\x02\x02\x02C\xC7\x03\x02' +
    '\x02\x02E\xC9\x03\x02\x02\x02G\xCB\x03\x02\x02\x02I\xCE\x03\x02\x02\x02' +
    'K\xD1\x03\x02\x02\x02M\xD4\x03\x02\x02\x02O\xD8\x03\x02\x02\x02Q\xE3\x03' +
    '\x02\x02\x02S\xF7\x03\x02\x02\x02U\u0107\x03\x02\x02\x02W\u0109\x03\x02' +
    '\x02\x02Y\u011C\x03\x02\x02\x02[\u011F\x03\x02\x02\x02]\u0123\x03\x02' +
    '\x02\x02_\u0128\x03\x02\x02\x02a\u0133\x03\x02\x02\x02c\u0136\x03\x02' +
    '\x02\x02e\u0139\x03\x02\x02\x02g\u0141\x03\x02\x02\x02i\u0143\x03\x02' +
    '\x02\x02k\u0145\x03\x02\x02\x02m\u0149\x03\x02\x02\x02o\u0154\x03\x02' +
    '\x02\x02qr\x07.\x02\x02r\x04\x03\x02\x02\x02st\x07*\x02\x02t\x06\x03\x02' +
    '\x02\x02uv\x07+\x02\x02v\b\x03\x02\x02\x02wx\x07A\x02\x02x\n\x03\x02\x02' +
    '\x02yz\x07<\x02\x02z\f\x03\x02\x02\x02{|\x07t\x02\x02|}\x07g\x02\x02}' +
    '~\x07v\x02\x02~\x7F\x07w\x02\x02\x7F\x80\x07t\x02\x02\x80\x81\x07p\x02' +
    '\x02\x81\x0E\x03\x02\x02\x02\x82\x83\x07=\x02\x02\x83\x10\x03\x02\x02' +
    '\x02\x84\x85\x07k\x02\x02\x85\x86\x07h\x02\x02\x86\x12\x03\x02\x02\x02' +
    '\x87\x88\x07}\x02\x02\x88\x14\x03\x02\x02\x02\x89\x8A\x07\x7F\x02\x02' +
    '\x8A\x16\x03\x02\x02\x02\x8B\x8C\x07g\x02\x02\x8C\x8D\x07n\x02\x02\x8D' +
    '\x8E\x07u\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x18\x03\x02\x02\x02\x90\x91' +
    '\x07y\x02\x02\x91\x92\x07j\x02\x02\x92\x93\x07k\x02\x02\x93\x94\x07n\x02' +
    '\x02\x94\x95\x07g\x02\x02\x95\x1A\x03\x02\x02\x02\x96\x97\x07f\x02\x02' +
    '\x97\x98\x07q\x02\x02\x98\x1C\x03\x02\x02\x02\x99\x9A\x07h\x02\x02\x9A' +
    '\x9B\x07q\x02\x02\x9B\x9C\x07t\x02\x02\x9C\x1E\x03\x02\x02\x02\x9D\x9E' +
    '\x07]\x02\x02\x9E \x03\x02\x02\x02\x9F\xA0\x07_\x02\x02\xA0"\x03\x02' +
    '\x02\x02\xA1\xA2\x07,\x02\x02\xA2$\x03\x02\x02\x02\xA3\xA4\x071\x02\x02' +
    '\xA4&\x03\x02\x02\x02\xA5\xA6\x07-\x02\x02\xA6(\x03\x02\x02\x02\xA7\xA8' +
    "\x07/\x02\x02\xA8*\x03\x02\x02\x02\xA9\xAA\x07'\x02\x02\xAA,\x03\x02" +
    '\x02\x02\xAB\xAC\x07>\x02\x02\xAC.\x03\x02\x02\x02\xAD\xAE\x07>\x02\x02' +
    '\xAE\xAF\x07?\x02\x02\xAF0\x03\x02\x02\x02\xB0\xB1\x07@\x02\x02\xB12\x03' +
    '\x02\x02\x02\xB2\xB3\x07@\x02\x02\xB3\xB4\x07?\x02\x02\xB44\x03\x02\x02' +
    '\x02\xB5\xB6\x07?\x02\x02\xB66\x03\x02\x02\x02\xB7\xB8\x07?\x02\x02\xB8' +
    '\xB9\x07?\x02\x02\xB98\x03\x02\x02\x02\xBA\xBB\x07#\x02\x02\xBB\xBC\x07' +
    '?\x02\x02\xBC:\x03\x02\x02\x02\xBD\xBE\x07`\x02\x02\xBE<\x03\x02\x02\x02' +
    '\xBF\xC0\x07(\x02\x02\xC0\xC1\x07(\x02\x02\xC1>\x03\x02\x02\x02\xC2\xC3' +
    '\x07~\x02\x02\xC3\xC4\x07~\x02\x02\xC4@\x03\x02\x02\x02\xC5\xC6\x07#\x02' +
    '\x02\xC6B\x03\x02\x02\x02\xC7\xC8\x07(\x02\x02\xC8D\x03\x02\x02\x02\xC9' +
    '\xCA\x07~\x02\x02\xCAF\x03\x02\x02\x02\xCB\xCC\x07/\x02\x02\xCC\xCD\x07' +
    '?\x02\x02\xCDH\x03\x02\x02\x02\xCE\xCF\x07-\x02\x02\xCF\xD0\x07?\x02\x02' +
    '\xD0J\x03\x02\x02\x02\xD1\xD2\x07@\x02\x02\xD2\xD3\x07@\x02\x02\xD3L\x03' +
    '\x02\x02\x02\xD4\xD5\x07>\x02\x02\xD5\xD6\x07>\x02\x02\xD6N\x03\x02\x02' +
    '\x02\xD7\xD9\t\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02' +
    '\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02' +
    '\x02\xDC\xDD\b(\x02\x02\xDDP\x03\x02\x02\x02\xDE\xE0\x07\x0F\x02\x02\xDF' +
    '\xE1\x07\f\x02\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1' +
    '\xE4\x03\x02\x02\x02\xE2\xE4\x07\f\x02\x02\xE3\xDE\x03\x02\x02\x02\xE3' +
    '\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\b)\x02\x02\xE6R\x03' +
    '\x02\x02\x02\xE7\xE8\x07x\x02\x02\xE8\xE9\x07q\x02\x02\xE9\xEA\x07k\x02' +
    '\x02\xEA\xF8\x07f\x02\x02\xEB\xEC\x07e\x02\x02\xEC\xED\x07j\x02\x02\xED' +
    '\xEE\x07c\x02\x02\xEE\xF8\x07t\x02\x02\xEF\xF0\x07k\x02\x02\xF0\xF1\x07' +
    'p\x02\x02\xF1\xF8\x07v\x02\x02\xF2\xF3\x07h\x02\x02\xF3\xF4\x07n\x02\x02' +
    '\xF4\xF5\x07q\x02\x02\xF5\xF6\x07c\x02\x02\xF6\xF8\x07v\x02\x02\xF7\xE7' +
    '\x03\x02\x02\x02\xF7\xEB\x03\x02\x02\x02\xF7\xEF\x03\x02\x02\x02\xF7\xF2' +
    '\x03\x02\x02\x02\xF8T\x03\x02\x02\x02\xF9\xFA\x07u\x02\x02\xFA\xFB\x07' +
    'k\x02\x02\xFB\xFC\x07i\x02\x02\xFC\xFD\x07p\x02\x02\xFD\xFE\x07g\x02\x02' +
    '\xFE\u0108\x07f\x02\x02\xFF\u0100\x07w\x02\x02\u0100\u0101\x07p\x02\x02' +
    '\u0101\u0102\x07u\x02\x02\u0102\u0103\x07k\x02\x02\u0103\u0104\x07i\x02' +
    '\x02\u0104\u0105\x07p\x02\x02\u0105\u0106\x07g\x02\x02\u0106\u0108\x07' +
    'f\x02\x02\u0107\xF9\x03\x02\x02\x02\u0107\xFF\x03\x02\x02\x02\u0108V\x03' +
    '\x02\x02\x02\u0109\u010D\t\x03\x02\x02\u010A\u010C\t\x04\x02\x02\u010B' +
    '\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02' +
    '\x02\x02\u010D\u010E\x03\x02\x02\x02\u010EX\x03\x02\x02\x02\u010F\u010D' +
    "\x03\x02\x02\x02\u0110\u0111\x07'\x02\x02\u0111\u011D\x07f\x02\x02\u0112" +
    "\u0113\x07'\x02\x02\u0113\u011D\x07k\x02\x02\u0114\u0115\x07'\x02\x02" +
    "\u0115\u011D\x07e\x02\x02\u0116\u0117\x07'\x02\x02\u0117\u011D\x07h\x02" +
    "\x02\u0118\u0119\x07'\x02\x02\u0119\u011D\x07u\x02\x02\u011A\u011B\x07" +
    "'\x02\x02\u011B\u011D\x07r\x02\x02\u011C\u0110\x03\x02\x02\x02\u011C" +
    '\u0112\x03\x02\x02\x02\u011C\u0114\x03\x02\x02\x02\u011C\u0116\x03\x02' +
    '\x02\x02\u011C\u0118\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D' +
    'Z\x03\x02\x02\x02\u011E\u0120\t\x05\x02\x02\u011F\u011E\x03\x02\x02\x02' +
    '\u0120\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03' +
    '\x02\x02\x02\u0122\\\x03\x02\x02\x02\u0123\u0124\x07)\x02\x02\u0124\u0125' +
    '\n\x06\x02\x02\u0125\u0126\x07)\x02\x02\u0126^\x03\x02\x02\x02\u0127\u0129' +
    '\x042;\x02\u0128\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A' +
    '\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02' +
    '\x02\x02\u012C\u0130\x070\x02\x02\u012D\u012F\x042;\x02\u012E\u012D\x03' +
    '\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130' +
    '\u0131\x03\x02\x02\x02\u0131`\x03\x02\x02\x02\u0132\u0130\x03\x02\x02' +
    '\x02\u0133\u0134\x07-\x02\x02\u0134\u0135\x07-\x02\x02\u0135b\x03\x02' +
    '\x02\x02\u0136\u0137\x07/\x02\x02\u0137\u0138\x07/\x02\x02\u0138d\x03' +
    '\x02\x02\x02\u0139\u013B\x07$\x02\x02\u013A\u013C\x05m7\x02\u013B\u013A' +
    '\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02' +
    '\u013D\u013E\x07$\x02\x02\u013Ef\x03\x02\x02\x02\u013F\u0142\n\x07\x02' +
    '\x02\u0140\u0142\x05i5\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0140\x03' +
    '\x02\x02\x02\u0142h\x03\x02\x02\x02\u0143\u0144\x05k6\x02\u0144j\x03\x02' +
    '\x02\x02\u0145\u0146\x07^\x02\x02\u0146\u0147\t\b\x02\x02\u0147l\x03\x02' +
    '\x02\x02\u0148\u014A\x05o8\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014B' +
    '\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02' +
    '\u014Cn\x03\x02\x02\x02\u014D\u0155\n\t\x02\x02\u014E\u0155\x05i5\x02' +
    '\u014F\u0150\x07^\x02\x02\u0150\u0155\x07\f\x02\x02\u0151\u0152\x07^\x02' +
    '\x02\u0152\u0153\x07\x0F\x02\x02\u0153\u0155\x07\f\x02\x02\u0154\u014D' +
    '\x03\x02\x02\x02\u0154\u014E\x03\x02\x02\x02\u0154\u014F\x03\x02\x02\x02' +
    '\u0154\u0151\x03\x02\x02\x02\u0155p\x03\x02\x02\x02\x11\x02\xDA\xE0\xE3' +
    '\xF7\u0107\u010D\u011C\u0121\u012A\u0130\u013B\u0141\u014B\u0154\x03\b' +
    '\x02\x02'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!ClangLexer.__ATN) {
      ClangLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(ClangLexer._serializedATN)
      )
    }

    return ClangLexer.__ATN
  }
}
