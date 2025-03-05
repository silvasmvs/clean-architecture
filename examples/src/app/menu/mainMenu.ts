import TerminalUtil from "@/app/util/terminal";
import fundamentalsMenu from "./fundamentalsMenu";
import userMenu from "./userMenu";

export async function mainMenu() {
    TerminalUtil.title('Main Menu');

    const [index] = await TerminalUtil.menu(
        [
            '1. Fundamentals',
            '2. User',
            'Exit'
        ],
        );

    switch (index) {
        case 0: await fundamentalsMenu(); break;
        case 1: await userMenu(); break;
        default:
            process.exit(0);
            
    }

    mainMenu();
}