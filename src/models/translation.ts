import { IsNotEmpty, Length } from "class-validator";

export class TranslationSaveRequest {
  @IsNotEmpty()
  appId!: number;

  @IsNotEmpty()
  key!: string;

  @IsNotEmpty()
  value!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  portalCode!: string | undefined;

  constructor(data: Partial<TranslationSaveRequest>) {
    Object.assign(this, data);
  }
}
