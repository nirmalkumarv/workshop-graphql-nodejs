import {
    listActorsForMovie,
    getDirectorForMovie,
    listDirectors,
    listActors,
    listMovies,
    getMovie,
    getRateForMovie,
    getMovieRate
} from './queries';
import {addMovie, addActor, deleteActor, rateMovie, addDirector, deleteDirector} from './mutations';
import {listenDirectorMovies, listenRates} from './subscriptions';
import {Url,Email} from "./scalars";


export default {
    Url: Url,
    Email: Email,
    Movie: {
        director: async ({id}) => {
            console.log(id)
            return await getDirectorForMovie(id)
        },
        actors: async ({id}, {total}) => {
            return await listActorsForMovie(id, total)
        },
        budget: ({budget}, {currency}) => currency === 'Euro' ? budget : budget * 1.14
        },
        rate: async ({id}) => {
            return await getRateForMovie(id)
        }
    },
    Query: {
        listDirectors,
        listActors,
        listMovies,
        getMovie,
        getMovieRate,
    },
    Mutation: {
        addMovie,
        addActor,
        deleteActor,
        addDirector,
        deleteDirector,
        rateMovie,
    },
    Subscription: {
        listenDirectorMovies,
        listenRates,
    }
}