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
