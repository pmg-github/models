export interface UnpaidInvoicesListModel {
    pmgCompanyName: string;
    customerNumber: string;
    customerCompanyName: string;
    customerEmail: string;
    customerTelephone: string;
    contactFirstname: string;
    contactLastname: string;
    contactEmail: string;
    contactMobile: string;
    contactTelephone: string;
    rappelLanguageCode: string;
    rappelPostpone: string;
    rappelPostponeUntil: string;
    invoiceNumber: string;
    invoiceDate: string;
    invoiceExpirationDate: string;
    invoiceDaysOverdue: string;
    invoiceAmount: string;
    invoiceUnpaidAmount: string;
}
