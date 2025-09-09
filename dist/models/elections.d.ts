export interface ElectionsViewModel {
    id: number;
    title: string;
    info: null;
    shareTitle: string;
    shareInfo: null;
    shareImage: null;
    voteUntil: string;
    voteFrom: string;
    typeId: 1;
    askMotivation: 0;
    redirectToForm: 1;
    rulesPage: string;
    amountOfVotes: number;
    whiteStars: boolean;
    tiebreaker: boolean;
    tiebreakerText?: string;
    context?: string;
    interesse?: string;
    tool?: string;
    participants: {
        id: number;
        title: string;
        subTitle: string;
        imageUrl: string;
    }[];
}
