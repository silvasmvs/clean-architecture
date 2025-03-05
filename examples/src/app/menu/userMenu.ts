import TerminalUtil from "@/app/util/terminal";
import createUser from "@/app/user/createUser";

export default async function userMenu() {
    TerminalUtil.title('User');

    const [index] = await TerminalUtil.menu(
            [
                '1. Create User',
                'Go back'
            ],
    );
    
    switch (index) {
        case 0:
            await createUser();
            break;
        default:
            return;
    }

    userMenu();
}