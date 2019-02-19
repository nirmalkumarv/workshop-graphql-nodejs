"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queries = require("./queries");

var _mutations = require("./mutations");

var _default = {
  Query: {
    listDirectors: _queries.listDirectors,
    listActors: _queries.listActors,
    listMovies: _queries.listMovies,
    getMovie: _queries.getMovie
  },
  Mutation: {
    addMovie: _mutations.addMovie,
    addActor: _mutations.addActor,
    deleteActor: _mutations.deleteActor
  }
};
exports.default = _default;