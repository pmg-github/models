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
exports.SelectOptionViewModelDto = void 0;
const class_validator_1 = require("class-validator");
let IsStringOrNumberConstraint = class IsStringOrNumberConstraint {
    validate(value, _args) {
        return typeof value === "string" || typeof value === "number";
    }
    defaultMessage(_args) {
        return "value must be a string or a number";
    }
};
IsStringOrNumberConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "isStringOrNumber", async: false })
], IsStringOrNumberConstraint);
class SelectOptionViewModelDto {
    key;
    value;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SelectOptionViewModelDto = SelectOptionViewModelDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SelectOptionViewModelDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.Validate)(IsStringOrNumberConstraint),
    __metadata("design:type", Object)
], SelectOptionViewModelDto.prototype, "value", void 0);
