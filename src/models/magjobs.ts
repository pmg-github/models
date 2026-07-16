import { IsNotEmpty } from "class-validator";

export interface MagJobViewModel {
  jobCode: string;
  title: string;
  briefing: string;
  customerReference: string | null;
}

export enum MagJobActionStatusEnum {
  DONE = "DONE",
  TODO = "TODO",
  BUSY = "BUSY",
  NO_STATUS = "----", // Fernand logic
}

export interface MagJobActionViewModel {
  id: number;
  actionCode: string;
  actionName: string | null;
  parent: string | null;
  parentFullName: string | null;
  status: MagJobActionStatusEnum;
  startDate: Date | string | null;
  endDate: Date | string | null;
  volumeTodo: number | null;
  volumeDone: number | null;
  unit: string | null;
  updater: string | null;
  updatedAt: Date | string | null;
}

export class MagJobSaveRequest {
  // Not sure what validation rules should be on here, for now no validtion rules, everything is optional
  title: string | undefined;
  briefing: string | undefined;
  inlasMagazine: string | undefined;
  baseJobCode: string | undefined;
  parts: string[] | undefined;
  language: string | undefined;
  customerReference: string | undefined;
  customerContactNumber: string | undefined;
  numberOfPages: number | undefined;
  numberOfCharacters: number | undefined;
  rubriek: string | undefined;
}
