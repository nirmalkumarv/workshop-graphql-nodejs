import convict from 'convict';

// Define schema
const config = convict({
    database: {
        host: {
            doc: "Database host name/IP",
            format: '*',
            default: 'localhost'
        },
        port: {
            doc: "Database port",
            format: 'port',
            default: '5432'
        },
        name: {
            doc: "Database name",
            format: String,
            default: 'workshop'
        },
        user: {
            doc: "Database username",
            format: String,
            default: "user"
        },
        password: {
            doc: "Database password",
            format: String,
            default: "secret"
        }
    },
    graphql: {
        schema: {
            doc: "GraphQL schema path",
            format: String,
            default: "schema.graphql"
        }
    },
    server: {
        port: {
            doc: "Server port",
            format: 'port',
            default: '8000'
        }
    },
});
// Load environment dependent configuration
config.loadFile(process.env.APP_CONFIG_PATH);

// Perform validation
config.validate({allowed: 'strict'});
export default config;
