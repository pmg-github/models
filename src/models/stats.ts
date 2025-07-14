import { CompanyCardViewModel } from "./company";
import { SelectOptionViewModel } from "./selectoption";

export interface StatsPostModel {
  sessionId: string;
  appReference: string;
  language: string;
  url: string;
  appStatsTypeId: number;
  reference: string;
  collectionReference?: string;
  campagneCode?: string;
  contactId?: number;
  intValue?: number;
  varCharValue?: string;
  jsonData?: string;
}

export interface StatsListViewModel {
  typeId: number;
  orderLineNumber: number | null;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  id: number;
  customer: CompanyCardViewModel;
  pubCode: string | null;
  format: SelectOptionViewModel;
  views: {
    nl: number;
    fr: number;
    total: number;
  };
  clicks: {
    nl: number;
    fr: number;
    total: number;
  };
  leads: {
    nl: number;
    fr: number;
    total: number;
  };
}
