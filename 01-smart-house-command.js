"use strict";
exports.__esModule = true;
exports.SmartHouseCommand = void 0;
var SmartHouseCommand = /** @class */ (function () {
    function SmartHouseCommand(name) {
        this.name = name;
        this.isOn = false;
        this.intensity = 50;
    }
    SmartHouseCommand.prototype.getPowerStatus = function () {
        return this.isOn ? 'ON' : 'OFF';
    };
    SmartHouseCommand.prototype.getIntensityStatus = function () {
        return this.intensity;
    };
    SmartHouseCommand.prototype.on = function () {
        this.isOn = true;
        return this.isOn;
    };
    SmartHouseCommand.prototype.off = function () {
        this.isOn = false;
        return this.isOn;
    };
    SmartHouseCommand.prototype.increaseIntensity = function () {
        if (this.intensity >= 100) {
            return this.intensity;
        }
        this.intensity += 1;
        return this.intensity;
    };
    SmartHouseCommand.prototype.decreaseIntensity = function () {
        if (this.intensity <= 0) {
            return this.intensity;
        }
        this.intensity -= 1;
        return this.intensity;
    };
    return SmartHouseCommand;
}());
exports.SmartHouseCommand = SmartHouseCommand;
