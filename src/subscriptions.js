import {ON_NEWMOVIE, pubsub} from "./events";


export const listenDirectorMovies = {
    subscribe: (
        (_, {directorId}) => {
            return pubsub.asyncIterator(`${ON_NEWMOVIE}.${directorId}`);
        }
    ),
    resolve: (payload, args, context, info) => {
        console.log(payload)
        console.log(args)
        console.log(context)
        console.log(info)
        return payload;
    }
}