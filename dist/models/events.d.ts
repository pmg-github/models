import { SelectOptionViewModel } from "./selectoption";
export interface EventPageListView {
    id: number;
    title: string;
    description: string;
    layout: string;
    isEnabled: number;
    showFooter: boolean;
    color: string;
    blocks: {
        id: number;
        key: string;
        props: JSON;
    }[];
    navigation: {
        logoUrl: string;
        items: {
            link: string;
            name: string;
            target: string;
        }[];
        search: number;
    };
}
export interface PageEditorListView {
    id: number;
    reference: string;
    title: string;
    language: string;
    languageCode: string;
    domain: string | null;
    layout: string;
    description: string | null;
    enabled: boolean;
}
export interface PageEditorBlockDetailView {
    id: number;
    key: string;
    props: any;
    visibleFrom: string;
    visibleUntil: string;
    enabled: boolean;
}
export interface PageEditorDetailView<ProjectCode = SelectOptionViewModel & {
    value: string;
}> {
    id: number;
    color: string;
    slug: string;
    layout: string;
    title: string;
    description: string | null;
    language: string;
    isEnabled: boolean;
    showFooter: boolean;
    blocks: PageEditorBlockDetailView[];
    projectCode?: ProjectCode;
    dateFrom?: string;
    dateUntil?: string;
    header?: SelectOptionViewModel & {
        value: number;
    };
    portalCode: string[];
}
