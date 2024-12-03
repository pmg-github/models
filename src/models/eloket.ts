export interface PollViewModel {
  eloketId: number;
  eloketFieldId: number;
  reference: string;
  title: string;
  question: string;
  url: string;
  answers: PollAnswerViewModel[];
}

export interface PollAnswerViewModel {
  eloketFieldId: number;
  eloketFieldOptionId: number;
  answer: string;
  url: string;
}
