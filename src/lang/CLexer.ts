// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly Break = 3;
	public static readonly Case = 4;
	public static readonly Char = 5;
	public static readonly Const = 6;
	public static readonly Continue = 7;
	public static readonly Default = 8;
	public static readonly Do = 9;
	public static readonly Else = 10;
	public static readonly Float = 11;
	public static readonly For = 12;
	public static readonly If = 13;
	public static readonly Int = 14;
	public static readonly Long = 15;
	public static readonly Return = 16;
	public static readonly Signed = 17;
	public static readonly Struct = 18;
	public static readonly Unsigned = 19;
	public static readonly Void = 20;
	public static readonly While = 21;
	public static readonly LeftParen = 22;
	public static readonly RightParen = 23;
	public static readonly LeftBracket = 24;
	public static readonly RightBracket = 25;
	public static readonly LeftBrace = 26;
	public static readonly RightBrace = 27;
	public static readonly Less = 28;
	public static readonly LessEqual = 29;
	public static readonly Greater = 30;
	public static readonly GreaterEqual = 31;
	public static readonly LeftShift = 32;
	public static readonly RightShift = 33;
	public static readonly Plus = 34;
	public static readonly PlusPlus = 35;
	public static readonly Minus = 36;
	public static readonly MinusMinus = 37;
	public static readonly Star = 38;
	public static readonly Div = 39;
	public static readonly Mod = 40;
	public static readonly And = 41;
	public static readonly Or = 42;
	public static readonly AndAnd = 43;
	public static readonly OrOr = 44;
	public static readonly Caret = 45;
	public static readonly Not = 46;
	public static readonly Tilde = 47;
	public static readonly Question = 48;
	public static readonly Colon = 49;
	public static readonly Semi = 50;
	public static readonly Comma = 51;
	public static readonly Assign = 52;
	public static readonly StarAssign = 53;
	public static readonly DivAssign = 54;
	public static readonly ModAssign = 55;
	public static readonly PlusAssign = 56;
	public static readonly MinusAssign = 57;
	public static readonly LeftShiftAssign = 58;
	public static readonly RightShiftAssign = 59;
	public static readonly AndAssign = 60;
	public static readonly XorAssign = 61;
	public static readonly OrAssign = 62;
	public static readonly Equal = 63;
	public static readonly NotEqual = 64;
	public static readonly Arrow = 65;
	public static readonly Dot = 66;
	public static readonly Identifier = 67;
	public static readonly Constant = 68;
	public static readonly DigitSequence = 69;
	public static readonly StringLiteral = 70;
	public static readonly Whitespace = 71;
	public static readonly Newline = 72;
	public static readonly BlockComment = 73;
	public static readonly LineComment = 74;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "Break", "Case", "Char", "Const", "Continue", "Default", 
		"Do", "Else", "Float", "For", "If", "Int", "Long", "Return", "Signed", 
		"Struct", "Unsigned", "Void", "While", "LeftParen", "RightParen", "LeftBracket", 
		"RightBracket", "LeftBrace", "RightBrace", "Less", "LessEqual", "Greater", 
		"GreaterEqual", "LeftShift", "RightShift", "Plus", "PlusPlus", "Minus", 
		"MinusMinus", "Star", "Div", "Mod", "And", "Or", "AndAnd", "OrOr", "Caret", 
		"Not", "Tilde", "Question", "Colon", "Semi", "Comma", "Assign", "StarAssign", 
		"DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "LeftShiftAssign", 
		"RightShiftAssign", "AndAssign", "XorAssign", "OrAssign", "Equal", "NotEqual", 
		"Arrow", "Dot", "Identifier", "IdentifierCharacters", "Characters", "Digit", 
		"Constant", "IntegerConstant", "BinaryConstant", "DecimalConstant", "NonzeroDigit", 
		"UnsignedSuffix", "FloatingConstant", "DecimalFloatingConstant", "FractionalConstant", 
		"ExponentPart", "Sign", "DigitSequence", "BinaryExponentPart", "FloatingSuffix", 
		"CharacterConstant", "CCharSequence", "CChar", "EscapeSequence", "SimpleEscapeSequence", 
		"StringLiteral", "EncodingPrefix", "SCharSequence", "SChar", "Whitespace", 
		"Newline", "BlockComment", "LineComment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'__extension__'", "'inline'", "'break'", "'case'", "'char'", 
		"'const'", "'continue'", "'default'", "'do'", "'else'", "'float'", "'for'", 
		"'if'", "'int'", "'long'", "'return'", "'signed'", "'struct'", "'unsigned'", 
		"'void'", "'while'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", 
		"'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", 
		"'/'", "'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", 
		"':'", "';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "Break", "Case", "Char", "Const", "Continue", 
		"Default", "Do", "Else", "Float", "For", "If", "Int", "Long", "Return", 
		"Signed", "Struct", "Unsigned", "Void", "While", "LeftParen", "RightParen", 
		"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "Less", "LessEqual", 
		"Greater", "GreaterEqual", "LeftShift", "RightShift", "Plus", "PlusPlus", 
		"Minus", "MinusMinus", "Star", "Div", "Mod", "And", "Or", "AndAnd", "OrOr", 
		"Caret", "Not", "Tilde", "Question", "Colon", "Semi", "Comma", "Assign", 
		"StarAssign", "DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "LeftShiftAssign", 
		"RightShiftAssign", "AndAssign", "XorAssign", "OrAssign", "Equal", "NotEqual", 
		"Arrow", "Dot", "Identifier", "Constant", "DigitSequence", "StringLiteral", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CLexer._LITERAL_NAMES, CLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02L\u027A\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03" +
		"$\x03$\x03%\x03%\x03&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x030\x03" +
		"0\x031\x031\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036\x036\x03" +
		"7\x037\x037\x038\x038\x038\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03" +
		"?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x03" +
		"D\x07D\u01BD\nD\fD\x0ED\u01C0\vD\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03" +
		"H\x03H\x05H\u01CB\nH\x03I\x03I\x03J\x03J\x03J\x06J\u01D2\nJ\rJ\x0EJ\u01D3" +
		"\x03K\x03K\x07K\u01D8\nK\fK\x0EK\u01DB\vK\x03L\x03L\x03M\x03M\x03N\x03" +
		"N\x03O\x03O\x05O\u01E5\nO\x03O\x05O\u01E8\nO\x03O\x03O\x03O\x05O\u01ED" +
		"\nO\x05O\u01EF\nO\x03P\x05P\u01F2\nP\x03P\x03P\x03P\x03P\x03P\x05P\u01F9" +
		"\nP\x03Q\x03Q\x05Q\u01FD\nQ\x03Q\x03Q\x03R\x03R\x03S\x06S\u0204\nS\rS" +
		"\x0ES\u0205\x03T\x03T\x05T\u020A\nT\x03T\x03T\x03U\x03U\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x05V\u0226\nV\x03W\x06W\u0229\nW\rW\x0EW\u022A" +
		"\x03X\x03X\x05X\u022F\nX\x03Y\x03Y\x03Z\x03Z\x03Z\x03[\x05[\u0237\n[\x03" +
		"[\x03[\x05[\u023B\n[\x03[\x03[\x03\\\x03\\\x03\\\x05\\\u0242\n\\\x03]" +
		"\x06]\u0245\n]\r]\x0E]\u0246\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0250" +
		"\n^\x03_\x06_\u0253\n_\r_\x0E_\u0254\x03_\x03_\x03`\x03`\x05`\u025B\n" +
		"`\x03`\x05`\u025E\n`\x03`\x03`\x03a\x03a\x03a\x03a\x07a\u0266\na\fa\x0E" +
		"a\u0269\va\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x07b\u0274\nb" +
		"\fb\x0Eb\u0277\vb\x03b\x03b\x03\u0267\x02\x02c\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
		"1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-" +
		"Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x02" +
		"9q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02" +
		"C\x85\x02D\x87\x02E\x89\x02\x02\x8B\x02\x02\x8D\x02\x02\x8F\x02F\x91\x02" +
		"\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B\x02\x02\x9D\x02" +
		"\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02\x02\xA5\x02G\xA7\x02\x02\xA9\x02" +
		"\x02\xAB\x02\x02\xAD\x02\x02\xAF\x02\x02\xB1\x02\x02\xB3\x02\x02\xB5\x02" +
		"H\xB7\x02\x02\xB9\x02\x02\xBB\x02\x02\xBD\x02I\xBF\x02J\xC1\x02K\xC3\x02" +
		"L\x03\x02\x12\x05\x02C\\aac|\x03\x022;\x04\x02DDdd\x03\x0223\x03\x023" +
		";\x04\x02WWww\x04\x02GGgg\x04\x02--//\x04\x02RRrr\x06\x02HHNNhhnn\x06" +
		"\x02\f\f\x0F\x0F))^^\f\x02$$))AA^^cdhhppttvvxx\x05\x02NNWWww\x06\x02\f" +
		"\f\x0F\x0F$$^^\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x02\u0282\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02" +
		"\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02" +
		"=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02" +
		"\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02" +
		"\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03" +
		"\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02" +
		"\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02" +
		"_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02" +
		"\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02" +
		"\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03" +
		"\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02" +
		"\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02" +
		"\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02" +
		"\x02\x87\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02" +
		"\x02\xB5\x03\x02\x02\x02\x02\xBD\x03\x02\x02\x02\x02\xBF\x03\x02\x02\x02" +
		"\x02\xC1\x03\x02\x02\x02\x02\xC3\x03\x02\x02\x02\x03\xC5\x03\x02\x02\x02" +
		"\x05\xD3\x03\x02\x02\x02\x07\xDA\x03\x02\x02\x02\t\xE0\x03\x02\x02\x02" +
		"\v\xE5\x03\x02\x02\x02\r\xEA\x03\x02\x02\x02\x0F\xF0\x03\x02\x02\x02\x11" +
		"\xF9\x03\x02\x02\x02\x13\u0101\x03\x02\x02\x02\x15\u0104\x03\x02\x02\x02" +
		"\x17\u0109\x03\x02\x02\x02\x19\u010F\x03\x02\x02\x02\x1B\u0113\x03\x02" +
		"\x02\x02\x1D\u0116\x03\x02\x02\x02\x1F\u011A\x03\x02\x02\x02!\u011F\x03" +
		"\x02\x02\x02#\u0126\x03\x02\x02\x02%\u012D\x03\x02\x02\x02\'\u0134\x03" +
		"\x02\x02\x02)\u013D\x03\x02\x02\x02+\u0142\x03\x02\x02\x02-\u0148\x03" +
		"\x02\x02\x02/\u014A\x03\x02\x02\x021\u014C\x03\x02\x02\x023\u014E\x03" +
		"\x02\x02\x025\u0150\x03\x02\x02\x027\u0152\x03\x02\x02\x029\u0154\x03" +
		"\x02\x02\x02;\u0156\x03\x02\x02\x02=\u0159\x03\x02\x02\x02?\u015B\x03" +
		"\x02\x02\x02A\u015E\x03\x02\x02\x02C\u0161\x03\x02\x02\x02E\u0164\x03" +
		"\x02\x02\x02G\u0166\x03\x02\x02\x02I\u0169\x03\x02\x02\x02K\u016B\x03" +
		"\x02\x02\x02M\u016E\x03\x02\x02\x02O\u0170\x03\x02\x02\x02Q\u0172\x03" +
		"\x02\x02\x02S\u0174\x03\x02\x02\x02U\u0176\x03\x02\x02\x02W\u0178\x03" +
		"\x02\x02\x02Y\u017B\x03\x02\x02\x02[\u017E\x03\x02\x02\x02]\u0180\x03" +
		"\x02\x02\x02_\u0182\x03\x02\x02\x02a\u0184\x03\x02\x02\x02c\u0186\x03" +
		"\x02\x02\x02e\u0188\x03\x02\x02\x02g\u018A\x03\x02\x02\x02i\u018C\x03" +
		"\x02\x02\x02k\u018E\x03\x02\x02\x02m\u0191\x03\x02\x02\x02o\u0194\x03" +
		"\x02\x02\x02q\u0197\x03\x02\x02\x02s\u019A\x03\x02\x02\x02u\u019D\x03" +
		"\x02\x02\x02w\u01A1\x03\x02\x02\x02y\u01A5\x03\x02\x02\x02{\u01A8\x03" +
		"\x02\x02\x02}\u01AB\x03\x02\x02\x02\x7F\u01AE\x03\x02\x02\x02\x81\u01B1" +
		"\x03\x02\x02\x02\x83\u01B4\x03\x02\x02\x02\x85\u01B7\x03\x02\x02\x02\x87" +
		"\u01B9\x03\x02\x02\x02\x89\u01C1\x03\x02\x02\x02\x8B\u01C3\x03\x02\x02" +
		"\x02\x8D\u01C5\x03\x02\x02\x02\x8F\u01CA\x03\x02\x02\x02\x91\u01CC\x03" +
		"\x02\x02\x02\x93\u01CE\x03\x02\x02\x02\x95\u01D5\x03\x02\x02\x02\x97\u01DC" +
		"\x03\x02\x02\x02\x99\u01DE\x03\x02\x02\x02\x9B\u01E0\x03\x02\x02\x02\x9D" +
		"\u01EE\x03\x02\x02\x02\x9F\u01F8\x03\x02\x02\x02\xA1\u01FA\x03\x02\x02" +
		"\x02\xA3\u0200\x03\x02\x02\x02\xA5\u0203\x03\x02\x02\x02\xA7\u0207\x03" +
		"\x02\x02\x02\xA9\u020D\x03\x02\x02\x02\xAB\u0225\x03\x02\x02\x02\xAD\u0228" +
		"\x03\x02\x02\x02\xAF\u022E\x03\x02\x02\x02\xB1\u0230\x03\x02\x02\x02\xB3" +
		"\u0232\x03\x02\x02\x02\xB5\u0236\x03\x02\x02\x02\xB7\u0241\x03\x02\x02" +
		"\x02\xB9\u0244\x03\x02\x02\x02\xBB\u024F\x03\x02\x02\x02\xBD\u0252\x03" +
		"\x02\x02\x02\xBF\u025D\x03\x02\x02\x02\xC1\u0261\x03\x02\x02\x02\xC3\u026F" +
		"\x03\x02\x02\x02\xC5\xC6\x07a\x02\x02\xC6\xC7\x07a\x02\x02\xC7\xC8\x07" +
		"g\x02\x02\xC8\xC9\x07z\x02\x02\xC9\xCA\x07v\x02\x02\xCA\xCB\x07g\x02\x02" +
		"\xCB\xCC\x07p\x02\x02\xCC\xCD\x07u\x02\x02\xCD\xCE\x07k\x02\x02\xCE\xCF" +
		"\x07q\x02\x02\xCF\xD0\x07p\x02\x02\xD0\xD1\x07a\x02\x02\xD1\xD2\x07a\x02" +
		"\x02\xD2\x04\x03\x02\x02\x02\xD3\xD4\x07k\x02\x02\xD4\xD5\x07p\x02\x02" +
		"\xD5\xD6\x07n\x02\x02\xD6\xD7\x07k\x02\x02\xD7\xD8\x07p\x02\x02\xD8\xD9" +
		"\x07g\x02\x02\xD9\x06\x03\x02\x02\x02\xDA\xDB\x07d\x02\x02\xDB\xDC\x07" +
		"t\x02\x02\xDC\xDD\x07g\x02\x02\xDD\xDE\x07c\x02\x02\xDE\xDF\x07m\x02\x02" +
		"\xDF\b\x03\x02\x02\x02\xE0\xE1\x07e\x02\x02\xE1\xE2\x07c\x02\x02\xE2\xE3" +
		"\x07u\x02\x02\xE3\xE4\x07g\x02\x02\xE4\n\x03\x02\x02\x02\xE5\xE6\x07e" +
		"\x02\x02\xE6\xE7\x07j\x02\x02\xE7\xE8\x07c\x02\x02\xE8\xE9\x07t\x02\x02" +
		"\xE9\f\x03\x02\x02\x02\xEA\xEB\x07e\x02\x02\xEB\xEC\x07q\x02\x02\xEC\xED" +
		"\x07p\x02\x02\xED\xEE\x07u\x02\x02\xEE\xEF\x07v\x02\x02\xEF\x0E\x03\x02" +
		"\x02\x02\xF0\xF1\x07e\x02\x02\xF1\xF2\x07q\x02\x02\xF2\xF3\x07p\x02\x02" +
		"\xF3\xF4\x07v\x02\x02\xF4\xF5\x07k\x02\x02\xF5\xF6\x07p\x02\x02\xF6\xF7" +
		"\x07w\x02\x02\xF7\xF8\x07g\x02\x02\xF8\x10\x03\x02\x02\x02\xF9\xFA\x07" +
		"f\x02\x02\xFA\xFB\x07g\x02\x02\xFB\xFC\x07h\x02\x02\xFC\xFD\x07c\x02\x02" +
		"\xFD\xFE\x07w\x02\x02\xFE\xFF\x07n\x02\x02\xFF\u0100\x07v\x02\x02\u0100" +
		"\x12\x03\x02\x02\x02\u0101\u0102\x07f\x02\x02\u0102\u0103\x07q\x02\x02" +
		"\u0103\x14\x03\x02\x02\x02\u0104\u0105\x07g\x02\x02\u0105\u0106\x07n\x02" +
		"\x02\u0106\u0107\x07u\x02\x02\u0107\u0108\x07g\x02\x02\u0108\x16\x03\x02" +
		"\x02\x02\u0109\u010A\x07h\x02\x02\u010A\u010B\x07n\x02\x02\u010B\u010C" +
		"\x07q\x02\x02\u010C\u010D\x07c\x02\x02\u010D\u010E\x07v\x02\x02\u010E" +
		"\x18\x03\x02\x02\x02\u010F\u0110\x07h\x02\x02\u0110\u0111\x07q\x02\x02" +
		"\u0111\u0112\x07t\x02\x02\u0112\x1A\x03\x02\x02\x02\u0113\u0114\x07k\x02" +
		"\x02\u0114\u0115\x07h\x02\x02\u0115\x1C\x03\x02\x02\x02\u0116\u0117\x07" +
		"k\x02\x02\u0117\u0118\x07p\x02\x02\u0118\u0119\x07v\x02\x02\u0119\x1E" +
		"\x03\x02\x02\x02\u011A\u011B\x07n\x02\x02\u011B\u011C\x07q\x02\x02\u011C" +
		"\u011D\x07p\x02\x02\u011D\u011E\x07i\x02\x02\u011E \x03\x02\x02\x02\u011F" +
		"\u0120\x07t\x02\x02\u0120\u0121\x07g\x02\x02\u0121\u0122\x07v\x02\x02" +
		"\u0122\u0123\x07w\x02\x02\u0123\u0124\x07t\x02\x02\u0124\u0125\x07p\x02" +
		"\x02\u0125\"\x03\x02\x02\x02\u0126\u0127\x07u\x02\x02\u0127\u0128\x07" +
		"k\x02\x02\u0128\u0129\x07i\x02\x02\u0129\u012A\x07p\x02\x02\u012A\u012B" +
		"\x07g\x02\x02\u012B\u012C\x07f\x02\x02\u012C$\x03\x02\x02\x02\u012D\u012E" +
		"\x07u\x02\x02\u012E\u012F\x07v\x02\x02\u012F\u0130\x07t\x02\x02\u0130" +
		"\u0131\x07w\x02\x02\u0131\u0132\x07e\x02\x02\u0132\u0133\x07v\x02\x02" +
		"\u0133&\x03\x02\x02\x02\u0134\u0135\x07w\x02\x02\u0135\u0136\x07p\x02" +
		"\x02\u0136\u0137\x07u\x02\x02\u0137\u0138\x07k\x02\x02\u0138\u0139\x07" +
		"i\x02\x02\u0139\u013A\x07p\x02\x02\u013A\u013B\x07g\x02\x02\u013B\u013C" +
		"\x07f\x02\x02\u013C(\x03\x02\x02\x02\u013D\u013E\x07x\x02\x02\u013E\u013F" +
		"\x07q\x02\x02\u013F\u0140\x07k\x02\x02\u0140\u0141\x07f\x02\x02\u0141" +
		"*\x03\x02\x02\x02\u0142\u0143\x07y\x02\x02\u0143\u0144\x07j\x02\x02\u0144" +
		"\u0145\x07k\x02\x02\u0145\u0146\x07n\x02\x02\u0146\u0147\x07g\x02\x02" +
		"\u0147,\x03\x02\x02\x02\u0148\u0149\x07*\x02\x02\u0149.\x03\x02\x02\x02" +
		"\u014A\u014B\x07+\x02\x02\u014B0\x03\x02\x02\x02\u014C\u014D\x07]\x02" +
		"\x02\u014D2\x03\x02\x02\x02\u014E\u014F\x07_\x02\x02\u014F4\x03\x02\x02" +
		"\x02\u0150\u0151\x07}\x02\x02\u01516\x03\x02\x02\x02\u0152\u0153\x07\x7F" +
		"\x02\x02\u01538\x03\x02\x02\x02\u0154\u0155\x07>\x02\x02\u0155:\x03\x02" +
		"\x02\x02\u0156\u0157\x07>\x02\x02\u0157\u0158\x07?\x02\x02\u0158<\x03" +
		"\x02\x02\x02\u0159\u015A\x07@\x02\x02\u015A>\x03\x02\x02\x02\u015B\u015C" +
		"\x07@\x02\x02\u015C\u015D\x07?\x02\x02\u015D@\x03\x02\x02\x02\u015E\u015F" +
		"\x07>\x02\x02\u015F\u0160\x07>\x02\x02\u0160B\x03\x02\x02\x02\u0161\u0162" +
		"\x07@\x02\x02\u0162\u0163\x07@\x02\x02\u0163D\x03\x02\x02\x02\u0164\u0165" +
		"\x07-\x02\x02\u0165F\x03\x02\x02\x02\u0166\u0167\x07-\x02\x02\u0167\u0168" +
		"\x07-\x02\x02\u0168H\x03\x02\x02\x02\u0169\u016A\x07/\x02\x02\u016AJ\x03" +
		"\x02\x02\x02\u016B\u016C\x07/\x02\x02\u016C\u016D\x07/\x02\x02\u016DL" +
		"\x03\x02\x02\x02\u016E\u016F\x07,\x02\x02\u016FN\x03\x02\x02\x02\u0170" +
		"\u0171\x071\x02\x02\u0171P\x03\x02\x02\x02\u0172\u0173\x07\'\x02\x02\u0173" +
		"R\x03\x02\x02\x02\u0174\u0175\x07(\x02\x02\u0175T\x03\x02\x02\x02\u0176" +
		"\u0177\x07~\x02\x02\u0177V\x03\x02\x02\x02\u0178\u0179\x07(\x02\x02\u0179" +
		"\u017A\x07(\x02\x02\u017AX\x03\x02\x02\x02\u017B\u017C\x07~\x02\x02\u017C" +
		"\u017D\x07~\x02\x02\u017DZ\x03\x02\x02\x02\u017E\u017F\x07`\x02\x02\u017F" +
		"\\\x03\x02\x02\x02\u0180\u0181\x07#\x02\x02\u0181^\x03\x02\x02\x02\u0182" +
		"\u0183\x07\x80\x02\x02\u0183`\x03\x02\x02\x02\u0184\u0185\x07A\x02\x02" +
		"\u0185b\x03\x02\x02\x02\u0186\u0187\x07<\x02\x02\u0187d\x03\x02\x02\x02" +
		"\u0188\u0189\x07=\x02\x02\u0189f\x03\x02\x02\x02\u018A\u018B\x07.\x02" +
		"\x02\u018Bh\x03\x02\x02\x02\u018C\u018D\x07?\x02\x02\u018Dj\x03\x02\x02" +
		"\x02\u018E\u018F\x07,\x02\x02\u018F\u0190\x07?\x02\x02\u0190l\x03\x02" +
		"\x02\x02\u0191\u0192\x071\x02\x02\u0192\u0193\x07?\x02\x02\u0193n\x03" +
		"\x02\x02\x02\u0194\u0195\x07\'\x02\x02\u0195\u0196\x07?\x02\x02\u0196" +
		"p\x03\x02\x02\x02\u0197\u0198\x07-\x02\x02\u0198\u0199\x07?\x02\x02\u0199" +
		"r\x03\x02\x02\x02\u019A\u019B\x07/\x02\x02\u019B\u019C\x07?\x02\x02\u019C" +
		"t\x03\x02\x02\x02\u019D\u019E\x07>\x02\x02\u019E\u019F\x07>\x02\x02\u019F" +
		"\u01A0\x07?\x02\x02\u01A0v\x03\x02\x02\x02\u01A1\u01A2\x07@\x02\x02\u01A2" +
		"\u01A3\x07@\x02\x02\u01A3\u01A4\x07?\x02\x02\u01A4x\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07(\x02\x02\u01A6\u01A7\x07?\x02\x02\u01A7z\x03\x02\x02\x02\u01A8" +
		"\u01A9\x07`\x02\x02\u01A9\u01AA\x07?\x02\x02\u01AA|\x03\x02\x02\x02\u01AB" +
		"\u01AC\x07~\x02\x02\u01AC\u01AD\x07?\x02\x02\u01AD~\x03\x02\x02\x02\u01AE" +
		"\u01AF\x07?\x02\x02\u01AF\u01B0\x07?\x02\x02\u01B0\x80\x03\x02\x02\x02" +
		"\u01B1\u01B2\x07#\x02\x02\u01B2\u01B3\x07?\x02\x02\u01B3\x82\x03\x02\x02" +
		"\x02\u01B4\u01B5\x07/\x02\x02\u01B5\u01B6\x07@\x02\x02\u01B6\x84\x03\x02" +
		"\x02\x02\u01B7\u01B8\x070\x02\x02\u01B8\x86\x03\x02\x02\x02\u01B9\u01BE" +
		"\x05\x89E\x02\u01BA\u01BD\x05\x89E\x02\u01BB\u01BD\x05\x8DG\x02\u01BC" +
		"\u01BA\x03\x02\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BD\u01C0\x03\x02" +
		"\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
		"\x88\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C2\x05\x8BF" +
		"\x02\u01C2\x8A\x03\x02\x02\x02\u01C3\u01C4\t\x02\x02\x02\u01C4\x8C\x03" +
		"\x02\x02\x02\u01C5\u01C6\t\x03\x02\x02\u01C6\x8E\x03\x02\x02\x02\u01C7" +
		"\u01CB\x05\x91I\x02\u01C8\u01CB\x05\x9BN\x02\u01C9\u01CB\x05\xABV\x02" +
		"\u01CA\u01C7\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01C9\x03" +
		"\x02\x02\x02\u01CB\x90\x03\x02\x02\x02\u01CC\u01CD\x05\x93J\x02\u01CD" +
		"\x92\x03\x02\x02\x02\u01CE\u01CF\x072\x02\x02\u01CF\u01D1\t\x04\x02\x02" +
		"\u01D0\u01D2\t\x05\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03" +
		"\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"\x94\x03\x02\x02\x02\u01D5\u01D9\x05\x97L\x02\u01D6\u01D8\x05\x8DG\x02" +
		"\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03" +
		"\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\x96\x03\x02\x02\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DC\u01DD\t\x06\x02\x02\u01DD\x98\x03\x02\x02" +
		"\x02\u01DE\u01DF\t\x07\x02\x02\u01DF\x9A\x03\x02\x02\x02\u01E0\u01E1\x05" +
		"\x9DO\x02\u01E1\x9C\x03\x02\x02\x02\u01E2\u01E4\x05\x9FP\x02\u01E3\u01E5" +
		"\x05\xA1Q\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02" +
		"\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E8\x05\xA9U\x02\u01E7\u01E6\x03" +
		"\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EF\x03\x02\x02\x02\u01E9" +
		"\u01EA\x05\xA5S\x02\u01EA\u01EC\x05\xA1Q\x02\u01EB\u01ED\x05\xA9U\x02" +
		"\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03" +
		"\x02\x02\x02\u01EE\u01E2\x03\x02\x02\x02\u01EE\u01E9\x03\x02\x02\x02\u01EF" +
		"\x9E\x03\x02\x02\x02\u01F0\u01F2\x05\xA5S\x02\u01F1\u01F0\x03\x02\x02" +
		"\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4" +
		"\x070\x02\x02\u01F4\u01F9\x05\xA5S\x02\u01F5\u01F6\x05\xA5S\x02\u01F6" +
		"\u01F7\x070\x02\x02\u01F7\u01F9\x03\x02\x02\x02\u01F8\u01F1\x03\x02\x02" +
		"\x02\u01F8\u01F5\x03\x02\x02\x02\u01F9\xA0\x03\x02\x02\x02\u01FA\u01FC" +
		"\t\b\x02\x02\u01FB\u01FD\x05\xA3R\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC" +
		"\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x05\xA5" +
		"S\x02\u01FF\xA2\x03\x02\x02\x02\u0200\u0201\t\t\x02\x02\u0201\xA4\x03" +
		"\x02\x02\x02\u0202\u0204\x05\x8DG\x02\u0203\u0202\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\xA6\x03\x02\x02\x02\u0207\u0209\t\n\x02\x02\u0208\u020A" +
		"\x05\xA3R\x02\u0209\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x05\xA5S\x02\u020C\xA8\x03\x02" +
		"\x02\x02\u020D\u020E\t\v\x02\x02\u020E\xAA\x03\x02\x02\x02\u020F\u0210" +
		"\x07)\x02\x02\u0210\u0211\x05\xADW\x02\u0211\u0212\x07)\x02\x02\u0212" +
		"\u0226\x03\x02\x02\x02\u0213\u0214\x07N\x02\x02\u0214\u0215\x07)\x02\x02" +
		"\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x05\xADW\x02\u0217\u0218\x07" +
		")\x02\x02\u0218\u0226\x03\x02\x02\x02\u0219\u021A\x07w\x02\x02\u021A\u021B" +
		"\x07)\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021D\x05\xADW\x02\u021D" +
		"\u021E\x07)\x02\x02\u021E\u0226\x03\x02\x02\x02\u021F\u0220\x07W\x02\x02" +
		"\u0220\u0221\x07)\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x05" +
		"\xADW\x02\u0223\u0224\x07)\x02\x02\u0224\u0226\x03\x02\x02\x02\u0225\u020F" +
		"\x03\x02\x02\x02\u0225\u0213\x03\x02\x02\x02\u0225\u0219\x03\x02\x02\x02" +
		"\u0225\u021F\x03\x02\x02\x02\u0226\xAC\x03\x02\x02\x02\u0227\u0229\x05" +
		"\xAFX\x02\u0228\u0227";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02" +
		"\u022A\u022B\x03\x02\x02\x02\u022B\xAE\x03\x02\x02\x02\u022C\u022F\n\f" +
		"\x02\x02\u022D\u022F\x05\xB1Y\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D" +
		"\x03\x02\x02\x02\u022F\xB0\x03\x02\x02\x02\u0230\u0231\x05\xB3Z\x02\u0231" +
		"\xB2\x03\x02\x02\x02\u0232\u0233\x07^\x02\x02\u0233\u0234\t\r\x02\x02" +
		"\u0234\xB4\x03\x02\x02\x02\u0235\u0237\x05\xB7\\\x02\u0236\u0235\x03\x02" +
		"\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
		"\u023A\x07$\x02\x02\u0239\u023B\x05\xB9]\x02\u023A\u0239\x03\x02\x02\x02" +
		"\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x07" +
		"$\x02\x02\u023D\xB6\x03\x02\x02\x02\u023E\u023F\x07w\x02\x02\u023F\u0242" +
		"\x07:\x02\x02\u0240\u0242\t\x0E\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241" +
		"\u0240\x03\x02\x02\x02\u0242\xB8\x03\x02\x02\x02\u0243\u0245\x05\xBB^" +
		"\x02\u0244\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0244" +
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\xBA\x03\x02\x02\x02" +
		"\u0248\u0250\n\x0F\x02\x02\u0249\u0250\x05\xB1Y\x02\u024A\u024B\x07^\x02" +
		"\x02\u024B\u0250\x07\f\x02\x02\u024C\u024D\x07^\x02\x02\u024D\u024E\x07" +
		"\x0F\x02\x02\u024E\u0250\x07\f\x02\x02\u024F\u0248\x03\x02\x02\x02\u024F" +
		"\u0249\x03\x02\x02\x02\u024F\u024A\x03\x02\x02\x02\u024F\u024C\x03\x02" +
		"\x02\x02\u0250\xBC\x03\x02\x02\x02\u0251\u0253\t\x10\x02\x02\u0252\u0251" +
		"\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02" +
		"\u0254\u0255\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0257\b" +
		"_\x02\x02\u0257\xBE\x03\x02\x02\x02\u0258\u025A\x07\x0F\x02\x02\u0259" +
		"\u025B\x07\f\x02\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02" +
		"\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025E\x07\f\x02\x02\u025D\u0258" +
		"\x03\x02\x02\x02\u025D\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02" +
		"\u025F\u0260\b`\x02\x02\u0260\xC0\x03\x02\x02\x02\u0261\u0262\x071\x02" +
		"\x02\u0262\u0263\x07,\x02\x02\u0263\u0267\x03\x02\x02\x02\u0264\u0266" +
		"\v\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02" +
		"\u0267\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0268\u026A\x03" +
		"\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026B\x07,\x02\x02\u026B" +
		"\u026C\x071\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026E\ba\x02\x02" +
		"\u026E\xC2\x03\x02\x02\x02\u026F\u0270\x071\x02\x02\u0270\u0271\x071\x02" +
		"\x02\u0271\u0275\x03\x02\x02\x02\u0272\u0274\n\x11\x02\x02\u0273\u0272" +
		"\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x03\x02\x02\x02\u0277\u0275\x03" +
		"\x02\x02\x02\u0278\u0279\bb\x02\x02\u0279\xC4\x03\x02\x02\x02\x1E\x02" +
		"\u01BC\u01BE\u01CA\u01D3\u01D9\u01E4\u01E7\u01EC\u01EE\u01F1\u01F8\u01FC" +
		"\u0205\u0209\u0225\u022A\u022E\u0236\u023A\u0241\u0246\u024F\u0254\u025A" +
		"\u025D\u0267\u0275\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			CLexer._serializedATNSegment0,
			CLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CLexer.__ATN) {
			CLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CLexer._serializedATN));
		}

		return CLexer.__ATN;
	}

}

