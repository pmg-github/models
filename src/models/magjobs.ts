export interface MagJobViewModel {
  jobCode: string;
  title: string;
  briefing: string;
}

export enum MagJobActionStatusEnum {
  DONE = "DONE",
  TODO = "TODO",
  BUSY = "BUSY",
  NO_STATUS = "----", // Fernand logic
}
