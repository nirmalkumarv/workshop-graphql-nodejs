import {ON_NEWMOVIE, pubsub} from "./events";


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