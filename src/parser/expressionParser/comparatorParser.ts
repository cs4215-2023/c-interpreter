import {
    EqualityCheckingContext,
    GreaterThanContext,
    GreaterThanOrEqualContext,
    LesserThanContext,
    LesserThanOrEqualContext,
    NotEqualContext,
  } from '../../lang/ClangParser';
  import * as es from 'estree'
  import { ExpressionParser } from '.'
  import { Constructable, contextToLocation } from '../util';
  
  export class parserComparatorExpression extends ExpressionParser {
      visitLessThan(ctx: LesserThanContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '<',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
  
      visitLessThanOrEqual(ctx: LesserThanOrEqualContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '<=',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
  
      visitGreaterThan(ctx: GreaterThanContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '>',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
  
      visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '>=',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
  
      visitEqualityChecking(ctx: EqualityCheckingContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '==',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
  
      visitNotEqual(ctx: NotEqualContext): es.Expression {
        return {
          type: 'BinaryExpression',
          operator: '!=',
          left: this.visit(ctx._left),
          right: this.visit(ctx._right),
          loc: contextToLocation(ctx),
        };
      }
    };
  
