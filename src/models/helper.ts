import { IsNotEmpty } from "class-validator";

export class SimpleSortSaveRequest {
  @IsNotEmpty()
  ids!: number[];

  constructor(data: Partial<SimpleSortSaveRequest>) {
    Object.assign(this, data);
  }
}
