grammar C;

primaryExpression:
	Identifier
	| Constant
	| StringLiteral+
	| '(' expression ')';

postfixExpression:
	(primaryExpression) (
		'[' expression ']'
		| '(' argumentExpressionList? ')'
		| ('.' | '->') Identifier
		| ('++' | '--')
	)*;

argumentExpressionList:
	assignmentExpression (',' assignmentExpression)*;

unaryExpression:
	('++' | '--')* (
		postfixExpression
		| unaryOperator castExpression
	);

unaryOperator: '&' | '*' | '+' | '-' | '!';

castExpression:
	'__extension__'? '(' typeName ')' castExpression
	| unaryExpression
	| DigitSequence; // for

multiplicativeExpression:
	castExpression (('*' | '/' | '%') castExpression)*;

additiveExpression:
	multiplicativeExpression (
		('+' | '-') multiplicativeExpression
	)*;

shiftExpression:
	additiveExpression (('<<' | '>>') additiveExpression)*;

relationalExpression:
	shiftExpression (('<' | '>' | '<=' | '>=') shiftExpression)*;

equalityExpression:
	relationalExpression (('==' | '!=') relationalExpression)*;

andExpression: equalityExpression ( '&' equalityExpression)*;

exclusiveOrExpression: andExpression ('^' andExpression)*;

inclusiveOrExpression:
	exclusiveOrExpression ('|' exclusiveOrExpression)*;

logicalAndExpression:
	inclusiveOrExpression ('&&' inclusiveOrExpression)*;

logicalOrExpression:
	logicalAndExpression ('||' logicalAndExpression)*;

conditionalExpression:
	logicalOrExpression (
		'?' expression ':' conditionalExpression
	)?;

assignmentExpression:
	conditionalExpression
	| unaryExpression assignmentOperator assignmentExpression
	| DigitSequence; // for

assignmentOperator:
	'='
	| '*='
	| '/='
	| '%='
	| '+='
	| '-='
	| '<<='
	| '>>='
	| '&='
	| '^='
	| '|=';

expression: assignmentExpression (',' assignmentExpression)*;

constantExpression: conditionalExpression;

declaration: declarationSpecifiers initDeclaratorList? ';';

declarationSpecifiers: declarationSpecifier+;

declarationSpecifiers2: declarationSpecifier+;

declarationSpecifier:
	typeSpecifier
	| typeQualifier
	| functionSpecifier;

initDeclaratorList: initDeclarator (',' initDeclarator)*;

initDeclarator: declarator ('=' initializer)?;

typeSpecifier: (
		'void'
		| 'char'
		| 'int'
		| 'float'
		| 'signed'
		| 'unsigned'
	)
	| structSpecifier
	| typedefName;

structSpecifier:
	Struct Identifier? '{' structDeclarationList '}'
	| Struct Identifier;

structDeclarationList: structDeclaration+;

structDeclaration:
	specifierQualifierList structDeclaratorList ';'
	| specifierQualifierList ';';

specifierQualifierList: (typeSpecifier | typeQualifier) specifierQualifierList?;

structDeclaratorList: structDeclarator (',' structDeclarator)*;

structDeclarator:
	declarator
	| declarator? ':' constantExpression;

typeQualifier: 'const';

functionSpecifier: ( 'inline');

declarator: pointer? directDeclarator;

directDeclarator:
	Identifier
	| '(' declarator ')'
	| directDeclarator '[' typeQualifierList? assignmentExpression? ']'
	| directDeclarator '[' typeQualifierList? '*' ']'
	| directDeclarator '(' parameterTypeList ')'
	| directDeclarator '(' identifierList? ')'
	| Identifier ':' DigitSequence; // bit field

nestedParenthesesBlock: (
		~('(' | ')')
		| '(' nestedParenthesesBlock ')'
	)*;

pointer: (('*' | '^') typeQualifierList?)+; // ^ - Blocks language extension

typeQualifierList: typeQualifier+;

parameterTypeList: parameterList (',')?;

parameterList: parameterDeclaration (',' parameterDeclaration)*;

parameterDeclaration:
	declarationSpecifiers declarator
	| declarationSpecifiers2 abstractDeclarator?;

identifierList: Identifier (',' Identifier)*;

typeName: specifierQualifierList abstractDeclarator?;

abstractDeclarator: pointer | pointer? directAbstractDeclarator;

directAbstractDeclarator:
	'(' abstractDeclarator ')'
	| '[' typeQualifierList? assignmentExpression? ']'
	| '[' '*' ']'
	| '(' parameterTypeList? ')'
	| directAbstractDeclarator '[' typeQualifierList? assignmentExpression? ']'
	| directAbstractDeclarator '[' '*' ']'
	| directAbstractDeclarator '(' parameterTypeList? ')';

typedefName: Identifier;

initializer:
	assignmentExpression
	| '{' initializerList ','? '}';

