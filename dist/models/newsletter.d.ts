export declare class NewsletterProjectModel {
    code: string | undefined;
    name: string | undefined;
    date: Date | undefined;
    numberOfRecipients: number | undefined;
    numberOfSuccess: number | undefined;
    numberOfFailed: number | undefined;
    numberOfBounced: number | undefined;
    numberOfOpened: number | undefined;
    numberOfClicks: number | undefined;
}
export declare class NewsletterModel {
    id: number | undefined;
    projectCode: string | undefined;
    languageCode: string | undefined;
    subject: string | undefined;
    date: Date | undefined;
    numberOfRecipients: number | undefined;
    numberOfSuccess: number | undefined;
    numberOfFailed: number | undefined;
    numberOfBounced: number | undefined;
    numberOfOpened: number | undefined;
    numberOfClicks: number | undefined;
}
export declare class NewsletterContentModel {
    id: number | undefined;
    typeId: number | undefined;
    projectCode: string | undefined;
    languageCode: string | undefined;
    articleReference: string | undefined;
    sortOrder: number | undefined;
    title: string | undefined;
    description: string | undefined;
    moreLabel: string | undefined;
    moreLink: string | undefined;
    infoLabel: string | undefined;
    infoLink: string | undefined;
}
export interface NewsletterTileModel {
    id: number;
    reference: string;
    date: Date;
    displayDate: string;
    title: string;
    redirectUrl: string;
}
