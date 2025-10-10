import { AddressViewModel } from "./address";

export interface BadmailsListView {
  id: number;
  counter: number;
  email: string;
  company: string;
  companyNr: string;
  firstName: string;
  lastName: string;

  function: string;
  updatedAt: string | Date;
}

export interface BadmailsDetailView {
  reference: string;
  name: string;
  brand: string;
  vatNumber: string;
  email: string;
  website: string;
  phone: string;
  logoUrl: string;
  adres: AddressViewModel;
  contacten: {
    contactId: number;
    firstName: string;
    lastName: string;
    email: string;
    telephoneNr: string;
    contactNr: string;
  }[];
}
