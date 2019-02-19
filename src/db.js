import config from './config';
import {Pool,Client} from 'pg';



const pool = new Pool({
    host: config.get('database.host'),
    port: config.get('database.port'),
    database: config.get('database.name'),
    user: config.get('database.user'),
    password: config.get('database.password'),
});



const listDirectors = () => {
    pool.query('SELECT * FROM directors', (err, res) => {
        console.log(err, res)
        pool.end()
    })

}

const db = {
    query: (text, params) => pool.query(text, params)
}

export default db