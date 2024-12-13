"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpaidInvoicesListModel = void 0;
const INVOICE_FOLDER = "\\\\bkhserver\\BoekhDocumenten\\Facturen\\";
class UnpaidInvoicesListModel {
    pmgCompanyName;
    pmgCompanyFolder;
    customerNumber;
    customerCompanyName;
    customerEmail;
    customerTelephone;
    customerStreet;
    customerStreetNumber;
    customerStreetBoxNumber;
    customerZipCode;
    customerCity;
    customerCountryCode;
    contactFirstname;
    contactLastname;
    contactEmail;
    contactMobile;
    contactTelephone;
    rappelLanguageCode;
    rappelPostpone;
    rappelPostponeUntil;
    invoiceNumber;
    invoiceDate;
    invoiceExpirationDate;
    invoiceDaysOverdue;
    invoiceAmount;
    invoiceUnpaidAmount;
    get invoiceYear() {
        return this.invoiceDate
            ? this.invoiceDate.getFullYear().toString()
            : undefined;
    }
    get invoiceFolder() {
        return this.invoiceNumber
            ? this.invoiceNumber.substring(0, 3) + "000"
            : undefined;
    }
    get invoiceFilePath() {
        if (!this.invoiceYear ||
            !this.invoiceFolder ||
            !this.invoiceNumber ||
            !this.pmgCompanyFolder) {
            return undefined;
        }
        return `${INVOICE_FOLDER}${this.pmgCompanyFolder}\\${this.invoiceYear}\\${this.invoiceFolder}\\${this.invoiceNumber}.PDF`;
    }
}
exports.UnpaidInvoicesListModel = UnpaidInvoicesListModel;
