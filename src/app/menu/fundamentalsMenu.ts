import TerminalUtil from "@/app/util/terminal";
import polymorphism from "../fundamentals/polymorphism";

export default async function fundamentalsMenu() {
    TerminalUtil.title('Fundamentals');

    const [index] = await TerminalUtil.menu(
            ['1. Polymorphism', 'Go back'],
    );
    
    switch (index) {
        case 0:
            await polymorphism();
            break;
        case 1: return;
    }

    fundamentalsMenu();
}