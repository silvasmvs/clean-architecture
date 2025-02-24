import TerminalUtil from "@/app/util/terminal";
import racing from "@/core/fundamentals/Racing";

export default async function dependencyInversion() {
    TerminalUtil.title('Dependency Inversion Principle'); 
    racing();
    await TerminalUtil.waitEnter();
}