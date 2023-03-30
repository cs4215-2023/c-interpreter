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

FORMATSPECIFIERS:
	'"' '%d' '"'
	| '"' '%i' '"'
	| '"' '%c' '"'
	| '"' '%f' '"'
	| '"' '%s' '"'
	| '"' '%p' '"';

NUMBER: [0-9_]+;
CHAR: '\'' ~[\])] '\'';
FLOAT: ('0' ..'9')+ '.' ('0' ..'9')*;

PLUSPLUS: '++';
MINUSMINUS: '--';

start: (statement)*;

stringLiteral: '"' IDENTIFIER? '"';

stringLiteralList: stringLiteral (',' stringLiteral)*;

identifierWithType: idType = type id = IDENTIFIER;

// rename so as not to conflict with built in type
type: signed = SIGNEDTYPE? primType = PRIMITIVETYPE;

identifierWithTypeList:
	identifierWithType (',' identifierWithType)*;

identifierList: IDENTIFIER (',' IDENTIFIER)*;

expressionList: expression (',' expression)*;

numberList: NUMBER (',' NUMBER)*;

pointerList: pointer (',' pointer)*;
statement:
	expressionStatement
	| conditionalStatement
	| iterationStatement
	| returnStatement
	| functionDeclaration
	| condExpressionStatement;

expression:
	identifierWithType														# VariableDeclarationExpression
	| NUMBER																# NumberExpression
	| CHAR																	# CharExpression
	| FLOAT																	# FloatExpression
	| stringLiteral															# StringLiteralExpression
	| IDENTIFIER															# IdentifierExpression
	| postFix																# PostFixNotationExpression
	| arrayInitialisation													# ArrayInitialisationExpression
	| '(' inner = expression ')'											# ParenthesisExpression
	| pointer																# PointerDeclarationExpression
	| pointerDerefernce														# PointerDereferenceExpression
	| pointerReference														# PointerReferenceExpression
	| functionCall															# FunctionCallExpression
	| printf																# PrintfExpression
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
	| operators = NOT argument = parenthesesExpression						# Not;

statementBlock: (statement)*;

parenthesesExpression: '(' inner = expression ')';

postFix: argument = IDENTIFIER (PLUSPLUS | MINUSMINUS);

condExpressionStatement:
	conditionalExpression = condExpression ';';

condExpression:
	test = expression (
		'?' consequent = expression ':' alternate = condExpression
	)?;

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

arrayContent:
	'{' (pointerList | numberList | identifierList) '}';

arrayInitialisation:
	arrayIdentifierWithType (
		operator = '=' array = arrayContent
		| stringLiteral
	)?;

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

functionCallParameters: expressionList;

printf:
	'printf(' (stringLiteral | FORMATSPECIFIERS)* ',' identifierList ')';

// primaryExpression: Identifier | Constant | StringLiteral+ | '(' inner = expression ')';

// postfixExpression: (expression) ( '[' inner = expression ']' | '(' argumentExpressionList? ')' |
// ('.' | '->') Identifier | ('++' | '--') )*;

// argumentExpressionList: assignmentExpression (',' assignmentExpression)*;

// unaryExpression: ('++' | '--')* ( postfixExpression | unaryOperator castExpression );

// unaryOperator: '&' | '*' | '+' | '-' | '!';

// castExpression: '__extension__'? '(' typeName ')' castExpression | unaryExpression |
// DigitSequence; // for

// // multiplicativeExpression: left = castExpression ( operator = '*' | operator = '/' | operator =
// // '%' ) right = castExpression;

// additiveExpression: multiplicativeExpression ( (operator = '+' | operator = '-')
// multiplicativeExpression )*;

// shiftExpression: additiveExpression ( (operator = '<<' | operator = '>>') additiveExpression )*;

// relationalExpression: shiftExpression ( ( operator = '<' | operator = '>' | operator = '<=' |
// operator = '>=' ) shiftExpression )*;

// equalityExpression: relationalExpression ( (operator = '==' | operator = '!=')
// relationalExpression )*;

// andExpression: equalityExpression (operator = '&' equalityExpression)*;

