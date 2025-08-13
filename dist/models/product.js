"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productOrderByData = exports.ProductOrderByType = exports.ProductCategoryEnum = void 0;
var ProductCategoryEnum;
(function (ProductCategoryEnum) {
    ProductCategoryEnum[ProductCategoryEnum["PRINT_ABONNEMENTEN"] = 1] = "PRINT_ABONNEMENTEN";
    ProductCategoryEnum[ProductCategoryEnum["BOUWPLANNEN"] = 2] = "BOUWPLANNEN";
    ProductCategoryEnum[ProductCategoryEnum["MAGAZINES"] = 3] = "MAGAZINES";
    ProductCategoryEnum[ProductCategoryEnum["BEST_DEALS"] = 4] = "BEST_DEALS";
    ProductCategoryEnum[ProductCategoryEnum["ONLINE_ABONNEMENTEN"] = 5] = "ONLINE_ABONNEMENTEN";
    ProductCategoryEnum[ProductCategoryEnum["BEDRIJFSABONNEMENTEN"] = 6] = "BEDRIJFSABONNEMENTEN";
    ProductCategoryEnum[ProductCategoryEnum["LERARENABONNEMENTEN"] = 7] = "LERARENABONNEMENTEN";
    ProductCategoryEnum[ProductCategoryEnum["SCHOOLABONNEMENTEN"] = 8] = "SCHOOLABONNEMENTEN";
    ProductCategoryEnum[ProductCategoryEnum["SURVEYS"] = 9] = "SURVEYS";
    ProductCategoryEnum[ProductCategoryEnum["ABO_HERNIEUWING"] = 10] = "ABO_HERNIEUWING";
    ProductCategoryEnum[ProductCategoryEnum["BROKER"] = 11] = "BROKER";
    ProductCategoryEnum[ProductCategoryEnum["PMG_VERBRUIKSGOEDEREN"] = 12] = "PMG_VERBRUIKSGOEDEREN";
    ProductCategoryEnum[ProductCategoryEnum["GESCHENKEN"] = 13] = "GESCHENKEN";
})(ProductCategoryEnum || (exports.ProductCategoryEnum = ProductCategoryEnum = {}));
// ORDER BY
var ProductOrderByType;
(function (ProductOrderByType) {
    ProductOrderByType["DEFAULT"] = "default";
    ProductOrderByType["PRICE_ASC"] = "priceAsc";
    ProductOrderByType["PRICE_DESC"] = "priceDesc";
    ProductOrderByType["ALPHABETICAL"] = "aplhabetical";
})(ProductOrderByType || (exports.ProductOrderByType = ProductOrderByType = {}));
exports.productOrderByData = {
    // TODO FIX DEFAULT, FOR NOW DONE LIKE THIS FOR /PRICING!!
    [ProductOrderByType.DEFAULT]: {
        column: "productcategory_product.CategoryID",
        direction: "desc",
    },
    [ProductOrderByType.PRICE_ASC]: {
        column: "product.Price",
        direction: "asc",
    },
    [ProductOrderByType.PRICE_DESC]: {
        column: "product.Price",
        direction: "desc",
    },
    [ProductOrderByType.ALPHABETICAL]: {
        column: "article.Title",
        direction: "asc",
    },
};
