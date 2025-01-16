import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  Length,
  MaxLength,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { SelectOptionViewModel } from "./selectoption";

export interface SymposiumUserTypeViewModel extends SelectOptionViewModel {}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel {}

export interface SymposiumPostBaseViewModel {
  id: number;
  title: string;
  imageUrl: string;
  companyName: string;
  companyReference: string;
  userType: string;
  searchType: string;
  city: string;
  tags: string[];
  removeAfterDate: Date | string | null;
  isLive: boolean | number;
}

export interface SymposiumPostResultViewModel
  extends SymposiumPostBaseViewModel {}

export interface SymposiumPostViewModel extends SymposiumPostBaseViewModel {
  description: string;
  addressId: number;
}

export interface SymposiumContactInfoViewModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  website: string | null;
  linkedin: string | null;
  facebook: string | null;
}

export interface SymposiumFilterViewModel {
  id: number;
  name: string;
  options: SymposiumFilterOptionViewModel[];
}

export interface SymposiumFilterOptionViewModel {
  id: number;
  name: string;
}

export interface SymposiumPostEditModel {
  id: number;
  customerReference: string;
  firma: SelectOptionViewModel;
  userTypeId: number;
  searchTypeId: number;
  categoryIds: number[];
  multiLanguageFields: SymposiumPostMultiLanguageField[]; // for now try using this class instead of a new interace?
  fileId: number;
  fileUrl: string;
  addressId: number | null;
  removeAfterDate: Date | string | null;
  isLive: boolean | number;

  // Contactinfo
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  website: string | null;
  // unused for now
  facebook: string | null;
  linkedIn: string | null;
}

export class SymposiumPostCreateRequest {
  @IsNotEmpty()
  @Length(8, 8)
  @IsNumberString()
  klnr!: string;

  @IsNumber()
  userTypeId!: number;

  @IsNumber()
  searchTypeId!: number;

  @IsArray()
  @ArrayMinSize(1)
  categoryIds!: number[];

  @IsArray()
  @ValidateNested({ each: true }) // note: doesn't work since class isn't enfored; can use Type decorator but this requires an extra dependency in api project, otherwise this throws a build error
  multiLanguageFields!: SymposiumPostMultiLanguageField[];

  @IsNumber()
  fileId!: number;

  @IsBoolean()
  hasAddress!: boolean;

  @ValidateIf((item) => item.hasAddress)
  @IsNumber()
  addressId: number | undefined;

  @IsDateString()
  @IsOptional()
  removeAfterDate: string | undefined | null;

  @IsBoolean()
  isLive!: boolean;

  // Contactinfo
  @IsNotEmpty()
  @MaxLength(50)
  firstName!: string;

  @IsNotEmpty()
  @MaxLength(50)
  lastName!: string;

  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @IsOptional()
  @MaxLength(20)
  phone!: string;

  @IsOptional()
  @MaxLength(255)
  website!: string;

  constructor(data: Partial<SymposiumPostCreateRequest>) {
    Object.assign(this, data);
  }
}

export class SymposiumPostMultiLanguageField {
  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  @IsNotEmpty()
  @MaxLength(255)
  title!: string;

  @IsNotEmpty()
  @MaxLength(5000)
  description!: string;

  constructor(data: Partial<SymposiumPostMultiLanguageField>) {
    Object.assign(this, data);
  }
}

export class SymposiumPostSaveRequest extends SymposiumPostCreateRequest {
  @IsNotEmpty()
  @IsNumber()
  id!: number;

  constructor(data: Partial<SymposiumPostSaveRequest>) {
    super(data);
    Object.assign(this, data);
  }
}
