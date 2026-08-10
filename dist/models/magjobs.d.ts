export interface MagJobViewModel {
    jobCode: string;
    title: string;
    briefing: string;
    customerReference: string | null;
    jobKind?: string;
    magazine?: string;
    comsec?: string;
    updatedAt?: Date | string;
    updatedBy?: string;
    baseFor?: string | null;
    inlasMagazine?: string | null;
    base?: string;
    parts?: string[];
    language?: string;
    planner?: string;
    status?: MagJobActionStatusEnum;
    customerContact?: string | null;
    pages?: number | null;
    characters?: number | null;
    section?: string | null;
}
export declare enum MagJobActionStatusEnum {
    DONE = "DONE",
    TODO = "TODO",
    BUSY = "BUSY",
    DELETED = "DLTD",
    NO_STATUS = "----"
}
export interface MagJobActionViewModel {
    id: number;
    actionCode: string;
    actionName: string | null;
    parent: string | null;
    parentFullName: string | null;
    status: MagJobActionStatusEnum;
    startDate: Date | string | null;
    endDate: Date | string | null;
    volumeTodo: number | null;
    volumeDone: number | null;
    unit: string | null;
    updater: string | null;
    updatedAt: Date | string | null;
}
export declare class MagJobSaveRequest {
    title: string | undefined;
    briefing: string | undefined;
    inlasMagazine: string | undefined;
    baseJobCode: string | undefined;
    parts: string[] | undefined;
    language: string | undefined;
    customerReference: string | undefined;
    customerContactNumber: string | undefined;
    numberOfPages: number | undefined;
    numberOfCharacters: number | undefined;
    rubriek: string | undefined;
}
