export interface InterestViewModel {
    id: number;
    code: string;
    name: string;
    type: string;
}
export interface InteresseDetailView {
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
