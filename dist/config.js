"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _convict = _interopRequireDefault(require("convict"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define schema
var config = (0, _convict.default)({
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
  }
}); // Load environment dependent configuration

config.loadFile(process.env.APP_CONFIG_PATH); // Perform validation

config.validate({
  allowed: 'strict'
});
var _default = config;
exports.default = _default;