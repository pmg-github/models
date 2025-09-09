import { IsNumber, IsOptional, IsString } from "class-validator";

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

export interface SelectedParticipants {
  id: number;
  amount: number;
  motivationAnser?:string
}

export class SubmitVote {
  @IsNumber()
  electionId!: number;
  @IsOptional()
  selectedParticipants!: SelectedParticipants[];
  @IsOptional()
  @IsString()
  tiebreakerAnser!: string;

  constructor(data: Partial<SubmitVote>) {
    Object.assign(this, data);
  }
}
