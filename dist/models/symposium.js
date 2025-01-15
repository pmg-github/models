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
exports.SymposiumPostSaveRequest = exports.SymposiumPostMultiLanguageField = exports.SymposiumPostCreateRequest = void 0;
const class_validator_1 = require("class-validator");
class SymposiumPostCreateRequest {
    klnr;
    searchTypeId;
    categoryIds;
    multiLanguageFields;
    fileId;
    hasAddress;
    addressId;
    removeAfterDate;
    isLive;
    // Contactinfo
    firstName;
    lastName;
    email;
    phone;
    website;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SymposiumPostCreateRequest = SymposiumPostCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(8, 8),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "klnr", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SymposiumPostCreateRequest.prototype, "searchTypeId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], SymposiumPostCreateRequest.prototype, "categoryIds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }) // note: doesn't work since class isn't enfored; can use Type decorator but this requires an extra dependency in api project, otherwise this throws a build error
    ,
    __metadata("design:type", Array)
], SymposiumPostCreateRequest.prototype, "multiLanguageFields", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SymposiumPostCreateRequest.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SymposiumPostCreateRequest.prototype, "hasAddress", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((item) => item.hasAddress),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], SymposiumPostCreateRequest.prototype, "addressId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "removeAfterDate", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SymposiumPostCreateRequest.prototype, "isLive", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "website", void 0);
class SymposiumPostMultiLanguageField {
    language;
    title;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SymposiumPostMultiLanguageField = SymposiumPostMultiLanguageField;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], SymposiumPostMultiLanguageField.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], SymposiumPostMultiLanguageField.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], SymposiumPostMultiLanguageField.prototype, "description", void 0);
class SymposiumPostSaveRequest extends SymposiumPostCreateRequest {
    id;
    constructor(data) {
        super(data);
        Object.assign(this, data);
    }
}
exports.SymposiumPostSaveRequest = SymposiumPostSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SymposiumPostSaveRequest.prototype, "id", void 0);
