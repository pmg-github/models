import { PmgUserInterface } from "./pmguser";

export interface BoVideoViewModel {
  id: number
  jobNr: string
  titel: string
  producer: PmgUserInterface
  owner: PmgUserInterface
  amountOfVideos: number
}
export interface BoVideoListViewModel {
  id: number
  origin:string
  jobNr: string
  languageCode: string
  updatedAt: string
  status: string
  voiceOverLanguageCode: string
  subTitlesLanguageCode: string
}
