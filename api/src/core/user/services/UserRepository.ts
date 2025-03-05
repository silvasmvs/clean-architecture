import User from "../model/User";

export default interface UserRepository {
    create(user: User) : Promise<void>;
    
    findByEmail(email: string): Promise<User | null>;
}