"use strict";
exports.__esModule = true;
var _01_smart_house_command_1 = require("./01-smart-house-command");
var _03_light_power_command_1 = require("./03-light-power-command");
var _04_light_intensity_command_1 = require("./04-light-intensity-command");
var _05_smart_house_app_1 = require("./05-smart-house-app");
// Receiver
var bedroomLight = new _01_smart_house_command_1.SmartHouseCommand('bedroom');
// console.log(bedroomLight.on());
// console.log(bedroomLight.off());
// console.log(bedroomLight.increaseIntensity());
// console.log(bedroomLight.decreaseIntensity());
// const livingroom = new SmartHouseCommand('livingroom');
// Command
var lightPowerCommandBedroom = new _03_light_power_command_1.LightPowerCommand(bedroomLight);
var lightIntensityCommandBedroom = new _04_light_intensity_command_1.LightIntensityCommand(bedroomLight);
// lightPowerCommand.execute();
// lightPowerCommand.undo();
// lightIntensityCommand.execute();
// lightIntensityCommand.undo();
// const lightPowerCommandLivingroom = new LightPowerCommand(livingroom);
// const lightIntensityCommandLivingroom = new LightIntensityCommand(livingroom);
// Invoker
// bedroom
var smartHouseApp1 = new _05_smart_house_app_1.SmartHouseApp();
smartHouseApp1.addCommand('btn-bedroom-power', lightPowerCommandBedroom);
smartHouseApp1.addCommand('btn-bedroom-intensity', lightIntensityCommandBedroom);
smartHouseApp1.executeCommand('btn-bedroom-power');
smartHouseApp1.undoCommand('btn-bedroom-power');
for (var index = 0; index < 15; index++) {
    smartHouseApp1.executeCommand('btn-bedroom-intensity');
}
for (var index = 0; index < 15; index++) {
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
