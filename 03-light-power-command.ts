import { Command } from "./02-command";
import { SmartHouseCommand } from "./01-smart-house-command";

export class LightPowerCommand implements Command {

    constructor(private readonly light: SmartHouseCommand) {}

    execute(): void {
        this.light.on();
        console.log(`Now the light of ${this.light.name} is ${this.light.getPowerStatus()}`);
    }
    undo(): void {
        this.light.off();
        console.log(`Now the light of ${this.light.name} is ${this.light.getPowerStatus()}`);
    }
    
}