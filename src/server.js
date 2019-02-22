import {ApolloServer} from 'apollo-server-express';
import {createServer} from 'http';
import schema from './schema';
import app from './app';
import config from './config';

const server = new ApolloServer({
    schema,
    context: ({req}) => {
        let role = ""
        if (req) {
            role= req.headers.role
        }
        return {
            role,
        }
    },
});
server.applyMiddleware({app});
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);
const serverPort = config.get('server.port');

httpServer.listen({port: serverPort}, () => {
    console.log(`🚀 Server ready at http://localhost:${serverPort}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${serverPort}${server.subscriptionsPath}`);
});