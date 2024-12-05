export interface BookmarkListModel {
    id: number;
    userId: number;
    folderName: string;
    title: string;
    description: string;
    url: string;
    target: string;
}
export interface BookmarkFolderListModel {
    id: number;
    userId: number;
    name: string;
}
export declare class CreateBookmarkModel {
    user_id: number;
    folder_id: number;
    url: string;
}
export declare class UpdateBookmarkModel {
    id: number;
    folder_id: number;
    title: string;
    description: string;
}
