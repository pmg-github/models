export interface BenefitViewModel {
    id: number;
    articleReference: string;
    typeId: number;
    customerNumber: string | null;
    customerName: string | null;
    customerLogoId: number | null;
    customerLogoUrl: string | null;
    customerWebsite: string | null;
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
}
