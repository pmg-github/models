import { CompanyCardViewModel, CompanyViewModel } from "./company";
import { PmgUserInterface } from "./pmguser";

export interface BoVideoViewModel {
  id: number;
  jobNr: string;
  titel: string;
  producer: PmgUserInterface;
  owner: PmgUserInterface;
  amountOfVideos: number;
}

export interface BoVideoViewModelWitCursorAndContent{
  content:BoVideoViewModel[],
  cursor:number
}
export interface BoVideoDetailViewModel {
  id: number;
  jobNr: string;
  titel: string;
  info: string;
  updatedAt: string;
  customer: CompanyViewModel;
}
export interface BoVideoListViewModel {
  id: number;
  origin: string;
  jobNr: string;
  language: string;
  updatedAt: string;
  status: string;
  statusId: number;
  voiceOverLanguage: string;
  subTitlesLanguage: string;
  videoUrl:string
}
