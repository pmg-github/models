import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  Length,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { SelectOptionViewModel } from "./selectoption";
import { Type } from "class-transformer";

export interface SymposiumUserTypeViewModel extends SelectOptionViewModel {}
export interface SymposiumSearchTypeViewModel extends SelectOptionViewModel {}

export interface SymposiumPostResultViewModel {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
}

export interface SymposiumPostViewModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  addressId: number;
  tags: string[];
}

export interface SymposiumContactInfoViewModel {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string | null;
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

export class SymposiumPostCreateRequest {
  @IsNotEmpty()
  @Length(8, 8)
  @IsNumberString()
  klnr!: string;

  @IsNumber()
  searchTypeId!: number;

  @IsArray()
  categoryIds!: number[];

  @IsArray()
  @ValidateNested({ each: true })
  multiLanguageFields!: SymposiumPostMultiLanguageField[];

  @IsOptional()
  @IsNumber()
  fileId: number | undefined;

  @IsNumber()
  addressId!: number;

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

  @IsNotEmpty()
  @MaxLength(20)
  phone!: string;

  @IsNotEmpty()
  @MaxLength(255)
  wesbite!: string;

  @IsBoolean()
  isLive!: boolean;
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
}

export class SymposiumPostSaveRequest extends SymposiumPostCreateRequest {
  @IsNotEmpty()
  @IsNumber()
  id!: number;
}
