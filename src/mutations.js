import db from "./db";
import {getMovie} from "./queries";
import {ON_NEWMOVIE, pubsub} from "./events";

export const addMovie = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO movies(title,release_year,genre,budget,trailer,director_id) " +
        "VALUES ($1,$2,$3,$4,$5,$6) RETURNING id ",
        [request.title, request.year, request.genre, request.budget, request.trailer, request.directorId])
        .then(m => {
            let movie = getMovie({}, {movieId: m.rows[0].id}, {})
            pubsub.publish(`${ON_NEWMOVIE}.${request.directorId}`, movie);
            return movie
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const addDirector = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO directors(full_name,country) " +
        "VALUES ($1,$2) RETURNING id ",
        [request.fullName, request.country])
        .then(a => {
            let director = {
                ...request,
                id: a.rows[0].id,
            }
            return director
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const deleteDirector = (parentValue, {directorId}, ctx) => {
    return db.query("DELETE from directors WHERE id=$1",
        [directorId])
        .then(_ => {
            return listDirectors({}, {}, {})
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};