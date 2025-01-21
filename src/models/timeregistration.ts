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
