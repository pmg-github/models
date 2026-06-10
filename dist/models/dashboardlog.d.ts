export declare enum DashboardLogResourceEnum {
    ARTICLE = "article"
}
export interface DashboardLogViewModel {
    id: number;
    parentCode: string;
    createdAt: Date | string;
    actionTranslationKey: string;
    actionMessage: string | null;
}
