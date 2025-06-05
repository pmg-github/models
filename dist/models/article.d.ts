import { OrderByType } from "./db";
import { ViewerTileBaseViewModel } from "./magazine";
export declare enum ArticleOrderByType {
    RECENT_FIRST = "recentFirst",
    ARTICLE_NUMBER = "articleNumber",
    MOST_RELEVANT = "mostRelevant",
    MOST_POPULAR = "mostPopular"
}
export declare const articleOrderByData: {
    [key in ArticleOrderByType]: OrderByType;
};
export declare enum ArticleType {
    NEWS = "news",
    ARTICLES = "articles",
    MARKETING = "marketing",
    PRODUCTS = "products",
    HOW_TO_CHOOSE = "howToChoose",
    SURVEYS = "surveys",
    ADS = "ads",
    ADPOSTS = "AdPosts",
    VACANCIES = "vacancies",
    OPINIES = "opinions"
}
export declare const articleTypeData: {
    [key in ArticleType]: number[];
};
export declare enum ArticlePremiumType {
    ALL = 0,
    ONLY_PREMIUM = 1,
    NO_PREMIUM = 2
}
export type ArticleSearchOptions = {
    portalCode?: string;
    lang?: string;
    articleTypes?: ArticleType[];
    excludeArticles?: string[];
    interestCodes?: string[];
    limit?: number;
    customerReferences?: string[];
    ignoreAvailableDates?: boolean;
    term?: string;
    contextCodes?: string[];
    jobCodes?: string[];
    premiumType?: ArticlePremiumType;
    ordersNewsletterReference?: string;
    orderByType?: ArticleOrderByType;
    cursorArticle?: ViewerTileBaseViewModel;
    useNewsletterTitles?: boolean;
    allowHiddenArticles?: boolean;
    useCache?: boolean;
};
export interface ArticleContact {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    functionNl?: string;
    functionFr?: string;
}
import { PmgUserModel } from "./pmguser";
import { SelectOptionViewModel } from "./selectoption";
export interface BoArticleListModel {
    id: number;
    jobNr: string;
    reference: string;
    languageCode: string;
    title: string;
    description: string;
    customerReference: string;
    type: BoArticleType;
    status: BoArticleStatus;
    displayDate: Date | string;
    availableFrom: Date;
    availableUntil: Date;
    seoScore: number;
    author: string;
    updatedOn: Date;
    updatedBy: PmgUserModel;
    successor: PmgUserModel;
    task?: BoArticleJobTask;
    portalDomain: string;
    isPublished: boolean;
    orderByValue: string;
    fileId: number | undefined | null;
    imageUrl: string | undefined | null;
    numberOfLines: number | undefined | null;
}
export interface bcArticleListModel {
    id: number;
    reference: string;
    title: string;
    availableFrom: Date;
    availableUntil: Date;
    portalDomain: string;
    available: bcAvailableLanguage[];
    company: string;
    brand: string;
    user?: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    };
}
export interface bcListingListModel {
    id: number;
    reference: string;
    title: string;
    availableFrom: Date;
    availableUntil: Date;
    portalDomain: string;
    available: bcAvailableLanguage[];
    company: string;
    brand: string;
    type: string;
    user?: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
    };
}
export interface BcArticleDetailModel {
    id: number;
    reference: string;
    jobCode?: string;
    languageCode: string;
    statusId: number;
    status: string;
    title: string | undefined;
    imageUrl: string | undefined;
    text: string | undefined;
    availableFrom?: Date;
    availableUntil?: Date;
    company?: SelectOptionViewModel;
}
export interface BcListingDetailModel {
    id: number;
    reference: string;
    jobCode?: string;
    languageCode: string;
    statusId: number;
    status: string;
    title: string | undefined;
    imageUrl: string | undefined;
    text: string | undefined;
    availableFrom?: Date;
    availableUntil?: Date;
    company?: SelectOptionViewModel;
    articleType: 20 | 21;
    interesse: string;
    link?: string;
    linkText?: string;
    contacts: ArticleContact[];
}
export interface BcArticleDetailIntressesModel {
    articles: BcArticleDetailModel[];
    intresses: intresses[];
}
export interface BcArticleIntresseReachModel {
    audienceAmountNl: string;
    audienceAmountFr: string;
    AudienceName: string;
    PortalCode: string;
    id: string;
    name: string;
    domain: string;
}
interface intresses {
    interesse: string;
    interesseNl: string;
    interesseFr: string;
}
export interface bcAvailableLanguage {
    language: string;
    Status: string;
    StatusId: number;
}
export interface BoArticleType {
    id: number;
    name: string;
}
export interface BoArticleStatus {
    id: number;
    name: string;
}
export interface BoArticleJobTask {
    id: number;
    code: string;
    name: string;
    startDate: Date;
    parentCode: string;
}
export {};
