import User from "../model/User";

export default class UserInMemoryRepository {
    private static readonly items: User[] = [];

    async create(user: User) {
        const items = UserInMemoryRepository.items;
        const isUserExists = await this.findByEmail(user.email);
        if(isUserExists) return;
        items.push(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        const items = UserInMemoryRepository.items;
        return items.find(item => item.email === email) ?? null;
    }
}