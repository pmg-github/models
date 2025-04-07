export interface ToolsListView {
  id: number;
  name: string;
  groupName: string;
}
export interface ToolsListModel {
  cursor: string;
  content: ToolsListView[];
}

export interface ToolDetailView {
  id: number;
  nameNl: string;
  genderNl: string;
  keywordNl: string;
  descriptionNl: string;
  nameFr: string;
  genderFr: string;
  keywordFr: string
  descriptionFr: string
  groupName: string;
  group: string;
}
