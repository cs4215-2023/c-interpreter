import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as es from 'estree'
import {
    TypeContext
} from '../lang/ClangParser';
import { ClangVisitor } from '../lang/ClangVisitor';

export interface VarDeclaration extends es.BaseDeclaration {
    type: "VarDeclaration";
    kind: PrimitiveValueType;
}
type PrimitiveValueType =
    | 'int'
    | 'float'
    | 'char'
    | 'void';
export class TypeParser
    extends AbstractParseTreeVisitor<VarDeclaration>
    implements ClangVisitor<VarDeclaration>
{
    protected defaultResult(): VarDeclaration {
        return {
            type: 'VarDeclaration',
            kind: 'void',
        };
    }

    visitType(ctx: TypeContext): VarDeclaration { //only accounts for basic type for now
        return {
            type: 'VarDeclaration',
            kind: ctx.PRIMITIVETYPE().text as PrimitiveValueType
        };
    }

}