"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseModel = exports.KnowledgebaseSimpleListModel = exports.KnowledgebaseTagViewModel = exports.KnowledgebaseCategoryViewModel = exports.KnowledgebaseMediaListModel = void 0;
class KnowledgebaseMediaListModel {
    fileUrl = undefined;
}
exports.KnowledgebaseMediaListModel = KnowledgebaseMediaListModel;
class KnowledgebaseCategoryViewModel {
    id = undefined;
    name = undefined;
}
exports.KnowledgebaseCategoryViewModel = KnowledgebaseCategoryViewModel;
class KnowledgebaseTagViewModel {
    id = undefined;
    name = undefined;
}
exports.KnowledgebaseTagViewModel = KnowledgebaseTagViewModel;
class KnowledgebaseSimpleListModel {
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    lastModificationDate = undefined;
    category = undefined;
}
exports.KnowledgebaseSimpleListModel = KnowledgebaseSimpleListModel;
class KnowledgebaseModel {
    author = undefined;
    typeReference = undefined;
    typeName = undefined;
    title = undefined;
    text = undefined;
    creationDate = undefined;
    lastModificationDate = undefined;
    category = undefined;
    media = undefined;
    tags = undefined;
}
exports.KnowledgebaseModel = KnowledgebaseModel;
