export interface BoMenuListModel {
  id: number;
  parentId: number | null;
  reference: string;
  name: string;
  tooltip: string;
  icon: string;
  url: string;
  target: string;
  items: BoMenuListModel[];
}
