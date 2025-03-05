import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
// import UserInMemoryRepository from "./userInMemoryRepository";
import Errors from "@/core/shared/Errors";
import Id from "@/core/shared/Id";
import EncryptProvider from "./EncryptProvider";
import EncryptPassword from "./encryptPassword";
import UserRepository from "./UserRepository";


export default class CreateUser implements UseCase<User, void> {

    constructor(
        private repository: UserRepository,
        private encryptProvider: EncryptProvider
    ){}

    async execute(user: User): Promise<void> {
        const EncryptClass = new EncryptPassword;
        const password = this.encryptProvider.encrypt(user.password);

        // const repository = new UserInMemoryRepository();

        const isUserExists = await this.repository.findByEmail(user.email); 
        if(isUserExists) throw new Error(Errors.USER_ALREADY_EXISTS);

        const newUser = {
            id: Id.generateHash(),
            name: user.name,
            email: user.email,
            password
        }

        this.repository.create(newUser);

        console.log('password: ', password);
    }
}