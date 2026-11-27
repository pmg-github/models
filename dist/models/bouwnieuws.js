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
exports.BouwnieuwsSelectionSaveRequest = exports.BouwnieuwsSelectionItem = exports.bouwnieuwsStatusLabels = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
exports.bouwnieuwsStatusLabels = {
    0: "Concept",
    1: "Klaar voor PVP",
    2: "Video opgeladen",
    3: "Gepubliceerd",
};
class BouwnieuwsSelectionItem {
    jobCode;
    languageCode;
    isIntro;
    addedAt;
}
exports.BouwnieuwsSelectionItem = BouwnieuwsSelectionItem;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.Matches)(/^\S(?:[\s\S]*\S)?$/),
    __metadata("design:type", String)
], BouwnieuwsSelectionItem.prototype, "jobCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(nl|fr)$/i),
    __metadata("design:type", String)
], BouwnieuwsSelectionItem.prototype, "languageCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], BouwnieuwsSelectionItem.prototype, "isIntro", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((_object, value) => value !== undefined && value !== null),
    (0, class_validator_1.IsDateString)({ strict: true }),
    __metadata("design:type", Object)
], BouwnieuwsSelectionItem.prototype, "addedAt", void 0);
let BouwnieuwsIntroLimit = class BouwnieuwsIntroLimit {
    validate(items) {
        return (Array.isArray(items) &&
            items.filter((item) => item && typeof item === "object" && item.isIntro === true).length <= 5);
    }
    defaultMessage() {
        return "Selecteer maximaal 5 introvideo's.";
    }
};
BouwnieuwsIntroLimit = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: "bouwnieuwsIntroLimit", async: false })
], BouwnieuwsIntroLimit);
class BouwnieuwsSelectionSaveRequest {
    items;
}
exports.BouwnieuwsSelectionSaveRequest = BouwnieuwsSelectionSaveRequest;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(500),
    (0, class_validator_1.ArrayUnique)((item) => typeof item?.jobCode === "string" && typeof item?.languageCode === "string"
        ? JSON.stringify([
            item.jobCode.toLowerCase(),
            item.languageCode.toLowerCase(),
        ])
        : item),
    (0, class_validator_1.IsObject)({ each: true }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value)
        ? value.map((item) => item && typeof item === "object" && !Array.isArray(item)
            ? Object.assign(new BouwnieuwsSelectionItem(), item)
            : item)
        : value),
    (0, class_validator_1.Validate)(BouwnieuwsIntroLimit),
    __metadata("design:type", Array)
], BouwnieuwsSelectionSaveRequest.prototype, "items", void 0);
