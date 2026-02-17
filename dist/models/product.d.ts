import { OrderByType } from "./db";
import { FileViewModel } from "./files";
export interface ProductCategoryViewModel {
    id: number;
    name: string;
    numberOfProducts: number;
}
export interface ProductViewModel {
    id: number;
    reference: string;
    title: string;
    description: string | null;
    imageUrl: string | null;
    isDelivery: boolean | number;
    VAT: number;
    priceExclVAT: number;
    aboPriceExclVAT: number | null;
    priceInclVAT: number;
    aboPriceInclVAT: number | null;
    magazineCode: string | null;
    tags: string[] | undefined | null;
    categoryIds: number[] | undefined | null;
    orderByValue: string;
    maxQuantity: number | null;
    alreadyBought: boolean | undefined;
    label?: {
        text: string | undefined;
        color: string | undefined;
    };
    specs: JSON | undefined;
    attachment: FileViewModel | undefined;
}
export declare enum ProductCategoryEnum {
    PRINT_ABONNEMENTEN = 1,
    BOUWPLANNEN = 2,
    MAGAZINES = 3,
    BEST_DEALS = 4,
    ONLINE_ABONNEMENTEN = 5,
    BEDRIJFSABONNEMENTEN = 6,
    LERARENABONNEMENTEN = 7,
    SCHOOLABONNEMENTEN = 8,
    SURVEYS = 9,
    ABO_HERNIEUWING = 10,
    BROKER = 11,
    PMG_VERBRUIKSGOEDEREN = 12,
    GESCHENKEN = 13,
    VOORSCHRIFTBOEKJES = 14,
    ATTESTEN = 15
}
export declare enum ProductOrderByType {
    DEFAULT = "default",
    PRICE_ASC = "price-asc",
    PRICE_DESC = "price-desc",
    ALPHABETICAL = "alphabetical",
    DATE_ASC = "date-asc",
    DATE_DESC = "date-desc",
    SORT_ORDER = "sort-order"
}
export declare const productOrderByData: {
    [key in ProductOrderByType]: OrderByType;
};
