import { SelectOptionViewModel } from "./selectoption";
export interface BoHeroListView {
    id: number;
    name: string;
    language: string;
    status: string;
    portals: string;
}
export interface PageEditorListView {
    id: number;
    reference: string;
    title: string;
    language: string;
    layout: string;
    description: string;
    enabled: boolean;
}
export interface BoHeroDetailView {
    id?: number;
    name: string;
    language: string;
    statusId: number;
    json: JSON;
    availableFrom: string | Date;
    availableUntil: string | Date;
    sortOrder: number;
    portals: string[];
}
export interface PageEditorDetailView {
    id: number;
    color: string;
    slug: string;
    layout: string;
    title: string;
    description: string;
    language: string;
    isEnabled: boolean;
    blocks: string[];
    projectCode: string;
    dateFrom: string;
    dateUntil: string;
    header: SelectOptionViewModel;
}
