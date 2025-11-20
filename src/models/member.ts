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
  @Length(36, 36)
  userUuid!: string;

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

  @IsOptional()
  discountCode?: string;

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
  companyName?: string;
  // Either vatNumber or companyNumber must be provided
  @IsOptional()
  vatNumber?: string;
  @IsOptional()
  companyNumber?: string;

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
  @IsOptional()
  deliveryAttention?: string | undefined;

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
  @IsOptional()
  invoiceAttention?: string | undefined;

  constructor(data: Partial<MemberCreateRequest>) {
    Object.assign(this, data);
  }
}

export interface MemberDiscount {
  id: number;
  code: string;
  name: string;
  discountPercentage: string; // Somehow MySQL decimals are parsed as a string when using knex (result of mysql driver, done to prevent prevision loss)
  startsAt: Date | string | null;
  endsAt: Date | string | null;
  isSingleUse: boolean | number;
  usedAt: Date | string | null;
  productIds: number[];
}
