export interface NewsMailOverviewModel {
  id: number;
  fromName: string;
  fromEmail: string;
  subject: string;
  date: Date | string;
  statusId: number | null;
  orderValue: string | number;
}

export interface NewsMailDetailModel extends NewsMailOverviewModel {
  embargoDate: Date | string | null;
  mailText: string;
  mailHtml: string;
  summary: string | null;
  propositionTitle: string | null;
  propositionHtml: string | null;
  interests: NewsMailInterestsModel[] | null;
  companyData: NewsMailCompanyModel | null;
}

export interface NewsMailInterestsModel {
  code: string;
  name: string;
  relevancy: number;
}

export interface NewsMailCompanyModel {
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipCode: string;
    countryCode: string;
    streetNumber: string;
    streetBoxNumber: string;
  };
  website: string;
  vatNumber: string;
}
