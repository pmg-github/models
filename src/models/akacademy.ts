import { IsNotEmpty } from "class-validator";

export class AKAcademyAccredationRequest {
  @IsNotEmpty()
  contactId!: number;

  @IsNotEmpty()
  activityNumber!: number;

  @IsNotEmpty()
  title!: string;

  constructor(data: Partial<AKAcademyAccredationRequest>) {
    Object.assign(this, data);
  }
}
