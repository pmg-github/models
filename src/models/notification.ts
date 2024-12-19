import { IsNotEmpty, Length } from "class-validator";
import { PmgUserModel } from "./pmguser";

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

export class NotificationSummaryListModel {
  id: number | undefined = undefined;
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  sender: PmgUserModel | undefined = undefined;
  isRead: Boolean = false;
  reactionCounter: number = 0;
  link:string|undefined=undefined
}

export class NotificationSummaryListModelWhitCursorAndContent{
  content:NotificationSummaryListModel[]
  cursor:number
}
