import { IsNumber, IsOptional, IsString } from "class-validator";
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
  withStars: boolean;
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
export interface participantDetailViewModel {
  id: number;
  participantId: number;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  images: FileListViewModel[];
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
  @IsNumber()
  tiebreakerAnser!: number;

  constructor(data: Partial<SubmitVote>) {
    Object.assign(this, data);
  }
}
