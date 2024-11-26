export interface BoMenuListModel {
  id: number;
  parentId: number;
  name: string;
  tooltip: string;
  icon: string;
  url: string;
  target: string;
  items: BoMenuListModel[];
}
