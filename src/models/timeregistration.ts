export interface TimeRegistrationViewModel {
    hoursWorked: string,
    hoursBreak: string, 
    hoursShort: string,
    records: TimeRegistrationRecordModel[],
}

export interface TimeRegistrationRecordModel {
    time: string,
    name: string, 
}
