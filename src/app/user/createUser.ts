import TerminalUtil from "@/app/util/terminal";
import User from "@/core/user/model/User";
import CreateUser from "@/core/user/services/createUser";

export default async function createUser() {
    TerminalUtil.title('Create User');

    const id = await TerminalUtil.requiredField('Id: ', 'sadsdadas-asdasda-asdasds');
    const name = await TerminalUtil.requiredField('Name: ', 'Ana da silva');
    const email = await TerminalUtil.requiredField('Email: ', 'ana.silva@test.com.br');
    const password = await TerminalUtil.requiredField('Password: ', 'abcdef');

    const user: User = { id, name, email, password };

    await new CreateUser().execute(user);

    TerminalUtil.success('User created successfully!');

    await TerminalUtil.waitEnter();
}