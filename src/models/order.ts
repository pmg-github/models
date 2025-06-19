export interface OrderDetailViewModel {
  id: number;
  reference: string;
  statusId: number;
  status: string;
  date: string | Date;
  totalProductsPriceExclVat: number;
  totalProductsPriceInclVat: number;
  totalProductsVat: number;
  totalDeliveryPriceExclVat: number;
  totalDeliveryPriceInclVat: number;
  totalDeliveryVat: number;
  totalPriceExclVat: number; // productprice + delvieryprice
  totalPiceInclVat: number; // productprice + delvieryprice
  totalVat: number; // sum of all vattotals
  molliePaymentUrl: string;

  deliveryAddress: OrderAddressViewModel;
  invoiceAddress: OrderAddressViewModel;
  company: OrderCompanyViewModel | undefined;
  orderLines: OrderLineViewModel[];
  vatTotals: OrderVatTotal[];
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
}

export interface OrderLineViewModel {
  id: number;
  productId: number;
  productName: string;
  productDescription: string;
  productPriceExclVat: number;
  productPriceInclVat: number;
  productVat: number;
  productVatPercentage: number;
  quantity: number;
  totalPriceExclVat: number;
  totalPriceInclVat: number;
  totalVat: number;
}

export interface OrderVatTotal {
  vatPercentage: number;
  totalPriceExclVat: number;
  totalPriceInclVat: number;
  totalVat: number;
}
