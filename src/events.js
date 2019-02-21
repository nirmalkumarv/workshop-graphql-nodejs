import {PubSub} from 'graphql-subscriptions';

export const ON_NEWMOVIE = "NEWMOVIE"
export const ON_MOVIERATE = "NEWRATE"
export const pubsub = new PubSub();

