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