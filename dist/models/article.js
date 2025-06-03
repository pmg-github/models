"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlePremiumType = exports.articleTypeData = exports.ArticleType = exports.articleOrderByData = exports.ArticleOrderByType = void 0;
// ORDER BY
var ArticleOrderByType;
(function (ArticleOrderByType) {
    ArticleOrderByType["RECENT_FIRST"] = "recentFirst";
    ArticleOrderByType["ARTICLE_NUMBER"] = "articleNumber";
    ArticleOrderByType["MOST_RELEVANT"] = "mostRelevant";
    ArticleOrderByType["MOST_POPULAR"] = "mostPopular";
})(ArticleOrderByType || (exports.ArticleOrderByType = ArticleOrderByType = {}));
exports.articleOrderByData = {
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
var ArticleType;
(function (ArticleType) {
    ArticleType["NEWS"] = "news";
    ArticleType["ARTICLES"] = "articles";
    ArticleType["MARKETING"] = "marketing";
    ArticleType["PRODUCTS"] = "products";
    ArticleType["HOW_TO_CHOOSE"] = "howToChoose";
    ArticleType["SURVEYS"] = "surveys";
    ArticleType["ADS"] = "ads";
    ArticleType["ADPOSTS"] = "AdPosts";
    ArticleType["VACANCIES"] = "vacancies";
    ArticleType["OPINIES"] = "opinions";
    // UNUSED => Events: use different API and exclude these from all articles (TODO: check if an overall excluded is needed if no param for type was passed?)
})(ArticleType || (exports.ArticleType = ArticleType = {}));
exports.articleTypeData = {
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
var ArticlePremiumType;
(function (ArticlePremiumType) {
    ArticlePremiumType[ArticlePremiumType["ALL"] = 0] = "ALL";
    ArticlePremiumType[ArticlePremiumType["ONLY_PREMIUM"] = 1] = "ONLY_PREMIUM";
    ArticlePremiumType[ArticlePremiumType["NO_PREMIUM"] = 2] = "NO_PREMIUM";
})(ArticlePremiumType || (exports.ArticlePremiumType = ArticlePremiumType = {}));
