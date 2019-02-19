"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _http = require("http");

var _schema = _interopRequireDefault(require("./schema"));

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _apolloServerExpress.ApolloServer({
  schema: _schema.default,
  context: function context(_ref) {
    var req = _ref.req;
  }
});
server.applyMiddleware({
  app: _app.default
});
var httpServer = (0, _http.createServer)(_app.default);
server.installSubscriptionHandlers(httpServer);

var serverPort = _config.default.get('server.port');

httpServer.listen({
  port: serverPort
}, function () {
  console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(serverPort).concat(server.graphqlPath));
  console.log("\uD83D\uDE80 Subscriptions ready at ws://localhost:".concat(serverPort).concat(server.subscriptionsPath));
});