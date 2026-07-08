import { SelectOptionViewModel } from "./selectoption";
export interface BenefitViewModel {
    id: number;
    articleReference: string;
    typeId: number;
    customerNumber: string | null;
    customerName: string | null;
    customerLogoId: number | null;
    customerLogoUrl: string | null;
    customerWebsite: string | null;
    label: string | null;
    title: string;
    subTitle: string | null;
    specsLabel: string | null;
    specs: string | null;
    discountCodeLabel: string | null;
    discountCode: string | null;
    discountValue: string | null;
    discountLabel: string | null;
    buttonText: string | null;
    buttonUrl: string | null;
    statusId: number;
    validFrom: string | Date | null;
    validUntil: string | Date | null;
    disclaimer: string | null;
    portals: string[];
}
export interface BenefitListModel {
    id: number;
    articleReference: string;
    articleTilePictureUrl: string | null;
    customerLogoUrl: string | null;
    label: string | null;
    title: string;
    subTitle: string | null;
    specs: string | null;
}
export type BoBenefitLocaleViewModel = {
    customerName: string | null;
    customerLogoId: number | null;
    customerWebsite: string | null;
    label: string | null;
    title: string | null;
    subTitle: string | null;
    specsLabel: string | null;
    specs: string | null;
    discountCodeLabel: string | null;
    discountValue: string | null;
    discountLabel: string | null;
    buttonText: string | null;
    buttonUrl: string | null;
    disclaimer: string | null;
};
export type BoBenefitViewModel = {
    id: number;
    internalName: string;
    internalDescription: string | null;
    article: SelectOptionViewModel;
    type: SelectOptionViewModel;
    customerNumber: string | null;
    discountCode: string | null;
    status: SelectOptionViewModel;
    validFrom: string | null;
    validUntil: string | null;
    nl: BoBenefitLocaleViewModel;
    fr: BoBenefitLocaleViewModel;
    en: BoBenefitLocaleViewModel;
};
