import { ViewerInteresseViewModel } from "./magazine";
import { AddressViewModel } from "./address";
import { PmgUserModel } from "./pmguser";

export class CompanyViewModel {
  reference: string | undefined = undefined;
  name: string | undefined = undefined;
  brand: string | undefined = undefined;
  logoUrl: string | undefined = undefined;
  companyCornerPictureUrls: string[] | undefined = undefined;
  email: string | undefined = undefined;
  website: string | undefined = undefined;
  phone: string | undefined = undefined;
  fax: string | undefined = undefined;
  mainAddressID: number | undefined = undefined;
  mainAddress: AddressViewModel | undefined = undefined;
  interesses: ViewerInteresseViewModel[] | undefined = undefined;
}

export interface BcCompanyViewModel extends CompanyViewModel{
  contactPerson:PmgUserModel;
}

export class CompanyCornerDBModel {
  [key: string]: any;

  ID: number | undefined = undefined;
  Reference: string | undefined = undefined;
  LogoID: number | undefined = undefined;
  HeaderColor: string | undefined = undefined;
  CreationDate: Date | undefined = undefined;
  UpdateDate: Date | undefined = undefined;
  ShowAddress: boolean | undefined = undefined;
  ShowTelephone: boolean | undefined = undefined;
  ShowFax: boolean | undefined = undefined;
  ShowProducts: boolean | undefined = undefined;
  ShowCity: boolean | undefined = undefined;
  ShowWebsite: boolean | undefined = undefined;
  ShowEmail: boolean | undefined = undefined;
  HideFinancialData: boolean | undefined = undefined;
  IsMRK: boolean | undefined = undefined;
  LinkToWebsite: boolean | undefined = undefined;
  WebsiteNL: string | undefined;
  WebsiteFR: string | undefined;
  WebsiteEN: string | undefined;
}

export class CompanyCornerPictureModel {}
