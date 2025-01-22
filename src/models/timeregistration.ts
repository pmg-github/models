import { IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsTimeZone, MaxLength } from "class-validator";

export interface TimeRegistrationViewModel {
    status: TimeRegistrationStatusEnum
    hoursWorked: string,
    hoursBreak: string, 
    hoursShort: string,
    records: TimeRegistrationRecordModel[],
}

export interface TimeRegistrationRecordModel {
    time: string,
    name: string, 
}

export enum TimeRegistrationStatusEnum {
    Approved = 'goedgekeurd',
    ToApprove = 'goed te keuren'
}

export class TimeRegistrationRecordCreateRequest {
    @IsNotEmpty()
    @IsDateString()
    date!: string

    @IsNotEmpty()
    @IsMilitaryTime()
    time!: string

    @IsNotEmpty()
    @IsNumber()
    functionId!: number

    @IsOptional()
    info: string | undefined | null

  constructor(data: Partial<TimeRegistrationRecordCreateRequest>) {
    Object.assign(this, data);
  }
}