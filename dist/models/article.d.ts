import { OrderByType } from "./db";
export declare enum ArticleOrderByType {
    RECENT_FIRST = "recentFirst",
    ARTICLE_NUMBER = "articleNumber"
}
export declare const articleOrderByData: {
    [key in ArticleOrderByType]: OrderByType;
};
