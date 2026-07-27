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
  jsonData?: JSON;
  portalCode?: string;
}

interface StatsListViewModel {
  typeId: number;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  id: number;
  customer: CompanyCardViewModel;
  SortValue: number;
  interactions: {
    nl: number;
    fr: number;
    total: number;
  };
  interactionsUnique: {
    nl: number;
    fr: number;
    total: number;
  };
  impressions: {
    nl: number;
    fr: number;
    total: number;
  };
  impressionsUnique: {
    nl: number;
    fr: number;
    total: number;
  };
  opened: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueOpened: {
    nl: number;
    fr: number;
    total: number;
  };
  openedNoBot: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueOpenedNoBot: {
    nl: number;
    fr: number;
    total: number;
  };
}
export interface PubsStatsListViewModel extends StatsListViewModel {
  pubCode: string | null;
  format: SelectOptionViewModel;
  orderLineNumber: number | null;
}
export interface ArticleStatsListViewModel extends StatsListViewModel {
  
  articleTitle: string;
  articleType: string;
  portalDomain: string;
}
export interface NewsletterStatsListViewModel {
  id: number;
  titleNl: string;
  titleFr: string;
  sendOn: string;
  projectCode: string | null;
  SortValue: number;
  recipients: {
    nl: number;
    fr: number;
    total: number;
  };
  reach: {
    nl: number;
    fr: number;
    total: number;
  };
  send: {
    nl: number;
    fr: number;
    total: number;
  };
  failed: {
    nl: number;
    fr: number;
    total: number;
  };
  opened: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueOpened: {
    nl: number;
    fr: number;
    total: number;
  };
  impressions: {
    nl: number;
    fr: number;
    total: number;
  };
  impressionsUnique: {
    nl: number;
    fr: number;
    total: number;
  };
  openedNoBot?: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueOpenedNoBot?: {
    nl: number;
    fr: number;
    total: number;
  };
}
