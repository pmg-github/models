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
    totalPriceExclVat: number;
    totalPriceInclVat: number;
    totalVat: number;
    molliePaymentUrl: string;
    hasToPayVat: boolean | number;
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
}
export interface OrderVatTotal {
    vatPercentage: number;
    totalPriceExclVat: number;
    totalPriceInclVat: number;
    totalVat: number;
}
