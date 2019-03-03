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


export const Email = new GraphQLScalarType({
    name: 'Email',
    description: 'A valid Email',
    serialize(value) {
        return value
    },
    parseValue(value) {
        return value
    },
    parseLiteral(ast) {
        if (ast.kind != Kind.STRING || !validateEmail(ast.value)) {
            throw("It's not a valid Email")
        }
        return ast.value
    }
});

export const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}