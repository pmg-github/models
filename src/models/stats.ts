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
  intValue: number;
  varCharValue?: string;
  jsonData?: string;
}
