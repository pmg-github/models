export declare class PopupModel {
    id: number | undefined;
    typeId: number | undefined;
    typeReference: string | undefined;
    languageCode: string | undefined;
    targetAudienceId: number | undefined;
    targetAudienceReference: string | undefined;
    positionId: number | undefined;
    positionReference: string | undefined;
    displayFrequencyId: number | undefined;
    displayFrequencyReference: string | undefined;
    delaySeconds: number | undefined;
    fileId: number | undefined;
    title: string | undefined;
    subTitle: string | undefined;
    intro: string | undefined;
    text: string | undefined;
    buttonText: string | undefined;
    buttonLink: string | undefined;
    width: number | undefined;
    height: number | undefined;
    dateFrom: Date | undefined;
    dateUntil: Date | undefined;
    isActive: boolean | undefined;
    creationDate: Date | undefined;
    lastModificationDate: Date | undefined;
    fileUrl: string | undefined;
}
export interface BoPopup {
    id: number;
    title: string;
    portals: string;
}
export interface BoPopupList {
    nextCursor: number;
    content: BoPopup[];
}
