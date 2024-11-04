"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterQuicklinkModel = exports.NewsletterContentModel = exports.NewsletterModel = exports.NewsletterProjectModel = exports.NewsletterContentType = void 0;
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
