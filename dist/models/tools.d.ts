import { SelectOptionViewModel } from "./selectoption";
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
    genderNl: SelectOptionViewModel;
    keywordNl: string;
    descriptionNl: string;
    nameFr: string;
    genderFr: SelectOptionViewModel;
    keywordFr: string;
    descriptionFr: string;
    group: SelectOptionViewModel;
    articleReference: SelectOptionViewModel;
    merkType: SelectOptionViewModel;
    image: string;
    imageId: number;
}
export interface ToolsArticleListView {
    id: number;
    name: string;
    discription: string;
    articleReference: string;
    imageUrl: string;
    "3dUid": string;
    "3dUrl": string;
}
