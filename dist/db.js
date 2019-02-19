"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

var _pg = require("pg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = new _pg.Pool({
  host: _config.default.get('database.host'),
  port: _config.default.get('database.port'),
  database: _config.default.get('database.name'),
  user: _config.default.get('database.user'),
  password: _config.default.get('database.password')
});

var listDirectors = function listDirectors() {
  pool.query('SELECT * FROM directors', function (err, res) {
    console.log(err, res);
    pool.end();
  });
};

var db = {
  query: function query(text, params) {
    return pool.query(text, params);
  }
};
var _default = db;
exports.default = _default;