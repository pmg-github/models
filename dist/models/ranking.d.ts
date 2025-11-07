export interface rankingTypes {
    id: number;
    name: string;
    categoryName: string;
    searchName: string;
    translationKey: string;
    interesseSoort: string;
    currentProject: string;
    cover: string;
}
export interface RankingInteresses {
    reference: string;
    title: string;
    description: string;
    project: string;
}
export interface RankingMagazineMetaDataViewModel {
    title: string;
    description: string | null;
    searchPlaceholder: string | null;
    category: string | null;
    currentProject: string | null;
}
