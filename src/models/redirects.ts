export interface BoRedirectsListModel {
  id: number;
  name: string;
  url: string;
  targetUrl: string;
}
export interface BoRedirectsDetailModel {
  id: number;
  name: string;
  url: string;
  targetUrl: string;
  remarks: string;
  permanent: boolean;
}
