import pgPromise from "pg-promise";

const db = pgPromise()({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) ?? 5432,
    database: process.env.DB_NAME,
})
console.log('process.env.DB_HOST: ', process.env.DB_HOST);
export default db;