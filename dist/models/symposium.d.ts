import { SelectOptionViewModel } from "./selectoption";
export interface SymposiumUserTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel {
}
export interface SymposiumPostResultViewModel {
    id: number;
    title: string;
    imageUrl: string;
    tags: string[];
}
export interface SymposiumPostViewModel {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    addressId: number;
    tags: string[];
}
export interface SymposiumContactInfoViewModel {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string | null;
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
    fileId: number;
    addressId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    wesbite: string;
    isLive: boolean;
}
export declare class SymposiumPostMultiLanguageField {
    language: string;
    title: string;
    description: string;
}
export declare class SymposiumPostSaveRequest extends SymposiumPostCreateRequest {
    id: number;
}
