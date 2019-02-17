import {login} from './users/resolvers';


export default {
    Query: {
        hi: () => {
            return "hi";
        },
        person: (_, args, {user}) => {
            return {
                name: user,
                fee: 125.23,
            }
        }
    },
    Mutation: {
        login
    }
}