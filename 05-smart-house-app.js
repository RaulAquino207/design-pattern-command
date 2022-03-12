"use strict";
exports.__esModule = true;
exports.SmartHouseApp = void 0;
var SmartHouseApp = /** @class */ (function () {
    function SmartHouseApp() {
        this.commands = {};
    }
    SmartHouseApp.prototype.addCommand = function (key, command) {
        this.commands[key] = command;
    };
    SmartHouseApp.prototype.executeCommand = function (key) {
        this.commands[key].execute();
    };
    SmartHouseApp.prototype.undoCommand = function (key) {
        this.commands[key].undo();
    };
    return SmartHouseApp;
}());
exports.SmartHouseApp = SmartHouseApp;
