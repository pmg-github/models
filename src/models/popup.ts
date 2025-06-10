import { PortalComponentViewModel } from "./portal";

export class PopupModel {
  id: number | undefined = undefined;
  typeId: number | undefined = undefined;
  typeReference: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  targetAudienceId: number | undefined = undefined;
  targetAudienceReference: string | undefined = undefined;
  positionId: number | undefined = undefined;
  positionReference: string | undefined = undefined;
  displayFrequencyId: number | undefined = undefined;
  displayFrequencyReference: string | undefined = undefined;
  delaySeconds: number | undefined = undefined;
  fileId: number | undefined = undefined;
  title: string | undefined = undefined;
  subTitle: string | undefined = undefined;
  intro: string | undefined = undefined;
  text: string | undefined = undefined;
  buttonText: string | undefined = undefined;
  buttonLink: string | undefined = undefined;
  width: number | undefined = undefined;
  height: number | undefined = undefined;
  dateFrom: Date | undefined = undefined;
  dateUntil: Date | undefined = undefined;
  isActive: boolean | undefined = undefined;
  creationDate: Date | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  fileUrl: string | undefined = undefined;
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
  fileUrl?:string;
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
  displayFrequency: number;
  delaySeconds: number;
}
