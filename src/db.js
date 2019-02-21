import config from './config';
import {Pool} from 'pg';

const pool = new Pool({
    host: config.get('database.host'),
    port: config.get('database.port'),
    database: config.get('database.name'),
    user: config.get('database.user'),
    password: config.get('database.password'),
});


const db = {
    query: (text, params) => pool.query(text, params)
}

export default db