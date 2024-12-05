import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PmgUserModel } from "./pmguser";

export interface BookmarkListModel {
  id: number;
  userId: number;
  folderName: string;
  title: string;
  description: string;
  url: string;
  target: string;
}

export interface BookmarkFolderListModel {
  id: number;
  userId: number;
  name: string;
}

export class CreateBookmarkModel {
  @IsNotEmpty()
  user_id!: number;

  @IsNotEmpty()
  folder_id!: number;

  @IsNotEmpty()
  @IsString()
  url!: string;
}

export class UpdateBookmarkModel {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  folder_id!: number;

  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsString()
  description!: string;
}
