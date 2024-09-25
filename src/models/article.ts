import { OrderByType } from "./db";

export enum ArticleOrderByType {
  RECENT_FIRST = "recentFirst",
  MOST_RELEVANT = "mostRelevant",
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
    [ArticleOrderByType.MOST_RELEVANT]: {
      column: "relevancy", // not really used
      direction: "desc",
    },
  };

export const ArticleTypes = {
  NEWS: [2],
  ARTICLES: [1, 3, 4, 5, 11, 12, 13, 14, 15, 16, 18], // TODO check
} as const;

export type ArticleType =
  (typeof ArticleTypes)[keyof typeof ArticleTypes][number];

export function combineArticleTypes(
  ...types: readonly (readonly number[])[]
): readonly ArticleType[] {
  return Array.from(new Set(types.flat())) as ArticleType[];
}
