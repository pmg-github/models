import { CompanyCardViewModel } from "./company";
import { SelectOptionViewModel } from "./selectoption";

export interface PubViewModel {
  pubCode: string;
  format: string;
  title: string | null;
  redirectUrl: string | null;
  imageUrl: string | null;
  customerReference: string | null;
  moreUrl?: string | null;
  moreText?: string | null;
}

export interface PubsListView {
  customer: CompanyCardViewModel;
  id: number;
  description: string;
  pubCode: string;
  format: SelectOptionViewModel;
}

export interface PubsListCursorView {
  content: PubsListView[];
  nextCursor: number;
}

export interface PubsDetailView extends PubsListView {
  views: number;
  leads: number;
  imageUrl: string;
  title: string;
  text: string;
}

export interface PubsSortView {
  redirectUrl: string;
  pubCode: string;
}
