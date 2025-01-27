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
export interface TimeRegistrationActionListModel {
    id: number;
    reference: string;
    name: string;
}
export interface TimeRegistrationLocationListModel {
    id: number;
    reference: string;
    name: string;
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
    locationId: number;
    info: string | undefined | null;
    constructor(data: Partial<TimeRegistrationRecordCreateRequest>);
}
