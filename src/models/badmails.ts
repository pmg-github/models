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
