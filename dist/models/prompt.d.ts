export interface PromptListModel {
    id: string;
    name: string;
}
export type PromptJson = null | boolean | number | string | PromptJson[] | {
    [key: string]: PromptJson;
};
export interface PromptModel {
    id: number;
    reference: string;
    prompt: string;
    optionsJson: PromptJson;
    createdAt: Date | string;
    updatedAt: Date | string;
}
export interface PromptFileModel {
    id: number;
    reference: string;
    fileId: number;
    portalCode: string | null;
    isDeleted: number;
}
export declare class PromptSaveRequest {
    id?: number;
    reference: string;
    prompt: string;
    optionsJson?: PromptJson;
    files?: string[];
    constructor(data: Partial<PromptSaveRequest>);
}
export declare class PromptFileSaveRequest {
    id?: number;
    reference: string;
    fileId: number;
    portalCode?: string | null;
    constructor(data: Partial<PromptFileSaveRequest>);
}
