import {listActorsForMovie, getDirectorForMovie, listDirectors, listActors, listMovies, getMovie} from './queries';
import {addMovie, addDirector, deleteDirector} from './mutations';
import {listenDirectorMovies} from './subscriptions';


export default {
    Movie: {
        director: async ({id}) => {
            return await getDirectorForMovie(id)
        },
        actors: async ({id}, {total}) => {
            return await listActorsForMovie(id, total)
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
        addDirector,
        deleteDirector,
    },
    Subscription: {
        listenDirectorMovies,
    }
}