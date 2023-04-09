grammar Clang;

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
MOD: '%';
LESSTHAN: '<';
LESSTHANOREQUAL: '<=';
GREATERTHAN: '>';
GREATERTHANOREQUAL: '>=';
EQUAL: '=';
EQUALCHECK: '==';
NOTEQUALCHECK: '!=';
XOR: '^';
AND: '&&';
OR: '||';
NOT: '!';
BITWISEAND: '&';
BITWISEOR: '|';
MINUSEQUAL: '-=';
PLUSEQUAL: '+=';
BITSHIFTRIGHT: '>>';
BITSHIFTLEFT: '<<';

WHITESPACE: [ \t]+ -> skip;

NEWLINE: ( '\r' '\n'? | '\n') -> skip;

PRIMITIVETYPE: 'void' | 'char' | 'int' | 'float';

SIGNEDTYPE: 'signed' | 'unsigned';

IDENTIFIER: [a-zA-Z_] [a-zA-Z0-9_]*;

FORMATSPECIFIERS: '%d' | '%i' | '%c' | '%f' | '%s' | '%p';

NUMBER: [0-9_]+;
CHAR: '\'' ~[\])] '\'';
FLOAT: ('0' ..'9')+ '.' ('0' ..'9')*;

PLUSPLUS: '++';
MINUSMINUS: '--';

start: (statement)*;

identifiersAndSpecifiers: IDENTIFIER | FORMATSPECIFIERS;

string: StringLiteral+;

stringLiteralList: string (',' string)*;

identifierWithType: idType = type id = IDENTIFIER;

// rename so as not to conflict with built in type
type: signed = SIGNEDTYPE? primType = PRIMITIVETYPE;

identifierWithTypeList:
	identifierWithType (',' identifierWithType)*;

identifierList: IDENTIFIER (',' IDENTIFIER)*;

expressionList: expression (',' expression)*;

numberList: NUMBER (',' NUMBER)*;

charList: CHAR (',' CHAR)*;

floatList: FLOAT (',' FLOAT)*;

pointerList: pointer (',' pointer)*;
statement:
	expressionStatement
	| conditionalStatement
	| iterationStatement
	| returnStatement
	| functionDeclaration;

expression:
	identifierWithType														# VariableDeclarationExpression
	| NUMBER																# NumberExpression
	| CHAR																	# CharExpression
	| FLOAT																	# FloatExpression
	| string																# StringExpression
	| IDENTIFIER															# IdentifierExpression
	| postFix																# PostFixNotationExpression
	| arrayInitialisation													# ArrayInitialisationExpression
	| arrayIdentifier														# ArrayIdentifierExpression
	| '(' inner = expression ')'											# ParenthesisExpression
	| pointer																# PointerDeclarationExpression
	| pointerDerefernce														# PointerDereferenceExpression
	| pointerReference														# PointerReferenceExpression
	| functionCall															# FunctionCallExpression
	| left = expression operator = MUL right = expression					# Multiplication
	| left = expression operator = DIV right = expression					# Division
	| left = expression operator = MOD right = expression					# ModulusDivision
	| left = expression operator = ADD right = expression					# Addition
	| left = expression operator = SUB right = expression					# Subtraction
	| left = expression operator = BITSHIFTLEFT right = expression			# BitShiftLeft
	| left = expression operator = BITSHIFTRIGHT right = expression			# BitShiftRight
	| left = expression operator = GREATERTHAN right = expression			# GreaterThan
	| left = expression operator = LESSTHAN right = expression				# LesserThan
	| left = expression operator = GREATERTHANOREQUAL right = expression	# GreaterThanOrEqual
	| left = expression operator = LESSTHANOREQUAL right = expression		# LesserThanOrEqual
	| left = expression operator = EQUALCHECK right = expression			# EqualityChecking
	| left = expression operator = NOTEQUALCHECK right = expression			# NotEqual
	| left = expression operator = OR right = expression					# Or
	| left = expression operator = AND right = expression					# And
	| left = expression operator = BITWISEAND right = expression			# BitwiseAnd
	| left = expression operator = BITWISEOR right = expression				# BitwiseOr
	| left = expression operator = XOR right = expression					# Xor
	| left = expression operator = EQUAL right = expression					# Assignment
	| left = expression operator = MINUSEQUAL right = expression			# AssignAndMinusOne
	| left = expression operator = PLUSEQUAL right = expression				# AssignAndAddOne
	| operators = SUB argument = expression									# Negative
	| operators = ADD argument = expression									# Positive
	| operators = NOT argument = parenthesesExpression						# Not
	| test = expression (
		'?' consequent = expression ':' alternate = expression
	)+ # ConditionalExpression;

statementBlock: (statement)*;

parenthesesExpression: '(' inner = expression ')';

postFix: argument = IDENTIFIER (PLUSPLUS | MINUSMINUS);

returnStatement: 'return' argument = expression? ';';

expressionStatement: expression ';';

conditionalStatement:
	'if' '(' test = expression ')' '{' consequentStatement = statementBlock '}' (
		'else' (
			'{' alternateStatementBlock = statementBlock '}'
			| elseIfStatement = conditionalStatement
		)
	)?;

iterationStatement: whileLoop | doWhileLoop | forLoop;

whileLoop:
	'while' '(' condition = expression ')' '{' body = statementBlock '}';

doWhileLoop:
	'do' '{' body = statementBlock '}' 'while' '(' condition = expression ')' ';';

forLoop:
	'for' '(' innerForCondition = forCondition ')' '{' body = statementBlock '}';

forCondition:
	initialise = expression ';' test = expression? ';' update = expression;

arrayIdentifierWithType:
	idType = type id = IDENTIFIER '[' size = NUMBER? ']';

arrayIdentifier: id = IDENTIFIER '[' size = expression? ']';

arrayContent:
	'{' (
		pointerList
		| numberList
		| identifierList
		| floatList
		| charList
	) '}'
	| string;

arrayInitialisation:
	arrayIdentifierWithType (operator = '=' array = arrayContent)?;

pointer: idType = type '*' id = IDENTIFIER;

pointerDerefernce: operator = MUL argument = IDENTIFIER;

pointerReference: operator = BITWISEAND argument = IDENTIFIER;

functionDeclaration: function;

function:
	idType = type id = IDENTIFIER (
		'(' params = identifierWithTypeList? ')'
	) '{' body = statementBlock '}';

functionCall:
	func = IDENTIFIER '(' args = functionCallParameters ')';

functionCallParameters: expressionList?;

StringLiteral: '"' SCharSequence? '"';

fragment CChar: ~['\\\r\n] | EscapeSequence;

fragment EscapeSequence: SimpleEscapeSequence;

fragment SimpleEscapeSequence: '\\' ['"?abfnrtv\\];

fragment SCharSequence: SChar+;

fragment SChar:
	~["\\\r\n]
	| EscapeSequence
	| '\\\n' // Added line
	| '\\\r\n';