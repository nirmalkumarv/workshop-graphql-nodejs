"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('graphql-import'),
    importSchema = _require.importSchema;

var typeDefs = importSchema(_config.default.get('graphql.schema'));

var _default = (0, _apolloServerExpress.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.default,
  context: function context(_ref) {
    var req = _ref.req;
    return {};
  },
  schemaDirectives: {},
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

exports.default = _default;