import TerminalUtil from "@/app/util/terminal";
import fundamentalsMenu from "./fundamentalsMenu";

export async function mainMenu() {
    TerminalUtil.title('Main Menu');

    const [index] = await TerminalUtil.menu(
        ['1. Fundamentals', 'Exit'],
        );

    switch (index) {
        case 0: await fundamentalsMenu(); break;
        case 1:
            process.exit(0);
    }

    mainMenu();
}