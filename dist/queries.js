"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovie = exports.listMovies = exports.listActors = exports.listDirectors = void 0;

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var listDirectors =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(parentValue, args, ctx) {
    var directors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db.default.query('SELECT * FROM directors');

          case 2:
            directors = _context.sent;
            console.log(directors);
            return _context.abrupt("return", directors.map(function (d) {
              fullName: d.full_name;

              d.country;
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function listDirectors(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.listDirectors = listDirectors;

var listActors = function listActors(parentValue, args, ctx) {
  return [];
};

exports.listActors = listActors;

var listMovies = function listMovies(parentValue, args, ctx) {
  return [];
};

exports.listMovies = listMovies;

var getMovie = function getMovie(parentValue, _ref2, ctx) {
  var movieId = _ref2.movieId;
  return {};
};

exports.getMovie = getMovie;