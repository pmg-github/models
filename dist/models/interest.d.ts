import { SelectOptionDescriptionViewModel } from "./selectoption";
export interface InterestViewModel {
    id: number;
    code: string;
    name: string;
    type: string;
}
export interface InteresseDetailView {
    group: SelectOptionDescriptionViewModel;
    code: string;
    nameNl: string;
    nameFr: string;
    keywordsNl: string;
    keywordsFr: string;
    activityNl: string;
    activityFr: string;
    isLvl: boolean;
    kind: number;
    trending: string[];
    portals: string[];
}
export interface InteresseListView {
    id: number;
    code: string;
    name: string;
    inUse: boolean;
    portals: string;
    typeName: string;
}
