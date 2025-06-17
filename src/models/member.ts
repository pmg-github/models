import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  ValidateIf,
} from "class-validator";

export class MemberCreateRequest {
  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  language!: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  selectedAboProductId!: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(60)
  email!: string;
  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;

  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  isB2B!: boolean;

  @IsOptional()
  klnr?: string;

  @ValidateIf((o) => o.isB2B && !o.klnr)
  @IsNotEmpty()
  vatNumber?: string;
  @ValidateIf((o) => o.isB2B && !o.klnr)
  @IsNotEmpty()
  companyName?: string;

  @IsNotEmpty()
  hasDifferentInvoiceAddress!: boolean;

  @IsOptional()
  deliveryAddressId?: number;
  @IsOptional()
  invoiceAddressId?: number;

  @ValidateIf((o) => !o.deliveryAddressId)
  @IsNotEmpty()
  deliveryStreet?: string;
  @ValidateIf((o) => !o.deliveryAddressId)
  @IsNotEmpty()
  deliveryStreetNumber?: string;
  @IsOptional()
  deliveryStreetBoxNumber?: string;
  @ValidateIf((o) => !o.deliveryAddressId)
  @IsNotEmpty()
  deliveryZipCode?: string;
  @ValidateIf((o) => !o.deliveryAddressId)
  @IsNotEmpty()
  deliveryCity?: string;
  @ValidateIf((o) => !o.deliveryAddressId)
  @IsNotEmpty()
  deliveryCountryCode?: string;

  @ValidateIf((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId)
  @IsNotEmpty()
  invoiceStreet?: string;
  @ValidateIf((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId)
  @IsNotEmpty()
  invoiceStreetNumber?: string;
  @IsOptional()
  invoiceStreetBoxNumber?: string;
  @ValidateIf((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId)
  @IsNotEmpty()
  invoiceZipCode?: string;
  @ValidateIf((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId)
  @IsNotEmpty()
  invoiceCity?: string;
  @ValidateIf((o) => o.hasDifferentInvoiceAddress && !o.invoiceAddressId)
  @IsNotEmpty()
  invoiceCountryCode?: string;

  constructor(data: Partial<MemberCreateRequest>) {
    Object.assign(this, data);
  }
}
