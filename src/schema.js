import {UppercaseDirective, MultiplyDirective} from "./directives";

const {importSchema} = require('graphql-import');
import {makeExecutableSchema} from 'apollo-server-express';
import resolvers from './resolvers';
import config from './config';


const typeDefs = importSchema(config.get('graphql.schema'));

export default makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        uppercase: UppercaseDirective,
        multiply: MultiplyDirective,
    },
    resolverValidationOptions: {requireResolversForResolveType: false},
});
