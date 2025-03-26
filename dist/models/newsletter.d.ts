export interface NewsletterBaseModel {
    id: number;
    reference: string;
    subject: string;
    language: string;
    scheduledOn: Date | string;
}
export declare class NewsletterContentType {
    id: number | undefined;
    reference: string | undefined;
    name: string | undefined;
}
export declare enum NewsletterProjectStatusEnum {
    CONCEPT = "Concept",
    APPROVED = "Goedgekeurd",
    SCHEDULED = "Ingepland",
    PARTLY_SENT = "Deels verzonden",
    SENT = "Verzonden",
    NOT_SENT = "Niet verzonden"
}
export interface NewsletterProjectModel {
    id: number;
    code: string;
    name: string | null;
    date: Date;
    totalNewsletters: number;
    totalNewslettersPlanned: number;
    totalNewslettersSent: number;
    status: NewsletterProjectStatusEnum;
    numberOfRecipients: number;
    numberOfRecipientsWarning: boolean;
    numberOfSuccess: number;
    numberOfFailed: number;
    numberOfBounced: number;
    numberOfOpened: number;
    numberOfOpenedUnique: number;
    numberOfClicks: number;
    numberOfClicksUnique: number;
    orderByValue: string;
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
    numberOfRecipientsWarning: boolean | undefined;
    numberOfSuccess: number | undefined;
    numberOfFailed: number | undefined;
    numberOfBounced: number | undefined;
    numberOfOpened: number | undefined;
    numberOfOpenedUnique: number | undefined;
    numberOfClicks: number | undefined;
    numberOfClicksUnique: number | undefined;
}
export declare enum NewsletterViewTypeEnum {
    IMAGE_LEFT = 1,
    IMAGE_TOP = 2
}
export declare class NewsletterContentModel {
    id: number | undefined;
    typeId: number | undefined;
    viewType: NewsletterViewTypeEnum | undefined;
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
export interface NewsletterOrderModel {
    reference: string;
    articleTitle: string | null;
    articleReference: string | null;
    customerName: string | null;
    customerReference: string | null;
}
export interface NewsletterQuicklinkModel {
    id: number;
    articleReference: string;
    text: string;
    url: string;
    sortOrder: number;
    html: string;
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
    introFileId: number | null;
    introImageUrl: string | null;
    pollCode: string | null;
    themaCode: string | null;
}
export interface NewsletterNewsModel {
    id: number;
    articleReference: string;
    title: string;
    date: string;
}
export interface NewsletterSubjectModel {
    id: number;
    index: number;
    subjectNL: string | null;
    subjectFR: string | null;
}
export interface NewsletterRecipientTypeModel {
    id: number;
    name: string;
}
export interface NewsletterArticleStatsViewModel {
    articleReference: string;
    title: string;
    type: "article" | "news";
    leads: LanguageCountModel;
    views: LanguageCountModel;
}
export interface LanguageCountModel {
    nl: number;
    fr: number;
    total: number;
}
export declare class NewsletterMetaDataCreateRequest {
    projectCode: string;
    language: string;
}
export declare class NewsletterIntroSaveRequest {
    id: number;
    introTitle: string;
    introDescription: string;
    introFileId: number | null;
    introName: string | undefined;
    introFunction: string | undefined;
    constructor(data: Partial<NewsletterIntroSaveRequest>);
}
export declare class NewsletterQuicklinkAddRequest {
    jobCode: string;
    language: string;
    articleReference: string | undefined;
    text: string;
    constructor(data: Partial<NewsletterQuicklinkAddRequest>);
}
export declare class NewsletterQuicklinkSaveRequest {
    id: number;
    text: string;
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
export declare class NewsletterNewsAddRequest {
    jobCode: string;
    language: string;
    articleReference: string;
}
export declare class NewsletterNewsSaveRequest {
    id: number;
    title: string;
    date: string;
}
export declare class NewsletterSubjectAddRequest {
    projectCode: string;
    subjectNL: string | null;
    subjectFR: string | null;
}
export declare class NewsletterSubjectSaveRequest {
    id: number;
    subjectNL: string | null;
    subjectFR: string | null;
}
export declare class NewsletterTestMailCreateRequest {
    projectCode: string;
    language: string;
    type: "user" | "group" | "list";
    html: string;
    emailList?: string | undefined;
}
export declare class NewsletterScheduleCreateRequest {
    bodyNL: string | undefined | null;
    bodyFR: string | undefined | null;
    dates: string[];
    recipientsTypeId: number | undefined;
}
