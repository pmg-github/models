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
exports.TimeRegistrationRecordCreateRequest = exports.TimeRegistrationStatusEnum = void 0;
const class_validator_1 = require("class-validator");
var TimeRegistrationStatusEnum;
(function (TimeRegistrationStatusEnum) {
    TimeRegistrationStatusEnum[TimeRegistrationStatusEnum["TO_APPROVE"] = 1] = "TO_APPROVE";
    TimeRegistrationStatusEnum[TimeRegistrationStatusEnum["APPROVED"] = 2] = "APPROVED";
    TimeRegistrationStatusEnum[TimeRegistrationStatusEnum["DENIED"] = 3] = "DENIED";
})(TimeRegistrationStatusEnum || (exports.TimeRegistrationStatusEnum = TimeRegistrationStatusEnum = {}));
class TimeRegistrationRecordCreateRequest {
    date;
    time;
    actionId;
    locationId;
    info;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.TimeRegistrationRecordCreateRequest = TimeRegistrationRecordCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TimeRegistrationRecordCreateRequest.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TimeRegistrationRecordCreateRequest.prototype, "time", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TimeRegistrationRecordCreateRequest.prototype, "actionId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TimeRegistrationRecordCreateRequest.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], TimeRegistrationRecordCreateRequest.prototype, "info", void 0);
