export declare enum DashboardLogResourceEnum {
    ARTICLE = "article",
    MAGJOB = "magjob"
}
export interface DashboardLogViewModel {
    id: number;
    parentCode: string;
    createdAt: Date | string;
    actionTranslationKey: string;
    actionMessage: string | null;
}
