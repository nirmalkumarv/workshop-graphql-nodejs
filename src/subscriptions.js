import {ON_MOVIERATE, ON_NEWMOVIE, pubsub} from "./events";


export const listenDirectorMovies = {
    subscribe: (
        (_, {directorId}) => {
            return pubsub.asyncIterator(`${ON_NEWMOVIE}.${directorId}`);
        }
    ),
    resolve: (payload, args, context, info) => {
        return payload;
    }
}

export const listenRates = {
    subscribe: (
        (_, {movieId}) => {
            return pubsub.asyncIterator(`${ON_MOVIERATE}.${movieId}`);
        }
    ),
    resolve: (payload, args, context, info) => {
        return payload;
    }
}

