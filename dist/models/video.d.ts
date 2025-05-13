import { CompanyCardViewModel } from "./company";
import { PmgUserInterface } from "./pmguser";
export interface BoVideoViewModel {
    id: number;
    jobNr: string;
    titel: string;
    producer: PmgUserInterface;
    owner: PmgUserInterface;
    amountOfVideos: number;
}
export interface BoVideoDetailViewModel {
    id: number;
    jobNr: string;
    titel: string;
    info: string;
    updatedAt: string;
    customer: CompanyCardViewModel;
}
export interface BoVideoListViewModel {
    id: number;
    origin: string;
    jobNr: string;
    languageCode: string;
    updatedAt: string;
    status: string;
    statusId: number;
    voiceOverLanguageCode: string;
    subTitlesLanguageCode: string;
}
