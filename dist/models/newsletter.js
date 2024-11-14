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
exports.NewsletterArticleSaveRequest = exports.NewsletterArticleAddRequest = exports.NewsletterQuicklinkModel = exports.NewsletterContentModel = exports.NewsletterModel = exports.NewsletterProjectModel = exports.NewsletterContentType = void 0;
const class_validator_1 = require("class-validator");
class NewsletterContentType {
    id = undefined;
    reference = undefined;
    name = undefined;
}
exports.NewsletterContentType = NewsletterContentType;
class NewsletterProjectModel {
    code = undefined;
    name = undefined;
    date = undefined;
    numberOfRecipients = undefined;
    numberOfSuccess = undefined;
    numberOfFailed = undefined;
    numberOfBounced = undefined;
    numberOfOpened = undefined;
    numberOfClicks = undefined;
}
exports.NewsletterProjectModel = NewsletterProjectModel;
class NewsletterModel {
    id = undefined;
    projectCode = undefined;
    languageCode = undefined;
    subject = undefined;
    introTitle = undefined;
    introDescription = undefined;
    introName = undefined;
    introFunction = undefined;
    introFileID = undefined;
    pollCode = undefined;
    statusId = undefined;
    statusReference = undefined;
    statusName = undefined;
    scheduledOn = undefined;
    timestampStart = undefined;
    timestampEnd = undefined;
    numberOfRecipients = undefined;
    numberOfSuccess = undefined;
    numberOfFailed = undefined;
    numberOfBounced = undefined;
    numberOfOpened = undefined;
    numberOfClicks = undefined;
}
exports.NewsletterModel = NewsletterModel;
class NewsletterContentModel {
    id = undefined;
    typeId = undefined;
    projectCode = undefined;
    languageCode = undefined;
    articleReference = undefined;
    sortOrder = undefined;
    title = undefined;
    description = undefined;
    moreLabel = undefined;
    moreLink = undefined;
    infoLabel = undefined;
    infoLink = undefined;
}
exports.NewsletterContentModel = NewsletterContentModel;
class NewsletterQuicklinkModel {
    id = undefined;
    jobCode = undefined;
    languageCode = undefined;
    articleReference = undefined;
    title = undefined;
    url = undefined;
    sortOrder = undefined;
}
exports.NewsletterQuicklinkModel = NewsletterQuicklinkModel;
class NewsletterArticleAddRequest {
    jobCode;
    language;
    articleReference;
}
exports.NewsletterArticleAddRequest = NewsletterArticleAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterArticleAddRequest.prototype, "jobCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterArticleAddRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(15, 15),
    __metadata("design:type", String)
], NewsletterArticleAddRequest.prototype, "articleReference", void 0);
class NewsletterArticleSaveRequest {
    id;
    jobCode;
    language;
    articleReference;
    //articleTypeId?
    //sortOrder? (andere API)
    // colorId? (unused)
    typeId; // viewtypeId
    fileId;
    // quicklicks => not here!
    title;
    description;
    moreLabel;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.NewsletterArticleSaveRequest = NewsletterArticleSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterArticleSaveRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "jobCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(15, 15),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "articleReference", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterArticleSaveRequest.prototype, "typeId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterArticleSaveRequest.prototype, "fileId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterArticleSaveRequest.prototype, "moreLabel", void 0);
