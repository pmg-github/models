import { IsNotEmpty, IsNumber, IsString } from "class-validator";
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
  }[];
  customer: CompanyCardViewModel;
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
