import { terminal } from "terminal-kit";
import Fusca from "./Fusca";

export default function racing() {
    const carro = new Fusca();

    Array.from({ length: 10 }).forEach(() => {
        carro.speedUp();
        terminal.red(`\nVelocidade: ${carro.currentSpeed}`);
    }); 
}