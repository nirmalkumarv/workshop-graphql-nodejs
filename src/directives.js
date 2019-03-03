import {SchemaDirectiveVisitor, GraphQLScalarType} from 'apollo-server-express';
import {defaultFieldResolver} from "graphql";

export class MultiplyDirective extends SchemaDirectiveVisitor {

    visitFieldDefinition(field, details) {
        const {resolve = defaultFieldResolver} = field;
        field.factor = this.args.factor;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            const {factor} = field;
            if (typeof result === "number") {
                return result * factor;
            }
            return result;
        };
    }
}

export class UppercaseDirective extends SchemaDirectiveVisitor {

    visitFieldDefinition(field, details) {
        const {resolve = defaultFieldResolver} = field;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === "string") {
                return result.toUpperCase();
            }
            return result;
        };
    }
}