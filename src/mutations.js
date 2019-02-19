import db from "./db";
import {getMovie, listActors} from "./queries";

export const addMovie = (parentValue, {request}, ctx) => {
    return db.query("INSERT INTO movies(title,release_year,genre,budget,thriller,director_id) " +
        "VALUES ($1,$2,$3,$4,$5,$6) RETURNING id ",
        [request.title, request.year, request.genre, request.budget, request.thriller, request.directorId])
        .then(m => {
            return getMovie({}, {movieId: m.rows[0].id}, {})
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
            return {
                ...request,
                id: a.rows[0].id,
            }
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