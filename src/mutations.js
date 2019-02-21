import db from "./db";
import {getMovie, listActors} from "./queries";
import {ON_NEWMOVIE, pubsub} from "./events";

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
    return db.query("INSERT INTO actors(full_name,birth_date) " +
        "VALUES ($1,$2) RETURNING id ",
        [request.fullName, request.birthday])
        .then(a => {
            let actor = {
                ...request,
                id: a.rows[0].id,
            }
            return
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