export declare class AddressHelper {
    static cleanVat(vatNumber: string): string;
}
export declare class AddressViewModel {
    id: number | undefined;
    street: string | undefined;
    streetNumber: string | undefined;
    streetBoxNumber: string | undefined;
    city: string | undefined;
    zipCode: string | undefined;
    countryCode: string | undefined;
}
export declare class AddressContactCreateRequest {
    lang: string;
    street: string;
    streetNumber: string;
    streetBoxNumber: string;
    city: string;
    zipCode: string;
    countryCode: string;
    isB2b: boolean;
    vat: string;
    companyName: string;
    constructor(data: Partial<AddressContactCreateRequest>);
}
export declare class AddressContactUpdateRequest {
    street: string;
    streetNumber: string;
    streetBoxNumber: string;
    city: string;
    zipCode: string;
    countryCode: string;
    attention?: string;
    constructor(data: Partial<AddressContactUpdateRequest>);
}
