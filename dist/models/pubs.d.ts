import { CompanyCardViewModel } from "./company";
import { SelectOptionViewModel } from "./selectoption";
export interface PubsListView {
    customer: CompanyCardViewModel;
    id: number;
    description: string;
    pubCode: string;
    format: SelectOptionViewModel;
}
export interface PubsListCursorView {
    content: PubsListView[];
    nextCursor: number;
}
export interface PubsDetailView extends PubsListView {
    views: number;
    leads: number;
    imageUrl: string;
    title: string;
    text: string;
}
export interface PubsSortView {
    redirectUrl: string;
    pubCode: string;
}
