import { SelectOptionViewModel } from "./selectoption";
export interface PubPollViewModel {
    id: number;
    question: string;
    colorScheme: null;
    amountOfVotes: number;
    answers: {
        id: number;
        answer: string;
        amountOfVotes: number;
    }[];
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
    questionDe: string;
    name: string;
    description: string;
    status: SelectOptionViewModel;
    answers: {
        id: number;
        answerNl: string;
        answerFr: string;
        answerEn: string;
        answerDe: string;
    }[];
}
