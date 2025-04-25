import { IsNotEmpty, Length } from "class-validator";

export class SearchResultsSaveRequest {
  @IsNotEmpty()
  keyword!: string;

  @IsNotEmpty()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;
  
  @IsNotEmpty()
  NrOfResults!: number;

  constructor(data: Partial<SearchResultsSaveRequest>) {
    Object.assign(this, data);
  }
}
