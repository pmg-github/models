import { OrderByType } from "./db";
export declare enum ArticleOrderByType {
    RECENT_FIRST = "recentFirst",
    ARTICLE_NUMBER = "articleNumber",
    MOST_RELEVANT = "mostRelevant",
    MOST_POPULAR = "mostPopular"
}
export declare const articleOrderByData: {
    [key in ArticleOrderByType]: OrderByType;
};
export declare const ArticleTypes: {
    readonly NEWS: readonly [2];
    readonly ARTICLES: readonly [1, 3, 4, 11, 12, 13, 14, 15, 16, 18];
    readonly MARKETING: readonly [5];
    readonly PRODUCTS: readonly [7, 8, 9, 10, 17];
    readonly HOW_TO_CHOOSE: readonly [20];
};
export type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes][number];
export declare function combineArticleTypes(...types: readonly (readonly number[])[]): readonly ArticleType[];
export declare enum ArticlePremiumType {
    ALL = 0,
    ONLY_PREMIUM = 1,
    NO_PREMIUM = 2
}
