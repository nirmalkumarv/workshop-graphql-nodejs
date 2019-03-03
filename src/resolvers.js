import {listActorsForMovie, getDirectorForMovie, listDirectors, listActors, listMovies, getMovie} from './queries';
import {addMovie, addDirector, deleteDirector} from './mutations';
import {listenDirectorMovies} from './subscriptions';
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
        budget: ({budget}, {currency}) => currency === 'Euro' ? budget : budget * 1.14
    },
    Query: {
        listDirectors,
        listActors,
        listMovies,
        getMovie,
    },
    Mutation: {
        addMovie,
        addDirector,
        deleteDirector,
    },
    Subscription: {
        listenDirectorMovies,
    }
}