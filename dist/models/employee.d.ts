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
export declare enum Gender {
    M = "M",
    F = "F"
}
export interface PMGCompanyListModule {
    code: string;
    name: string;
}
export interface civilStatusListModel {
    code: string;
    name: string;
}
export interface contractTypeListModel {
    code: string;
    name: string;
}
export interface EmployeeFunctionListModel {
    code: string;
    name: string;
}
export interface EmployeeTeamListModel {
    code: string;
    name: string;
}
export declare class CreateEmployee {
    parentCode: string;
    internNumber?: string;
    PMGCompany?: string;
    timeTable?: string;
    lastName?: string;
    firstName?: string;
    gender?: Gender;
    streetAdres?: string;
    zipCode?: string;
    city?: string;
    civilStatus?: string;
    partner?: string;
    birthDate?: string;
    birthPlace?: string;
    nationalRegistrationNumber?: string;
    sisKaart?: string;
    phone?: string;
    mobile?: string;
    bankAccount?: string;
    email?: string;
    startDate?: string;
    permanentStartDate?: string;
    endDate?: string;
    contractType?: string;
    ownCompany?: string;
    hasCompanyPhone?: boolean;
    hasSimCard?: boolean;
    hasVisa?: boolean;
    hasLaptop?: boolean;
    hasCardReader?: boolean;
    mayWorkFromHome?: boolean;
    isExecutive?: boolean;
    hasRecup?: boolean;
    timeRegistration?: boolean;
    employeeNumber?: string;
    carPlate?: string;
    idCardNr?: string;
    idCardValidFrom?: string;
    idCardValidUntil?: string;
    workplace?: string;
    personId?: number;
    allowSearch?: boolean;
    languagePreference?: "nl" | "fr" | "en";
    constructor(data: Partial<CreateEmployee>);
}
