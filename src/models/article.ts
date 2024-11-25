import { OrderByType } from "./db";
import { ViewerTileBaseViewModel } from "./magazine";

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

export enum ArticleType {
  NEWS = "news",
  ARTICLES = "articles",
  MARKETING = "marketing",
  PRODUCTS = "products",
  HOW_TO_CHOOSE = "howToChoose",
  SURVEYS = "surveys",
  ADS = "ads",
  // UNUSED => Events: use different API and exclude these from all articles (TODO: check if an overall excluded is needed if no param for type was passed?)
}

export const articleTypeData: { [key in ArticleType]: number[] } = {
  [ArticleType.NEWS]: [2],
  [ArticleType.ARTICLES]: [1, 3, 15, 18],
  [ArticleType.MARKETING]: [4],
  [ArticleType.PRODUCTS]: [7, 8, 9, 10, 17], // probably will use a seperate API later on!!
  [ArticleType.HOW_TO_CHOOSE]: [20],
  [ArticleType.SURVEYS]: [14],
  [ArticleType.ADS]: [11, 12, 13],
};

// export const ArticleTypes = {
//   NEWS: [2], // Gewone "nieuwsberichten"
//   ARTICLES: [1, 3, 4, 15, 18], // Gewone "artikels"
//   MARKETING: [4], // Marketing
//   PRODUCTS: [7, 8, 9, 10, 17], // Webshop
//   HOW_TO_CHOOSE: [20], // Hoe kiezen? => TODO check if this is still correct once it's added to DB
//   SURVEYS: [14], // Eloket artikels
//   ADS: [11, 12, 13], // TRTs enzo...
//   // UNUSED: typeId = 5 (event) => uses different model/API/...
// } as const;

// // TYPE
// export type ArticleType =
//   (typeof ArticleTypes)[keyof typeof ArticleTypes][number];

// export function combineArticleTypes(
//   ...types: readonly (readonly number[])[]
// ): readonly ArticleType[] {
//   return Array.from(new Set(types.flat())) as ArticleType[];
// }

// PREMIUM
export enum ArticlePremiumType {
  ALL = 0,
  ONLY_PREMIUM = 1,
  NO_PREMIUM = 2,
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
};
