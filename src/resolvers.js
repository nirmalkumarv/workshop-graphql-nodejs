import {
    listActorsForMovie,
    getDirectorForMovie,
    listDirectors,
    listActors,
    listMovies,
    getMovie,
    getRateForMovie,
    listPeople,
    listItems,
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
        rate: async ({id}) => {
            return await getRateForMovie(id)
        },
        budget: ({ budget }, { currency }) => currency === 'Euro' ? budget : budget * 1.14
    },
    Person: {
        __resolveType(person, context, info){
            if(person.gender){
                return 'Actor';
            }
            return 'Director'
        },
    },
    Item: {
        __resolveType(item, context, info){
            if (item.title){
                return 'Movie'
            }
            return 'Actor'
        },
    },
    Query: {
        listDirectors,
        listActors,
        listMovies,
        listPeople,
        listItems,
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