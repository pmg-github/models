import { ViewerInteresseViewModel } from "./magazine";
import { AddressViewModel } from "./address";
import { PmgUserInterface } from "./pmguser";
export interface CompanyCardViewModel {
    klnr: string | number;
    company: string;
    brand: string;
    vat: string;
}
export interface MyCompanyList {
    klnr: string | number;
    company: string;
    brand: string;
    isContact: boolean;
}
export declare class CompanyViewModel {
    reference: string | undefined;
    name: string | undefined;
    brand: string | undefined;
    logoUrl: string | undefined;
    companyCornerPictureUrls: string[] | undefined;
    email: string | undefined;
    website: string | undefined;
    phone: string | undefined;
    fax: string | undefined;
    mainAddressID: number | undefined;
    mainAddress: AddressViewModel | undefined;
    interesses: ViewerInteresseViewModel[] | undefined;
    vatNumber?: string | undefined;
}
export interface BcCompanyViewModel extends CompanyViewModel {
    contactPerson: PmgUserInterface;
    vat?: string;
}
export declare class CompanyCornerDBModel {
    [key: string]: any;
    ID: number | undefined;
    Reference: string | undefined;
    LogoID: number | undefined;
    HeaderColor: string | undefined;
    CreationDate: Date | undefined;
    UpdateDate: Date | undefined;
    ShowAddress: boolean | undefined;
    ShowTelephone: boolean | undefined;
    ShowFax: boolean | undefined;
    ShowProducts: boolean | undefined;
    ShowCity: boolean | undefined;
    ShowWebsite: boolean | undefined;
    ShowEmail: boolean | undefined;
    HideFinancialData: boolean | undefined;
    IsMRK: boolean | undefined;
    LinkToWebsite: boolean | undefined;
    WebsiteNL: string | undefined;
    WebsiteFR: string | undefined;
    WebsiteEN: string | undefined;
}
export type CompanyRankingOverviewModel = {
    id: number;
    customerReference: string;
    customerName: string;
    customerLocation: string;
    rankingPosition: number;
    value: number;
    articleTitle: string | null;
    articleReference: string | null;
    articleImageUrl: string | null;
};
export declare class CompanyCornerPictureModel {
}
