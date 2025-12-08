import { SelectOptionViewModel } from "./selectoption";
import { CompanyCardViewModel } from "./company";
export interface PubPollViewModel {
    id: number;
    question: string;
    colorScheme: string;
    amountOfVotes: number;
    answers: {
        id: number;
        answer: string;
        amountOfVotes: number;
        hasVoted: boolean;
    }[];
    customer: CompanyCardViewModel;
    orderLineNumber: string;
    hasVoted: boolean;
}
export declare class PubPollDto {
    pollId: number;
    answerId: number;
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
    name: string;
    description?: string;
    status: SelectOptionViewModel;
    color: SelectOptionViewModel;
    answers: {
        id: number;
        answerNl: string;
        answerFr: string;
        answerEn: string;
    }[];
}
