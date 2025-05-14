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
exports.NewsletterScheduleSaveRequest = exports.NewsletterScheduleCreateRequest = exports.NewsletterTestMailCreateRequest = exports.NewsletterSubjectSaveRequest = exports.NewsletterSubjectAddRequest = exports.NewsletterNewsSaveRequest = exports.NewsletterNewsAddRequest = exports.NewsletterPollAddRequest = exports.NewsletterArticleSaveRequest = exports.NewsletterArticleAddRequest = exports.NewsletterQuicklinkSaveRequest = exports.NewsletterQuicklinkAddRequest = exports.NewsletterIntroSaveRequest = exports.NewsletterMetaDataCreateRequest = exports.NewsletterSubscriptionSaveRequest = exports.NewsletterContentModel = exports.NewsletterViewTypeEnum = exports.NewsletterModel = exports.NewsletterProjectStatusEnum = exports.NewsletterContentType = void 0;
const class_validator_1 = require("class-validator");
class NewsletterContentType {
    id = undefined;
    reference = undefined;
    name = undefined;
}
exports.NewsletterContentType = NewsletterContentType;
var NewsletterProjectStatusEnum;
(function (NewsletterProjectStatusEnum) {
    NewsletterProjectStatusEnum["CONCEPT"] = "Concept";
    NewsletterProjectStatusEnum["APPROVED"] = "Goedgekeurd";
    NewsletterProjectStatusEnum["SCHEDULED"] = "Ingepland";
    NewsletterProjectStatusEnum["PARTLY_SENT"] = "Deels verzonden";
    NewsletterProjectStatusEnum["SENT"] = "Verzonden";
    NewsletterProjectStatusEnum["NOT_SENT"] = "Niet verzonden";
})(NewsletterProjectStatusEnum || (exports.NewsletterProjectStatusEnum = NewsletterProjectStatusEnum = {}));
class NewsletterModel {
    id = undefined;
    projectCode = undefined;
    languageCode = undefined;
    subject = undefined;
    introTitle = undefined;
    introDescription = undefined;
    introName = undefined;
    introFunction = undefined;
    introFileId = undefined;
    pollCode = undefined;
    statusId = undefined;
    statusReference = undefined;
    statusName = undefined;
    scheduledOn = undefined;
    timestampStart = undefined;
    timestampEnd = undefined;
    numberOfRecipients = undefined;
    numberOfRecipientsWarning = undefined;
    numberOfSuccess = undefined;
    numberOfFailed = undefined;
    numberOfBounced = undefined;
    numberOfOpened = undefined;
    numberOfOpenedUnique = undefined;
    numberOfClicks = undefined;
    numberOfClicksUnique = undefined;
}
exports.NewsletterModel = NewsletterModel;
var NewsletterViewTypeEnum;
(function (NewsletterViewTypeEnum) {
    NewsletterViewTypeEnum[NewsletterViewTypeEnum["IMAGE_LEFT"] = 1] = "IMAGE_LEFT";
    NewsletterViewTypeEnum[NewsletterViewTypeEnum["IMAGE_TOP"] = 2] = "IMAGE_TOP";
})(NewsletterViewTypeEnum || (exports.NewsletterViewTypeEnum = NewsletterViewTypeEnum = {}));
class NewsletterContentModel {
    id = undefined;
    articleTypeId = undefined;
    viewType = undefined;
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
    fileId = undefined;
    imageUrl = undefined;
    url = undefined;
    authorFileId = undefined;
    authorFileUrl = undefined;
    authorName = undefined;
    authorFunction = undefined;
}
exports.NewsletterContentModel = NewsletterContentModel;
class NewsletterSubscriptionSaveRequest {
    portalCode;
    language;
    isActive;
}
exports.NewsletterSubscriptionSaveRequest = NewsletterSubscriptionSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(4, 4),
    __metadata("design:type", String)
], NewsletterSubscriptionSaveRequest.prototype, "portalCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterSubscriptionSaveRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NewsletterSubscriptionSaveRequest.prototype, "isActive", void 0);
class NewsletterMetaDataCreateRequest {
    projectCode;
    language;
}
exports.NewsletterMetaDataCreateRequest = NewsletterMetaDataCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterMetaDataCreateRequest.prototype, "projectCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterMetaDataCreateRequest.prototype, "language", void 0);
class NewsletterIntroSaveRequest {
    id;
    introTitle;
    introDescription;
    introFileId;
    // optional
    introName;
    introFunction;
    introViewTypeId;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.NewsletterIntroSaveRequest = NewsletterIntroSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterIntroSaveRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], NewsletterIntroSaveRequest.prototype, "introTitle", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterIntroSaveRequest.prototype, "introDescription", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.introName != undefined),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], NewsletterIntroSaveRequest.prototype, "introName", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.introFunction != undefined),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], NewsletterIntroSaveRequest.prototype, "introFunction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterIntroSaveRequest.prototype, "introViewTypeId", void 0);
