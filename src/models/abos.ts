import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateIf,
  Matches,
  Length,
} from "class-validator";

export class ProefAboCreateModel {
  @IsNotEmpty()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  phone!: string;

  @MinLength(6)
  password!: string;

  // adress
  @IsNotEmpty()
  street!: string;

  @IsNotEmpty()
  streetNumber!: string;

  streetBoxNumber: string | undefined = undefined;

  @IsNotEmpty()
  zipCode!: string;

  @IsNotEmpty()
  city!: string;

  @IsNotEmpty()
  @Length(2, 2)
  countryCode!: string;

  type!: string;

  @ValidateIf((obj: ProefAboCreateModel, val: string) => obj.type == "b2b")
  @IsNotEmpty()
  @Matches(
    /^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/
  )
  vat!: string;

  @ValidateIf((obj: ProefAboCreateModel, val: string) => obj.type == "b2b")
  @IsNotEmpty()
  companyName!: string;

  constructor(data: Partial<ProefAboCreateModel>) {
    Object.assign(this, data);
  }
}
