import { SelectOptionViewModel, SelectOptionViewModelDto } from "./selectoption";
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
    amountPortals: number;
    dateFrom: string;
    dateUntil: string;
    active: boolean;
}
export interface BoPopupList {
    nextCursor: number;
    content: BoPopup[];
}
export interface BoPopupDetailMl {
    fileId?: number;
    fileUrl?: string;
    title: string;
    subTitle: string;
    intro: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}
export interface BoPopupDetailView {
    id?: number;
    portals: string[];
    nl: BoPopupDetailMl;
    fr: BoPopupDetailMl;
    isActive: boolean;
    dateFrom?: string;
    dateUntil: string;
    displayFrequency: SelectOptionViewModel;
    delaySeconds: number;
}
declare class PopupMlDto {
    fileId: string;
    title: string;
    subTitle?: string;
    intro?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
}
export declare class CreatePopupDto {
    id?: number;
    portals: string[];
    nl: PopupMlDto;
    fr: PopupMlDto;
    isActive: boolean;
    dateFrom?: string;
    dateUntil?: string;
    displayFrequency: SelectOptionViewModelDto;
    delaySeconds: number;
    constructor(data: Partial<CreatePopupDto>);
}
export {};
