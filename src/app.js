import bodyParser from 'body-parser';
import {config} from 'dotenv';
import express from 'express';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import {default as cfg} from './config';

config();

const authorization = cfg.get('authorization')

const app = new express();
const authMiddleware = jwt({
    secret: authorization.secret,
    credentialsRequired: false,
})

app.use(bodyParser.json());
app.use(authMiddleware)


export default app;
