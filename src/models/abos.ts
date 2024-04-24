import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateIf,
  Matches,
} from "class-validator";

export class ProefAboCreateModel {
  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @MinLength(6)
  password!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  countryCode!: string;

  type!: string;

  @ValidateIf((obj: ProefAboCreateModel, val: string) => obj.type == "b2b")
  @Matches(
    /^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/
  )
  vatNumber!: string;

  constructor(data: Partial<ProefAboCreateModel>) {
    Object.assign(this, data);
  }
}
