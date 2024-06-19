export interface AboViewModel {
    id: number;
    reference: string;
    magazine: string;
    expiryDate: Date;
}
export declare class ProefAboCreateModel {
    portalCode: string;
    lang: string;
    addressId: number;
    constructor(data: Partial<ProefAboCreateModel>);
}
