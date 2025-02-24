import TerminalUtil from "@/app/util/terminal";
import polymorphism from "@/app/fundamentals/polymorphism";
import dependencyInversion from "@/app/fundamentals/dependencyInversion";

export default async function fundamentalsMenu() {
    TerminalUtil.title('Fundamentals');

    const [index] = await TerminalUtil.menu(
            [
                '1. Polymorphism',
                '2. Dependency Inversion',
                'Go back'
            ],
    );
    
    switch (index) {
        case 0:
            await polymorphism();
            break;
        case 1:
            await dependencyInversion();
            break;
        case 2: return;
    }

    fundamentalsMenu();
}