// exclusiveOrExpression: andExpression (operator = '^' andExpression)*;

// inclusiveOrExpression: exclusiveOrExpression (operator = '|' exclusiveOrExpression)*;

// logicalAndExpression: inclusiveOrExpression (operator = '&&' inclusiveOrExpression)*;

// logicalOrExpression: logicalAndExpression (operator = '||' logicalAndExpression)*;

// conditionalExpression: test = logicalOrExpression ( '?' consequent = expression ':' alternate =
// conditionalExpression )?;

// assignmentExpression: conditionalExpression | unaryExpression assignmentOperator
// assignmentExpression | DigitSequence; // for

// assignmentOperator: '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|=';

// expression: assignmentExpression (',' assignmentExpression)*;

// constantExpression: conditionalExpression;

// declaration: declarationSpecifiers initDeclaratorList? ';';

// declarationSpecifiers: declarationSpecifier+;

// declarationSpecifiers2: declarationSpecifier+;

// declarationSpecifier: typeSpecifier | typeQualifier | functionSpecifier;

// initDeclaratorList: initDeclarator (',' initDeclarator)*;

// initDeclarator: left = declarator (operator = '=' right = initializer)?;

// typeSpecifier: ( 'void' | 'char' | 'int' | 'float' | 'signed' | 'unsigned' ) | structSpecifier |
// typedefName;

// structSpecifier: Struct Identifier? '{' structDeclarationList '}' | Struct Identifier;

// structDeclarationList: structDeclaration+;

// structDeclaration: specifierQualifierList structDeclaratorList ';' | specifierQualifierList ';';

// specifierQualifierList: (typeSpecifier | typeQualifier) specifierQualifierList?;

// structDeclaratorList: structDeclarator (',' structDeclarator)*;

// structDeclarator: declarator | declarator? ':' constantExpression;

// typeQualifier: 'const';

// functionSpecifier: ( 'inline');

// declarator: pointer? directDeclarator;

// directDeclarator: Identifier | '(' declarator ')' | directDeclarator '[' typeQualifierList?
// assignmentExpression? ']' | directDeclarator '[' typeQualifierList? '*' ']' | directDeclarator
// '(' parameterTypeList ')' | directDeclarator '(' identifierList? ')' | Identifier ':'
// DigitSequence; // bit field

// nestedParenthesesBlock: ( ~('(' | ')') | '(' inner = nestedParenthesesBlock ')' )*;

// pointer: (('*' | '^') typeQualifierList?)+; // ^ - Blocks language extension

// typeQualifierList: typeQualifier+;

// parameterTypeList: parameterList (',')?;

// parameterList: parameterDeclaration (',' parameterDeclaration)*;

// parameterDeclaration: declarationSpecifiers declarator | declarationSpecifiers2
// abstractDeclarator?;

// identifierList: Identifier (',' Identifier)*;

// typeName: specifierQualifierList abstractDeclarator?;

// abstractDeclarator: pointer | pointer? directAbstractDeclarator;

// directAbstractDeclarator: '(' inner = abstractDeclarator ')' | '[' typeQualifierList?
// assignmentExpression? ']' | '[' '*' ']' | '(' parameterTypeList? ')' | directAbstractDeclarator
// '[' typeQualifierList? assignmentExpression? ']' | directAbstractDeclarator '[' '*' ']' |
// directAbstractDeclarator '(' parameterTypeList? ')';

// typedefName: Identifier;

// initializer: assignmentExpression | '{' initializerList ','? '}';

// initializerList: designation? initializer (',' designation? initializer)*;

// designation: designatorList '=';

// designatorList: designator+;

// designator: '[' inner = constantExpression ']' | '.' Identifier;

// statement: compoundStatement | expressionStatement | selectionStatement | iterationStatement;

// compoundStatement: '{' blockItemList? '}';

// blockItemList: blockItem+;

// blockItem: statement | declaration;

// expressionStatement: expression? ';';

// selectionStatement: 'if' '(' test = expression ')' consequent = statement ( 'else' alternate =
// statement )?;

