import SpacePasswordCrypt from "@/adapter/auth/SpacePasswordCrypt";
import TerminalUtil from "@/app/util/terminal";
import User from "@/core/user/model/User";
import CreateUser from "@/core/user/services/createUser";
import EncriptPassword from "@/core/user/services/encryptPassword";

export default async function createUser() {
    TerminalUtil.title('Create User');

    const name = await TerminalUtil.requiredField('Name: ', 'Ana da silva');
    const email = await TerminalUtil.requiredField('Email: ', 'ana.silva@test.com.br');
    const password = await TerminalUtil.requiredField('Password: ', 'abcdef');

    const user: User = { name, email, password };

    const encriptProvider = new SpacePasswordCrypt();
    // new SpacePasswordCrypt();
    // //new EncriptPassword();
    const useCase = new CreateUser(encriptProvider);

    useCase.execute(user);

    TerminalUtil.success('User created successfully!');

    await TerminalUtil.waitEnter();

    try {
        await useCase.execute(user);
    }
    catch (e: any) {
        TerminalUtil.error('Error creating user: ' + e.message);
    } finally {
        await TerminalUtil.waitEnter();
    }
}