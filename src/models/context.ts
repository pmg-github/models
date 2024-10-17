import { InterestViewModel } from "./interest";

export interface ContextViewModel {
  id: number;
  code: string;
  name: string;
  interests: InterestViewModel[] | undefined;
}
