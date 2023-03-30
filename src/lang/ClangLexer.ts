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
    'T__16',
    'T__17',
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

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'\"'",
    "','",
    "'('",
    "')'",
    "';'",
    "'?'",
    "':'",
    "'return'",
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x025\u014D\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03' +
    '\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t' +
    '\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03' +
    '\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12' +
    '\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18' +
    '\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C' +
    '\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F' +
    '\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03"\x03"\x03"\x03#\x03#\x03$\x03' +
    "$\x03%\x03%\x03&\x03&\x03&\x03'\x03'\x03'\x03(\x03(\x03(\x03)\x03)" +
    '\x03)\x03*\x06*\xDB\n*\r*\x0E*\xDC\x03*\x03*\x03+\x03+\x05+\xE3\n+\x03' +
    '+\x05+\xE6\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03' +
    ',\x03,\x03,\x03,\x03,\x03,\x03,\x05,\xFA\n,\x03-\x03-\x03-\x03-\x03-\x03' +
    '-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u010A\n-\x03.\x03.\x07' +
    '.\u010E\n.\f.\x0E.\u0111\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03' +
    '/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03' +
    '/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0131\n/\x030\x060\u0134\n0' +
    '\r0\x0E0\u0135\x031\x031\x031\x031\x032\x062\u013D\n2\r2\x0E2\u013E\x03' +
    '2\x032\x072\u0143\n2\f2\x0E2\u0146\v2\x033\x033\x033\x034\x034\x034\x02' +
    '\x02\x025\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02' +
    '\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02' +
    "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02" +
    '\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02' +
    '\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(' +
    'O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02' +
    '4g\x025\x03\x02\x07\x04\x02\v\v""\x05\x02C\\aac|\x06\x022;C\\aac|\x04' +
    '\x022;aa\x04\x02++__\x02\u015C\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02' +
    '\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02' +
    '\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02' +
    '\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02' +
    '\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02' +
    '\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02' +
    "\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
    '\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02' +
    '\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02' +
    '\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03' +
    '\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02' +
    '\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02' +
    'M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02' +
    '\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02' +
    '\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03' +
    '\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02' +
    '\x02\x03i\x03\x02\x02\x02\x05k\x03\x02\x02\x02\x07m\x03\x02\x02\x02\t' +
    'o\x03\x02\x02\x02\vq\x03\x02\x02\x02\rs\x03\x02\x02\x02\x0Fu\x03\x02\x02' +
    '\x02\x11w\x03\x02\x02\x02\x13~\x03\x02\x02\x02\x15\x81\x03\x02\x02\x02' +
    '\x17\x83\x03\x02\x02\x02\x19\x85\x03\x02\x02\x02\x1B\x8A\x03\x02\x02\x02' +
    '\x1D\x90\x03\x02\x02\x02\x1F\x93\x03\x02\x02\x02!\x97\x03\x02\x02\x02' +
    "#\x99\x03\x02\x02\x02%\x9B\x03\x02\x02\x02'\xA3\x03\x02\x02\x02)\xA5" +
    '\x03\x02\x02\x02+\xA7\x03\x02\x02\x02-\xA9\x03\x02\x02\x02/\xAB\x03\x02' +
    '\x02\x021\xAD\x03\x02\x02\x023\xAF\x03\x02\x02\x025\xB2\x03\x02\x02\x02' +
    '7\xB4\x03\x02\x02\x029\xB7\x03\x02\x02\x02;\xB9\x03\x02\x02\x02=\xBC\x03' +
    '\x02\x02\x02?\xBF\x03\x02\x02\x02A\xC1\x03\x02\x02\x02C\xC4\x03\x02\x02' +
    '\x02E\xC7\x03\x02\x02\x02G\xC9\x03\x02\x02\x02I\xCB\x03\x02\x02\x02K\xCD' +
    '\x03\x02\x02\x02M\xD0\x03\x02\x02\x02O\xD3\x03\x02\x02\x02Q\xD6\x03\x02' +
    '\x02\x02S\xDA\x03\x02\x02\x02U\xE5\x03\x02\x02\x02W\xF9\x03\x02\x02\x02' +
    'Y\u0109\x03\x02\x02\x02[\u010B\x03\x02\x02\x02]\u0130\x03\x02\x02\x02' +
    '_\u0133\x03\x02\x02\x02a\u0137\x03\x02\x02\x02c\u013C\x03\x02\x02\x02' +
    'e\u0147\x03\x02\x02\x02g\u014A\x03\x02\x02\x02ij\x07$\x02\x02j\x04\x03' +
    '\x02\x02\x02kl\x07.\x02\x02l\x06\x03\x02\x02\x02mn\x07*\x02\x02n\b\x03' +
    '\x02\x02\x02op\x07+\x02\x02p\n\x03\x02\x02\x02qr\x07=\x02\x02r\f\x03\x02' +
    '\x02\x02st\x07A\x02\x02t\x0E\x03\x02\x02\x02uv\x07<\x02\x02v\x10\x03\x02' +
    '\x02\x02wx\x07t\x02\x02xy\x07g\x02\x02yz\x07v\x02\x02z{\x07w\x02\x02{' +
    '|\x07t\x02\x02|}\x07p\x02\x02}\x12\x03\x02\x02\x02~\x7F\x07k\x02\x02\x7F' +
    '\x80\x07h\x02\x02\x80\x14\x03\x02\x02\x02\x81\x82\x07}\x02\x02\x82\x16' +
    '\x03\x02\x02\x02\x83\x84\x07\x7F\x02\x02\x84\x18\x03\x02\x02\x02\x85\x86' +
    '\x07g\x02\x02\x86\x87\x07n\x02\x02\x87\x88\x07u\x02\x02\x88\x89\x07g\x02' +
    '\x02\x89\x1A\x03\x02\x02\x02\x8A\x8B\x07y\x02\x02\x8B\x8C\x07j\x02\x02' +
    '\x8C\x8D\x07k\x02\x02\x8D\x8E\x07n\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x1C' +
    '\x03\x02\x02\x02\x90\x91\x07f\x02\x02\x91\x92\x07q\x02\x02\x92\x1E\x03' +
    '\x02\x02\x02\x93\x94\x07h\x02\x02\x94\x95\x07q\x02\x02\x95\x96\x07t\x02' +
    '\x02\x96 \x03\x02\x02\x02\x97\x98\x07]\x02\x02\x98"\x03\x02\x02\x02\x99' +
    '\x9A\x07_\x02\x02\x9A$\x03\x02\x02\x02\x9B\x9C\x07r\x02\x02\x9C\x9D\x07' +
    't\x02\x02\x9D\x9E\x07k\x02\x02\x9E\x9F\x07p\x02\x02\x9F\xA0\x07v\x02\x02' +
    '\xA0\xA1\x07h\x02\x02\xA1\xA2\x07*\x02\x02\xA2&\x03\x02\x02\x02\xA3\xA4' +
    '\x07,\x02\x02\xA4(\x03\x02\x02\x02\xA5\xA6\x071\x02\x02\xA6*\x03\x02\x02' +
    '\x02\xA7\xA8\x07-\x02\x02\xA8,\x03\x02\x02\x02\xA9\xAA\x07/\x02\x02\xAA' +
    ".\x03\x02\x02\x02\xAB\xAC\x07'\x02\x02\xAC0\x03\x02\x02\x02\xAD\xAE\x07" +
    '>\x02\x02\xAE2\x03\x02\x02\x02\xAF\xB0\x07>\x02\x02\xB0\xB1\x07?\x02\x02' +
    '\xB14\x03\x02\x02\x02\xB2\xB3\x07@\x02\x02\xB36\x03\x02\x02\x02\xB4\xB5' +
    '\x07@\x02\x02\xB5\xB6\x07?\x02\x02\xB68\x03\x02\x02\x02\xB7\xB8\x07?\x02' +
    '\x02\xB8:\x03\x02\x02\x02\xB9\xBA\x07?\x02\x02\xBA\xBB\x07?\x02\x02\xBB' +
    '<\x03\x02\x02\x02\xBC\xBD\x07#\x02\x02\xBD\xBE\x07?\x02\x02\xBE>\x03\x02' +
    '\x02\x02\xBF\xC0\x07`\x02\x02\xC0@\x03\x02\x02\x02\xC1\xC2\x07(\x02\x02' +
    '\xC2\xC3\x07(\x02\x02\xC3B\x03\x02\x02\x02\xC4\xC5\x07~\x02\x02\xC5\xC6' +
    '\x07~\x02\x02\xC6D\x03\x02\x02\x02\xC7\xC8\x07#\x02\x02\xC8F\x03\x02\x02' +
    '\x02\xC9\xCA\x07(\x02\x02\xCAH\x03\x02\x02\x02\xCB\xCC\x07~\x02\x02\xCC' +
    'J\x03\x02\x02\x02\xCD\xCE\x07/\x02\x02\xCE\xCF\x07?\x02\x02\xCFL\x03\x02' +
    '\x02\x02\xD0\xD1\x07-\x02\x02\xD1\xD2\x07?\x02\x02\xD2N\x03\x02\x02\x02' +
    '\xD3\xD4\x07@\x02\x02\xD4\xD5\x07@\x02\x02\xD5P\x03\x02\x02\x02\xD6\xD7' +
    '\x07>\x02\x02\xD7\xD8\x07>\x02\x02\xD8R\x03\x02\x02\x02\xD9\xDB\t\x02' +
    '\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDA\x03\x02' +
    '\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\b*\x02' +
    '\x02\xDFT\x03\x02\x02\x02\xE0\xE2\x07\x0F\x02\x02\xE1\xE3\x07\f\x02\x02' +
    '\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02' +
    '\xE4\xE6\x07\f\x02\x02\xE5\xE0\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02' +
    '\xE6\xE7\x03\x02\x02\x02\xE7\xE8\b+\x02\x02\xE8V\x03\x02\x02\x02\xE9\xEA' +
    '\x07x\x02\x02\xEA\xEB\x07q\x02\x02\xEB\xEC\x07k\x02\x02\xEC\xFA\x07f\x02' +
    '\x02\xED\xEE\x07e\x02\x02\xEE\xEF\x07j\x02\x02\xEF\xF0\x07c\x02\x02\xF0' +
    '\xFA\x07t\x02\x02\xF1\xF2\x07k\x02\x02\xF2\xF3\x07p\x02\x02\xF3\xFA\x07' +
    'v\x02\x02\xF4\xF5\x07h\x02\x02\xF5\xF6\x07n\x02\x02\xF6\xF7\x07q\x02\x02' +
    '\xF7\xF8\x07c\x02\x02\xF8\xFA\x07v\x02\x02\xF9\xE9\x03\x02\x02\x02\xF9' +
    '\xED\x03\x02\x02\x02\xF9\xF1\x03\x02\x02\x02\xF9\xF4\x03\x02\x02\x02\xFA' +
    'X\x03\x02\x02\x02\xFB\xFC\x07u\x02\x02\xFC\xFD\x07k\x02\x02\xFD\xFE\x07' +
    'i\x02\x02\xFE\xFF\x07p\x02\x02\xFF\u0100\x07g\x02\x02\u0100\u010A\x07' +
    'f\x02\x02\u0101\u0102\x07w\x02\x02\u0102\u0103\x07p\x02\x02\u0103\u0104' +
    '\x07u\x02\x02\u0104\u0105\x07k\x02\x02\u0105\u0106\x07i\x02\x02\u0106' +
    '\u0107\x07p\x02\x02\u0107\u0108\x07g\x02\x02\u0108\u010A\x07f\x02\x02' +
    '\u0109\xFB\x03\x02\x02\x02\u0109\u0101\x03\x02\x02\x02\u010AZ\x03\x02' +
    '\x02\x02\u010B\u010F\t\x03\x02\x02\u010C\u010E\t\x04\x02\x02\u010D\u010C' +
    '\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02' +
    '\u010F\u0110\x03\x02\x02\x02\u0110\\\x03\x02\x02\x02\u0111\u010F\x03\x02' +
    "\x02\x02\u0112\u0113\x07$\x02\x02\u0113\u0114\x07'\x02\x02\u0114\u0115" +
    '\x07f\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0131\x07$\x02\x02\u0117' +
    "\u0118\x07$\x02\x02\u0118\u0119\x07'\x02\x02\u0119\u011A\x07k\x02\x02" +
    '\u011A\u011B\x03\x02\x02\x02\u011B\u0131\x07$\x02\x02\u011C\u011D\x07' +
    "$\x02\x02\u011D\u011E\x07'\x02\x02\u011E\u011F\x07e\x02\x02\u011F\u0120" +
    '\x03\x02\x02\x02\u0120\u0131\x07$\x02\x02\u0121\u0122\x07$\x02\x02\u0122' +
    "\u0123\x07'\x02\x02\u0123\u0124\x07h\x02\x02\u0124\u0125\x03\x02\x02" +
    '\x02\u0125\u0131\x07$\x02\x02\u0126\u0127\x07$\x02\x02\u0127\u0128\x07' +
    "'\x02\x02\u0128\u0129\x07u\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
    "\u0131\x07$\x02\x02\u012B\u012C\x07$\x02\x02\u012C\u012D\x07'\x02\x02" +
    '\u012D\u012E\x07r\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x07' +
    '$\x02\x02\u0130\u0112\x03\x02\x02\x02\u0130\u0117\x03\x02\x02\x02\u0130' +
    '\u011C\x03\x02\x02\x02\u0130\u0121\x03\x02\x02\x02\u0130\u0126\x03\x02' +
    '\x02\x02\u0130\u012B\x03\x02\x02\x02\u0131^\x03\x02\x02\x02\u0132\u0134' +
    '\t\x05\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02' +
    '\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136`\x03\x02' +
    '\x02\x02\u0137\u0138\x07)\x02\x02\u0138\u0139\n\x06\x02\x02\u0139\u013A' +
    '\x07)\x02\x02\u013Ab\x03\x02\x02\x02\u013B\u013D\x042;\x02\u013C\u013B' +
    '\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02' +
    '\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0144\x07' +
    '0\x02\x02\u0141\u0143\x042;\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146' +
    '\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02' +
    '\u0145d\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u0148\x07-\x02' +
    '\x02\u0148\u0149\x07-\x02\x02\u0149f\x03\x02\x02\x02\u014A\u014B\x07/' +
    '\x02\x02\u014B\u014C\x07/\x02\x02\u014Ch\x03\x02\x02\x02\r\x02\xDC\xE2' +
    '\xE5\xF9\u0109\u010F\u0130\u0135\u013E\u0144\x03\b\x02\x02'
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
