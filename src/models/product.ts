export interface ProductViewModel {
  id: number;
  reference: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  isDelivery: boolean | number;
  VAT: number;
  priceExclVAT: number;
  aboPriceExclVAT: number;
  priceInclVAT: number;
  aboPriceInclVAT: number;
}
