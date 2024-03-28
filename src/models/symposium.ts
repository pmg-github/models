import { SelectOptionViewModel } from "./selectoption";

export interface SymposiumUserTypeViewModel extends SelectOptionViewModel{}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel{}

export interface SymposiumPostResultViewModel {
    id: number;
    name: string;
    imageUrl: string;
}

export interface SymposiumPostViewModel {
    id: number;
    name: string; 
    description: string;
    imageUrl: string;
    addressId: number;
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