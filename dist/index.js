"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationSaveRequest = exports.ProefAboCreateModel = exports.NewsletterContentModel = exports.NewsletterModel = exports.NewsletterProjectModel = exports.AddressContactCreateRequest = exports.AddressViewModel = exports.AddressHelper = exports.CompanyCornerPictureModel = exports.CompanyCornerDBModel = exports.CompanyViewModel = exports.ValidateTokenRequest = exports.EmailCodeRequest = exports.ContactUpdateRequest = exports.ContactCreateModel = exports.UserAboViewModel = exports.UserViewModel = exports.NewsletterMetaDataViewModel = exports.NewsletterTileViewModel = exports.RelatedMagazineViewModel = exports.MagazineCustomerTileViewModel = exports.MagazineImageArticleCombinationViewModel = exports.MagazineMetaDataViewModel = exports.MagazineAdViewModel = exports.MagazineArticleViewModel = exports.MagazineTileViewModel = exports.ViewerTileBaseViewModel = exports.SearchResultsSaveRequest = exports.articleOrderByData = exports.ArticleOrderByType = void 0;
// Import and re-export your modules
const article_1 = require("./models/article");
Object.defineProperty(exports, "ArticleOrderByType", { enumerable: true, get: function () { return article_1.ArticleOrderByType; } });
Object.defineProperty(exports, "articleOrderByData", { enumerable: true, get: function () { return article_1.articleOrderByData; } });
const search_1 = require("./models/search");
Object.defineProperty(exports, "SearchResultsSaveRequest", { enumerable: true, get: function () { return search_1.SearchResultsSaveRequest; } });
const magazine_1 = require("./models/magazine");
Object.defineProperty(exports, "MagazineTileViewModel", { enumerable: true, get: function () { return magazine_1.MagazineTileViewModel; } });
Object.defineProperty(exports, "MagazineArticleViewModel", { enumerable: true, get: function () { return magazine_1.MagazineArticleViewModel; } });
Object.defineProperty(exports, "MagazineAdViewModel", { enumerable: true, get: function () { return magazine_1.MagazineAdViewModel; } });
Object.defineProperty(exports, "MagazineMetaDataViewModel", { enumerable: true, get: function () { return magazine_1.MagazineMetaDataViewModel; } });
Object.defineProperty(exports, "MagazineImageArticleCombinationViewModel", { enumerable: true, get: function () { return magazine_1.MagazineImageArticleCombinationViewModel; } });
Object.defineProperty(exports, "MagazineCustomerTileViewModel", { enumerable: true, get: function () { return magazine_1.MagazineCustomerTileViewModel; } });
Object.defineProperty(exports, "RelatedMagazineViewModel", { enumerable: true, get: function () { return magazine_1.RelatedMagazineViewModel; } });
Object.defineProperty(exports, "NewsletterTileViewModel", { enumerable: true, get: function () { return magazine_1.NewsletterTileViewModel; } });
Object.defineProperty(exports, "NewsletterMetaDataViewModel", { enumerable: true, get: function () { return magazine_1.NewsletterMetaDataViewModel; } });
Object.defineProperty(exports, "ViewerTileBaseViewModel", { enumerable: true, get: function () { return magazine_1.ViewerTileBaseViewModel; } });
const user_1 = require("./models/user");
Object.defineProperty(exports, "UserViewModel", { enumerable: true, get: function () { return user_1.UserViewModel; } });
Object.defineProperty(exports, "UserAboViewModel", { enumerable: true, get: function () { return user_1.UserAboViewModel; } });
Object.defineProperty(exports, "ContactCreateModel", { enumerable: true, get: function () { return user_1.ContactCreateModel; } });
Object.defineProperty(exports, "ContactUpdateRequest", { enumerable: true, get: function () { return user_1.ContactUpdateRequest; } });
Object.defineProperty(exports, "EmailCodeRequest", { enumerable: true, get: function () { return user_1.EmailCodeRequest; } });
Object.defineProperty(exports, "ValidateTokenRequest", { enumerable: true, get: function () { return user_1.ValidateTokenRequest; } });
const address_1 = require("./models/address");
Object.defineProperty(exports, "AddressHelper", { enumerable: true, get: function () { return address_1.AddressHelper; } });
Object.defineProperty(exports, "AddressViewModel", { enumerable: true, get: function () { return address_1.AddressViewModel; } });
Object.defineProperty(exports, "AddressContactCreateRequest", { enumerable: true, get: function () { return address_1.AddressContactCreateRequest; } });
const company_1 = require("./models/company");
Object.defineProperty(exports, "CompanyViewModel", { enumerable: true, get: function () { return company_1.CompanyViewModel; } });
Object.defineProperty(exports, "CompanyCornerDBModel", { enumerable: true, get: function () { return company_1.CompanyCornerDBModel; } });
Object.defineProperty(exports, "CompanyCornerPictureModel", { enumerable: true, get: function () { return company_1.CompanyCornerPictureModel; } });
const newsletter_1 = require("./models/newsletter");
Object.defineProperty(exports, "NewsletterProjectModel", { enumerable: true, get: function () { return newsletter_1.NewsletterProjectModel; } });
Object.defineProperty(exports, "NewsletterModel", { enumerable: true, get: function () { return newsletter_1.NewsletterModel; } });
Object.defineProperty(exports, "NewsletterContentModel", { enumerable: true, get: function () { return newsletter_1.NewsletterContentModel; } });
const abos_1 = require("./models/abos");
Object.defineProperty(exports, "ProefAboCreateModel", { enumerable: true, get: function () { return abos_1.ProefAboCreateModel; } });
const translation_1 = require("./models/translation");
Object.defineProperty(exports, "TranslationSaveRequest", { enumerable: true, get: function () { return translation_1.TranslationSaveRequest; } });
