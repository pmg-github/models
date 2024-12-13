const INVOICE_FOLDER = "\\\\bkhserver\\BoekhDocumenten\\Facturen\\";
export class UnpaidInvoicesListModel {
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

  get invoiceYear(): string | undefined {
    return this.invoiceDate
      ? this.invoiceDate.getFullYear().toString()
      : undefined;
  }

  get invoiceFolder(): string | undefined {
    return this.invoiceNumber
      ? this.invoiceNumber.substring(0, 3) + "000"
      : undefined;
  }

  get invoiceFilePath(): string | undefined {
    if (
      !this.invoiceYear ||
      !this.invoiceFolder ||
      !this.invoiceNumber ||
      !this.pmgCompanyFolder
    ) {
      return undefined;
    }

    return `${INVOICE_FOLDER}${this.pmgCompanyFolder}\\${this.invoiceYear}\\${this.invoiceFolder}\\${this.invoiceNumber}.PDF`;
  }
}

export interface PmgCompanyList {
  reference: string;
  name: string;
}
