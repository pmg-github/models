export interface SelectOptionViewModel {
    key: string;
    value: number | string | boolean;
}
export declare class SelectOptionViewModelDto {
    key: string;
    value: string | number;
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
