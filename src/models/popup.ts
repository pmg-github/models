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
} from "class-validator";
import { plainToInstance, Type } from "class-transformer";

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
  fileId?: number;
  fileUrl?:string;
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
  delaySeconds: number;
}



class PopupMlDto {
  @IsString() fileId!: string;
  @IsString() title!: string;

  @IsOptional() @IsString() subTitle?: string;
  @IsOptional() @IsString() intro?: string;
  @IsOptional() @IsString() text?: string;
  @IsOptional() @IsString() buttonText?: string;
  @IsOptional() @IsString() buttonLink?: string;
}

export class CreatePopupDto {
  @IsOptional() @IsNumber() id?: number;

  @IsArray()
  @IsString({ each: true })
  portals!: string[];

  @ValidateNested()
  // @Type(() => PopupMlDto)
  nl!: PopupMlDto;

  @ValidateNested()
  // @Type(() => PopupMlDto)
  fr!: PopupMlDto;

  @IsBoolean() isActive!: boolean;

  @IsOptional() @IsString() dateFrom?: string;
  @IsOptional() @IsString() dateUntil?: string;

  @ValidateNested()
  @Type(() => SelectOptionViewModelDto)
  displayFrequency!: SelectOptionViewModelDto;

  @IsNumber() delaySeconds!: number;

  constructor(data: Partial<CreatePopupDto>) {
    Object.assign(this, data);
  }
}

