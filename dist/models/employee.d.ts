export interface EmployeesSearchListModel {
    code: string;
    firstName: string;
    lastName: string;
    internalPhoneNumber: string;
    privateMobileNumber: string;
    teamName: string;
    functionName: string;
    presenceStatus: string;
    lastActivityTime: string;
    workSchedule: EmployeeWorkSchedule;
}
export interface EmployeeWorkSchedule {
    dayOfWeek: number;
    morning: {
        startHour: string | null;
        endHour: string | null;
    };
    afternoon: {
        startHour: string | null;
        endHour: string | null;
    };
}
