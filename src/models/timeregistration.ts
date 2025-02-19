import {
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsTimeZone,
  MaxLength,
} from "class-validator";

export interface TimeRegistrationViewModel {
  status: TimeRegistrationStatusEnum;
  hoursWorked: string;
  hoursBreak: string;
  hoursShort: string;
  records: TimeRegistrationRecordModel[];
}

export interface TimeRegistrationRecordModel {
  time: string;
  actionName: string;
  locationName: string | null;
  info: string | null;
  isFromTimeServer: boolean;
  isDeleted: boolean;
}

export interface TimeRegistrationActionListModel {
  id: number;
  name: string;
}

export interface TimeRegistrationLocationListModel {
  id: number;
  name: string;
}

export enum TimeRegistrationStatusEnum {
  TO_APPROVE = 1,
  APPROVED = 2,
  DENIED = 3,
}

export class TimeRegistrationRecordCreateRequest {
  @IsNotEmpty()
  @IsDateString()
  date!: string;

  @IsNotEmpty()
  time!: string;

  @IsNotEmpty()
  @IsNumber()
  actionId!: number;

  @IsNumber()
  locationId!: number;

  @IsOptional()
  @MaxLength(255)
  info: string | undefined | null;

  constructor(data: Partial<TimeRegistrationRecordCreateRequest>) {
    Object.assign(this, data);
  }
}
