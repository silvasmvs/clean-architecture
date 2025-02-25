import TerminalUtil from "@/app/util/terminal";
import Car from "@/core/fundamentals/Car";
import Ferrari from "@/core/fundamentals/Ferrari";
import Fusca from "@/core/fundamentals/Fusca";
import racing from "@/core/fundamentals/Racing";

export default async function dependencyInversion() {
    TerminalUtil.title('Dependency Inversion Principle'); 

    const [carType] = await TerminalUtil.selection('Select car type', ['Fusca', 'Ferrari']);

    let car: Car;
    switch(carType) {
        case 0:
            car = new Fusca();
            break;
        case 1:
            car = new Ferrari();
            break;
        default:
            throw new Error('Invalid car type selected');
    }

    racing(car);
    await TerminalUtil.waitEnter();
}