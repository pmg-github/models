import { ViewerInteresseViewModel } from './magazine';
import { AddressViewModel } from './address';
export declare class CompanyViewModel {
    reference: string | undefined;
    name: string | undefined;
    brand: string | undefined;
    email: string | undefined;
    website: string | undefined;
    phone: string | undefined;
    fax: string | undefined;
    mainAddressID: number | undefined;
    mainAddress: AddressViewModel | undefined;
    interesses: ViewerInteresseViewModel[] | undefined;
}
