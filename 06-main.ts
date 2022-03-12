import  { SmartHouseCommand } from './01-smart-house-command'
import { LightPowerCommand } from './03-light-power-command';
import { LightIntensityCommand } from './04-light-intensity-command';
import { SmartHouseApp } from './05-smart-house-app';

// Receiver
const bedroomLight = new SmartHouseCommand('bedroom');
// console.log(bedroomLight.on());
// console.log(bedroomLight.off());
// console.log(bedroomLight.increaseIntensity());
// console.log(bedroomLight.decreaseIntensity());

// const livingroom = new SmartHouseCommand('livingroom');

// Command
const lightPowerCommandBedroom = new LightPowerCommand(bedroomLight);
const lightIntensityCommandBedroom = new LightIntensityCommand(bedroomLight);
// lightPowerCommand.execute();
// lightPowerCommand.undo();
// lightIntensityCommand.execute();
// lightIntensityCommand.undo();

// const lightPowerCommandLivingroom = new LightPowerCommand(livingroom);
// const lightIntensityCommandLivingroom = new LightIntensityCommand(livingroom);

// Invoker

// bedroom
const smartHouseApp1 = new SmartHouseApp();
smartHouseApp1.addCommand('btn-bedroom-power', lightPowerCommandBedroom);
smartHouseApp1.addCommand('btn-bedroom-intensity', lightIntensityCommandBedroom);

smartHouseApp1.executeCommand('btn-bedroom-power');
smartHouseApp1.undoCommand('btn-bedroom-power');

for (let index = 0; index < 15; index++) {
    smartHouseApp1.executeCommand('btn-bedroom-intensity');
}
for (let index = 0; index < 15; index++) {
    smartHouseApp1.undoCommand('btn-bedroom-intensity');
}

// livingroom
// const smartHouseApp2 = new SmartHouseApp();
// smartHouseApp2.addCommand('btn-livingroom-power', lightPowerCommandLivingroom);
// smartHouseApp2.addCommand('btn-livingroom-intensity', lightIntensityCommandLivingroom);

// smartHouseApp2.executeCommand('btn-livingroom-power');
// smartHouseApp2.undoCommand('btn-livingroom-power');

// for (let index = 0; index < 15; index++) {
//     smartHouseApp2.executeCommand('btn-livingroom-intensity');
// }
// for (let index = 0; index < 15; index++) {
//     smartHouseApp2.undoCommand('btn-livingroom-intensity');
// }