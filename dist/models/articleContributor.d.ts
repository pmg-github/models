export interface ArticleContributorViewModel {
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    fileId: number | null;
    fileUrl: string | null;
    function: string | null;
    contributionType: ArticleContributorTypeEnum;
}
export declare enum ArticleContributorTypeEnum {
    EDITOR = "editor",
    APPROVED_BY = "approvedBy",
    CONTACT = "contact"
}
export interface ArticleContributorSaveRequest {
    id: number | undefined;
    firstName: string | undefined | null;
    lastName: string | undefined | null;
    email: string | undefined | null;
    phone: string | undefined | null;
    fileId: number | undefined | null;
    functionNl: string | undefined | null;
    functionFr: string | undefined | null;
}
