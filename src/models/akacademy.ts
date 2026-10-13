import { IsDateString, IsNotEmpty } from "class-validator";

export class AKAcademyAccredationRequest {
  @IsNotEmpty()
  contactId!: number;

  @IsNotEmpty()
  activityNumber!: number;

  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  @IsDateString()
  completedAt!: string;

  constructor(data: Partial<AKAcademyAccredationRequest>) {
    Object.assign(this, data);
  }
}
