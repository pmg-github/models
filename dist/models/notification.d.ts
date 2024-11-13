import { UserViewModel } from "./user";
export declare class NotificationMediaListModel {
    fileUrl: string | undefined;
}
export declare class NotificationTopicModel {
    id: number | undefined;
    reference: string | undefined;
    name: string | undefined;
}
export declare class NotificationListModel {
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    text: string | undefined;
    articleReference: string | undefined;
    lastModificationDate: Date | undefined;
    user: UserViewModel | undefined;
    media: NotificationMediaListModel[] | undefined;
    topics: NotificationTopicModel[] | undefined;
}
export declare class NotificationSummaryListModel {
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    lastModificationDate: Date | undefined;
    user: UserViewModel | undefined;
    isRead: Boolean;
    reactionCounter: number;
}
