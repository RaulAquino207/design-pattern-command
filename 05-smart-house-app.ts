import { Command } from "./02-command";

export class SmartHouseApp {
    private commands : { [k:string] : Command } = {};

    addCommand(key : string, command : Command) : void {
        this.commands[key] = command
    }

    executeCommand(key : string) : void {
        this.commands[key].execute();
    }

    undoCommand(key : string) : void {
        this.commands[key].undo();
    }
}