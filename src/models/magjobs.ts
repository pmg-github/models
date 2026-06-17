export interface MagJobViewModel {
  jobCode: string;
  title: string;
  briefing: string;
}

export enum MagJobStatusEnum {
  DONE = "DONE",
  TODO = "TODO",
  BUSY = "BUSY",
}