// iterationStatement: While '(' test = expression ')' consequent = statement | Do consequent =
// statement While '(' test = expression ')' ';' | For '(' forCondition ')' statement;

// forCondition: (forDeclaration | expression?) ';' forExpression? ';' forExpression?;

// forDeclaration: declarationSpecifiers initDeclaratorList?;

// forExpression: assignmentExpression (',' assignmentExpression)*;

// compilationUnit: translationUnit? EOF;

// translationUnit: externalDeclaration+;

// externalDeclaration: functionDefinition | declaration | ';'; // stray ;

// functionDefinition: declarationSpecifiers? declarator declarationList? compoundStatement;

// declarationList: declaration+;

// Break: 'break'; Char: 'char'; Continue: 'continue'; Const: 'const'; Do: 'do'; Else: 'else';
// Float: 'float'; For: 'for'; If: 'if'; Int: 'int'; Long: 'long'; Return: 'return'; Signed:
// 'signed'; Struct: 'struct'; Unsigned: 'unsigned'; Void: 'void'; While: 'while';

// LeftParen: '('; RightParen: ')'; LeftBracket: '['; RightBracket: ']'; LeftBrace: '{'; RightBrace:
// '}';

// Less: '<'; LessEqual: '<='; Greater: '>'; GreaterEqual: '>='; LeftShift: '<<'; RightShift: '>>';

// Plus: '+'; PlusPlus: '++'; Minus: '-'; MinusMinus: '--'; Star: '*'; Div: '/'; Mod: '%';

// And: '&'; Or: '|'; AndAnd: '&&'; OrOr: '||'; Caret: '^'; Not: '!'; Tilde: '~';

// Question: '?'; Colon: ':'; Semi: ';'; Comma: ',';

// Assign: '='; StarAssign: '*='; DivAssign: '/='; ModAssign: '%='; PlusAssign: '+='; MinusAssign:
// '-='; LeftShiftAssign: '<<='; RightShiftAssign: '>>='; AndAssign: '&='; XorAssign: '^=';
// OrAssign: '|=';

// Equal: '=='; NotEqual: '!=';

// Arrow: '->'; Dot: '.';

// Identifier: IdentifierCharacters (IdentifierCharacters | Digit)*;

// fragment IdentifierCharacters: Characters;

// fragment Characters: [a-zA-Z_];

// fragment Digit: [0-9];

// Constant: IntegerConstant | FloatingConstant | CharacterConstant;

// fragment IntegerConstant: BinaryConstant;

// fragment BinaryConstant: '0' [bB] [0-1]+;

// fragment DecimalConstant: NonzeroDigit Digit*;

// fragment NonzeroDigit: [1-9];

// fragment UnsignedSuffix: [uU];

// fragment FloatingConstant: DecimalFloatingConstant;

// fragment DecimalFloatingConstant: FractionalConstant ExponentPart? FloatingSuffix? |
// DigitSequence ExponentPart FloatingSuffix?;

// fragment FractionalConstant: DigitSequence? '.' DigitSequence | DigitSequence '.';

// fragment ExponentPart: [eE] Sign? DigitSequence;

// fragment Sign: [+-];

// DigitSequence: Digit+;

// fragment BinaryExponentPart: [pP] Sign? DigitSequence;

// fragment FloatingSuffix: [flFL];

// fragment CharacterConstant: '\'' CCharSequence '\'' | 'L\'' CCharSequence '\'' | 'u\''
// CCharSequence '\'' | 'U\'' CCharSequence '\'';

// fragment CCharSequence: CChar+;

// fragment CChar: ~['\\\r\n] | EscapeSequence;

// fragment EscapeSequence: SimpleEscapeSequence;

// fragment SimpleEscapeSequence: '\\' ['"?abfnrtv\\];

// StringLiteral: EncodingPrefix? '"' SCharSequence? '"';

// fragment EncodingPrefix: 'u8' | 'u' | 'U' | 'L';

// fragment SCharSequence: SChar+;

// fragment SChar: ~["\\\r\n] | EscapeSequence | '\\\n' // Added line | '\\\r\n'; // Added line
