import SpacePasswordCrypt from "@/adapter/auth/SpacePasswordCrypt";
import UserRepositoryPg from "@/adapter/db/UserRepositoryPG";
import TerminalUtil from "@/app/util/terminal";
import User from "@/core/user/model/User";
import CreateUser from "@/core/user/services/createUser";

export default async function createUser() {
    const {
        title,
        requiredField,
        success,
        waitEnter,
        error
    } = TerminalUtil;
    title('Create User');

    const name = await requiredField('Name: ');
    const email = await requiredField('Email: ');
    const password = await requiredField('Password: ');

    const user: User = { name, email, password };

    const repository = new UserRepositoryPg();

    const encriptProvider = new SpacePasswordCrypt();

    const useCase = new CreateUser(repository, encriptProvider);

    useCase.execute(user);

    success('User created successfully!');

    await waitEnter();

    try {
        await useCase.execute(user);
    }
    catch (e: any) {
        error('Error creating user: ' + e.message);
    } finally {
        await waitEnter();
    }
}