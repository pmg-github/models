"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleOrderByData = exports.ArticleOrderByType = void 0;
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