class NewsletterQuicklinkAddRequest {
    jobCode;
    language;
    articleReference;
    text;
    // Unused
    // @IsNotEmpty()
    // @MaxLength(500)
    // html!: string;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.NewsletterQuicklinkAddRequest = NewsletterQuicklinkAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterQuicklinkAddRequest.prototype, "jobCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterQuicklinkAddRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.articleReference != undefined),
    (0, class_validator_1.Length)(15, 15),
    __metadata("design:type", Object)
], NewsletterQuicklinkAddRequest.prototype, "articleReference", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], NewsletterQuicklinkAddRequest.prototype, "text", void 0);
class NewsletterQuicklinkSaveRequest {
    id;
    text;
    // Unused
    // @IsNotEmpty()
    // @MaxLength(500)
    // html!: string;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.NewsletterQuicklinkSaveRequest = NewsletterQuicklinkSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterQuicklinkSaveRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], NewsletterQuicklinkSaveRequest.prototype, "text", void 0);
class NewsletterArticleAddRequest {
    jobCode;
    language;
    articleReference;
    constructor(data) {
        Object.assign(this, data);
    }
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
    authorFileId;
    authorName;
    authorFunction;
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
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], NewsletterArticleSaveRequest.prototype, "authorFileId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], NewsletterArticleSaveRequest.prototype, "authorName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], NewsletterArticleSaveRequest.prototype, "authorFunction", void 0);
class NewsletterPollAddRequest {
    pollCode;
    projectCode;
    language;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.NewsletterPollAddRequest = NewsletterPollAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterPollAddRequest.prototype, "pollCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterPollAddRequest.prototype, "projectCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterPollAddRequest.prototype, "language", void 0);
class NewsletterNewsAddRequest {
    jobCode;
    language;
    articleReference;
}
exports.NewsletterNewsAddRequest = NewsletterNewsAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterNewsAddRequest.prototype, "jobCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterNewsAddRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(15, 15),
    __metadata("design:type", String)
], NewsletterNewsAddRequest.prototype, "articleReference", void 0);
class NewsletterNewsSaveRequest {
    id;
    title;
    date;
}
exports.NewsletterNewsSaveRequest = NewsletterNewsSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterNewsSaveRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], NewsletterNewsSaveRequest.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], NewsletterNewsSaveRequest.prototype, "date", void 0);
class NewsletterSubjectAddRequest {
    projectCode;
    // Wil most likely be empty by default, but allow values at API level anyway
    subjectNL;
    subjectFR;
}
exports.NewsletterSubjectAddRequest = NewsletterSubjectAddRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterSubjectAddRequest.prototype, "projectCode", void 0);
class NewsletterSubjectSaveRequest {
    id;
    subjectNL;
    subjectFR;
}
exports.NewsletterSubjectSaveRequest = NewsletterSubjectSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterSubjectSaveRequest.prototype, "id", void 0);
class NewsletterTestMailCreateRequest {
    projectCode;
    language;
    type;
    html;
    emailList;
}
exports.NewsletterTestMailCreateRequest = NewsletterTestMailCreateRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(12, 12),
    __metadata("design:type", String)
], NewsletterTestMailCreateRequest.prototype, "projectCode", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(2, 2),
    __metadata("design:type", String)
], NewsletterTestMailCreateRequest.prototype, "language", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterTestMailCreateRequest.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewsletterTestMailCreateRequest.prototype, "html", void 0);
class NewsletterScheduleCreateRequest {
    bodyNL;
    bodyFR;
    dates;
    recipientsTypeId;
}
exports.NewsletterScheduleCreateRequest = NewsletterScheduleCreateRequest;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsDateString)({}, {
        each: true,
    }),
    __metadata("design:type", Array)
], NewsletterScheduleCreateRequest.prototype, "dates", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterScheduleCreateRequest.prototype, "recipientsTypeId", void 0);
class NewsletterScheduleSaveRequest {
    id;
    date;
}
exports.NewsletterScheduleSaveRequest = NewsletterScheduleSaveRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], NewsletterScheduleSaveRequest.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], NewsletterScheduleSaveRequest.prototype, "date", void 0);
