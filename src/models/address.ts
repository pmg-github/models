import { IsNotEmpty, Length, Matches, ValidateIf } from "class-validator";

export class AddressViewModel {
  street: string | undefined = undefined;
  streetNumber: string | undefined = undefined;
  streetBoxNumber: string | undefined = undefined;
  city: string | undefined = undefined;
  zipCode: string | undefined = undefined;
  countryCode: string | undefined = undefined;
}

export class AddressContactCreateRequest {
  @IsNotEmpty()
  street!: string;

  @IsNotEmpty()
  streetNumber!: string;

  streetBoxNumber!: string;

  @IsNotEmpty()
  city!: string;

  @IsNotEmpty()
  zipCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  countryCode!: string;

  // Company stuff
  type!: string;
  public get isB2b(): boolean {
    return this.type == "b2b";
  }

  @ValidateIf((obj: AddressContactCreateRequest, val: string) => obj.isB2b)
  @IsNotEmpty()
  @Matches(
    /^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/
  )
  vat!: string;

  @ValidateIf((obj: AddressContactCreateRequest, val: string) => obj.isB2b)
  @IsNotEmpty()
  companyName!: string;

  constructor(data: Partial<AddressContactCreateRequest>) {
    Object.assign(this, data);
  }
}
