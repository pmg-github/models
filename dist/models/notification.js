"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryListModelWhitCursorAndContent = exports.NotificationSummaryListModel = exports.NotificationListModel = exports.NotificationTopicModel = exports.NotificationMediaListModel = void 0;
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
}
exports.NotificationListModel = NotificationListModel;
class NotificationSummaryListModel {
    id = undefined;
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    lastModificationDate = undefined;
    sender = undefined;
    isRead = 0;
    reactionCounter = 0;
    link = undefined;
}
exports.NotificationSummaryListModel = NotificationSummaryListModel;
class NotificationSummaryListModelWhitCursorAndContent {
    content = undefined;
    cursor = undefined;
}
exports.NotificationSummaryListModelWhitCursorAndContent = NotificationSummaryListModelWhitCursorAndContent;
