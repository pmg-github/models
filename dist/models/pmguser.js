"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmgUserModel = void 0;
class PmgUserModel {
    id;
    code;
    firstName;
    lastName;
    constructor(pmgUserInterface) {
        this.id = pmgUserInterface.id;
        this.code = pmgUserInterface.code;
        this.firstName = pmgUserInterface.firstName;
        this.lastName = pmgUserInterface.lastName;
    }
}
exports.PmgUserModel = PmgUserModel;
