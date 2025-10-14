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
  ADPOSTS = "AdPosts",
  VACANCIES = "vacancies",
  OPINIES = "opinions",
  // UNUSED => Events: use different API and exclude these from all articles (TODO: check if an overall excluded is needed if no param for type was passed?)
}

export const articleTypeData: { [key in ArticleType]: number[] } = {
  [ArticleType.NEWS]: [2, 15, 22],
  [ArticleType.ARTICLES]: [1, 3, 18],
  [ArticleType.MARKETING]: [4],
  [ArticleType.PRODUCTS]: [7, 8, 9, 10, 17], // probably will use a seperate API later on!!
  [ArticleType.HOW_TO_CHOOSE]: [20],
  [ArticleType.ADS]: [11, 12, 13],
  [ArticleType.ADPOSTS]: [20, 21],
  [ArticleType.SURVEYS]: [14],
  [ArticleType.VACANCIES]: [21],
  [ArticleType.OPINIES]: [22],
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
  useNewsletterTitles?: boolean;
  allowHiddenArticles?: boolean;
  useCache?: boolean;
};

export interface ArticleContact {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  functionNl?: string;
  functionFr?: string;
}

/* BACKOFFICE */

import { PmgUserInterface, PmgUserModel } from "./pmguser";
import { SelectOptionViewModel } from "./selectoption";
import { UserViewModel } from "./user";
export interface BoArticleListModel {
  id: number;
  jobNr: string;
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
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}
export interface bcListingListModel {
  id: number;
  reference: string;
  title: string;
  availableFrom: Date;
  availableUntil: Date;
  portalDomain: string;
  available: bcAvailableLanguage[];
  company: string;
  brand: string;
  type: string;
  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}
export interface BcArticleDetailModel {
  id: number;
  reference: string;
  jobCode?: string;
  languageCode: string;
  statusId: number;
  status: string;
  title: string | undefined;
  imageUrl: string | undefined;
  text: string | undefined;
  availableFrom?: Date;
  availableUntil?: Date;
  company?: SelectOptionViewModel;
  creator: number;
}
export interface BcListingDetailModel {
  id: number;
  reference: string;
  jobCode?: string;
  languageCode: string;
  statusId: number;
  status: string;
  title: string;
  imageUrl?: string;
  text: string;
  availableFrom?: Date;
  availableUntil?: Date;
  company?: SelectOptionViewModel;
  articleType: 20 | 21;
  interesse: string;
  link?: string;
  linkText?: string;
  contacts: ArticleContact[];
  portals: string[];
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

export interface BoArticleMetaDataModel {
  id: number;
  typeId: number;
  reference: string;
  jobCode: string;
  language: string;
  portalCode: string;
  statusId: number;
  title: string;
  newsletterTitle: string;
  printTitle: string;
  description: string;
  keywords: string;
  fileId: number | null;
  fileUrl: string | null;
  displayDate: string | Date;
  displayAuthor: string;
  availableFrom: string | Date | null;
  availableUntil: string | Date | null;
  creatorParentCode: string;
  updaterParentCode: string;
  ownerParentCode: string;
  translatorParentCode: string;
  newsletterMoreLabel: string;
  productId: number | null;
}

export interface BoArticleFileModel {
  fileId: number;
  fileUrl: string;
  extension: string;
  securityTypeId: number;
  altText: string | null;
}

export interface BoArticleProductModel {
  id: number;
  statusId: number;
  supplierId: number;
  isDelivery: boolean | number;
  deliveryTimeId: number | null;
  deliveryPriceId: number | null;
  price: number;
  oldPrice: number | null;
  aboPrice: number | null;
  vat: number;
  aboTypeId: number | null;
  aboVariationId: number | null;
  creditsPortalId: number | null;
  hasCredits: boolean | number;
  creditsAmount: number | null;
  creditTypeId: number | null;
  hasCredits2: boolean | number;
  creditsAmount2: number | null;
  creditTypeId2: number | null;
  creditsPrice: number | null;
  creditsPriceTypeId: number | null;
  maxInBasket: number | null;
  magazineCode: string | null;
}
