import { IsNotEmpty, Length, ValidateIf } from "class-validator";

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

  @ValidateIf(
    (obj: TranslationSaveRequest, val: string) => obj.portalCode != undefined
  )
  @Length(4, 4)
  portalCode!: string | undefined;

  constructor(data: Partial<TranslationSaveRequest>) {
    Object.assign(this, data);
  }
}
