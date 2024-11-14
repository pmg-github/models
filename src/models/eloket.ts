export interface PollViewModel {
  eloketId: number;
  eloketFieldId: number;
  reference: string;
  question: string;
  url: string;
  answers: PollAnswerViewModel[];
}

export interface PollAnswerViewModel {
  eloketFieldOptionId: number;
  answer: string;
  url: string;
}
