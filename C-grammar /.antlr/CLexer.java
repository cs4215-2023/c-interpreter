// Generated from /Users/benlui/Desktop/CS4215/project/c-interpreter/C-grammar /C.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, Break=3, Case=4, Char=5, Const=6, Continue=7, Default=8, 
		Do=9, Else=10, Float=11, For=12, If=13, Int=14, Long=15, Return=16, Signed=17, 
		Struct=18, Unsigned=19, Void=20, While=21, LeftParen=22, RightParen=23, 
		LeftBracket=24, RightBracket=25, LeftBrace=26, RightBrace=27, Less=28, 
		LessEqual=29, Greater=30, GreaterEqual=31, LeftShift=32, RightShift=33, 
		Plus=34, PlusPlus=35, Minus=36, MinusMinus=37, Star=38, Div=39, Mod=40, 
		And=41, Or=42, AndAnd=43, OrOr=44, Caret=45, Not=46, Tilde=47, Question=48, 
		Colon=49, Semi=50, Comma=51, Assign=52, StarAssign=53, DivAssign=54, ModAssign=55, 
		PlusAssign=56, MinusAssign=57, LeftShiftAssign=58, RightShiftAssign=59, 
		AndAssign=60, XorAssign=61, OrAssign=62, Equal=63, NotEqual=64, Arrow=65, 
		Dot=66, Identifier=67, Constant=68, DigitSequence=69, StringLiteral=70, 
		Whitespace=71, Newline=72, BlockComment=73, LineComment=74;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
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
			"Newline", "BlockComment", "LineComment"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'__extension__'", "'inline'", "'break'", "'case'", "'char'", "'const'", 
			"'continue'", "'default'", "'do'", "'else'", "'float'", "'for'", "'if'", 
			"'int'", "'long'", "'return'", "'signed'", "'struct'", "'unsigned'", 
			"'void'", "'while'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", 
			"'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", 
			"'*'", "'/'", "'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", 
			"'?'", "':'", "';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", 
			"'<<='", "'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "Break", "Case", "Char", "Const", "Continue", "Default", 
			"Do", "Else", "Float", "For", "If", "Int", "Long", "Return", "Signed", 
			"Struct", "Unsigned", "Void", "While", "LeftParen", "RightParen", "LeftBracket", 
			"RightBracket", "LeftBrace", "RightBrace", "Less", "LessEqual", "Greater", 
			"GreaterEqual", "LeftShift", "RightShift", "Plus", "PlusPlus", "Minus", 
			"MinusMinus", "Star", "Div", "Mod", "And", "Or", "AndAnd", "OrOr", "Caret", 
			"Not", "Tilde", "Question", "Colon", "Semi", "Comma", "Assign", "StarAssign", 
			"DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "LeftShiftAssign", 
			"RightShiftAssign", "AndAssign", "XorAssign", "OrAssign", "Equal", "NotEqual", 
			"Arrow", "Dot", "Identifier", "Constant", "DigitSequence", "StringLiteral", 
			"Whitespace", "Newline", "BlockComment", "LineComment"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2L\u027a\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3"+
		"\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3"+
		"\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3"+
		"\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3"+
		"\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3 \3 "+
		"\3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3$\3$\3$\3%\3%\3&\3&\3&\3\'\3\'\3(\3(\3"+
		")\3)\3*\3*\3+\3+\3,\3,\3,\3-\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62"+
		"\3\62\3\63\3\63\3\64\3\64\3\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67\38\3"+
		"8\38\39\39\39\3:\3:\3:\3;\3;\3;\3;\3<\3<\3<\3<\3=\3=\3=\3>\3>\3>\3?\3"+
		"?\3?\3@\3@\3@\3A\3A\3A\3B\3B\3B\3C\3C\3D\3D\3D\7D\u01bd\nD\fD\16D\u01c0"+
		"\13D\3E\3E\3F\3F\3G\3G\3H\3H\3H\5H\u01cb\nH\3I\3I\3J\3J\3J\6J\u01d2\n"+
		"J\rJ\16J\u01d3\3K\3K\7K\u01d8\nK\fK\16K\u01db\13K\3L\3L\3M\3M\3N\3N\3"+
		"O\3O\5O\u01e5\nO\3O\5O\u01e8\nO\3O\3O\3O\5O\u01ed\nO\5O\u01ef\nO\3P\5"+
		"P\u01f2\nP\3P\3P\3P\3P\3P\5P\u01f9\nP\3Q\3Q\5Q\u01fd\nQ\3Q\3Q\3R\3R\3"+
		"S\6S\u0204\nS\rS\16S\u0205\3T\3T\5T\u020a\nT\3T\3T\3U\3U\3V\3V\3V\3V\3"+
		"V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\5V\u0226\nV\3W\6"+
		"W\u0229\nW\rW\16W\u022a\3X\3X\5X\u022f\nX\3Y\3Y\3Z\3Z\3Z\3[\5[\u0237\n"+
		"[\3[\3[\5[\u023b\n[\3[\3[\3\\\3\\\3\\\5\\\u0242\n\\\3]\6]\u0245\n]\r]"+
		"\16]\u0246\3^\3^\3^\3^\3^\3^\3^\5^\u0250\n^\3_\6_\u0253\n_\r_\16_\u0254"+
		"\3_\3_\3`\3`\5`\u025b\n`\3`\5`\u025e\n`\3`\3`\3a\3a\3a\3a\7a\u0266\na"+
		"\fa\16a\u0269\13a\3a\3a\3a\3a\3a\3b\3b\3b\3b\7b\u0274\nb\fb\16b\u0277"+
		"\13b\3b\3b\3\u0267\2c\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27"+
		"\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33"+
		"\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63"+
		"e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089"+
		"\2\u008b\2\u008d\2\u008fF\u0091\2\u0093\2\u0095\2\u0097\2\u0099\2\u009b"+
		"\2\u009d\2\u009f\2\u00a1\2\u00a3\2\u00a5G\u00a7\2\u00a9\2\u00ab\2\u00ad"+
		"\2\u00af\2\u00b1\2\u00b3\2\u00b5H\u00b7\2\u00b9\2\u00bb\2\u00bdI\u00bf"+
		"J\u00c1K\u00c3L\3\2\22\5\2C\\aac|\3\2\62;\4\2DDdd\3\2\62\63\3\2\63;\4"+
		"\2WWww\4\2GGgg\4\2--//\4\2RRrr\6\2HHNNhhnn\6\2\f\f\17\17))^^\f\2$$))A"+
		"A^^cdhhppttvvxx\5\2NNWWww\6\2\f\f\17\17$$^^\4\2\13\13\"\"\4\2\f\f\17\17"+
		"\2\u0282\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2"+
		"\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2"+
		"\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y"+
		"\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3"+
		"\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u008f\3\2\2\2\2\u00a5\3\2\2\2"+
		"\2\u00b5\3\2\2\2\2\u00bd\3\2\2\2\2\u00bf\3\2\2\2\2\u00c1\3\2\2\2\2\u00c3"+
		"\3\2\2\2\3\u00c5\3\2\2\2\5\u00d3\3\2\2\2\7\u00da\3\2\2\2\t\u00e0\3\2\2"+
		"\2\13\u00e5\3\2\2\2\r\u00ea\3\2\2\2\17\u00f0\3\2\2\2\21\u00f9\3\2\2\2"+
		"\23\u0101\3\2\2\2\25\u0104\3\2\2\2\27\u0109\3\2\2\2\31\u010f\3\2\2\2\33"+
		"\u0113\3\2\2\2\35\u0116\3\2\2\2\37\u011a\3\2\2\2!\u011f\3\2\2\2#\u0126"+
		"\3\2\2\2%\u012d\3\2\2\2\'\u0134\3\2\2\2)\u013d\3\2\2\2+\u0142\3\2\2\2"+
		"-\u0148\3\2\2\2/\u014a\3\2\2\2\61\u014c\3\2\2\2\63\u014e\3\2\2\2\65\u0150"+
		"\3\2\2\2\67\u0152\3\2\2\29\u0154\3\2\2\2;\u0156\3\2\2\2=\u0159\3\2\2\2"+
		"?\u015b\3\2\2\2A\u015e\3\2\2\2C\u0161\3\2\2\2E\u0164\3\2\2\2G\u0166\3"+
		"\2\2\2I\u0169\3\2\2\2K\u016b\3\2\2\2M\u016e\3\2\2\2O\u0170\3\2\2\2Q\u0172"+
		"\3\2\2\2S\u0174\3\2\2\2U\u0176\3\2\2\2W\u0178\3\2\2\2Y\u017b\3\2\2\2["+
		"\u017e\3\2\2\2]\u0180\3\2\2\2_\u0182\3\2\2\2a\u0184\3\2\2\2c\u0186\3\2"+
		"\2\2e\u0188\3\2\2\2g\u018a\3\2\2\2i\u018c\3\2\2\2k\u018e\3\2\2\2m\u0191"+
		"\3\2\2\2o\u0194\3\2\2\2q\u0197\3\2\2\2s\u019a\3\2\2\2u\u019d\3\2\2\2w"+
		"\u01a1\3\2\2\2y\u01a5\3\2\2\2{\u01a8\3\2\2\2}\u01ab\3\2\2\2\177\u01ae"+
		"\3\2\2\2\u0081\u01b1\3\2\2\2\u0083\u01b4\3\2\2\2\u0085\u01b7\3\2\2\2\u0087"+
		"\u01b9\3\2\2\2\u0089\u01c1\3\2\2\2\u008b\u01c3\3\2\2\2\u008d\u01c5\3\2"+
		"\2\2\u008f\u01ca\3\2\2\2\u0091\u01cc\3\2\2\2\u0093\u01ce\3\2\2\2\u0095"+
		"\u01d5\3\2\2\2\u0097\u01dc\3\2\2\2\u0099\u01de\3\2\2\2\u009b\u01e0\3\2"+
		"\2\2\u009d\u01ee\3\2\2\2\u009f\u01f8\3\2\2\2\u00a1\u01fa\3\2\2\2\u00a3"+
		"\u0200\3\2\2\2\u00a5\u0203\3\2\2\2\u00a7\u0207\3\2\2\2\u00a9\u020d\3\2"+
		"\2\2\u00ab\u0225\3\2\2\2\u00ad\u0228\3\2\2\2\u00af\u022e\3\2\2\2\u00b1"+
		"\u0230\3\2\2\2\u00b3\u0232\3\2\2\2\u00b5\u0236\3\2\2\2\u00b7\u0241\3\2"+
		"\2\2\u00b9\u0244\3\2\2\2\u00bb\u024f\3\2\2\2\u00bd\u0252\3\2\2\2\u00bf"+
		"\u025d\3\2\2\2\u00c1\u0261\3\2\2\2\u00c3\u026f\3\2\2\2\u00c5\u00c6\7a"+
		"\2\2\u00c6\u00c7\7a\2\2\u00c7\u00c8\7g\2\2\u00c8\u00c9\7z\2\2\u00c9\u00ca"+
		"\7v\2\2\u00ca\u00cb\7g\2\2\u00cb\u00cc\7p\2\2\u00cc\u00cd\7u\2\2\u00cd"+
		"\u00ce\7k\2\2\u00ce\u00cf\7q\2\2\u00cf\u00d0\7p\2\2\u00d0\u00d1\7a\2\2"+
		"\u00d1\u00d2\7a\2\2\u00d2\4\3\2\2\2\u00d3\u00d4\7k\2\2\u00d4\u00d5\7p"+
		"\2\2\u00d5\u00d6\7n\2\2\u00d6\u00d7\7k\2\2\u00d7\u00d8\7p\2\2\u00d8\u00d9"+
		"\7g\2\2\u00d9\6\3\2\2\2\u00da\u00db\7d\2\2\u00db\u00dc\7t\2\2\u00dc\u00dd"+
		"\7g\2\2\u00dd\u00de\7c\2\2\u00de\u00df\7m\2\2\u00df\b\3\2\2\2\u00e0\u00e1"+
		"\7e\2\2\u00e1\u00e2\7c\2\2\u00e2\u00e3\7u\2\2\u00e3\u00e4\7g\2\2\u00e4"+
		"\n\3\2\2\2\u00e5\u00e6\7e\2\2\u00e6\u00e7\7j\2\2\u00e7\u00e8\7c\2\2\u00e8"+
		"\u00e9\7t\2\2\u00e9\f\3\2\2\2\u00ea\u00eb\7e\2\2\u00eb\u00ec\7q\2\2\u00ec"+
		"\u00ed\7p\2\2\u00ed\u00ee\7u\2\2\u00ee\u00ef\7v\2\2\u00ef\16\3\2\2\2\u00f0"+
		"\u00f1\7e\2\2\u00f1\u00f2\7q\2\2\u00f2\u00f3\7p\2\2\u00f3\u00f4\7v\2\2"+
		"\u00f4\u00f5\7k\2\2\u00f5\u00f6\7p\2\2\u00f6\u00f7\7w\2\2\u00f7\u00f8"+
		"\7g\2\2\u00f8\20\3\2\2\2\u00f9\u00fa\7f\2\2\u00fa\u00fb\7g\2\2\u00fb\u00fc"+
		"\7h\2\2\u00fc\u00fd\7c\2\2\u00fd\u00fe\7w\2\2\u00fe\u00ff\7n\2\2\u00ff"+
		"\u0100\7v\2\2\u0100\22\3\2\2\2\u0101\u0102\7f\2\2\u0102\u0103\7q\2\2\u0103"+
		"\24\3\2\2\2\u0104\u0105\7g\2\2\u0105\u0106\7n\2\2\u0106\u0107\7u\2\2\u0107"+
		"\u0108\7g\2\2\u0108\26\3\2\2\2\u0109\u010a\7h\2\2\u010a\u010b\7n\2\2\u010b"+
		"\u010c\7q\2\2\u010c\u010d\7c\2\2\u010d\u010e\7v\2\2\u010e\30\3\2\2\2\u010f"+
		"\u0110\7h\2\2\u0110\u0111\7q\2\2\u0111\u0112\7t\2\2\u0112\32\3\2\2\2\u0113"+
		"\u0114\7k\2\2\u0114\u0115\7h\2\2\u0115\34\3\2\2\2\u0116\u0117\7k\2\2\u0117"+
		"\u0118\7p\2\2\u0118\u0119\7v\2\2\u0119\36\3\2\2\2\u011a\u011b\7n\2\2\u011b"+
		"\u011c\7q\2\2\u011c\u011d\7p\2\2\u011d\u011e\7i\2\2\u011e \3\2\2\2\u011f"+
		"\u0120\7t\2\2\u0120\u0121\7g\2\2\u0121\u0122\7v\2\2\u0122\u0123\7w\2\2"+
		"\u0123\u0124\7t\2\2\u0124\u0125\7p\2\2\u0125\"\3\2\2\2\u0126\u0127\7u"+
		"\2\2\u0127\u0128\7k\2\2\u0128\u0129\7i\2\2\u0129\u012a\7p\2\2\u012a\u012b"+
		"\7g\2\2\u012b\u012c\7f\2\2\u012c$\3\2\2\2\u012d\u012e\7u\2\2\u012e\u012f"+
		"\7v\2\2\u012f\u0130\7t\2\2\u0130\u0131\7w\2\2\u0131\u0132\7e\2\2\u0132"+
		"\u0133\7v\2\2\u0133&\3\2\2\2\u0134\u0135\7w\2\2\u0135\u0136\7p\2\2\u0136"+
		"\u0137\7u\2\2\u0137\u0138\7k\2\2\u0138\u0139\7i\2\2\u0139\u013a\7p\2\2"+
		"\u013a\u013b\7g\2\2\u013b\u013c\7f\2\2\u013c(\3\2\2\2\u013d\u013e\7x\2"+
		"\2\u013e\u013f\7q\2\2\u013f\u0140\7k\2\2\u0140\u0141\7f\2\2\u0141*\3\2"+
		"\2\2\u0142\u0143\7y\2\2\u0143\u0144\7j\2\2\u0144\u0145\7k\2\2\u0145\u0146"+
		"\7n\2\2\u0146\u0147\7g\2\2\u0147,\3\2\2\2\u0148\u0149\7*\2\2\u0149.\3"+
		"\2\2\2\u014a\u014b\7+\2\2\u014b\60\3\2\2\2\u014c\u014d\7]\2\2\u014d\62"+
		"\3\2\2\2\u014e\u014f\7_\2\2\u014f\64\3\2\2\2\u0150\u0151\7}\2\2\u0151"+
		"\66\3\2\2\2\u0152\u0153\7\177\2\2\u01538\3\2\2\2\u0154\u0155\7>\2\2\u0155"+
		":\3\2\2\2\u0156\u0157\7>\2\2\u0157\u0158\7?\2\2\u0158<\3\2\2\2\u0159\u015a"+
		"\7@\2\2\u015a>\3\2\2\2\u015b\u015c\7@\2\2\u015c\u015d\7?\2\2\u015d@\3"+
		"\2\2\2\u015e\u015f\7>\2\2\u015f\u0160\7>\2\2\u0160B\3\2\2\2\u0161\u0162"+
		"\7@\2\2\u0162\u0163\7@\2\2\u0163D\3\2\2\2\u0164\u0165\7-\2\2\u0165F\3"+
		"\2\2\2\u0166\u0167\7-\2\2\u0167\u0168\7-\2\2\u0168H\3\2\2\2\u0169\u016a"+
		"\7/\2\2\u016aJ\3\2\2\2\u016b\u016c\7/\2\2\u016c\u016d\7/\2\2\u016dL\3"+
		"\2\2\2\u016e\u016f\7,\2\2\u016fN\3\2\2\2\u0170\u0171\7\61\2\2\u0171P\3"+
		"\2\2\2\u0172\u0173\7\'\2\2\u0173R\3\2\2\2\u0174\u0175\7(\2\2\u0175T\3"+
		"\2\2\2\u0176\u0177\7~\2\2\u0177V\3\2\2\2\u0178\u0179\7(\2\2\u0179\u017a"+
		"\7(\2\2\u017aX\3\2\2\2\u017b\u017c\7~\2\2\u017c\u017d\7~\2\2\u017dZ\3"+
		"\2\2\2\u017e\u017f\7`\2\2\u017f\\\3\2\2\2\u0180\u0181\7#\2\2\u0181^\3"+
		"\2\2\2\u0182\u0183\7\u0080\2\2\u0183`\3\2\2\2\u0184\u0185\7A\2\2\u0185"+
		"b\3\2\2\2\u0186\u0187\7<\2\2\u0187d\3\2\2\2\u0188\u0189\7=\2\2\u0189f"+
		"\3\2\2\2\u018a\u018b\7.\2\2\u018bh\3\2\2\2\u018c\u018d\7?\2\2\u018dj\3"+
		"\2\2\2\u018e\u018f\7,\2\2\u018f\u0190\7?\2\2\u0190l\3\2\2\2\u0191\u0192"+
		"\7\61\2\2\u0192\u0193\7?\2\2\u0193n\3\2\2\2\u0194\u0195\7\'\2\2\u0195"+
		"\u0196\7?\2\2\u0196p\3\2\2\2\u0197\u0198\7-\2\2\u0198\u0199\7?\2\2\u0199"+
		"r\3\2\2\2\u019a\u019b\7/\2\2\u019b\u019c\7?\2\2\u019ct\3\2\2\2\u019d\u019e"+
		"\7>\2\2\u019e\u019f\7>\2\2\u019f\u01a0\7?\2\2\u01a0v\3\2\2\2\u01a1\u01a2"+
		"\7@\2\2\u01a2\u01a3\7@\2\2\u01a3\u01a4\7?\2\2\u01a4x\3\2\2\2\u01a5\u01a6"+
		"\7(\2\2\u01a6\u01a7\7?\2\2\u01a7z\3\2\2\2\u01a8\u01a9\7`\2\2\u01a9\u01aa"+
		"\7?\2\2\u01aa|\3\2\2\2\u01ab\u01ac\7~\2\2\u01ac\u01ad\7?\2\2\u01ad~\3"+
		"\2\2\2\u01ae\u01af\7?\2\2\u01af\u01b0\7?\2\2\u01b0\u0080\3\2\2\2\u01b1"+
		"\u01b2\7#\2\2\u01b2\u01b3\7?\2\2\u01b3\u0082\3\2\2\2\u01b4\u01b5\7/\2"+
		"\2\u01b5\u01b6\7@\2\2\u01b6\u0084\3\2\2\2\u01b7\u01b8\7\60\2\2\u01b8\u0086"+
		"\3\2\2\2\u01b9\u01be\5\u0089E\2\u01ba\u01bd\5\u0089E\2\u01bb\u01bd\5\u008d"+
		"G\2\u01bc\u01ba\3\2\2\2\u01bc\u01bb\3\2\2\2\u01bd\u01c0\3\2\2\2\u01be"+
		"\u01bc\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf\u0088\3\2\2\2\u01c0\u01be\3\2"+
		"\2\2\u01c1\u01c2\5\u008bF\2\u01c2\u008a\3\2\2\2\u01c3\u01c4\t\2\2\2\u01c4"+
		"\u008c\3\2\2\2\u01c5\u01c6\t\3\2\2\u01c6\u008e\3\2\2\2\u01c7\u01cb\5\u0091"+
		"I\2\u01c8\u01cb\5\u009bN\2\u01c9\u01cb\5\u00abV\2\u01ca\u01c7\3\2\2\2"+
		"\u01ca\u01c8\3\2\2\2\u01ca\u01c9\3\2\2\2\u01cb\u0090\3\2\2\2\u01cc\u01cd"+
		"\5\u0093J\2\u01cd\u0092\3\2\2\2\u01ce\u01cf\7\62\2\2\u01cf\u01d1\t\4\2"+
		"\2\u01d0\u01d2\t\5\2\2\u01d1\u01d0\3\2\2\2\u01d2\u01d3\3\2\2\2\u01d3\u01d1"+
		"\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4\u0094\3\2\2\2\u01d5\u01d9\5\u0097L"+
		"\2\u01d6\u01d8\5\u008dG\2\u01d7\u01d6\3\2\2\2\u01d8\u01db\3\2\2\2\u01d9"+
		"\u01d7\3\2\2\2\u01d9\u01da\3\2\2\2\u01da\u0096\3\2\2\2\u01db\u01d9\3\2"+
		"\2\2\u01dc\u01dd\t\6\2\2\u01dd\u0098\3\2\2\2\u01de\u01df\t\7\2\2\u01df"+
		"\u009a\3\2\2\2\u01e0\u01e1\5\u009dO\2\u01e1\u009c\3\2\2\2\u01e2\u01e4"+
		"\5\u009fP\2\u01e3\u01e5\5\u00a1Q\2\u01e4\u01e3\3\2\2\2\u01e4\u01e5\3\2"+
		"\2\2\u01e5\u01e7\3\2\2\2\u01e6\u01e8\5\u00a9U\2\u01e7\u01e6\3\2\2\2\u01e7"+
		"\u01e8\3\2\2\2\u01e8\u01ef\3\2\2\2\u01e9\u01ea\5\u00a5S\2\u01ea\u01ec"+
		"\5\u00a1Q\2\u01eb\u01ed\5\u00a9U\2\u01ec\u01eb\3\2\2\2\u01ec\u01ed\3\2"+
		"\2\2\u01ed\u01ef\3\2\2\2\u01ee\u01e2\3\2\2\2\u01ee\u01e9\3\2\2\2\u01ef"+
		"\u009e\3\2\2\2\u01f0\u01f2\5\u00a5S\2\u01f1\u01f0\3\2\2\2\u01f1\u01f2"+
		"\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f4\7\60\2\2\u01f4\u01f9\5\u00a5"+
		"S\2\u01f5\u01f6\5\u00a5S\2\u01f6\u01f7\7\60\2\2\u01f7\u01f9\3\2\2\2\u01f8"+
		"\u01f1\3\2\2\2\u01f8\u01f5\3\2\2\2\u01f9\u00a0\3\2\2\2\u01fa\u01fc\t\b"+
		"\2\2\u01fb\u01fd\5\u00a3R\2\u01fc\u01fb\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd"+
		"\u01fe\3\2\2\2\u01fe\u01ff\5\u00a5S\2\u01ff\u00a2\3\2\2\2\u0200\u0201"+
		"\t\t\2\2\u0201\u00a4\3\2\2\2\u0202\u0204\5\u008dG\2\u0203\u0202\3\2\2"+
		"\2\u0204\u0205\3\2\2\2\u0205\u0203\3\2\2\2\u0205\u0206\3\2\2\2\u0206\u00a6"+
		"\3\2\2\2\u0207\u0209\t\n\2\2\u0208\u020a\5\u00a3R\2\u0209\u0208\3\2\2"+
		"\2\u0209\u020a\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u020c\5\u00a5S\2\u020c"+
		"\u00a8\3\2\2\2\u020d\u020e\t\13\2\2\u020e\u00aa\3\2\2\2\u020f\u0210\7"+
		")\2\2\u0210\u0211\5\u00adW\2\u0211\u0212\7)\2\2\u0212\u0226\3\2\2\2\u0213"+
		"\u0214\7N\2\2\u0214\u0215\7)\2\2\u0215\u0216\3\2\2\2\u0216\u0217\5\u00ad"+
		"W\2\u0217\u0218\7)\2\2\u0218\u0226\3\2\2\2\u0219\u021a\7w\2\2\u021a\u021b"+
		"\7)\2\2\u021b\u021c\3\2\2\2\u021c\u021d\5\u00adW\2\u021d\u021e\7)\2\2"+
		"\u021e\u0226\3\2\2\2\u021f\u0220\7W\2\2\u0220\u0221\7)\2\2\u0221\u0222"+
		"\3\2\2\2\u0222\u0223\5\u00adW\2\u0223\u0224\7)\2\2\u0224\u0226\3\2\2\2"+
		"\u0225\u020f\3\2\2\2\u0225\u0213\3\2\2\2\u0225\u0219\3\2\2\2\u0225\u021f"+
		"\3\2\2\2\u0226\u00ac\3\2\2\2\u0227\u0229\5\u00afX\2\u0228\u0227\3\2\2"+
		"\2\u0229\u022a\3\2\2\2\u022a\u0228\3\2\2\2\u022a\u022b\3\2\2\2\u022b\u00ae"+
		"\3\2\2\2\u022c\u022f\n\f\2\2\u022d\u022f\5\u00b1Y\2\u022e\u022c\3\2\2"+
		"\2\u022e\u022d\3\2\2\2\u022f\u00b0\3\2\2\2\u0230\u0231\5\u00b3Z\2\u0231"+
		"\u00b2\3\2\2\2\u0232\u0233\7^\2\2\u0233\u0234\t\r\2\2\u0234\u00b4\3\2"+
		"\2\2\u0235\u0237\5\u00b7\\\2\u0236\u0235\3\2\2\2\u0236\u0237\3\2\2\2\u0237"+
		"\u0238\3\2\2\2\u0238\u023a\7$\2\2\u0239\u023b\5\u00b9]\2\u023a\u0239\3"+
		"\2\2\2\u023a\u023b\3\2\2\2\u023b\u023c\3\2\2\2\u023c\u023d\7$\2\2\u023d"+
		"\u00b6\3\2\2\2\u023e\u023f\7w\2\2\u023f\u0242\7:\2\2\u0240\u0242\t\16"+
		"\2\2\u0241\u023e\3\2\2\2\u0241\u0240\3\2\2\2\u0242\u00b8\3\2\2\2\u0243"+
		"\u0245\5\u00bb^\2\u0244\u0243\3\2\2\2\u0245\u0246\3\2\2\2\u0246\u0244"+
		"\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u00ba\3\2\2\2\u0248\u0250\n\17\2\2"+
		"\u0249\u0250\5\u00b1Y\2\u024a\u024b\7^\2\2\u024b\u0250\7\f\2\2\u024c\u024d"+
		"\7^\2\2\u024d\u024e\7\17\2\2\u024e\u0250\7\f\2\2\u024f\u0248\3\2\2\2\u024f"+
		"\u0249\3\2\2\2\u024f\u024a\3\2\2\2\u024f\u024c\3\2\2\2\u0250\u00bc\3\2"+
		"\2\2\u0251\u0253\t\20\2\2\u0252\u0251\3\2\2\2\u0253\u0254\3\2\2\2\u0254"+
		"\u0252\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0256\3\2\2\2\u0256\u0257\b_"+
		"\2\2\u0257\u00be\3\2\2\2\u0258\u025a\7\17\2\2\u0259\u025b\7\f\2\2\u025a"+
		"\u0259\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025e\3\2\2\2\u025c\u025e\7\f"+
		"\2\2\u025d\u0258\3\2\2\2\u025d\u025c\3\2\2\2\u025e\u025f\3\2\2\2\u025f"+
		"\u0260\b`\2\2\u0260\u00c0\3\2\2\2\u0261\u0262\7\61\2\2\u0262\u0263\7,"+
		"\2\2\u0263\u0267\3\2\2\2\u0264\u0266\13\2\2\2\u0265\u0264\3\2\2\2\u0266"+
		"\u0269\3\2\2\2\u0267\u0268\3\2\2\2\u0267\u0265\3\2\2\2\u0268\u026a\3\2"+
		"\2\2\u0269\u0267\3\2\2\2\u026a\u026b\7,\2\2\u026b\u026c\7\61\2\2\u026c"+
		"\u026d\3\2\2\2\u026d\u026e\ba\2\2\u026e\u00c2\3\2\2\2\u026f\u0270\7\61"+
		"\2\2\u0270\u0271\7\61\2\2\u0271\u0275\3\2\2\2\u0272\u0274\n\21\2\2\u0273"+
		"\u0272\3\2\2\2\u0274\u0277\3\2\2\2\u0275\u0273\3\2\2\2\u0275\u0276\3\2"+
		"\2\2\u0276\u0278\3\2\2\2\u0277\u0275\3\2\2\2\u0278\u0279\bb\2\2\u0279"+
		"\u00c4\3\2\2\2\36\2\u01bc\u01be\u01ca\u01d3\u01d9\u01e4\u01e7\u01ec\u01ee"+
		"\u01f1\u01f8\u01fc\u0205\u0209\u0225\u022a\u022e\u0236\u023a\u0241\u0246"+
		"\u024f\u0254\u025a\u025d\u0267\u0275\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}