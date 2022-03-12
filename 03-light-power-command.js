"use strict";
exports.__esModule = true;
exports.LightPowerCommand = void 0;
var LightPowerCommand = /** @class */ (function () {
    function LightPowerCommand(light) {
        this.light = light;
    }
    LightPowerCommand.prototype.execute = function () {
        this.light.on();
        console.log("Now the light of " + this.light.name + " is " + this.light.getPowerStatus());
    };
    LightPowerCommand.prototype.undo = function () {
        this.light.off();
        console.log("Now the light of " + this.light.name + " is " + this.light.getPowerStatus());
    };
    return LightPowerCommand;
}());
exports.LightPowerCommand = LightPowerCommand;
