import { SelectOptionViewModel } from "./selectoption";

export interface EventPageListView {
  id: number;
  title: string;
  description: string;
  layout: string;
  isEnabled: number;
  color: string;
  blocks: {
    id: number;
    key: string;
    props: JSON;
  }[];
  navigation: {
    logoUrl: string;
    items: { link: string; name: string; target: string }[];
    search: number;
  };
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
  header:SelectOptionViewModel
}
