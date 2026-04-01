export interface FileUploadResponseModel {
    statusCode: number;
    status: string;
    fileId: string;
    fileSize: number;
    fileExtension: string;
    fileUrl: string;
    originalName: string;
    redirectUrl?: string;
    redirectLabel?: string;
    message?: string;
}
export interface ZipUploadResponseModel {
    statusCode: number;
    status: string;
    zipFileUrl: string;
}
export interface FileListViewModel {
    fileId: number;
    fileSize: number;
    fileExtension: string;
    fileUrl: string;
    altText: string;
    originalName: string;
    createdAt: string;
}
export interface FileViewModel {
    id: number;
    name: string;
    url: string;
    altText: string;
    extension: string;
    isProtected: boolean;
}
export interface BoFileViewModel {
    id: number;
    originalFileId: number;
    name: string;
    url: string;
    altText: string;
    metadata: BoFileMetadataViewModel;
}
export interface BoFileMetadataViewModel {
    nl?: {
        name: string;
        altText: string;
        keywords: string;
    };
    fr?: {
        name: string;
        altText: string;
        keywords: string;
    };
    en?: {
        name: string;
        altText: string;
        keywords: string;
    };
}
