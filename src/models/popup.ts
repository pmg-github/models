import { PortalComponentViewModel } from "./portal";
import {
  SelectOptionViewModel,
  SelectOptionViewModelDto,
} from "./selectoption";
import {
  validate,
  IsBoolean,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsNumber,
  IsNotEmpty,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FileButtonViewModel } from "./files";

// Targeting scope types
export enum PopupTargetScopeType {
  GLOBAL = "global",
  SECTION_DETAIL = "section_detail",
  DETAIL_ITEM = "detail_item",
  SPECIFIC_PAGE = "specific_page",
}

// Target rule interface
export interface PopupTargetRule {
  id?: number;
  popupId: number;
  scopeType: PopupTargetScopeType;
  routeGroup?: string; // e.g., "dossier", "calendar"
  routeKey?: string; // language-independent route key if needed
  itemReference?: string; // specific detail item reference
}

export class PopupModel {
  id: number | undefined = undefined;
  typeId: number | undefined = undefined;
  typeReference: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  targetAudienceId: number | undefined = undefined;
  targetAudienceReference: string | undefined = undefined;
  positionId: number | undefined = undefined;
  positionReference: string | undefined = undefined;
  displayFrequencyId: number | undefined = undefined;
  displayFrequencyReference: string | undefined = undefined;
  delaySeconds: number | undefined = undefined;
  fileId: number | undefined = undefined;
  title: string | undefined = undefined;
  subTitle: string | undefined = undefined;
  intro: string | undefined = undefined;
  text: string | undefined = undefined;
  buttonText: string | undefined = undefined;
  buttonLink: string | undefined = undefined;
  width: number | undefined = undefined;
  height: number | undefined = undefined;
  dateFrom: Date | undefined = undefined;
  dateUntil: Date | undefined = undefined;
  isActive: boolean | undefined = undefined;
  creationDate: Date | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  fileUrl: string | undefined = undefined;
}

export interface BoPopup {
  id: number;
  title: string;
  amountPortals: number;
  dateFrom: string;
  dateUntil: string;
  active: boolean;
}
export interface BoPopupList {
  nextCursor: number;
  content: BoPopup[];
}
export interface BoPopupDetailMl {
  file?: FileButtonViewModel;
  title: string;
  subTitle: string;
  intro: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}
export interface BoPopupDetailView {
  id?: number;
  portals: string[];
  nl: BoPopupDetailMl;
  fr: BoPopupDetailMl;
  isActive: boolean;
  dateFrom?: string;
  dateUntil: string;
  displayFrequency: SelectOptionViewModel;
  targetAudience: SelectOptionViewModel;
  delaySeconds: number;
  // Targeting fields
  targetingScopes?: PopupTargetRule[];
  specificPageIds?: number[]; // linked pages from website.popup_page
}

class PopupMlDto {
  @IsNotEmpty()
  file?: FileButtonViewModel;

  @IsString() title!: string;

  @IsOptional() @IsString() subTitle?: string;
  @IsOptional() @IsString() intro?: string;
  @IsOptional() @IsString() text?: string;
  @IsOptional() @IsString() buttonText?: string;
  @IsOptional() @IsString() buttonLink?: string;
  constructor(data: Partial<PopupMlDto>) {
    Object.assign(this, data);
  }
}

export class CreatePopupDto {
  @IsOptional() @IsNumber() id?: number;

  @IsArray()
  @IsString({ each: true })
  portals!: string[];

  @IsOptional()
  nl!: PopupMlDto;

  @IsOptional()
  fr!: PopupMlDto;

  @IsBoolean() isActive!: boolean;

  @IsOptional() @IsString() dateFrom?: string;
  @IsOptional() @IsString() dateUntil?: string;

  // @ValidateNested()
  @IsOptional()
  displayFrequency!: SelectOptionViewModelDto;

  @IsOptional()
  targetAudience!: SelectOptionViewModelDto;

  @IsNumber() delaySeconds!: number;

  // Targeting fields
  @IsOptional()
  @IsArray()
  targetingScopes?: PopupTargetRule[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  specificPageIds?: number[];

  constructor(data: Partial<CreatePopupDto>) {
    Object.assign(this, data);
  }
}
