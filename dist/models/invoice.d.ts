export interface UnpaidInvoicesListModel {
    pmgCompanyName: string;
    pmgCompanyFolder: string;
    customerNumber: string;
    customerCompanyName: string;
    customerEmail: string;
    customerTelephone: string;
    customerStreet: string;
    customerStreetNumber: string;
    customerStreetBoxNumber: string;
    customerZipCode: string;
    customerCity: string;
    customerCountryCode: string;
    contactFirstname: string;
    contactLastname: string;
    contactEmail: string;
    contactMobile: string;
    contactTelephone: string;
    rappelLanguageCode: string;
    rappelPostpone: number;
    rappelPostponeUntil: Date;
    invoiceNumber: string;
    invoiceDate: Date;
    invoiceExpirationDate: Date;
    invoiceDaysOverdue: number;
    invoiceAmount: number;
    invoiceUnpaidAmount: number;
    invoiceYear: string;
    invoiceFolder: string;
    invoiceFileUrl: string;
}
export interface UnpaidInvoicesStatsModel {
    totalCount: number;
    totalInvoiceAmount: number;
    totalInvoiceUnpaidAmount: number;
    overdue30Days: number;
    overdue60Days: number;
    overdue90Days: number;
}
export interface PmgCompanyList {
    reference: string;
    name: string;
}
export interface UnpaidInvoicesListModelWithCursor {
    content: UnpaidInvoicesListModel[];
    nextCursor: number;
}
