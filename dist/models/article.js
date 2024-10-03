"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlePremiumType = exports.ArticleTypes = exports.articleOrderByData = exports.ArticleOrderByType = void 0;
exports.combineArticleTypes = combineArticleTypes;
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
exports.ArticleTypes = {
    NEWS: [2],
    ARTICLES: [1, 3, 4, 5, 11, 12, 13, 14, 15, 16, 18], // TODO check
    HOW_TO_CHOOSE: [20], // TODO check if this is still correct once it's added to DB
};
function combineArticleTypes(...types) {
    return Array.from(new Set(types.flat()));
}
// PREMIUM
var ArticlePremiumType;
(function (ArticlePremiumType) {
    ArticlePremiumType[ArticlePremiumType["ALL"] = 0] = "ALL";
    ArticlePremiumType[ArticlePremiumType["ONLY_PREMIUM"] = 1] = "ONLY_PREMIUM";
    ArticlePremiumType[ArticlePremiumType["NO_PREMIUM"] = 2] = "NO_PREMIUM";
})(ArticlePremiumType || (exports.ArticlePremiumType = ArticlePremiumType = {}));
