export declare class UnpaidInvoicesListModel {
    pmgCompanyName?: string;
    pmgCompanyFolder?: string;
    customerNumber?: string;
    customerCompanyName?: string;
    customerEmail?: string;
    customerTelephone?: string;
    customerStreet?: string;
    customerStreetNumber?: string;
    customerStreetBoxNumber?: string;
    customerZipCode?: string;
    customerCity?: string;
    customerCountryCode?: string;
    contactFirstname?: string;
    contactLastname?: string;
    contactEmail?: string;
    contactMobile?: string;
    contactTelephone?: string;
    rappelLanguageCode?: string;
    rappelPostpone?: number;
    rappelPostponeUntil?: Date;
    invoiceNumber?: string;
    invoiceDate?: Date;
    invoiceExpirationDate?: Date;
    invoiceDaysOverdue?: number;
    invoiceAmount?: number;
    invoiceUnpaidAmount?: number;
    get test(): string | undefined;
    get invoiceYear(): string | undefined;
    get invoiceFolder(): string | undefined;
    get invoiceFilePath(): string | undefined;
}
export interface PmgCompanyList {
    reference: string;
    name: string;
}
