export interface FileUploadResponseModel {
  statusCode: number;
  status: string;
  fileId: number;
  fileSize: number;
  fileExtension: string;
  fileUrl: string;
  originalName: string;
}
