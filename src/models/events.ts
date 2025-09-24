export interface EventPageListView {
  id: number;
  title: string;
  description: string;
  layout: string;
  isEnabled: number;
  blocks: {
    id: number;
    key: string;
    props: JSON;
  }[];
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
