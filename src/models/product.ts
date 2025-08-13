import { OrderByType } from "./db";

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
}

export enum ProductCategoryEnum {
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
}

// ORDER BY
export enum ProductOrderByType {
  DEFAULT = "default",
  PRICE_ASC = "priceAsc",
  PRICE_DESC = "priceDesc",
  ALPHABETICAL = "aplhabetical",
}

export const productOrderByData: { [key in ProductOrderByType]: OrderByType } =
  {
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
