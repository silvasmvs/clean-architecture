import User from "@/core/user/model/User";
import db from "./db";

export default class UserRepositoryPg {
    private static readonly items: User[] = [];

    async create(user: User) {
        await db.query('INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)', [user.id, user.name, user.email, user.password]);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        return user.length ? user[0] : null;
    }
}