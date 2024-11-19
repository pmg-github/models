import { PmgUserModel } from "./pmguser";
export declare class KnowledgebaseMediaListModel {
    fileUrl: string | undefined;
}
export declare class KnowledgebaseCategoryViewModel {
    id: number | undefined;
    name: string | undefined;
}
export declare class KnowledgebaseTagViewModel {
    id: number | undefined;
    name: string | undefined;
}
export declare class KnowledgebaseSimpleListModel {
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    lastModificationDate: Date | undefined;
    category: KnowledgebaseCategoryViewModel | undefined;
}
export declare class KnowledgebaseModel {
    author: PmgUserModel | undefined;
    typeReference: string | undefined;
    typeName: string | undefined;
    title: string | undefined;
    text: string | undefined;
    creationDate: Date | undefined;
    lastModificationDate: Date | undefined;
    category: KnowledgebaseCategoryViewModel | undefined;
    media: KnowledgebaseMediaListModel[] | undefined;
    tags: KnowledgebaseTagViewModel[] | undefined;
}
