export declare class PmgUserModel {
    id?: number;
    code?: string;
    firstName?: string;
    lastName?: string;
    constructor(pmgUserInterface: PmgUserInterface);
}
export type PmgUserInterface = Partial<PmgUserModel>;
