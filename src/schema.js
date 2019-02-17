import {importSchema} from 'graphql-import';
import {makeExecutableSchema} from 'apollo-server-express';
import resolvers from './resolvers';
import {GraphQLSchemaPath} from './constants';
import AuthDirective from "./directives";


const typeDefs = importSchema(GraphQLSchemaPath);
console.log(typeDefs)
export default makeExecutableSchema({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        authScope: getScope(req.headers.authorization)
    }),
    schemaDirectives: {
        auth: AuthDirective
    },
    resolverValidationOptions: {requireResolversForResolveType: false},
});