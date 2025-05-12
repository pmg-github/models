import { PmgUserInterface } from "./pmguser";
export interface BoVideoViewModel {
    id: number;
    jobNr: string;
    titel: string;
    producer: PmgUserInterface;
    owner: PmgUserInterface;
    amountOfVideos: number;
}
