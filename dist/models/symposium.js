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
    addressId;
    // Contactinfo
    firstName;
    lastName;
    email;
    phone;
    wesbite;
    isLive;
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
    __metadata("design:type", Array)
], SymposiumPostCreateRequest.prototype, "categoryIds", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], SymposiumPostCreateRequest.prototype, "multiLanguageFields", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], SymposiumPostCreateRequest.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SymposiumPostCreateRequest.prototype, "addressId", void 0);
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
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], SymposiumPostCreateRequest.prototype, "wesbite", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SymposiumPostCreateRequest.prototype, "isLive", void 0);
class SymposiumPostMultiLanguageField {
    language;
    title;
    description;
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
}
exports.SymposiumPostSaveRequest = SymposiumPostSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SymposiumPostSaveRequest.prototype, "id", void 0);
