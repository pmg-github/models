import { OrderByType } from "./db";
export declare enum ArticleOrderByType {
    RECENT_FIRST = "recentFirst",
    ARTICLE_NUMBER = "articleNumber"
}
export declare const articleOrderByData: {
    [key in ArticleOrderByType]: OrderByType;
};
export declare const ArticleTypes: {
    readonly NEWS: readonly [2, 3];
    readonly ARTICLES: readonly [1, 4, 5, 11, 12, 13, 14, 15, 16, 18];
};
export type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes][number];
export declare function combineArticleTypes(...types: readonly (readonly number[])[]): readonly ArticleType[];
