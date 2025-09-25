export interface EventPageListView {
    id: number;
    title: string;
    description: string;
    layout: string;
    isEnabled: number;
    blocks: {
        id: number;
        key: string;
        props: JSON;
    }[];
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
export interface PageEditorBlockDetailView {
    id: number;
    key: string;
    props: JSON;
    visibleFrom: string;
    visibleUntil: string;
    enabled: boolean;
}
export interface PageEditorDetailView {
    id: number;
    slug: string;
    layout: string;
    title: string;
    description: string;
    language: string;
    isEnabled: number;
    blocks: PageEditorBlockDetailView[];
}
