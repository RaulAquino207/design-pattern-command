"use strict";
exports.__esModule = true;
exports.LightIntensityCommand = void 0;
var LightIntensityCommand = /** @class */ (function () {
    function LightIntensityCommand(light) {
        this.light = light;
    }
    LightIntensityCommand.prototype.execute = function () {
        this.light.increaseIntensity();
        console.log("Now the " + this.light.name + " light intensity is " + this.light.getIntensityStatus());
    };
    LightIntensityCommand.prototype.undo = function () {
        this.light.decreaseIntensity();
        console.log("Now the " + this.light.name + " light intensity is " + this.light.getIntensityStatus());
    };
    return LightIntensityCommand;
}());
exports.LightIntensityCommand = LightIntensityCommand;
