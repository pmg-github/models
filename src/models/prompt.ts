import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";

export interface PromptListModel {
  id: string;
  name: string;
}

export type PromptJson =
  | null
  | boolean
  | number
  | string
  | PromptJson[]
  | { [key: string]: PromptJson };

export interface PromptModel {
  id: number;
  reference: string;
  prompt: string;
  optionsJson: PromptJson;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface PromptFileModel {
  id: number;
  reference: string;
  fileId: number;
  portalCode: string | null;
  isDeleted: number;
}

export class PromptSaveRequest {
  // Omit to create a new prompt
  @IsOptional()
  @IsInt()
  @IsPositive()
  id?: number;

  @IsString()
  @IsNotEmpty()
  reference!: string;

  @IsString()
  @IsNotEmpty()
  prompt!: string;

  @IsOptional()
  optionsJson?: PromptJson;

  // Promptfile references; omit to leave the linked files untouched
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  files?: string[];

  constructor(data: Partial<PromptSaveRequest>) {
    Object.assign(this, data);
  }
}

export class PromptFileSaveRequest {
  // Omit to create a new prompt file
  @IsOptional()
  @IsInt()
  @IsPositive()
  id?: number;

  @IsString()
  @IsNotEmpty()
  reference!: string;

  @IsInt()
  @IsPositive()
  fileId!: number;

  @IsOptional()
  @IsString()
  portalCode?: string | null;

  constructor(data: Partial<PromptFileSaveRequest>) {
    Object.assign(this, data);
  }
}
