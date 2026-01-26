import { SelectOptionViewModel } from "./selectoption";
import { CompanyCardViewModel } from "./company";
export interface PubPollViewModel {
    id: number;
    question: string;
    label: string;
    colorScheme: string;
    reference: string;
    amountOfVotes: number;
    button?: string;
    successMessage?: string;
    answers: {
        id: number;
        answer: string;
        amountOfVotes: number;
        hasVoted: boolean;
    }[];
    customer: CompanyCardViewModel;
    orderLineNumber: string;
    url: string;
}
export declare class PubPollDto {
    pollId: number;
    answerIds: number[];
    orderLineNumber?: string;
    constructor(data: Partial<PubPollDto>);
}
export interface BoPollViewListModel {
    id: number;
    question: string;
    name: string;
    status: string;
    amountOfVotes: number;
}
export interface BoPollViewModel {
    id: number;
    jobCode: SelectOptionViewModel;
    questionNl: string;
    questionFr: string;
    questionEn: string;
    labelNl: string;
    labelFr: string;
    labelEn: string;
    buttonNl: string;
    buttonFr: string;
    buttonEn: string;
    succesMessageNl: string;
    succesMessageFr: string;
    succesMessageEn: string;
    isMultiple: boolean;
    isTest: boolean;
    name: string;
    description?: string;
    status: SelectOptionViewModel;
    color?: SelectOptionViewModel;
    answers: {
        id: number;
        answerNl: string;
        answerFr: string;
        answerEn: string;
        isWright: boolean;
    }[];
}
