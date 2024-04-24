"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterContentModel = exports.NewsletterModel = exports.NewsletterProjectModel = void 0;
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
    date = undefined;
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
