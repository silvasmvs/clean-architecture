import TerminalUtil from "@/app/util/terminal";
import Carro from "@/core/fundamentals/Car";
import Ferrari from "@/core/fundamentals/Ferrari";
import Fusca from "@/core/fundamentals/Fusca";

export default async function polymorphism() {
    TerminalUtil.title('Polymorphism');

    const [carType] = await TerminalUtil.selection('Select car type', ['Fusca', 'Ferrari']);

    const car: Carro = carType === 0 ? new Fusca() : new Ferrari();

    while(true) {
        TerminalUtil.clear();
        TerminalUtil.showKeyValue('Max Speed:', `${car.maxSpeed} km/h`);
        TerminalUtil.showKeyValue('Current Speed:', `${car.currentSpeed} km/h`);
        
        const [option] = await TerminalUtil.selection(
            'Select an option',
            ['Accelerate', 'Brake']
        );

        option === 0 ? car.speedUp() : car.break();

        const shouldContinue = await TerminalUtil.confirmation('Do you like to continue?');
        if(!shouldContinue) return;
    }
}