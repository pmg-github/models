import { SelectOptionViewModel } from "./selectoption";

export interface BoHeroListView {
  id: number;
  name: string;
  language: string;
  status: string;
  portals: string;
}

export interface PageEditorListView {
  id: number;
  reference: string;
  title: string;
  language: string;
  layout: string;
  description: string;
  enabled: boolean;
}
export interface PageEditorBlockDetailView {
  id: number;
  key: string;
  props: any;
  visibleFrom: string;
  visibleUntil: string;
  enabled: boolean;
}
export interface PageEditorDetailView {
  id: number;
  color: string;
  slug: string;
  layout: string;
  title: string;
  description: string;
  language: string;
  isEnabled: boolean;
  blocks: PageEditorBlockDetailView[];
  projectCode: string;
  dateFrom: string;
  dateUntil: string;
  header: SelectOptionViewModel;
}
