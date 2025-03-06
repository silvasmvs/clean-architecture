import UseCase from "@/core/shared/UseCase";
import User from "../model/User";
import UserRepository from "./UserRepository";
import Errors from "@/core/shared/Errors";
import EncryptProvider from "./EncryptProvider";

export type AuthUserInput = {
    email: string;
    password: string;
}

export type AuthUserOutput = {
    token: string;
    user: User
}

export default class AuthUser implements UseCase<AuthUserInput, AuthUserOutput> {

    constructor(
        private repository: UserRepository,
        private encryptProvider: EncryptProvider
    ) {
        
    }

    async execute(input: AuthUserInput): Promise<AuthUserOutput> {
        const user = await this.repository.findByEmail(input.email);
        if (!user) {
            throw new Error(Errors.USER_NOT_FOUND);
        }
        
        const compare = this.encryptProvider.compare(input.password, user.password!);

        if(!compare) {
            throw new Error(Errors.INVALID_PASSWORD);
        }

        return {
            user: {
                ...user,
                password: undefined
            },
            token: 'token'
        }
    }
}