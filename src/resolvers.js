import {
    listActorsForMovie,
    getDirectorForMovie,
    listDirectors,
    listActors,
    listMovies,
    getMovie,
    getRateForMovie
} from './queries';
import {addMovie, addActor, deleteActor, rateMovie} from './mutations';
import {listenDirectorMovies, listenRates} from './subscriptions';
import {Url} from "./scalars";


export default {
    Url: Url,
    Movie: {
        director: async ({id}) => {
            console.log(id)
            return await getDirectorForMovie(id)
        },
        actors: async ({id}, {total}) => {
            return await listActorsForMovie(id, total)
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
    },
    Mutation: {
        addMovie,
        addActor,
        deleteActor,
        rateMovie,
    },
    Subscription: {
        listenDirectorMovies,
        listenRates,
    }
}