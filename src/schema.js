const {importSchema} = require('graphql-import');
import {makeExecutableSchema} from 'apollo-server-express';
import resolvers from './resolvers';
import config from './config';


const typeDefs = importSchema(config.get('graphql.schema'));

export default makeExecutableSchema({
    typeDefs,
    resolvers,
    context: ({req}) => {
        if (req) {
            userEmail: req.headers.UserEmail
        }
    },
    schemaDirectives: {},
    resolverValidationOptions: {requireResolversForResolveType: false},
});