import { Command } from "./02-command";
import { SmartHouseCommand } from "./01-smart-house-command";

export class LightIntensityCommand implements Command {

    constructor(private readonly light: SmartHouseCommand) {}

    execute(): void {
        this.light.increaseIntensity();
        console.log(`Now the ${this.light.name} light intensity is ${this.light.getIntensityStatus()}`);
    }
    undo(): void {
        this.light.decreaseIntensity();
        console.log(`Now the ${this.light.name} light intensity is ${this.light.getIntensityStatus()}`);
    }
    
}