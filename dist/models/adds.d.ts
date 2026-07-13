export interface InteractionAdd {
    id: number;
    type: number;
    url: string;
    text: string;
    icon: string;
    klnr?: string;
}
export interface BcInteractionAdd {
    id: number;
    type: number;
    urlNl: string;
    urlFr: string;
    text: string;
    textNl: string;
    textFr: string;
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
