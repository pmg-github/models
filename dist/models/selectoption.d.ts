export interface SelectOptionViewModel {
    key: string;
    value: number | string;
}
export interface SelectOptionDescriptionViewModel extends SelectOptionViewModel {
    description?: string;
}
