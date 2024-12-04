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
