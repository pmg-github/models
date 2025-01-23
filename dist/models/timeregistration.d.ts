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
export declare enum TimeRegistrationStatusEnum {
    ToApprove = "goed te keuren",
    Approved = "goedgekeurd",
    Denied = "afgekeurd"
}
export declare class TimeRegistrationRecordCreateRequest {
    date: string;
    time: string;
    actionId: number;
    info: string | undefined | null;
    constructor(data: Partial<TimeRegistrationRecordCreateRequest>);
}
