export interface NewsMailOverviewModel {
    id: number;
    fromName: string;
    fromEmail: string;
    subject: string;
    date: Date | string;
    statusId: number;
}
export interface NewsMailDetailModel extends NewsMailOverviewModel {
    embargoDate: Date | string;
    mailBody: string;
    summary: string;
    propositionTitle: string;
    propositionHtml: string;
    interests: NewsMailInterestsModel[];
    companyData: NewsMailCompanyModel;
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
