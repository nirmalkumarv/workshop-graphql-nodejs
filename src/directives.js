import {SchemaDirectiveVisitor} from 'apollo-server-express';
import {defaultFieldResolver} from "graphql";

export default class AuthDirective extends SchemaDirectiveVisitor {
    visitObject(type) {
        this.ensureFieldsWrapped(type);
        type._requiredAuthRole = this.args.requires;
    }

    // Visitor methods for nested types like fields and arguments
    // also receive a details object that provides information about
    // the parent and grandparent types.
    visitFieldDefinition(field, details) {
        this.ensureFieldsWrapped(details.objectType);
        field._requiredAuthRole = this.args.requires;
    }

    ensureFieldsWrapped(objectType) {
        // Mark the GraphQLObjectType object to avoid re-wrapping:
        if (objectType._authFieldsWrapped) return;
        objectType._authFieldsWrapped = true;

        const fields = objectType.getFields();

        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            const {resolve = defaultFieldResolver} = field;
            field.resolve = async function (...args) {

                const requiredRole =
                    field._requiredAuthRole ||
                    objectType._requiredAuthRole;

                if (!requiredRole) {
                    return resolve.apply(this, args);
                }

                const {user, roles} = args[2];
                console.log(user)
                console.log(roles)
                for (var i = 0; i < roles.length; i++) {
                    if (roles[i] == requiredRole) {
                        return resolve.apply(this, args);
                    }
                }
                throw new Error("not authorized");
            };
        });
    }
}