initializerList:
	designation? initializer (',' designation? initializer)*;

designation: designatorList '=';

designatorList: designator+;

designator: '[' constantExpression ']' | '.' Identifier;

statement:
	compoundStatement
	| expressionStatement
	| selectionStatement
	| iterationStatement;

compoundStatement: '{' blockItemList? '}';

blockItemList: blockItem+;

blockItem: statement | declaration;

expressionStatement: expression? ';';

selectionStatement:
	'if' '(' expression ')' statement ('else' statement)?;

iterationStatement:
	While '(' expression ')' statement
	| Do statement While '(' expression ')' ';'
	| For '(' forCondition ')' statement;

forCondition: (forDeclaration | expression?) ';' forExpression? ';' forExpression?;

forDeclaration: declarationSpecifiers initDeclaratorList?;

forExpression: assignmentExpression (',' assignmentExpression)*;

compilationUnit: translationUnit? EOF;

translationUnit: externalDeclaration+;

externalDeclaration:
	functionDefinition
	| declaration
	| ';'; // stray ;

functionDefinition:
	declarationSpecifiers? declarator declarationList? compoundStatement;

declarationList: declaration+;

Break: 'break';
Case: 'case';
Char: 'char';
Const: 'const';
Continue: 'continue';
Default: 'default';
Do: 'do';
Else: 'else';
Float: 'float';
For: 'for';
If: 'if';
Int: 'int';
Long: 'long';
Return: 'return';
Signed: 'signed';
Struct: 'struct';
Unsigned: 'unsigned';
Void: 'void';
While: 'while';

LeftParen: '(';
RightParen: ')';
LeftBracket: '[';
RightBracket: ']';
LeftBrace: '{';
RightBrace: '}';

Less: '<';
LessEqual: '<=';
Greater: '>';
GreaterEqual: '>=';
LeftShift: '<<';
RightShift: '>>';

Plus: '+';
PlusPlus: '++';
Minus: '-';
MinusMinus: '--';
Star: '*';
Div: '/';
Mod: '%';

And: '&';
Or: '|';
AndAnd: '&&';
OrOr: '||';
Caret: '^';
Not: '!';
Tilde: '~';

Question: '?';
Colon: ':';
Semi: ';';
Comma: ',';

Assign: '=';
StarAssign: '*=';
DivAssign: '/=';
ModAssign: '%=';
PlusAssign: '+=';
MinusAssign: '-=';
LeftShiftAssign: '<<=';
RightShiftAssign: '>>=';
AndAssign: '&=';
XorAssign: '^=';
OrAssign: '|=';

Equal: '==';
NotEqual: '!=';

Arrow: '->';
Dot: '.';

Identifier:
	IdentifierCharacters (IdentifierCharacters | Digit)*;

fragment IdentifierCharacters: Characters;

fragment Characters: [a-zA-Z_];

fragment Digit: [0-9];

Constant:
	IntegerConstant
	| FloatingConstant
	| CharacterConstant;

fragment IntegerConstant: BinaryConstant;

fragment BinaryConstant: '0' [bB] [0-1]+;

fragment DecimalConstant: NonzeroDigit Digit*;

fragment NonzeroDigit: [1-9];

fragment UnsignedSuffix: [uU];

fragment FloatingConstant: DecimalFloatingConstant;

fragment DecimalFloatingConstant:
	FractionalConstant ExponentPart? FloatingSuffix?
	| DigitSequence ExponentPart FloatingSuffix?;

fragment FractionalConstant:
	DigitSequence? '.' DigitSequence
	| DigitSequence '.';

fragment ExponentPart: [eE] Sign? DigitSequence;

fragment Sign: [+-];

DigitSequence: Digit+;

fragment BinaryExponentPart: [pP] Sign? DigitSequence;

fragment FloatingSuffix: [flFL];

fragment CharacterConstant:
	'\'' CCharSequence '\''
	| 'L\'' CCharSequence '\''
	| 'u\'' CCharSequence '\''
	| 'U\'' CCharSequence '\'';

fragment CCharSequence: CChar+;

fragment CChar: ~['\\\r\n] | EscapeSequence;

fragment EscapeSequence: SimpleEscapeSequence;

fragment SimpleEscapeSequence: '\\' ['"?abfnrtv\\];

StringLiteral: EncodingPrefix? '"' SCharSequence? '"';

fragment EncodingPrefix: 'u8' | 'u' | 'U' | 'L';

fragment SCharSequence: SChar+;

fragment SChar:
	~["\\\r\n]
	| EscapeSequence
	| '\\\n' // Added line
	| '\\\r\n'; // Added line

Whitespace: [ \t]+ -> skip;

Newline: ( '\r' '\n'? | '\n') -> skip;

BlockComment: '/*' .*? '*/' -> skip;

LineComment: '//' ~[\r\n]* -> skip;
