import { PmgUserModel } from "./pmguser";

export class KnowledgebaseMediaListModel {
  fileUrl: string | undefined = undefined;
}

export class KnowledgebaseCategoryViewModel {
  id: number | undefined = undefined;
  name: string | undefined = undefined;
}

export class KnowledgebaseTagViewModel {
  id: number | undefined = undefined;
  name: string | undefined = undefined;
}

export class KnowledgebaseSimpleListModel {
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  category: KnowledgebaseCategoryViewModel | undefined = undefined;
}

export class KnowledgebaseModel {
  author: PmgUserModel | undefined = undefined;
  typeReference: string | undefined = undefined;
  typeName: string | undefined = undefined;
  title: string | undefined = undefined;
  text: string | undefined = undefined;
  creationDate: Date | undefined = undefined;
  lastModificationDate: Date | undefined = undefined;
  category: KnowledgebaseCategoryViewModel | undefined = undefined;
  media: KnowledgebaseMediaListModel[] | undefined = undefined;
  tags: KnowledgebaseTagViewModel[] | undefined = undefined;
}
