import { terminal } from 'terminal-kit';

export default class Terminal {
    static title(text: string) {
        terminal.clear();
        terminal.magenta(`${text}\n`);
        terminal.magenta(`-`.repeat(text.length) + `\n`);     
    }

    static clear() {
        terminal.clear();
    }

    static async menu(options: string[]) {
        const result = await terminal.singleColumnMenu(options).promise;

        return [result.selectedIndex, result.selectedText];
    }

    static async selection(text: string, options: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${text}`);
        const result = await terminal.singleLineMenu(options).promise;
        return [
            result.selectedIndex,
            result.selectedText
        ];
    }

    static async confirmation(text: string): Promise<boolean> {
        terminal.yellow(`\n${text}`);
        const result = await terminal.singleLineMenu(['Yes', 'No']).promise;
        return result.selectedIndex === 0;
    }
}