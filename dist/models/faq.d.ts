export interface FaqViewModel {
    question: string;
    answer: string;
}
export interface BoFaqListViewModel {
    id: number;
    question: string;
    category: string;
    portalName: string;
    portalCode: string;
    status: string;
}
export interface BoFaqDetailViewModel {
    id: number;
    questionNl: string;
    questionFr: string;
    answerNl: string;
    answerFr: string;
    categoryIds: number[];
    portalCodes: string[];
    statusId: number;
}
