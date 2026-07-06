export interface MagJobViewModel {
    jobCode: string;
    title: string;
    briefing: string;
}
export declare enum MagJobActionStatusEnum {
    DONE = "DONE",
    TODO = "TODO",
    BUSY = "BUSY",
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
