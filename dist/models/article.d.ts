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
    readonly ARTICLES: readonly [1, 3, 4, 5, 11, 12, 13, 14, 15, 16, 18];
    readonly HOW_TO_CHOOSE: readonly [20];
};
export type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes][number];
export declare function combineArticleTypes(...types: readonly (readonly number[])[]): readonly ArticleType[];
export declare enum ArticlePremiumType {
    ALL = 0,
    ONLY_PREMIUM = 1,
    NO_PREMIUM = 2
}
