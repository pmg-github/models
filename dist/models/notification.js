"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryListModelWhitCursorAndContent = exports.NotificationListModel = exports.NotificationTopicModel = exports.NotificationMediaListModel = void 0;
class NotificationMediaListModel {
    fileUrl = undefined;
}
exports.NotificationMediaListModel = NotificationMediaListModel;
class NotificationTopicModel {
    id = undefined;
    reference = undefined;
    name = undefined;
}
exports.NotificationTopicModel = NotificationTopicModel;
class NotificationListModel {
    id = undefined;
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    text = undefined;
    articleReference = undefined;
    lastModificationDate = undefined;
    sender = undefined;
    userReactionTypeId = undefined;
    media = undefined;
    topics = undefined;
    jobNr = undefined;
    mediaType = 1;
}
exports.NotificationListModel = NotificationListModel;
class NotificationSummaryListModelWhitCursorAndContent {
    content = undefined;
    cursor = undefined;
}
exports.NotificationSummaryListModelWhitCursorAndContent = NotificationSummaryListModelWhitCursorAndContent;
