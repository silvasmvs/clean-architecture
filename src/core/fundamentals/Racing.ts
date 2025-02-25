import { terminal } from "terminal-kit";
import Car from "./Car";

export default function racing(car: Car) {
    Array.from({ length: 10 }).forEach(() => {
        car.speedUp();
        terminal.red(`\nVelocidade: ${car.currentSpeed}`);
    }); 
}