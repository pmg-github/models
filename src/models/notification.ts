import { IsNotEmpty, Length } from "class-validator";
import { PmgUserModel } from "./pmguser";
import { FileListViewModel } from "./files";

export class NotificationMediaListModel {
  fileUrl: string | undefined = undefined;
}

export class NotificationTopicModel {
  id: number | undefined = undefined;
  reference: string | undefined = undefined;
  name: string | undefined = undefined;
}

export class NotificationListModel {
  id: number | undefined = undefined;
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  text: string | undefined = undefined;
  articleReference: string | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  sender: PmgUserModel | undefined = undefined;
  userReactionTypeId: number | undefined = undefined;
  media: NotificationMediaListModel[] | undefined = undefined;
  topics: NotificationTopicModel[] | undefined = undefined;
}

export interface NotificationSummaryListModel {
  id: number | undefined ;
  typeReference: string | undefined;
  typeName: string | undefined ;
  title: string | undefined;
  text: string | undefined;
  lastModificationDate: Date | undefined;
  sender: PmgUserModel;
  isRead: number ;
  reactionCounter: number ;
  link:string|undefined
}

export interface NotificationDetailModel{
  id: number | undefined ;
  statusId:number
  titel: string ;
  text: string ;
  files: FileListViewModel[] | undefined;
  topicsIds: number[] | undefined ;
}

export class NotificationSummaryListModelWhitCursorAndContent{
  content:NotificationSummaryListModel[]| undefined = undefined;
  cursor:number| undefined = undefined;
}
