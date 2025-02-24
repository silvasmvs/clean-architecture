import TerminalUtil from "@/app/util/terminal";

export default async function polymorphism() {
    TerminalUtil.title('Polymorphism');

    const carType = await TerminalUtil.selection('Select car type', ['Fusca', 'Ferrari']);

    while(true) {
        TerminalUtil.clear();
        const shouldContinue = await TerminalUtil.confirmation('Do you like to continue?');
        if(!shouldContinue) return;
    }
}