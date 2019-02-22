import {SchemaDirectiveVisitor, GraphQLScalarType} from 'apollo-server-express';
import {defaultFieldResolver} from "graphql";

export class AuthDirective extends SchemaDirectiveVisitor {

    visitFieldDefinition(field, details) {
        this.ensureFieldsWrapped(details.objectType);
        field._requiredAuthRole = this.args.required;
    }

    ensureFieldsWrapped(objectType) {
        if (objectType._authFieldsWrapped) return;
        objectType._authFieldsWrapped = true;
        const fields = objectType.getFields();
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            const {resolve = defaultFieldResolver} = field;
            field.resolve = async function (...args) {
                let requiredRole = field._requiredAuthRole;
                if (!requiredRole) {
                    return resolve.apply(this, args);
                }
                const {role} = args[2];
                if (role == requiredRole) {
                    return resolve.apply(this, args);
                }
                throw new Error("not authorized");
            };
        });
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