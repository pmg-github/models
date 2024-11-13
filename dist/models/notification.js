"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryListModel = exports.NotificationListModel = exports.NotificationTopicModel = exports.NotificationMediaListModel = void 0;
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
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    text = undefined;
    articleReference = undefined;
    lastModificationDate = undefined;
    user = undefined;
    media = undefined;
    topics = undefined;
}
exports.NotificationListModel = NotificationListModel;
class NotificationSummaryListModel {
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    lastModificationDate = undefined;
    user = undefined;
    isRead = false;
    reactionCounter = 0;
}
exports.NotificationSummaryListModel = NotificationSummaryListModel;
