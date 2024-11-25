export declare class NewsletterContentType {
    id: number | undefined;
    reference: string | undefined;
    name: string | undefined;
}
export declare class NewsletterProjectModel {
    code: string | undefined;
    name: string | undefined;
    date: Date | undefined;
    numberOfRecipients: number | undefined;
    numberOfSuccess: number | undefined;
    numberOfFailed: number | undefined;
    numberOfBounced: number | undefined;
    numberOfOpened: number | undefined;
    numberOfClicks: number | undefined;
}
export declare class NewsletterModel {
    id: number | undefined;
    projectCode: string | undefined;
    languageCode: string | undefined;
    subject: string | undefined;
    introTitle: string | undefined;
    introDescription: string | undefined;
    introName: string | undefined;
    introFunction: string | undefined;
    introFileId: number | undefined;
    pollCode: string | undefined;
    statusId: number | undefined;
    statusReference: string | undefined;
    statusName: string | undefined;
    scheduledOn: Date | undefined;
    timestampStart: Date | undefined;
    timestampEnd: Date | undefined;
    numberOfRecipients: number | undefined;
    numberOfSuccess: number | undefined;
    numberOfFailed: number | undefined;
    numberOfBounced: number | undefined;
    numberOfOpened: number | undefined;
    numberOfClicks: number | undefined;
}
export declare class NewsletterContentModel {
    id: number | undefined;
    typeId: number | undefined;
    projectCode: string | undefined;
    languageCode: string | undefined;
    articleReference: string | undefined;
    sortOrder: number | undefined;
    title: string | undefined;
    description: string | undefined;
    moreLabel: string | undefined;
    moreLink: string | undefined;
    infoLabel: string | undefined;
    infoLink: string | undefined;
    fileId: number | undefined;
    imageUrl: string | undefined;
    url: string | undefined;
}
export interface NewsletterQuicklinkModel {
    id: number;
    articleReference: string | null;
    html: string;
    sortOrder: number;
}
export interface NewsletterTileModel {
    id: number;
    reference: string;
    date: Date;
    displayDate: string;
    title: string;
    redirectUrl: string;
}
export interface NewsletterMetaDataModel {
    id: number;
    projectCode: string;
    introTitle: string;
    introDescription: string;
    introName: string | null;
    introFunction: string | null;
    introImageUrl: string | null;
    pollCode: string | null;
}
export declare class NewsletterIntroSaveRequest {
    id: number;
    introTitle: string;
    introDescription: string;
    introName: string | undefined;
    introFunction: string | undefined;
    constructor(data: Partial<NewsletterIntroSaveRequest>);
}
export declare class NewsletterQuicklinkAddRequest {
    jobCode: string;
    language: string;
    articleReference: string | undefined;
    html: string;
    constructor(data: Partial<NewsletterQuicklinkAddRequest>);
}
export declare class NewsletterQuicklinkSaveRequest {
    id: number;
    html: string;
    constructor(data: Partial<NewsletterQuicklinkSaveRequest>);
}
export declare class NewsletterArticleAddRequest {
    jobCode: string;
    language: string;
    articleReference: string;
    constructor(data: Partial<NewsletterArticleAddRequest>);
}
export declare class NewsletterArticleSaveRequest {
    id: number;
    jobCode: string;
    language: string;
    articleReference: string;
    typeId: number;
    fileId: number;
    title: string;
    description: string;
    moreLabel: string;
    constructor(data: Partial<NewsletterArticleSaveRequest>);
}
export declare class NewsletterPollAddRequest {
    pollCode: string;
    projectCode: string;
    language: string;
    constructor(data: Partial<NewsletterPollAddRequest>);
}
