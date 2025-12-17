export interface OrderDetailViewModel {
  id: number;
  reference: string;
  statusId: number;
  status: string;
  paymentMethodId: number;
  paymentMethod: string;
  date: string | Date;
  isoDate: string;
  totalProductsPriceExclVat: number;
  totalProductsPriceInclVat: number;
  totalProductsVat: number;
  totalDeliveryPriceExclVat: number;
  totalDeliveryPriceInclVat: number;
  totalDeliveryVat: number;
  totalPriceExclVat: number; // productprice + delvieryprice - discount
  totalPriceInclVat: number; // productprice + delvieryprice - discount
  totalVat: number; // sum of all vattotals
  totalDiscountPriceExclVat: number | undefined;
  totalDiscountPriceInclVat: number | undefined;
  molliePaymentUrl: string;
  hasToPayVat: boolean | number;

  discountCode: string | undefined;
  discountName: string | null | undefined;

  hasValidDiscount: boolean | undefined;

  deliveryAddress: OrderAddressViewModel;
  invoiceAddress: OrderAddressViewModel;
  company: OrderCompanyViewModel | undefined;
  orderLines: OrderLineViewModel[];
  vatTotals: OrderVatTotal[];

  attachmentUrls: string[] | undefined;
}

export interface OrderAddressViewModel {
  forAttention: string | undefined | null;
  street: string;
  streetNumber: string;
  streetBoxNumber: string | undefined | null;
  zipCode: string;
  city: string;
  countryCode: string;
}

export interface OrderCompanyViewModel {
  name: string | undefined | null;
  vatNumber: string;
  companyNumber: string | undefined | null;
}

export interface OrderLineViewModel {
  id: number;
  articleReference: string;
  productId: number;
  productName: string;
  productDescription: string;
  productPriceExclVat: number;
  productPriceInclVat: number;
  productVat: number;
  productVatPercentage: number;
  productImageUrl: string | null | undefined;
  quantity: number;
  totalPriceExclVat: number;
  totalPriceInclVat: number;
  totalVat: number;
  productCategoryIds: number[] | undefined | null;
  JSONData: any | null | undefined;
  maxQuantity: number | null;
}

export interface OrderVatTotal {
  vatPercentage: number;
  totalPriceExclVat: number;
  totalPriceInclVat: number;
  totalVat: number;
}
