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
    orderByType?: ArticleOrderByType;
    cursorArticle?: ViewerTileBaseViewModel;
};
