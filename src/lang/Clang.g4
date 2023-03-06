grammar Clang;

WHITESPACE: [ \t]+ -> skip;

NEWLINE: ( '\r' '\n'? | '\n') -> skip;

PRIMITIVETYPE:
	'void'
	| 'char'
	| 'int'
	| 'float'
	| 'signed'
	| 'unsigned';

SIGN: ('-' | '+');

IDENTIFIER: SIGN? [a-zA-Z_] [a-zA-Z0-9_]*;

FORMATSPECIFIERS:
	'"' '%d' '"'
	| '"' '%i' '"'
	| '"' '%c' '"'
	| '"' '%f' '"'
	| '"' '%s' '"'
	| '"' '%p' '"';

NUMBER: SIGN? [0-9_]+;
CHAR: '\'' ~[\])] '\'';
FLOAT: ('0' ..'9')+ '.' ('0' ..'9')*;

PLUSPLUS: '++';
MINUSMINUS: '--';

start: (statement)* EOF;

stringLiteral: '"' IDENTIFIER? '"';

stringLiteralList: stringLiteral (',' stringLiteral)*;

identifierWithType: idType = PRIMITIVETYPE id = IDENTIFIER;

identifierWithTypeList:
	identifierWithType (',' identifierWithType)*;

identifierList: IDENTIFIER (',' IDENTIFIER)*;

numberList: NUMBER (',' NUMBER)*;

statement:
	expressionStatement
	| conditionalStatement
	| iterationStatement
	| function;

expression:
	identifierWithType										# TypedIdentifierExpression
	| NUMBER												# NumberExpression
	| stringLiteral											# StringLiteralExpression
	| IDENTIFIER											# IdentifierExpression
	| postFix												# PostFixNotationExpression
	| arrayInitialisation									# ArrayInitialisationExpression
	| '(' inner = expression ')'							# ParenthesisExpression
	| pointer												# PointerExpression
	| pointerDerefernce										# PointerDereferenceExpression
	| pointerReference										# PointerReferenceExpression
	| functionCall											# FunctionCallExpression
	| printf												# PrintfExpression
	| left = expression operator = '*' right = expression	# Multiplication
	| left = expression operator = '/' right = expression	# Division
	| left = expression operator = '%' right = expression	# ModulusDivision
	| left = expression operator = '+' right = expression	# Addition
	| left = expression operator = '-' right = expression	# Subtraction
	| left = expression operator = '<<' right = expression	# BitShiftLeft
	| left = expression operator = '>>' right = expression	# BitShiftRight
	| left = expression operator = '>' right = expression	# GreaterThan
	| left = expression operator = '<' right = expression	# LesserThan
	| left = expression operator = '>=' right = expression	# GreaterThanOrEqual
	| left = expression operator = '<=' right = expression	# LesserThanOrEqual
	| left = expression operator = '==' right = expression	# EqualityChecking
	| left = expression operator = '!=' right = expression	# NotEqual
	| left = expression operator = '||' right = expression	# Or
	| left = expression operator = '&&' right = expression	# And
	| left = expression operator = '&' right = expression	# BitwiseAnd
	| left = expression operator = '|' right = expression	# BitwiseOr
	| left = expression operator = '^' right = expression	# Xor
	| left = expression operator = '=' right = expression	# Assignment
	| left = expression operator = '-=' right = expression	# AssignAndMinusOne
	| left = expression operator = '+=' right = expression	# AssignAndAddOne;

parenthesesExpression: '(' inner = expression ')';

statementList: '{' ((statement)+)? '}';

postFix: (IDENTIFIER) (PLUSPLUS | MINUSMINUS);

conditionalExpression:
	test = expression '?' consequent = expression ':' alternate = expression;

expressionStatement: expression ';';

conditionalStatement:
	'if' '(' test = expression ')' consequentStatement = statement (
		'else' alternateStatement = statement
	)?;

iterationStatement:
	'while' '(' condition = expression ')' body = statementList
	| 'do' body = statementList 'while' '(' condition = expression ')' ';'
	| 'for' '(' forCondition ')' body = statementList;

forCondition:
	initialise = expression ';' endCondition = expression? ';' increment = expression;

arrayIdentifierWithType:
	idType = PRIMITIVETYPE id = IDENTIFIER '[' size = NUMBER? ']';

arrayContent: '{' (identifierList | numberList) '}';

arrayInitialisation:
	arrayIdentifierWithType (
		operator = '=' array = arrayContent
		| stringLiteral
	)?;

pointer: PRIMITIVETYPE '*' IDENTIFIER;

pointerDerefernce: '*' IDENTIFIER;

pointerReference: '&' IDENTIFIER;

function:
	funcType = PRIMITIVETYPE (funcName = IDENTIFIER) (
		params = '(' identifierWithTypeList? ')'
	) body = statementList;

functionCall:
	IDENTIFIER params = '(' functionCallParameters ')';

functionCallParameters: (
		stringLiteralList
		| numberList
		| identifierList
	) (',' stringLiteralList | numberList | identifierList)*;

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
