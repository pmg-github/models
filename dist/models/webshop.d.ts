export declare class CartBaseRequest {
    portalCode: string;
    userUuid?: string;
}
export declare class CartAddItemRequest {
    userUuid: string;
    language: string;
    portalCode: string;
    productId: number;
    amount: number;
    JSONData: object | string;
}
export declare class CartUpdateItemRequest {
    userUuid: string;
    portalCode: string;
    quantity: number;
    JSONData: object | string;
}
export declare class CartDeleteItemRequest {
    userUuid: string;
    portalCode: string;
}
export declare class CartUpdateRequest {
    userUuid: string;
    language: string;
    portalCode: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    isB2B: boolean;
    klnr?: string;
    companyName?: string;
    vatNumber?: string;
    companyNumber?: string;
    hasDifferentInvoiceAddress: boolean;
    deliveryAddressId?: number;
    invoiceAddressId?: number;
    deliveryStreet?: string;
    deliveryStreetNumber?: string;
    deliveryStreetBoxNumber?: string;
    deliveryZipCode?: string;
    deliveryCity?: string;
    deliveryCountryCode?: string;
    deliveryAttention?: string | undefined;
    invoiceStreet?: string;
    invoiceStreetNumber?: string;
    invoiceStreetBoxNumber?: string;
    invoiceZipCode?: string;
    invoiceCity?: string;
    invoiceCountryCode?: string;
    invoiceAttention?: string | undefined;
    constructor(data: Partial<CartUpdateRequest>);
}
export declare class CartDiscountAddRequest extends CartBaseRequest {
    discountCode: string;
}
