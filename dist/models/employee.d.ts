export interface EmployeesSearchListModel {
    code: string;
    firstName: string;
    lastName: string;
    internalPhoneNumber: string;
    teamName: string;
    functionName: string;
    presenceStatus: string;
    lastActivityTime: string;
}
export interface EmployeesSearchCursorListModel {
    nextCursor: string;
    content: EmployeesSearchListModel[];
}
export interface EmployeeDetailModel {
    code: string;
    firstName: string;
    lastName: string;
    internalPhoneNumber: string;
    privateMobileNumber: string;
    teamName: string;
    functionName: string;
    presenceStatus: string;
    lastActivityTime: string;
    todayWorkSchedule: EmployeeWorkSchedule;
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
