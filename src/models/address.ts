import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  Length,
  Matches,
  MaxLength,
  ValidateIf,
} from "class-validator";

export class AddressHelper {
  // remove spaces and dots for a clean comparison
  static cleanVat(vatNumber: string): string {
    if (!vatNumber) {
      return "";
    }
    return vatNumber.replaceAll(" ", "").replaceAll(".", "");
  }
}

export class AddressViewModel {
  id: number | undefined = undefined;
  attention: string | undefined = undefined;
  street: string | undefined = undefined;
  streetNumber: string | undefined = undefined;
  streetBoxNumber: string | undefined = undefined;
  city: string | undefined = undefined;
  zipCode: string | undefined = undefined;
  countryCode: string | undefined = undefined;
  companyReference: string | undefined = undefined;
  companyName: string | undefined = undefined;
  companyVat: string | undefined = undefined;
  companyNumber: string | undefined = undefined;
  isEditable: boolean | undefined = undefined;
}

export class AddressContactCreateRequest {
  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  @IsOptional()
  attention?: string;

  @IsNotEmpty()
  @MaxLength(355)
  street!: string;

  @IsNotEmpty()
  @MaxLength(50)
  streetNumber!: string;

  @MaxLength(50)
  streetBoxNumber!: string;

  @IsNotEmpty()
  @MaxLength(255)
  city!: string;

  @MaxLength(20)
  @IsNotEmpty()
  zipCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  countryCode!: string;

  // Company stuff
  @IsNotEmpty()
  @IsBoolean()
  isB2b!: boolean;

  @ValidateIf((obj: AddressContactCreateRequest, val: string) => obj.isB2b)
  @IsNotEmpty()
  @MaxLength(80)
  companyName!: string;

  // @ValidateIf((obj: AddressContactCreateRequest, val: string) => obj.isB2b)
  // @IsNotEmpty()
  // @Matches(
  //   /^(ATU|BE0|BG|CHE|CY|CZ|DE|DK|EE|EL|ES|FI|FR|GB|GR|HR|HU|IE|IT|LT|LU|LV|MT|NL|PL|PT|RO|SE|SI|SK)[\s-.]?[0-9A-Z]{2,12}[\s-.]?/
  // )
  @IsOptional()
  vat!: string;

  @IsOptional()
  companyNumber?: string;

  constructor(data: Partial<AddressContactCreateRequest>) {
    Object.assign(this, data);
  }
}

//  TODO: make create request an extension of this class
export class AddressContactUpdateRequest {
  @IsNotEmpty()
  @MaxLength(355)
  street!: string;

  @IsNotEmpty()
  @MaxLength(50)
  streetNumber!: string;

  @IsOptional()
  @MaxLength(50)
  streetBoxNumber!: string;

  @IsNotEmpty()
  @MaxLength(255)
  city!: string;

  @MaxLength(20)
  @IsNotEmpty()
  zipCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  countryCode!: string;

  @IsOptional()
  @MaxLength(255)
  attention?: string;

  // Company stuff CANNOT be changed later on!!!

  constructor(data: Partial<AddressContactUpdateRequest>) {
    Object.assign(this, data);
  }
}
