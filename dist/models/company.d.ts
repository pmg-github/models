import { ViewerInteresseViewModel } from "./magazine";
import { AddressViewModel } from "./address";
import { PmgUserModel } from "./pmguser";
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
}
export declare class BcCompanyViewModel extends CompanyViewModel {
    contactPerson: PmgUserModel | undefined;
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
export declare class CompanyCornerPictureModel {
}
