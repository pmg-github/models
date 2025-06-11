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
const class_validator_1 = require("class-validator");
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
    // @IsOptional() @IsNumber() id?: number;
    // @IsArray()
    // @IsString({ each: true })
    // portals!: string[];
    // @ValidateNested()
    // // @Type(() => PopupMlDto)
    // nl!: PopupMlDto;
    // @ValidateNested()
    // // @Type(() => PopupMlDto)
    // fr!: PopupMlDto;
    // @IsBoolean() isActive!: boolean;
    // @IsOptional() @IsString() dateFrom?: string;
    // @IsOptional() @IsString() dateUntil?: string;
    // @ValidateNested()
    // // @Type(() => SelectOptionViewModelDto)
    // displayFrequency!: SelectOptionViewModelDto;
    // @IsNumber() delaySeconds!: number;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.CreatePopupDto = CreatePopupDto;
