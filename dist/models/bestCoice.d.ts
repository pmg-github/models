import { BcCompanyViewModel } from "./company";
export interface BestChoiceCategories {
    code: string;
    name: string;
    categories: {
        code: string;
        name: string;
        tools: {
            code: string;
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
