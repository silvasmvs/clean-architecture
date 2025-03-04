import UseCase from "@/core/shared/UseCase";
import User from "../model/User";


export default class CreateUser implements UseCase<User, void> {
    async execute(user: User): Promise<void> {
        const password = user.password.split('').reverse().join('');
        console.log('password: ', password);
    }
}