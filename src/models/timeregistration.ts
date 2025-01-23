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
  date: string;
  status: TimeRegistrationStatusEnum;
  hoursWorked: string;
  hoursBreak: string;
  hoursShort: string;
  records: TimeRegistrationRecordModel[];
}

export interface TimeRegistrationRecordModel {
  time: string;
  name: string;
  info: string;
}

export enum TimeRegistrationStatusEnum {
  ToApprove = "goed te keuren",
  Approved = "goedgekeurd",
  Denied = "afgekeurd",
}

export class TimeRegistrationRecordCreateRequest {
  @IsNotEmpty()
  @IsDateString()
  date!: string;

  @IsNotEmpty()
  @IsMilitaryTime()
  time!: string;

  @IsNotEmpty()
  @IsNumber()
  actionId!: number;

  @IsNotEmpty()
  @IsNumber()
  locationId!: number;

  @IsOptional()
  @MaxLength(255)
  info: string | undefined | null;

  constructor(data: Partial<TimeRegistrationRecordCreateRequest>) {
    Object.assign(this, data);
  }
}
