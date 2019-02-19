import bodyParser from 'body-parser';
import {config} from 'dotenv';
import express from 'express';

config();


const app = new express();
app.use(bodyParser.json());


export default app;
