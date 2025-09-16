import { BcCompanyViewModel } from "./company";
import { FileListViewModel } from "./files";
import { SelectOptionViewModel } from "./selectoption";
export interface BestChoiceCategories {
    code: string;
    name: string;
    categories: {
        code: string;
        name: string;
        tools: {
            code: number;
            name: string;
        }[];
    }[];
}
export interface BestChoiceParticipationView {
    projectCode: string;
    contextCode: string;
    categoryCode: string;
    statusId: number;
    activeStep: number;
    toolId: number;
    klnr: string;
    firstName: string;
    lastName: string;
    email: string;
    company: BcCompanyViewModel;
}
export interface BestChoiceEditModel {
    key: string;
    project: string;
    uid: string;
    id: number;
    tool: number;
    contextCode: string;
    category: string;
    company: BcCompanyViewModel | undefined;
    contact: {
        firstName: string;
        lastName: string;
        email: string;
    };
}
export interface BestChoiceSpecInputs {
    imageFormat: string;
    imageMinWidth: number;
    productType: number;
    items: {
        code: string;
        inputs: {
            name: string;
            unit: string;
            type: string;
            code: number;
            length: number | null;
            info: string | null;
            values: SelectOptionViewModel[];
            required: boolean;
        }[];
    }[];
}
export interface BestChoiceDocuments {
    images: FileListViewModel[];
    documents: FileListViewModel[];
}
export interface BestChoiceParticipationReturn {
    uid: string;
    id: number;
}
export interface BestChoiceTileViewModel {
    id: number;
    reference: string;
    title: string;
    type: number;
    description: string;
    isPremium: boolean;
    fileId: number;
    imageUrl: string;
    portalDomain?: string;
    customerReference?: string | null;
    displayDate: string;
    customerName: string | null;
    customerCity: string | null;
    project: string;
}
export interface BestChoiceProductViewModel {
    id: number;
    brand: string;
    type: string;
    imageUrl: string;
    specs: {
        id: number;
        participantId: number;
        score: string | number | boolean;
    }[];
}
export interface BestChoiceTipsViewModel {
    videoCode: string;
    title: string;
}
export interface BestChoiceDealsViewModel {
    id: number;
    reference: string;
    title: string;
    imageUrl: string;
    redirectUrl: string;
}
export interface BestChoiceSpecsViewModel {
    id: number;
    name: string;
    unit: string;
    type: string;
}
export interface BestChoiceInfoViewModel extends BestChoiceTileViewModel {
    videoCode: string | null;
}
