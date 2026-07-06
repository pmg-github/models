export interface InteractionAdd {
    id: number;
    type: number;
    url: string;
    text: string;
    icon: string;
}
export interface AddsViewModel {
    orderLineNumber?: string;
    pubCode?: string;
    redirectUrl?: string;
    moreUrl?: string;
    moreText?: string;
    contactButton?: string;
    contactText?: string;
    interectionOrderLineNumber?: number;
    pubUrl?: string;
    isVideo?: number;
    openPopup?: number;
    klnr?: string;
}
