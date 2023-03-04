import { AndContext, OrContext } from '../../lang/ClangParser';
import * as es from 'estree'
import { contextToLocation } from '../util';
import { ExpressionParser } from '.'

export class parserBinaryExpression extends ExpressionParser {
    visitAnd(ctx: AndContext): es.Expression {
      return {
        type: 'LogicalExpression',
        operator: '&&',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }

    visitOr(ctx: OrContext): es.Expression {
      return {
        type: 'LogicalExpression',
        operator: '||',
        left: this.visit(ctx._left),
        right: this.visit(ctx._right),
        loc: contextToLocation(ctx),
      };
    }
  };
