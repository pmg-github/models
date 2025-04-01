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
    ADS = "ads"
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
};
import { PmgUserModel } from "./pmguser";
import { SelectOptionViewModel } from "./selectoption";
export interface BoArticleListModel {
    id: number;
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
}
export interface BcArticleDetailModel {
    id: number;
    reference: string;
    jobCode?: string;
    languageCode: string;
    statusId: number;
    status: string;
    title: string | null | undefined;
    imageUrl: string | undefined;
    text: string | null | undefined;
    availableFrom?: Date;
    availableUntil?: Date;
    company?: SelectOptionViewModel;
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
