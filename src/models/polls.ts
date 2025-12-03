import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

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

export class PubPollDto {
  @IsNotEmpty()
  @IsNumber()
  pollId!: number;

  @IsNotEmpty()
  @IsNumber()
  answerId!: number;

  @IsNotEmpty()
  @IsString()
  orderLineNumber?: string;

  constructor(data: Partial<PubPollDto>) {
    Object.assign(this, data);
  }
}
