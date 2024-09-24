"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleTypes = exports.articleOrderByData = exports.ArticleOrderByType = void 0;
exports.combineArticleTypes = combineArticleTypes;
var ArticleOrderByType;
(function (ArticleOrderByType) {
    ArticleOrderByType["RECENT_FIRST"] = "recentFirst";
    ArticleOrderByType["ARTICLE_NUMBER"] = "articleNumber";
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
};
exports.ArticleTypes = {
    NEWS: [2],
    ARTICLES: [1, 3, 4, 5, 11, 12, 13, 14, 15, 16, 18], // TODO check
};
function combineArticleTypes(...types) {
    return Array.from(new Set(types.flat()));
}
