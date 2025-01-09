import { SelectOptionViewModel } from "./selectoption";
export interface SymposiumUserTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumPostResultViewModel {
    id: number;
    title: string;
    imageUrl: string;
    companyName: string;
    companyReference: string;
    city: string;
    tags: string[];
}
export interface SymposiumPostViewModel {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    addressId: number;
    companyName: string;
    companyReference: string;
    city: string;
    tags: string[];
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
