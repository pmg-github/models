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
  views: {
    nl: number;
    fr: number;
    total: number;
  };
  clicks?: {
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
export interface PubsStatsListViewModel extends StatsListViewModel {
  id: number;
  typeId: number;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  pubCode: string | null;
  customer: CompanyCardViewModel;
  format: SelectOptionViewModel;
  orderLineNumber: number | null;
}
export interface ArticleStatsListViewModel extends StatsListViewModel {
  id: number;
  typeId: number;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  customer: CompanyCardViewModel;
  articleType: string | null;
}
