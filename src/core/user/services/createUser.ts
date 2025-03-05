import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
import UserInMemoryRepository from "./userInMemoryRepository";
import Errors from "@/core/shared/Errors";
import Id from "@/core/shared/Id";
import EncryptProvider from "./EncryptProvider";
import EncryptPassword from "./encryptPassword";


export default class CreateUser implements UseCase<User, void> {

    constructor(
        private encryptProvider: EncryptProvider
    ){}

    async execute(user: User): Promise<void> {
        const EncryptClass = new EncryptPassword;
        const password = this.encryptProvider.encrypt(user.password);

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