import pgPromise from "pg-promise";

const env = require('dotenv').config().parsed;

const db = pgPromise()({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: Number(env.DB_PORT) ?? 5432,
    database: env.DB_NAME,
});

export default db;