export declare class MemberCreateRequest {
    userUuid: string;
    language: string;
    portalCode: string;
    selectedAboProductId: number;
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
    constructor(data: Partial<MemberCreateRequest>);
}
export interface MemberDiscount {
    id: number;
    code: string;
    name: string;
    discountPercentage: string;
    startsAt: Date | string | null;
    endsAt: Date | string | null;
    isSingleUse: boolean | number;
    usedAt: Date | string | null;
    productIds: number[];
}
