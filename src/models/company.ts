import { ViewerInteresseViewModel } from "./magazine";
import { AddressViewModel } from "./address";
import { PmgUserInterface, PmgUserModel } from "./pmguser";

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
  vatNumber?: string | undefined = undefined;
}
export interface CompanyFinatialViewModel {
  turnover: number;
  operating: number;
  operatingEmployee: number;
  capital: number;
  cashflow: number;
  liquidity: number;
  solvency: number;
  profitability: number;
  employeesWorkers: number;
  employeesServants: number;
  employeesTotal: number;
}

export interface BcCompanyViewModel extends CompanyViewModel {
  contactPerson: PmgUserInterface;
  vat?: string;
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

export type CompanyRankingOverviewModel = {
  id: number;
  customerReference: string;
  customerName: string;
  customerLocation: string;
  rankingPosition: number;
  value: number;
  articleTitle: string | null;
  articleDescription: string | null;
  articleReference: string | null;
  articleImageUrl: string | null;
  hasContactenAbo: boolean | number;
  isCurrentProject: boolean | number;
  isMRK: boolean | number;
  orderByValue:number;
};

export class CompanyCornerPictureModel {}
