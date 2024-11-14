"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmgUserModel = void 0;
class PmgUserModel {
    id;
    code;
    firstName;
    lastName;
    constructor(id, code, firstName, lastName) {
        this.id = id;
        this.code = code;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.PmgUserModel = PmgUserModel;
