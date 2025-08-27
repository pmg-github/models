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
    };
}
