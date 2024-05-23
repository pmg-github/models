export declare class AddressHelper {
    static cleanVat(vatNumber: string): string;
}
export declare class AddressViewModel {
    street: string | undefined;
    streetNumber: string | undefined;
    streetBoxNumber: string | undefined;
    city: string | undefined;
    zipCode: string | undefined;
    countryCode: string | undefined;
}
export declare class AddressContactCreateRequest {
    street: string;
    streetNumber: string;
    streetBoxNumber: string;
    city: string;
    zipCode: string;
    countryCode: string;
    type: string;
    get isB2b(): boolean;
    vat: string;
    companyName: string;
    constructor(data: Partial<AddressContactCreateRequest>);
}
