import { PmgUserModel } from "./pmguser";
import { FileListViewModel } from "./files";
export declare class NotificationMediaListModel {
    fileUrl: string | undefined;
}
export declare class NotificationTopicModel {
    id: number | undefined;
    reference: string | undefined;
    name: string | undefined;
}
export declare class NotificationListModel {
    id: number | undefined;
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    text: string | undefined;
    articleReference: string | undefined;
    lastModificationDate: Date | undefined;
    sender: PmgUserModel | undefined;
    userReactionTypeId: number | undefined;
    media: NotificationMediaListModel[] | undefined;
    topics: NotificationTopicModel[] | undefined;
    jobNr: string | undefined;
    mediaType: number;
}
export interface NotificationSummaryListModel {
    id: number | undefined;
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    text: string | undefined;
    lastModificationDate: Date | undefined;
    sender: PmgUserModel;
    isRead: number;
    reactionCounter: number;
    link: string | undefined;
    moreInfoLink: string | undefined;
    status?: string;
}
export interface NotificationDetailModel {
    id: number | undefined;
    statusId: number;
    titel: string;
    text: string;
    files: FileListViewModel[] | undefined;
    topicsIds: number[] | undefined;
    moreInfoLink: string | undefined;
    jobNr: string | undefined;
    mediaTypeID: number;
}
export declare class NotificationSummaryListModelWhitCursorAndContent {
    content: NotificationSummaryListModel[] | undefined;
    cursor: number | undefined;
}
