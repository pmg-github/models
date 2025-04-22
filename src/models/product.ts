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
