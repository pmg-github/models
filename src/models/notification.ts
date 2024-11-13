import { UserViewModel } from "./user";

export class NotificationMediaListModel {
  fileUrl: string | undefined = undefined;
}

export class NotificationTopicModel {
  id: number | undefined = undefined;
  reference: string | undefined = undefined;
  name: string | undefined = undefined;
}

export class NotificationListModel {
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  text: string | undefined = undefined;
  articleReference: string | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  user: UserViewModel | undefined = undefined;
  media: NotificationMediaListModel[] | undefined = undefined;
  topics: NotificationTopicModel[] | undefined = undefined;
}

export class NotificationSummaryListModel {
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  user: UserViewModel | undefined = undefined;
  isRead: Boolean = false;
  reactionCounter: number = 0;
}
