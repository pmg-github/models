import { ViewerInteresseViewModel } from './magazine'
import { AddressViewModel } from './address';

export class CompanyViewModel {
    reference: string | undefined = undefined;
    name: string | undefined = undefined;
    brand: string | undefined = undefined;
    logoUrl: string | undefined = undefined;
    email: string | undefined = undefined;
    website: string | undefined = undefined;
    phone: string | undefined = undefined;
    fax: string | undefined = undefined;
    mainAddressID: number | undefined = undefined;
    mainAddress: AddressViewModel | undefined = undefined;
    interesses: ViewerInteresseViewModel[] | undefined = undefined;
}