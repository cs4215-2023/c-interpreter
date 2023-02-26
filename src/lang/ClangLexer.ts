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
  public static readonly SIMPLEESCAPESEQUENCE = 15
  public static readonly StringLiteral = 16
  public static readonly SCharSequence = 17
  public static readonly SChar = 18
  public static readonly EscapeSequence = 19
  public static readonly IDENTIFIER = 20

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
    'SIMPLEESCAPESEQUENCE',
    'StringLiteral',
    'SCharSequence',
    'SChar',
    'EscapeSequence',
    'IDENTIFIER'
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
    "'='"
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
    'SIMPLEESCAPESEQUENCE',
    'StringLiteral',
    'SCharSequence',
    'SChar',
    'EscapeSequence',
    'IDENTIFIER'
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16\x7F\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02' +
    '\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06' +
    '\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03' +
    '\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03' +
    '\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11e\n\x11\x03' +
    '\x11\x03\x11\x03\x12\x06\x12j\n\x12\r\x12\x0E\x12k\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13u\n\x13\x03\x14\x03\x14\x03' +
    '\x15\x03\x15\x07\x15{\n\x15\f\x15\x0E\x15~\v\x15\x02\x02\x02\x16\x03\x02' +
    '\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11' +
    '\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10' +
    "\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16\x03\x02\x06" +
    '\f\x02$$))AA^^cdhhppttvvxx\x06\x02\f\f\x0F\x0F$$^^\x04\x02aac|\x06\x02' +
    '2;C\\aac|\x02\x84\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02' +
    '\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r' +
    '\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13' +
    '\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19' +
    '\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F' +
    '\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02' +
    "\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x03+\x03\x02\x02\x02" +
    '\x050\x03\x02\x02\x02\x075\x03\x02\x02\x02\t9\x03\x02\x02\x02\v?\x03\x02' +
    '\x02\x02\rF\x03\x02\x02\x02\x0FO\x03\x02\x02\x02\x11Q\x03\x02\x02\x02' +
    '\x13S\x03\x02\x02\x02\x15U\x03\x02\x02\x02\x17W\x03\x02\x02\x02\x19Y\x03' +
    '\x02\x02\x02\x1B[\x03\x02\x02\x02\x1D]\x03\x02\x02\x02\x1F_\x03\x02\x02' +
    "\x02!b\x03\x02\x02\x02#i\x03\x02\x02\x02%t\x03\x02\x02\x02'v\x03\x02" +
    '\x02\x02)x\x03\x02\x02\x02+,\x07x\x02\x02,-\x07q\x02\x02-.\x07k\x02\x02' +
    './\x07f\x02\x02/\x04\x03\x02\x02\x0201\x07e\x02\x0212\x07j\x02\x0223\x07' +
    'c\x02\x0234\x07t\x02\x024\x06\x03\x02\x02\x0256\x07k\x02\x0267\x07p\x02' +
    '\x0278\x07v\x02\x028\b\x03\x02\x02\x029:\x07h\x02\x02:;\x07n\x02\x02;' +
    '<\x07q\x02\x02<=\x07c\x02\x02=>\x07v\x02\x02>\n\x03\x02\x02\x02?@\x07' +
    'u\x02\x02@A\x07k\x02\x02AB\x07i\x02\x02BC\x07p\x02\x02CD\x07g\x02\x02' +
    'DE\x07f\x02\x02E\f\x03\x02\x02\x02FG\x07w\x02\x02GH\x07p\x02\x02HI\x07' +
    'u\x02\x02IJ\x07k\x02\x02JK\x07i\x02\x02KL\x07p\x02\x02LM\x07g\x02\x02' +
    'MN\x07f\x02\x02N\x0E\x03\x02\x02\x02OP\x07*\x02\x02P\x10\x03\x02\x02\x02' +
    'QR\x07+\x02\x02R\x12\x03\x02\x02\x02ST\x07,\x02\x02T\x14\x03\x02\x02\x02' +
    "UV\x071\x02\x02V\x16\x03\x02\x02\x02WX\x07'\x02\x02X\x18\x03\x02\x02" +
    '\x02YZ\x07-\x02\x02Z\x1A\x03\x02\x02\x02[\\\x07/\x02\x02\\\x1C\x03\x02' +
    '\x02\x02]^\x07?\x02\x02^\x1E\x03\x02\x02\x02_`\x07^\x02\x02`a\t\x02\x02' +
    '\x02a \x03\x02\x02\x02bd\x07$\x02\x02ce\x05#\x12\x02dc\x03\x02\x02\x02' +
    'de\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x07$\x02\x02g"\x03\x02\x02\x02' +
    'hj\x05%\x13\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02' +
    "kl\x03\x02\x02\x02l$\x03\x02\x02\x02mu\n\x03\x02\x02nu\x05'\x14\x02o" +
    'p\x07^\x02\x02pu\x07\f\x02\x02qr\x07^\x02\x02rs\x07\x0F\x02\x02su\x07' +
    '\f\x02\x02tm\x03\x02\x02\x02tn\x03\x02\x02\x02to\x03\x02\x02\x02tq\x03' +
    '\x02\x02\x02u&\x03\x02\x02\x02vw\x05\x1F\x10\x02w(\x03\x02\x02\x02x|\t' +
    '\x04\x02\x02y{\t\x05\x02\x02zy\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03' +
    '\x02\x02\x02|}\x03\x02\x02\x02}*\x03\x02\x02\x02~|\x03\x02\x02\x02\x07' +
    '\x02dkt|\x02'
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
