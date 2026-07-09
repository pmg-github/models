export interface InteractionAdd {
    id: number;
    type: number;
    url: string;
    text: string;
    icon: string;
    klnr?: string;
}
export interface AddsViewModel {
    orderLineNumber?: string;
    pubCode?: string;
    redirectUrl?: string;
    moreUrl?: string;
    moreText?: string;
    contactButton?: string;
    orderKlnr?: string;
    contactText?: string;
    interectionOrderLineNumber?: string;
    pubUrl?: string;
    isVideo?: boolean;
    openPopup?: boolean;
    klnr?: string;
}
