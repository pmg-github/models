"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProefAboCreateModel = void 0;
const class_validator_1 = require("class-validator");
class ProefAboCreateModel {
    firstName;
    lastName;
    password;
    email;
    countryCode;
    type;
    vatNumber;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.ProefAboCreateModel = ProefAboCreateModel;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "countryCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((obj, val) => obj.type == "b2b"),
    (0, class_validator_1.Matches)("^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[s-.]?[0-9A-Z]{2,12}[s-.]?"),
    __metadata("design:type", String)
], ProefAboCreateModel.prototype, "vatNumber", void 0);
