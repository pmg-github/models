import { OrderByType } from "./db";

export enum ArticleOrderByType {
  RECENT_FIRST = "recentFirst",
  ARTICLE_NUMBER = "articleNumber",
}

export const articleOrderByData: { [key in ArticleOrderByType]: OrderByType } =
  {
    [ArticleOrderByType.RECENT_FIRST]: {
      column: "article.DisplayDate",
      direction: "desc",
    },
    [ArticleOrderByType.ARTICLE_NUMBER]: {
      column: "article.Number",
      direction: "asc",
    },
  };
