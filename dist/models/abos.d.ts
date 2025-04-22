import { AddressViewModel } from "./address";
export interface AboViewModel {
    id: number;
    reference: string;
    portalCode: string;
    magazine: string;
    expiryDate: Date;
}
export interface AboDetailViewModel {
    id: number;
    magazine: string;
    variationKey: string;
    language: string;
    typeName: string;
    deliveryName: string;
    deliveryAdress: AddressViewModel;
    billingName: string;
    billingAdress: AddressViewModel;
    isActive: boolean;
    reference: string;
    expiryDate: string;
}
export declare class ProefAboCreateModel {
    portalCode: string;
    lang: string;
    addressId: number;
    constructor(data: Partial<ProefAboCreateModel>);
}
