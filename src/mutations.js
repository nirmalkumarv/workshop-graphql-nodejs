import db from "./db";
import {getMovie, listActors, listDirectors} from "./queries";
import {ON_NEWMOVIE, ON_MOVIERATE, pubsub} from "./events";

export const addMovie = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO movies(title,release_year,genre,budget,thriller,director_id) " +
        "VALUES ($1,$2,$3,$4,$5,$6) RETURNING id ",
        [request.title, request.year, request.genre, request.budget, request.thriller, request.directorId])
        .then(m => {
            let movie = getMovie({}, {movieId: m.rows[0].id}, {})
            pubsub.publish(`${ON_NEWMOVIE}.${request.directorId}`, movie);
            return movie
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const addActor = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO actors(full_name,country,male) " +
        "VALUES ($1,$2,$3) RETURNING id ",
        [request.fullName, request.country, request.genre === 'male'])
        .then(a => {
            let actor = {
                ...request,
                id: a.rows[0].id,
            }
            return actor
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const deleteActor = (parentValue, {actorId}, ctx) => {
    return db.query("DELETE from actors WHERE id=$1",
        [actorId])
        .then(_ => {
            return listActors({}, {}, {})
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

export const rateMovie = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO movies_rates(movie_id,email,score) " +
        "VALUES ($1,$2,$3)",
        [request.movieId, request.userEmail, request.score])
        .then(a => {
            let movie = getMovie({}, {movieId: request.movieId}, {})
            pubsub.publish(`${ON_MOVIERATE}.${request.movieId}`, movie);
            return movie
        }).catch(e => {
            console.error(e.stack)
            return e
        });
}