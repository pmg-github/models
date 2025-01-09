import { IsNotEmpty, Length, MaxLength, ValidateIf } from "class-validator";

export class DeeplTranslationRequest {
  @IsNotEmpty()
  @MaxLength(5000) // for now limit this to 5000 characters at once!!!
  text!: string;

  @IsNotEmpty()
  @Length(2, 2)
  sourceLang!: string;

  @IsNotEmpty()
  @Length(2, 2)
  targetLang!: string;

  constructor(data: Partial<DeeplTranslationRequest>) {
    Object.assign(this, data);
  }
}

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
