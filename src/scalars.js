import {GraphQLScalarType, Kind} from 'graphql';


export const Url = new GraphQLScalarType({
    name: 'Url',
    description: 'A valid HTTP Url',
    serialize(value) {
        return value
    },
    parseValue(value) {
        return value
    },
    // ast value is always in string format
    parseLiteral(ast) {
        if (ast.kind != Kind.STRING || !validateUrl(ast.value)) {
            throw("It's not a valid Url")
        }
        return ast.value
    }
});

export const validateUrl = (str) => {
    let pattern = new RegExp('^(https?:\\/\\/)' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}