import convict from 'convict';

// Define schema
const config = convict({
    env: {
        doc: "The application environment.",
        format: ["production", "development", "local"],
        default: "development",
        env: "NODE_ENV"
    },
    db: {
        host: {
            doc: "Database host name/IP",
            format: '*',
            default: 'localhost'
        },
        port: {
            doc: "Database port",
            format: 'port',
            default: '27017'
        },
        name: {
            doc: "Database name",
            format: String,
            default: 'movies'
        }
    },
    server: {
        port: {
            doc: "Server port",
            format: 'port',
            default: '8000'
        }
    },
    authorization:{
        secret: {
            doc: "Authorization JWT secret",
            format: String,
            default: 'thisismyseed'
        }
    },
    authServer: {
        jwksHost: {
            doc: "Authorization Server url",
            format: 'url',
            default: 'http://localhost:7000'
        },
        audience: {
            doc: "Resource",
            format: String,
            default: 'urn:my-resource-server',
        },
        issuer: {
            doc: "Authorization Server",
            format: 'url',
            default: 'http://localhost:7000/.well-known/jwks.json'
        }
    }
});
// Load environment dependent configuration
const env = config.get('env');
config.loadFile(process.env.APP_CONFIG_DIR + '/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});
export default config;
