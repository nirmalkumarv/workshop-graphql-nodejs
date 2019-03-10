import db from './db';

export const listDirectors = (parentValue, args, ctx) => {
    return db.query('SELECT * FROM directors')
        .then(res => {
            return res.rows.map(d => {
                return {
                    id: d.id,
                    fullName: d.full_name,
                    country: d.country,
                }
            });
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const listActors = (parentValue, args, ctx) => {
    return db.query('SELECT * FROM actors')
        .then(res => {
            return res.rows.map(a => {
                return {
                    id: a.id,
                    fullName: a.full_name,
                    country: a.country,
                    gender: a.genre ? 'male' : 'female'
                }
            });
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const listMovies = (parentValue, args, ctx) => {
    return db.query('SELECT * FROM movies')
        .then(res => {
            return res.rows.map(m => {
                return {
                    id: m.id,
                    title: m.title,
                    year: m.release_year,
                    genre: m.genre,
                    budget: m.budget,
                    thriller: m.thriller,
                }
            });
        }).catch(e => {
            console.error(e.stack)
            return e
        });

};

export const getMovie = (parentValue, {movieId}, ctx) => {
    return db.query('SELECT * FROM movies WHERE id=$1', [movieId])
        .then(m => {
            return {
                id: m.rows[0].id,
                title: m.rows[0].title,
                year: m.rows[0].release_year,
                genre: m.rows[0].genre,
                budget: m.rows[0].budget,
                thriller: m.rows[0].thriller,
            }
        }).catch(e => {
            console.error(e.stack)
            return e
        });

};

export const listActorsForMovie = (movieId, total) => {
    return db.query('SELECT a.* FROM actors  a, movies_actors ma WHERE ma.movie_id=$1 AND ma.actor_id=a.id LIMIT $2', [movieId, total])
        .then(actors => {
            return actors.rows.map(a => {
                return {
                    id: a.id,
                    fullName: a.full_name,
                    country: a.country,
                    gender: a.male ? 'male' : 'female',
                }
            })

        }).catch(e => {
            console.error(e.stack)
            return e
        });
};

export const getDirectorForMovie = (movieId) => {
    return db.query('SELECT d.* FROM directors AS d, movies as M WHERE m.id =$1 AND m.director_id=d.id', [movieId])
        .then(res => {
            return {
                id: res.rows[0].id,
                fullName: res.rows[0].full_name,
                country: res.rows[0].country,
            }
        }).catch(e => {
            console.error(e.stack)
            return e
        });
};