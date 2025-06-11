export interface SelectOptionViewModel {
    key: string;
    value: number | string;
}
export declare class SelectOptionViewModelDto {
    key: string;
    value: string;
    constructor(data: Partial<SelectOptionViewModelDto>);
}
export interface SelectOptionIconViewModel extends SelectOptionDescriptionViewModel {
    Icon: string;
}
export interface SelectOptionDescriptionViewModel extends SelectOptionViewModel {
    description?: string;
}
export interface SelectOptionDescriptionTagsViewModel extends SelectOptionDescriptionViewModel {
    tags?: string;
}
