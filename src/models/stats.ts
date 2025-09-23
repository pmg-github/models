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

export interface PubsStatsListViewModel {
  id: number;
  typeId: number;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  pubCode: string | null;
  customer: CompanyCardViewModel;
  format: SelectOptionViewModel;
  orderLineNumber: number | null;
  SortValue: number;
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
  clicksUnique: {
    nl: number;
    fr: number;
    total: number;
  };
  viewsUnique: {
    nl: number;
    fr: number;
    total: number;
  };
}
export interface ArticleStatsListViewModel {
  id: number;
  typeId: number;
  projectCode: string | null;
  jobCode: string | null;
  articleReference: string | null;
  customer: CompanyCardViewModel;
  articleTitle: string;
  articleType: string;
  portalDomain: string;
  SortValue: number;
  views: {
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
export interface NewsletterStatsListViewModel {
  id: number;
  title: string;
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
  clicks: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueClicks: {
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
  clicksNoBot?: {
    nl: number;
    fr: number;
    total: number;
  };
  uniqueClicksNoBot?: {
    nl: number;
    fr: number;
    total: number;
  };
}
