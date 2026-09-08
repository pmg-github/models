import { FileListViewModel } from "./files";
export interface ElectionsViewModel {
    id: number;
    title: string;
    info: null;
    shareTitle: string;
    shareInfo: null;
    shareImage: null;
    voteUntil: string;
    voteFrom: string;
    typeId: number;
    askMotivation: boolean;
    hasVoted: boolean;
    redirectToForm: string;
    rulesPage: string;
    amountOfVotes: number;
    minVotes: number;
    uniquePoints: boolean;
    withStars: boolean;
    tiebreaker: boolean;
    tiebreakerText?: string;
    context?: string;
    interesse?: string;
    tool?: string;
    showResultsAfter: boolean;
    participants: {
        id: number;
        eventParticipantsId: number;
        title: string;
        subTitle: string;
        imageUrl: string;
        numberOfVotes: number;
    }[];
}
export interface ParticipantDetailPageViewModel {
    id: number;
    participantId: number;
    merkTypeId: number;
    company: string;
    subTitle: string;
    product: string;
    project: string;
    description: string;
    imageUrl: string;
    projectLink: string;
    specs: {
        id: number;
        name: string;
        score: string | number | boolean;
    }[];
    images: FileListViewModel[];
    documents: FileListViewModel[];
}
export interface SelectedParticipants {
    id: number;
    amount: number;
    motivationAnser?: string;
}
export declare class SubmitVote {
    electionId: number;
    selectedParticipants: SelectedParticipants[];
    tiebreakerAnser: number;
    constructor(data: Partial<SubmitVote>);
}
