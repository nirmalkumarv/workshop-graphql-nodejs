import {listActorsForMovie, getDirectorForMovie, listDirectors, listActors, listMovies, getMovie} from './queries';
import {addMovie, addActor, deleteActor} from './mutations';
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
    },
    Subscription: {
        listenDirectorMovies,
    }
}