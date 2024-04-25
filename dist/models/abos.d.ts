export declare class ProefAboCreateModel {
    portalCode: string;
    lang: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    street: string;
    streetNumber: string;
    streetBoxNumber: string | undefined;
    zipCode: string;
    city: string;
    countryCode: string;
    type: string;
    vat: string;
    companyName: string;
    constructor(data: Partial<ProefAboCreateModel>);
}
