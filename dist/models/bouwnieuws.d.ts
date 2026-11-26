import type { AvailableVideo } from "./video";
export type BouwnieuwsLanguage = "nl" | "fr";
export type BouwnieuwsStatus = 0 | 1 | 2 | 3;
export declare const bouwnieuwsStatusLabels: {
    readonly 0: "Concept";
    readonly 1: "Klaar voor PVP";
    readonly 2: "Video opgeladen";
    readonly 3: "Gepubliceerd";
};
export interface BouwnieuwsProject<TDate = string> {
    projectCode: string;
    title: string | null;
    releaseDate: TDate | null;
    jobCode: string | null;
    verschenen: string | null;
    status: BouwnieuwsStatus;
}
export interface BouwnieuwsProjects {
    content: BouwnieuwsProject[];
    hasMore: boolean;
}
export type BouwnieuwsVideo = Omit<AvailableVideo, "availableLanguages">;
export interface BouwnieuwsSelectionVideo extends BouwnieuwsVideo {
    addedAt: string | null;
    isIntro: boolean;
}
export interface BouwnieuwsCatalogVideo extends BouwnieuwsVideo {
    id: number;
    title: string;
    availableLanguages: BouwnieuwsLanguage[];
}
export interface BouwnieuwsSelection {
    project: BouwnieuwsProject;
    items: BouwnieuwsSelectionVideo[];
}
export interface BouwnieuwsSkippedVideo {
    jobCode: string;
    title: string | null;
}
export interface BouwnieuwsCopyResult {
    items: BouwnieuwsSelectionVideo[];
    skipped: BouwnieuwsSkippedVideo[];
}
export interface BouwnieuwsComparisonRow {
    jobCode: string;
    title: string | null;
    languageCode: string;
    currentPosition: number | null;
    otherPosition: number | null;
    currentIntroPosition: number | null;
    otherIntroPosition: number | null;
    change: "added" | "removed" | "moved" | "intro" | "unchanged";
}
export interface BouwnieuwsSelectionParams {
    projectCode: string;
    lang: BouwnieuwsLanguage;
}
export interface BouwnieuwsCopyQuery {
    sourceProjectCode: string;
    sourceLanguageCode: BouwnieuwsLanguage;
}
export declare class BouwnieuwsSelectionItem {
    jobCode: string;
    languageCode: string;
    isIntro?: boolean;
}
export interface StoredBouwnieuwsSelectionItem extends BouwnieuwsSelectionItem {
    addedAt: Date | string | null;
}
export declare class BouwnieuwsSelectionSaveRequest {
    items: BouwnieuwsSelectionItem[];
}
