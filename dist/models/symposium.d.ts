import { SelectOptionViewModel } from "./selectoption";
export interface SymposiumUserTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumPostBaseViewModel {
    id: number;
    title: string;
    imageUrl: string;
    companyName: string;
    companyReference: string;
    searchType: string;
    city: string;
    tags: string[];
    removeAfterDate: Date | string | null;
    isLive: boolean | number;
}
export interface SymposiumPostResultViewModel extends SymposiumPostBaseViewModel {
}
export interface SymposiumPostViewModel extends SymposiumPostBaseViewModel {
    description: string;
    addressId: number;
}
export interface SymposiumContactInfoViewModel {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    website: string | null;
    linkedin: string | null;
    facebook: string | null;
}
export interface SymposiumFilterViewModel {
    id: number;
    name: string;
    options: SymposiumFilterOptionViewModel[];
}
export interface SymposiumFilterOptionViewModel {
    id: number;
    name: string;
}
export declare class SymposiumPostCreateRequest {
    klnr: string;
    searchTypeId: number;
    categoryIds: number[];
    multiLanguageFields: SymposiumPostMultiLanguageField[];
    fileId: number | undefined;
    addressId: number;
    removeAfterDate: string;
    isLive: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website: string;
    constructor(data: Partial<SymposiumPostCreateRequest>);
}
export declare class SymposiumPostMultiLanguageField {
    language: string;
    title: string;
    description: string;
    constructor(data: Partial<SymposiumPostMultiLanguageField>);
}
export declare class SymposiumPostSaveRequest extends SymposiumPostCreateRequest {
    id: number;
    constructor(data: Partial<SymposiumPostSaveRequest>);
}
