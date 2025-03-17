export interface FileUploadResponseModel {
    statusCode: number;
    status: string;
    fileId: number;
    fileSize: number;
    fileExtension: string;
    fileUrl: string;
    originalName: string;
}
export interface FileListViewModel {
    fileId: number;
    fileSize: number;
    fileExtension: string;
    fileUrl: string;
    altText: string;
    originalName: string;
}
