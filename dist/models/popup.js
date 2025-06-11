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
exports.CreatePopupDto = exports.PopupModel = void 0;
const selectoption_1 = require("./selectoption");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class PopupModel {
    id = undefined;
    typeId = undefined;
    typeReference = undefined;
    languageCode = undefined;
    targetAudienceId = undefined;
    targetAudienceReference = undefined;
    positionId = undefined;
    positionReference = undefined;
    displayFrequencyId = undefined;
    displayFrequencyReference = undefined;
    delaySeconds = undefined;
    fileId = undefined;
    title = undefined;
    subTitle = undefined;
    intro = undefined;
    text = undefined;
    buttonText = undefined;
    buttonLink = undefined;
    width = undefined;
    height = undefined;
    dateFrom = undefined;
    dateUntil = undefined;
    isActive = undefined;
    creationDate = undefined;
    lastModificationDate = undefined;
    fileUrl = undefined;
}
exports.PopupModel = PopupModel;
class PopupMlDto {
    fileId;
    title;
    subTitle;
    intro;
    text;
    buttonText;
    buttonLink;
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "subTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "intro", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "buttonText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PopupMlDto.prototype, "buttonLink", void 0);
class CreatePopupDto {
    id;
    portals;
    nl;
    fr;
    isActive;
    dateFrom;
    dateUntil;
    displayFrequency;
    delaySeconds;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CreatePopupDto = CreatePopupDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePopupDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePopupDto.prototype, "portals", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PopupMlDto),
    __metadata("design:type", PopupMlDto)
], CreatePopupDto.prototype, "nl", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PopupMlDto),
    __metadata("design:type", PopupMlDto)
], CreatePopupDto.prototype, "fr", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePopupDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePopupDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePopupDto.prototype, "dateUntil", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => selectoption_1.SelectOptionViewModelDto),
    __metadata("design:type", selectoption_1.SelectOptionViewModelDto)
], CreatePopupDto.prototype, "displayFrequency", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePopupDto.prototype, "delaySeconds", void 0);
