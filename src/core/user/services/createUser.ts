import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
import UserInMemoryRepository from "./userInMemoryRepository";
import Errors from "@/core/shared/Errors";
import Id from "@/core/shared/Id";


export default class CreateUser implements UseCase<User, void> {
    async execute(user: User): Promise<void> {
        const password = user.password.split('').reverse().join('');

        const repository = new UserInMemoryRepository();

        const isUserExists = await repository.findByEmail(user.email); 
        if(isUserExists) throw new Error(Errors.USER_ALREADY_EXISTS);

        const newUser = {
            id: Id.generateHash(),
            name: user.name,
            email: user.email,
            password
        }

        repository.create(newUser);

        console.log('password: ', password);
    }
}