export interface TimeRegistrationViewModel {
    status: TimeRegistrationStatusEnum;
    hoursWorked: string;
    hoursBreak: string;
    hoursShort: string;
    records: TimeRegistrationRecordModel[];
    agendaRecords: TimeRegistrationAgendaRecordModel[];
}
export interface TimeRegistrationRecordModel {
    time: string;
    actionName: string;
    locationName: string | null;
    info: string | null;
    isFromTimeServer: boolean;
    isDeleted: boolean;
}
export interface TimeRegistrationAgendaRecordModel {
    time: string;
    categorieName: string;
}
export interface TimeRegistrationActionListModel {
    id: number;
    name: string;
}
export interface TimeRegistrationLocationListModel {
    id: number;
    name: string;
}
export declare enum TimeRegistrationStatusEnum {
    TO_APPROVE = 1,
    APPROVED = 2,
    DENIED = 3
}
export interface TimeRegistrationBaseOverviewModel {
    hoursScheduled: string;
    hoursWorked: string;
    hoursWorkedFromHome: string;
    hoursAbsent: string;
}
export interface TimeRegistrationOverviewModel extends TimeRegistrationBaseOverviewModel {
    status: TimeRegistrationStatusEnum;
    date: Date | string;
}
export interface TimeRegistrationTotalsViewModel extends TimeRegistrationBaseOverviewModel {
    hoursOvertime: string;
    absenceData: TimeRegistrationAbsenceModel[];
}
export interface TimeRegistrationAbsenceModel {
    name: string;
    hoursAbsent: string;
}
export declare class TimeRegistrationRecordCreateRequest {
    date: string;
    time: string;
    actionId: number;
    locationId: number;
    info: string | undefined | null;
    constructor(data: Partial<TimeRegistrationRecordCreateRequest>);
}
