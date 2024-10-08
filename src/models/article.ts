import { OrderByType } from "./db";

// ORDER BY
export enum ArticleOrderByType {
  RECENT_FIRST = "recentFirst",
  ARTICLE_NUMBER = "articleNumber",
  MOST_RELEVANT = "mostRelevant",
  MOST_POPULAR = "mostPopular",
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
    [ArticleOrderByType.MOST_POPULAR]: {
      column: "article_views.Views",
      direction: "desc",
    },
  };

export const ArticleTypes = {
  NEWS: [2], // Gewone "nieuwsberichten"
  ARTICLES: [1, 3, 4, 15, 16, 18], // Gewone "artikels"
  MARKETING: [5], // Marketing
  PRODUCTS: [7, 8, 9, 10, 17], // Webshop
  HOW_TO_CHOOSE: [20], // Hoe kiezen? => TODO check if this is still correct once it's added to DB
  SURVEYS: [14], // Eloket artikels
  ADS: [11, 12, 13], // TRTs enzo...
} as const;

// TYPE
export type ArticleType =
  (typeof ArticleTypes)[keyof typeof ArticleTypes][number];

export function combineArticleTypes(
  ...types: readonly (readonly number[])[]
): readonly ArticleType[] {
  return Array.from(new Set(types.flat())) as ArticleType[];
}

// PREMIUM
export enum ArticlePremiumType {
  ALL = 0,
  ONLY_PREMIUM = 1,
  NO_PREMIUM = 2,
}
